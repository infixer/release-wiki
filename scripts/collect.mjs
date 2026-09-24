#!/usr/bin/env node
// Release Wiki のデータ収集スクリプト（GitHub Actions「collect」から実行する）。
// digest/config.yml に書いたリポジトリとブログから新着を集め、digest/inbox/*.json に書き出す。
// LLM は使わない。要約は inbox を読む Claude ルーチンが行う。

import { readFile, writeFile, mkdir, access } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { XMLParser } from "fast-xml-parser"
import { Readability } from "@mozilla/readability"
import { parseHTML } from "linkedom"
import YAML from "yaml"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

export const LIMITS = {
  initialDays: 7, // 初回に遡る日数
  prBody: 3000,
  releaseBody: 3000,
  files: 40,
  postText: 15000,
  initialPosts: 5, // ブログの初回に取り込む記事数
  seen: 200,
  searchCap: 1000, // search API が 1 クエリで返せる上限
  concurrency: 4,
  maxPrs: 60,
}

const USER_AGENT = "release-wiki-collect"

// ---------------------------------------------------------------------------
// 文字列の整形
// ---------------------------------------------------------------------------

/** 上限を超えたら切り詰めて末尾に印を付ける */
export function truncate(text, max) {
  if (text == null) return ""
  const s = String(text)
  if (s.length <= max) return s
  return s.slice(0, max) + "\n…(truncated)"
}

/** PR・Release の本文から HTML コメントを除き、空行を詰めて切り詰める */
export function cleanBody(body, max) {
  if (!body) return ""
  const s = String(body)
    .replace(/<!--[\s\S]*?(-->|$)/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
  return truncate(s, max)
}

/** 連続する空白と空行を詰める */
export function normalizeText(text) {
  return String(text ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/ /g, " ")
    .replace(/[ \t\f\v]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

// ---------------------------------------------------------------------------
// PR の分類
// ---------------------------------------------------------------------------

const OTHER_TITLE = /^\s*(docs?|tests?|ci|chore)(\([^)]*\))?!?\s*:/i
const FEATURE = /\bfeat/i
const FIX = /\b(hot|bug)?fix/i

/** docs・テスト・.github・Markdown のファイルか */
export function isOtherFile(file) {
  const p = file.startsWith("/") ? file : "/" + file
  return (
    /\/docs?\//i.test(p) ||
    /\/\.github\//.test(p) ||
    /\.mdx?$/i.test(p) ||
    /\/(__tests__|__snapshots__|tests?|test-utils|e2e|fixtures?)\//i.test(p) ||
    /\.(test|spec)\.[cm]?[jt]sx?(\.snap)?$/i.test(p)
  )
}

/**
 * 分類の目安を決める。ラベルは分類の手がかりにしない（react は CLA Signed などしか無く、next.js はラベル無し）。
 * @returns {"other" | "feature" | "fix" | "unknown"}
 */
export function classifyPr({ title = "", files = [] }) {
  if (OTHER_TITLE.test(title)) return "other"
  const paths = files.map((f) => (typeof f === "string" ? f : f.path))
  if (paths.length > 0 && paths.every(isOtherFile)) return "other"
  if (FEATURE.test(title)) return "feature"
  if (FIX.test(title)) return "fix"
  return "unknown"
}

/** bot が作った PR か */
export function isBotUser(user) {
  if (!user) return false
  return user.type === "Bot" || /\[bot\]$/i.test(user.login ?? "")
}

// ---------------------------------------------------------------------------
// バージョン表記の抽出
// ---------------------------------------------------------------------------

/**
 * 本文から vX.Y / X.Y.Z 形式を、タイトルからは X.Y も拾う。先頭の v は外す。
 */
export function extractVersions(title, text, max = 20) {
  const found = new Set()
  const add = (v) => {
    // 2026.09.24 のような日付は除く
    if (/^(19|20)\d\d\./.test(v)) return
    if (found.size < max) found.add(v.replace(/^v/i, ""))
  }
  const semver = /(?<![\w.])v?(\d+\.\d+\.\d+(?:-[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)*)?)(?!\.?\d)/g
  const vShort = /(?<![\w.])v(\d+\.\d+)(?!\.?\d)/g
  const titleShort = /(?<![\w.])v?(\d+\.\d+)(?!\.?\d)/g
  for (const m of String(title ?? "").matchAll(semver)) add(m[1])
  for (const m of String(title ?? "").matchAll(titleShort)) add(m[1])
  for (const m of String(text ?? "").matchAll(semver)) add(m[1])
  for (const m of String(text ?? "").matchAll(vShort)) add(m[1])
  return [...found]
}

// ---------------------------------------------------------------------------
// RSS / Atom
// ---------------------------------------------------------------------------

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  trimValues: true,
  processEntities: true,
  htmlEntities: true,
})

const asArray = (v) => (v == null ? [] : Array.isArray(v) ? v : [v])

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " }

/** CDATA の中に残った HTML エンティティ（&amp; など）を戻す */
export function decodeEntities(s) {
  return String(s).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : Number(e.slice(1))
      return Number.isFinite(code) ? String.fromCodePoint(code) : m
    }
    return ENTITIES[e.toLowerCase()] ?? m
  })
}

function textOf(v) {
  if (v == null) return ""
  if (typeof v === "string" || typeof v === "number") return String(v).trim()
  if (Array.isArray(v)) return textOf(v[0])
  if (typeof v === "object") return textOf(v["#text"] ?? "")
  return ""
}

function toIso(date) {
  if (!date) return null
  const d = new Date(date)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

function atomLink(links) {
  const list = asArray(links)
  const alt =
    list.find((l) => typeof l === "object" && (l["@_rel"] ?? "alternate") === "alternate") ??
    list[0]
  if (!alt) return ""
  return typeof alt === "string" ? alt.trim() : String(alt["@_href"] ?? "").trim()
}

/**
 * RSS 2.0 / Atom を解析して新しい順の記事一覧を返す。
 * @returns {{title: string, url: string, publishedAt: string | null, html: string}[]}
 */
export function parseFeed(xml) {
  const doc = xmlParser.parse(xml)
  let items = []
  if (doc.rss) {
    items = asArray(doc.rss.channel?.item).map((it) => ({
      title: decodeEntities(textOf(it.title)),
      url: textOf(it.link) || textOf(it.guid),
      publishedAt: toIso(textOf(it.pubDate) || textOf(it["dc:date"])),
      html: textOf(it["content:encoded"]) || textOf(it.description),
    }))
  } else if (doc.feed) {
    items = asArray(doc.feed.entry).map((it) => ({
      title: decodeEntities(textOf(it.title)),
      url: atomLink(it.link) || textOf(it.id),
      publishedAt: toIso(textOf(it.published) || textOf(it.updated)),
      html: textOf(it.content) || textOf(it.summary),
    }))
  } else if (doc["rdf:RDF"]) {
    items = asArray(doc["rdf:RDF"].item).map((it) => ({
      title: decodeEntities(textOf(it.title)),
      url: textOf(it.link),
      publishedAt: toIso(textOf(it["dc:date"])),
      html: textOf(it.description),
    }))
  } else {
    throw new Error("RSS/Atom として解析できませんでした")
  }
  items = items.filter((it) => it.url)
  // 日付がある記事は新しい順に並べ替える（日付が無ければフィードの順のまま）
  if (items.every((it) => it.publishedAt)) {
    items.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  }
  return items
}

// ---------------------------------------------------------------------------
// HTML → テキスト
// ---------------------------------------------------------------------------

const BLOCK = new Set(
  "address article aside blockquote dd details div dl dt figcaption figure footer form header hr li main nav ol p pre section summary table tbody thead tfoot tr ul".split(
    " ",
  ),
)
const SKIP = new Set(["script", "style", "noscript", "template", "svg", "button"])

/** HTML 片を、段落・見出し・リスト・コードブロックの区切りを残したテキストにする */
export function htmlToText(html) {
  const { document } = parseHTML(`<!doctype html><html><body>${html ?? ""}</body></html>`)
  const out = []
  const walk = (node, inPre) => {
    if (node.nodeType === 3) {
      out.push(inPre ? node.textContent : node.textContent.replace(/\s+/g, " "))
      return
    }
    if (node.nodeType !== 1) return
    const tag = node.tagName.toLowerCase()
    if (SKIP.has(tag)) return
    if (tag === "br") return void out.push("\n")
    const heading = /^h([1-6])$/.exec(tag)
    let close = ""
    if (heading) {
      out.push("\n\n" + "#".repeat(Number(heading[1])) + " ")
      close = "\n\n"
    } else if (tag === "pre") {
      out.push("\n```\n")
      close = "\n```\n"
    } else if (tag === "li") {
      out.push("\n- ")
      close = "\n"
    } else if (BLOCK.has(tag)) {
      out.push("\n\n")
      close = "\n\n"
    } else if (tag === "td" || tag === "th") {
      out.push(" | ")
    }
    const start = out.length
    for (const child of node.childNodes) walk(child, inPre || tag === "pre")
    // コードブロックの末尾の改行は閉じ記号と重なるので除く
    if (tag === "pre" && out.length > start) out[out.length - 1] = out.at(-1).replace(/\s+$/, "")
    out.push(close)
  }
  walk(document.body, false)
  // コードブロックの中は空白を残し、それ以外を詰める
  return out
    .join("")
    .split(/(\n```\n[\s\S]*?\n```\n)/)
    .map((part, i) => (i % 2 === 1 ? part : normalizeText(part)))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

const JA_DATE = /公開(?:日)?\s*[:：]?\s*(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/
const EN_DATE = /Published:?\s+([A-Z][a-z]+\.? \d{1,2},? \d{4})/

/** 記事ページのメタデータや本文の「公開日」から公開日時を探す */
function findPublished(document) {
  const meta = document.querySelector(
    'meta[property="article:published_time"], meta[name="article:published_time"], meta[itemprop="datePublished"], meta[name="date"]',
  )
  const fromMeta = toIso(meta?.getAttribute("content"))
  if (fromMeta) return fromMeta
  const scope = document.querySelector("article, main") ?? document.body
  const fromTime = toIso(scope?.querySelector("time[datetime]")?.getAttribute("datetime"))
  if (fromTime) return fromTime
  const text = scope?.textContent ?? ""
  const ja = JA_DATE.exec(text)
  if (ja) return new Date(Date.UTC(+ja[1], +ja[2] - 1, +ja[3])).toISOString()
  const en = EN_DATE.exec(text)
  return en ? toIso(`${en[1]} UTC`) : null
}

/**
 * 記事ページの HTML から本文・タイトル・公開日時を取り出す（readability）。
 * @returns {{ title: string | null, text: string | null, publishedAt: string | null }}
 */
export function extractArticle(html, url) {
  const { document } = parseHTML(html)
  try {
    // readability は documentURI から相対リンクを解決する
    Object.defineProperty(document, "documentURI", { value: url, configurable: true })
  } catch {}
  // readability は document を書き換えるので、先に公開日を探す
  const published = findPublished(document)
  // <title> は「記事名 | Blog | サイト名」の形が多いので、本文の h1 を優先する
  const h1 = normalizeText(document.querySelector("article h1, main h1, h1")?.textContent)
  const article = new Readability(document).parse()
  if (!article?.content) return { title: h1 || null, text: null, publishedAt: published }
  return {
    title: h1 || normalizeText(article.title) || null,
    text: htmlToText(article.content) || normalizeText(article.textContent) || null,
    publishedAt: toIso(article.publishedTime) ?? published,
  }
}

export function extractArticleText(html, url) {
  return extractArticle(html, url).text
}

/**
 * RSS が無いサイトの一覧ページ（例: https://developer.chrome.com/new?hl=ja）から記事へのリンクを拾う。
 * 本文の領域（DevSite の本文 → article → main → body の順）の中のリンクだけを見る。
 * @param {{ linkPattern?: string, articleParams?: Record<string, string> }} opts
 *   linkPattern: 記事 URL に当てはめる正規表現（指定しなければ同じサイトのリンクすべて）
 *   articleParams: 記事 URL に付けるクエリ（例: { hl: "ja" } で日本語版を取る）
 */
export function parseListingPage(html, pageUrl, { linkPattern, articleParams } = {}) {
  const { document } = parseHTML(html)
  const scope =
    document.querySelector(".devsite-article-body") ??
    document.querySelector("article") ??
    document.querySelector("main") ??
    document.body
  const page = new URL(pageUrl)
  const re = linkPattern ? new RegExp(linkPattern) : null
  const items = []
  const found = new Set()
  for (const a of scope?.querySelectorAll("a[href]") ?? []) {
    let u
    try {
      u = new URL(a.getAttribute("href"), page)
    } catch {
      continue
    }
    if (!/^https?:$/.test(u.protocol)) continue
    if (u.origin !== page.origin || u.pathname === page.pathname) continue
    u.hash = ""
    for (const [k, v] of Object.entries(articleParams ?? {})) u.searchParams.set(k, String(v))
    const url = u.href
    if (re && !re.test(url)) continue
    if (found.has(url)) continue
    // カード全体がリンクのときは中の見出しをタイトルにする
    const heading = a.querySelector("h1, h2, h3, h4, h5, h6")
    const title = normalizeText(heading?.textContent || a.textContent || a.getAttribute("title"))
    if (!title) continue // 画像だけのリンクは飛ばす（同じ URL の文字リンクを待つ）
    found.add(url)
    const box = a.closest("li, article, tr, devsite-card, .devsite-card") ?? a.parentElement
    const time = box?.querySelector("time[datetime]")?.getAttribute("datetime")
    items.push({ title: title.slice(0, 200), url, publishedAt: toIso(time), html: "" })
  }
  if (items.length > 0 && items.every((it) => it.publishedAt)) {
    items.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  }
  return items
}

// ---------------------------------------------------------------------------
// HTTP
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/** 同時実行数を制限して map する */
export async function mapLimit(items, limit, fn) {
  const results = new Array(items.length)
  let next = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++
      results[i] = await fn(items[i], i)
    }
  })
  await Promise.all(workers)
  return results
}

export class HttpError extends Error {
  constructor(status, url, body) {
    super(`HTTP ${status} ${url}${body ? `: ${String(body).slice(0, 200)}` : ""}`)
    this.status = status
    this.url = url
  }
}

/** GitHub REST API の小さなクライアント。429/403（レート制限）と 5xx はリトライする */
export function createGitHub({
  token,
  fetchImpl = fetch,
  baseUrl = "https://api.github.com",
  retries = 4,
  wait = sleep,
} = {}) {
  let searchChain = Promise.resolve()
  let lastSearch = 0

  async function request(pathOrUrl, { allow404 = false } = {}) {
    const url = pathOrUrl.startsWith("http") ? pathOrUrl : baseUrl + pathOrUrl
    for (let attempt = 0; ; attempt++) {
      const res = await fetchImpl(url, {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": USER_AGENT,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      })
      if (res.ok) return res.json()
      if (res.status === 404 && allow404) return null
      const text = await res.text().catch(() => "")
      const limited =
        res.status === 429 ||
        (res.status === 403 &&
          (res.headers.get("x-ratelimit-remaining") === "0" ||
            res.headers.has("retry-after") ||
            /rate limit/i.test(text)))
      if ((limited || res.status >= 500) && attempt < retries) {
        await wait(retryDelay(res.headers, attempt))
        continue
      }
      throw new HttpError(res.status, url, text)
    }
  }

  /** search API は 30 回/分なので、呼び出しを直列にして 2 秒あける */
  function search(query, page = 1) {
    const run = async () => {
      const gap = Date.now() - lastSearch
      if (lastSearch && gap < 2100) await wait(2100 - gap)
      lastSearch = Date.now()
      const q = encodeURIComponent(query)
      return request(`/search/issues?q=${q}&sort=created&order=asc&per_page=100&page=${page}`)
    }
    const p = searchChain.then(run, run)
    searchChain = p.catch(() => {})
    return p
  }

  return { request, search }
}

function retryDelay(headers, attempt) {
  const retryAfter = Number(headers.get("retry-after"))
  if (retryAfter > 0) return Math.min(retryAfter * 1000, 120_000)
  const reset = Number(headers.get("x-ratelimit-reset"))
  if (reset > 0) {
    const ms = reset * 1000 - Date.now() + 1000
    if (ms > 0) return Math.min(ms, 120_000)
  }
  return Math.min(2 ** attempt * 2000, 60_000)
}

// ---------------------------------------------------------------------------
// リポジトリ
// ---------------------------------------------------------------------------

const isoSec = (d) => new Date(d).toISOString().replace(/\.\d{3}Z$/, "Z")

/**
 * merged:from..to のマージ済み PR を search API で集める。
 * 1 クエリの上限（1000 件）を超えるときは期間を半分に分けて取り直す。
 */
export async function searchMergedPrs(gh, { fullName, branch, from, to }) {
  const items = []
  const collectRange = async (a, b) => {
    const q = `repo:${fullName} is:pr is:merged base:${branch} merged:${isoSec(a)}..${isoSec(b)}`
    const first = await gh.search(q, 1)
    const total = first.total_count ?? 0
    const aMs = Date.parse(a)
    const bMs = Date.parse(b)
    if (total > LIMITS.searchCap && bMs - aMs > 2000) {
      const mid = new Date(Math.floor((aMs + bMs) / 2 / 1000) * 1000)
      await collectRange(a, mid.toISOString())
      await collectRange(new Date(mid.getTime() + 1000).toISOString(), b)
      return
    }
    items.push(...(first.items ?? []))
    const pages = Math.min(Math.ceil(total / 100), LIMITS.searchCap / 100)
    for (let page = 2; page <= pages; page++) {
      const res = await gh.search(q, page)
      items.push(...(res.items ?? []))
    }
  }
  await collectRange(from, to)
  // 範囲の両端が重なる分を除き、from ちょうどにマージされた PR（前回取り込み済み）も除く
  const byNumber = new Map()
  for (const it of items) {
    const mergedAt = it.pull_request?.merged_at
    if (!mergedAt || Date.parse(mergedAt) <= Date.parse(from)) continue
    byNumber.set(it.number, it)
  }
  return [...byNumber.values()].sort((a, b) =>
    a.pull_request.merged_at.localeCompare(b.pull_request.merged_at),
  )
}

/** 最新の安定版と、それより新しいプレリリース、期間内に公開された Release */
export async function fetchReleases(gh, fullName, { from, to }) {
  const stableRaw = await gh.request(`/repos/${fullName}/releases/latest`, { allow404: true })
  const list = []
  for (let page = 1; page <= 3; page++) {
    const res = await gh.request(`/repos/${fullName}/releases?per_page=100&page=${page}`)
    list.push(...res)
    const oldest = res.at(-1)?.published_at
    if (res.length < 100 || (oldest && oldest <= from)) break
  }
  const published = list.filter((r) => !r.draft && r.published_at)
  const preRaw = published
    .filter((r) => r.prerelease)
    .sort((a, b) => b.published_at.localeCompare(a.published_at))[0]
  const pick = (r) => (r ? { tag: r.tag_name, publishedAt: r.published_at, url: r.html_url } : null)
  const stable = pick(stableRaw)
  const prerelease =
    preRaw && (!stable || preRaw.published_at > stable.publishedAt) ? pick(preRaw) : null
  const releasesInRange = published
    .filter((r) => r.published_at > from && r.published_at <= to)
    .sort((a, b) => a.published_at.localeCompare(b.published_at))
    .map((r) => ({
      tag: r.tag_name,
      name: r.name || r.tag_name,
      publishedAt: r.published_at,
      url: r.html_url,
      prerelease: !!r.prerelease,
      body: cleanBody(r.body, LIMITS.releaseBody),
    }))
  return { latest: { stable, prerelease }, releasesInRange }
}

/** merge_commit_sha が最新の安定版・プレリリースに含まれるか（compare API） */
export async function releaseStatus(gh, fullName, latest, sha) {
  if (!sha) return "⏳ 未リリース"
  for (const rel of [latest.stable, latest.prerelease]) {
    if (!rel) continue
    const base = encodeURIComponent(rel.tag)
    const cmp = await gh.request(`/repos/${fullName}/compare/${base}...${sha}?per_page=1`, {
      allow404: true,
    })
    if (cmp && (cmp.status === "behind" || cmp.status === "identical")) return `📦 ${rel.tag}`
  }
  return "⏳ 未リリース"
}

async function fetchPrDetail(gh, fullName, item, latest, errors) {
  const n = item.number
  const pr = {
    number: n,
    title: item.title,
    url: item.html_url,
    author: item.user?.login ?? null,
    mergedAt: item.pull_request?.merged_at ?? null,
    labels: (item.labels ?? []).map((l) => (typeof l === "string" ? l : l.name)),
    hint: "unknown",
    release: "⏳ 未リリース",
    body: cleanBody(item.body, LIMITS.prBody),
    files: [],
    filesTruncated: false,
  }
  let detail = null
  try {
    detail = await gh.request(`/repos/${fullName}/pulls/${n}`)
    pr.body = cleanBody(detail.body ?? item.body, LIMITS.prBody)
    pr.mergedAt = detail.merged_at ?? pr.mergedAt
  } catch (e) {
    errors.push(`#${n} の詳細を取得できませんでした: ${e.message}`)
  }
  try {
    const files = await gh.request(`/repos/${fullName}/pulls/${n}/files?per_page=${LIMITS.files}`)
    pr.files = files.slice(0, LIMITS.files).map((f) => ({
      path: f.filename,
      additions: f.additions,
      deletions: f.deletions,
    }))
    pr.filesTruncated = (detail?.changed_files ?? files.length) > pr.files.length
  } catch (e) {
    errors.push(`#${n} の変更ファイルを取得できませんでした: ${e.message}`)
  }
  pr.hint = classifyPr({ title: pr.title, files: pr.files })
  try {
    pr.release = await releaseStatus(gh, fullName, latest, detail?.merge_commit_sha)
  } catch (e) {
    errors.push(`#${n} の収録状況を判定できませんでした: ${e.message}`)
  }
  return pr
}

/**
 * 1 つのリポジトリについて新着を集める。
 * @returns {{ inbox: object | null, state: object }} inbox はデータが無いとき null
 */
export async function collectRepo(gh, cfg, prevState = {}, now = new Date()) {
  const errors = []
  const to = isoSec(now)
  const from =
    prevState.lastMergedAt ?? isoSec(now.getTime() - LIMITS.initialDays * 24 * 3600 * 1000)
  const branch = cfg.branch ?? "main"
  const state = { ...prevState }
  const base = {
    kind: "repo",
    repo: cfg.repo,
    branch,
    collectedAt: to,
    range: { from, to },
    maxPrs: cfg.maxPrs ?? LIMITS.maxPrs,
    latest: { stable: null, prerelease: null },
    releasesInRange: [],
    prs: [],
    errors,
  }

  // search API は転送を追わないので、正式名を取り直す（例: facebook/react → react/react）
  let fullName
  try {
    const repo = await gh.request(`/repos/${cfg.repo}`)
    fullName = repo.full_name
    state.fullName = fullName
    base.repo = fullName
  } catch (e) {
    errors.push(`リポジトリ ${cfg.repo} を取得できませんでした: ${e.message}`)
    return { inbox: base, state }
  }

  try {
    Object.assign(base, await fetchReleases(gh, fullName, { from, to }))
  } catch (e) {
    errors.push(`Release を取得できませんでした: ${e.message}`)
  }

  let items
  try {
    items = await searchMergedPrs(gh, { fullName, branch, from, to })
  } catch (e) {
    errors.push(`マージ済み PR を検索できませんでした: ${e.message}`)
    // 検索に失敗した回は lastMergedAt を進めない（次の回に取り直す）
    return { inbox: base, state }
  }

  // 除外した PR も含めて、見た中で最も新しいマージ日時まで進める
  const newest = items.at(-1)?.pull_request?.merged_at
  state.lastMergedAt = newest ?? prevState.lastMergedAt ?? from

  const exclude = new Set((cfg.excludeLabels ?? []).map((l) => l.toLowerCase()))
  const targets = items.filter(
    (it) =>
      !isBotUser(it.user) &&
      !(it.labels ?? []).some((l) => exclude.has(String(l.name ?? l).toLowerCase())),
  )
  base.prs = await mapLimit(targets, LIMITS.concurrency, (it) =>
    fetchPrDetail(gh, fullName, it, base.latest, errors),
  )

  const hasData = base.prs.length > 0 || base.releasesInRange.length > 0 || errors.length > 0
  return { inbox: hasData ? base : null, state }
}

// ---------------------------------------------------------------------------
// ブログ
// ---------------------------------------------------------------------------

async function fetchText(fetchImpl, url) {
  const res = await fetchImpl(url, {
    headers: {
      "User-Agent": `Mozilla/5.0 (compatible; ${USER_AGENT})`,
      Accept: "*/*",
    },
    redirect: "follow",
  })
  if (!res.ok) throw new HttpError(res.status, url)
  return res.text()
}

/**
 * 1 つのブログについて新着記事を集める。
 * @returns {{ inbox: object | null, state: object }}
 */
export async function collectBlog(cfg, prevState, { fetchImpl = fetch, now = new Date() } = {}) {
  const errors = []
  const base = {
    kind: "blog",
    id: cfg.id,
    title: cfg.title ?? cfg.id,
    relatedRepo: cfg.relatedRepo ?? null,
    collectedAt: isoSec(now),
    posts: [],
    errors,
  }
  const state = { ...(prevState ?? {}) }
  const firstRun = !prevState?.seen

  // feed（RSS/Atom）か page（RSS の無いサイトの一覧ページ）のどちらかで記事一覧を取る
  const source = cfg.feed ?? cfg.page
  let items
  try {
    const body = await fetchText(fetchImpl, source)
    items = cfg.feed ? parseFeed(body) : parseListingPage(body, cfg.page, cfg)
    if (items.length === 0) throw new Error("記事へのリンクが見つかりませんでした")
  } catch (e) {
    errors.push(`${cfg.feed ? "フィード" : "一覧ページ"} ${source} を取得できませんでした: ${e.message}`)
    return { inbox: base, state }
  }
  if (cfg.titleFilter) {
    const re = new RegExp(cfg.titleFilter)
    items = items.filter((it) => re.test(it.title))
  }

  const seen = new Set(prevState?.seen ?? [])
  let targets = items.filter((it) => !seen.has(it.url))
  if (firstRun) targets = targets.slice(0, LIMITS.initialPosts)

  base.posts = await mapLimit(targets, LIMITS.concurrency, async (it) => {
    let article = null
    try {
      article = extractArticle(await fetchText(fetchImpl, it.url), it.url)
    } catch (e) {
      errors.push(`記事 ${it.url} を取得できませんでした: ${e.message}`)
    }
    const text = article?.text || htmlToText(it.html)
    if (!text && article) errors.push(`記事 ${it.url} の本文を取り出せませんでした`)
    // 一覧ページのリンク文字より、記事ページのタイトルのほうが正確
    const title = (cfg.page && article?.title) || it.title
    return {
      title,
      url: it.url,
      publishedAt: it.publishedAt ?? article?.publishedAt ?? null,
      versions: extractVersions(title, text),
      text: truncate(text, LIMITS.postText),
    }
  })
  // 古い順に並べる（ルーチンが時系列で読みやすいように）
  base.posts.reverse()

  // 初回は取り込まなかった記事も seen に登録する
  state.seen = [...new Set([...items.map((it) => it.url), ...(prevState?.seen ?? [])])].slice(
    0,
    LIMITS.seen,
  )
  const hasData = base.posts.length > 0 || errors.length > 0
  return { inbox: hasData ? base : null, state }
}

// ---------------------------------------------------------------------------
// 入出力
// ---------------------------------------------------------------------------

/** JST の日付（YYYY-MM-DD）。collect は JST の早朝に動くので、ルーチンの日付と揃える */
export function jstDate(d = new Date()) {
  return new Date(d.getTime() + 9 * 3600 * 1000).toISOString().slice(0, 10)
}

export function repoId(fullName) {
  return fullName.replace("/", "-")
}

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  )

/**
 * digest/inbox/<date>-<id>.json に書く。同じ名前のファイルがあれば上書きせず -2, -3… を付ける。
 * @returns 書き出したファイルのパス
 */
export async function writeInbox(inboxDir, date, id, data) {
  await mkdir(inboxDir, { recursive: true })
  let file = path.join(inboxDir, `${date}-${id}.json`)
  for (let i = 2; await exists(file); i++) {
    file = path.join(inboxDir, `${date}-${id}-${i}.json`)
  }
  await writeFile(file, JSON.stringify(data, null, 2) + "\n")
  return file
}

export async function loadConfig(file) {
  const cfg = YAML.parse(await readFile(file, "utf8")) ?? {}
  return { repos: cfg.repos ?? [], blogs: cfg.blogs ?? [] }
}

export async function loadState(file) {
  try {
    const s = JSON.parse(await readFile(file, "utf8"))
    return { repos: s.repos ?? {}, blogs: s.blogs ?? {} }
  } catch (e) {
    if (e.code === "ENOENT") return { repos: {}, blogs: {} }
    throw e
  }
}

export async function run({
  root = ROOT,
  token = process.env.GITHUB_TOKEN,
  fetchImpl = fetch,
  now = new Date(),
  log = console.log,
} = {}) {
  const digest = path.join(root, "digest")
  const config = await loadConfig(path.join(digest, "config.yml"))
  const state = await loadState(path.join(digest, "state.json"))
  const inboxDir = path.join(digest, "inbox")
  const date = jstDate(now)
  const gh = createGitHub({ token, fetchImpl })
  const written = []

  for (const cfg of config.repos) {
    log(`repo ${cfg.repo} (${cfg.branch ?? "main"})`)
    const result = await collectRepo(gh, cfg, state.repos[cfg.repo], now)
    state.repos[cfg.repo] = result.state
    if (result.inbox) {
      const id = repoId(result.inbox.repo)
      written.push(await writeInbox(inboxDir, date, id, result.inbox))
      log(`  PR ${result.inbox.prs.length} 件, Release ${result.inbox.releasesInRange.length} 件`)
    } else {
      log("  新着なし")
    }
    for (const err of result.inbox?.errors ?? []) log(`  error: ${err}`)
  }

  for (const cfg of config.blogs) {
    log(`blog ${cfg.id} (${cfg.feed ?? cfg.page})`)
    const result = await collectBlog(cfg, state.blogs[cfg.id], { fetchImpl, now })
    state.blogs[cfg.id] = result.state
    if (result.inbox) {
      written.push(await writeInbox(inboxDir, date, `blog-${cfg.id}`, result.inbox))
      log(`  記事 ${result.inbox.posts.length} 件`)
    } else {
      log("  新着なし")
    }
    for (const err of result.inbox?.errors ?? []) log(`  error: ${err}`)
  }

  await writeFile(path.join(digest, "state.json"), JSON.stringify(state, null, 2) + "\n")
  log(written.length ? `inbox に ${written.length} 件書き出しました` : "新着はありませんでした")
  return { written, state }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  run().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}
