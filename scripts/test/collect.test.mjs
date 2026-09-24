// ネットワークを使わないテスト。`npm test --prefix scripts` で実行する。
import { test } from "node:test"
import assert from "node:assert/strict"
import { readFile, mkdtemp, mkdir, writeFile, readdir } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import {
  LIMITS,
  classifyPr,
  cleanBody,
  cleanPrBody,
  doccJsonUrl,
  doccToText,
  dropSections,
  parseDoccIndex,
  sortByVersion,
  collectBlog,
  collectRepo,
  createGitHub,
  extractArticle,
  extractArticleText,
  extractVersions,
  htmlToText,
  isBotUser,
  jstDate,
  parseFeed,
  parseListingPage,
  run,
  searchMergedPrs,
  truncate,
  writeInbox,
} from "../collect.mjs"

const fixtures = path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures")
const fixture = (name) => readFile(path.join(fixtures, name), "utf8")

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", ...headers },
  })

/** [正規表現, 応答を返す関数] の一覧で fetch を差し替える。呼ばれた URL は calls に残る */
function mockFetch(routes) {
  const calls = []
  const fetchImpl = async (url) => {
    calls.push(url)
    for (const [re, handler] of routes) {
      const m = re.exec(url)
      if (m) return handler(m, url)
    }
    return new Response("not found", { status: 404 })
  }
  return { fetchImpl, calls }
}

const noWait = () => Promise.resolve()

// ---------------------------------------------------------------------------

test("hint: タイトルの接頭辞と変更ファイルで other を判定する", () => {
  assert.equal(classifyPr({ title: "docs: fix typo", files: [{ path: "src/a.ts" }] }), "other")
  assert.equal(classifyPr({ title: "chore(deps): bump", files: [] }), "other")
  assert.equal(classifyPr({ title: "ci: cache", files: [] }), "other")
  assert.equal(classifyPr({ title: "test: add case", files: [] }), "other")
  assert.equal(
    classifyPr({
      title: "Fix flaky thing",
      files: [
        { path: "test/e2e/app/index.test.ts" },
        { path: "packages/next/src/foo.test.tsx" },
        { path: "docs/01-app/page.mdx" },
        { path: ".github/workflows/build.yml" },
        { path: "README.md" },
        { path: "packages/react/src/__tests__/ReactDOM-test.js" },
      ],
    }),
    "other",
  )
})

test("hint: feat / fix / unknown", () => {
  const src = [{ path: "packages/next/src/server/render.ts" }]
  assert.equal(classifyPr({ title: "feat(next): add next analyze", files: src }), "feature")
  assert.equal(classifyPr({ title: "[Feature] New hook", files: src }), "feature")
  assert.equal(classifyPr({ title: "Fix crash on hydration", files: src }), "fix")
  assert.equal(classifyPr({ title: "[Fiber] bugfix for Suspense", files: src }), "fix")
  assert.equal(classifyPr({ title: "Handle prefix in router", files: src }), "unknown")
  assert.equal(classifyPr({ title: "Promote next analyze command", files: src }), "unknown")
  // ファイル一覧が無いときはファイルでは other にしない
  assert.equal(classifyPr({ title: "Update something", files: [] }), "unknown")
  // 本体のファイルが 1 つでも混ざれば other にしない
  assert.equal(
    classifyPr({ title: "Improve errors", files: [{ path: "README.md" }, ...src] }),
    "unknown",
  )
})

test("bot の判定", () => {
  assert.equal(isBotUser({ login: "dependabot[bot]", type: "Bot" }), true)
  assert.equal(isBotUser({ login: "renovate[bot]", type: "User" }), true)
  assert.equal(isBotUser({ login: "gaearon", type: "User" }), false)
})

test("本文: HTML コメントを除いて切り詰める", () => {
  const body = "## What\r\n<!-- template\nhint -->\nAdds X.\n\n\n\nMore.<!-- tail"
  assert.equal(cleanBody(body, 3000), "## What\n\nAdds X.\n\nMore.")
  assert.equal(cleanBody(null, 10), "")
  const long = "a".repeat(3100)
  const out = cleanBody(long, 3000)
  assert.equal(out.startsWith("a".repeat(3000)), true)
  assert.equal(out.endsWith("…(truncated)"), true)
  assert.equal(out.length, 3000 + "\n…(truncated)".length)
  assert.equal(truncate("short", 10), "short")
})

test("PR 本文: 画像とコミット固定の GitHub URL を短くする", () => {
  const body = [
    "See https://github.com/vercel/next.js/blob/3c9d1ca77f7de845315dc166a57fc9f090c638b4/packages/next/src/a.ts#L12",
    "![screenshot](https://user-images.githubusercontent.com/1/2.png)",
    '<img width="500" src="https://example.com/x.png">',
    "Link https://github.com/vercel/next.js/pull/1 stays.",
  ].join("\n")
  assert.equal(
    cleanPrBody(body, 1500),
    "See packages/next/src/a.ts#L12\n\nLink https://github.com/vercel/next.js/pull/1 stays.",
  )
})

test("バージョン表記の抽出", () => {
  assert.deepEqual(extractVersions("Next.js 16.4", "Requires v16.4.0 or later."), ["16.4", "16.4.0"])
  assert.deepEqual(
    extractVersions("React Labs", "Try v19.3. Canary 19.4.0-canary.12. Date 2026.09.24. IP 1.2.3.4"),
    ["19.4.0-canary.12", "19.3"],
  )
  // 本文中の X.Y（v なし）は拾わない
  assert.deepEqual(extractVersions("Blog", "1.5x faster"), [])
})

test("RSS を解析する（CDATA・エンティティ・新しい順）", async () => {
  const items = parseFeed(await fixture("rss.xml"))
  assert.deepEqual(
    items.map((i) => i.title),
    ["Next.js 16.4 & Turbopack", "Next.js 16.3", "Building APIs with Next.js"],
  )
  assert.equal(items[0].url, "https://nextjs.org/blog/next-16-4")
  assert.equal(items[0].publishedAt, "2026-09-22T17:00:00.000Z")
  assert.match(items[0].html, /next analyze/)
})

test("Atom を解析する", async () => {
  const items = parseFeed(await fixture("atom.xml"))
  assert.equal(items.length, 2)
  assert.equal(items[0].title, "React 19.3")
  assert.equal(items[0].url, "https://react.dev/blog/2026/09/20/react-19-3")
  assert.equal(items[1].url, "https://react.dev/blog/2026/06/01/react-labs")
  assert.equal(items[1].publishedAt, "2026-06-01T00:00:00.000Z")
  assert.match(htmlToText(items[0].html), /React v19\.3 is now available\./)
})

test("RSS/Atom でなければエラー", () => {
  assert.throws(() => parseFeed("<html><body>hi</body></html>"), /RSS\/Atom/)
})

test("記事ページから本文を取り出す", async () => {
  const text = extractArticleText(await fixture("article.html"), "https://nextjs.org/blog/next-16-4")
  assert.match(text, /## next analyze/)
  assert.match(text, /```\nnpx @next\/codemod@canary upgrade latest\nnpm install next@latest\n```/)
  assert.match(text, /- Works with Turbopack/)
  assert.doesNotMatch(text, /window\.x/)
  assert.doesNotMatch(text, /© 2026 Vercel/)
})

test("一覧ページから記事リンクを拾う（本文の領域だけ・重複と画像リンクを除く）", async () => {
  const html = await fixture("listing.html")
  const page = "https://developer.chrome.com/new?hl=ja"
  const items = parseListingPage(html, page, { articleParams: { hl: "ja" } })
  assert.deepEqual(
    items.map((i) => [i.title, i.url]),
    [
      ["Chrome 141 の新機能", "https://developer.chrome.com/blog/new-in-chrome-141?hl=ja"],
      ["Chrome 141 リリースノート", "https://developer.chrome.com/release-notes/141?hl=ja"],
      // /docs/ai は /docs/ai/webmcp の親なのでカテゴリのトップとして除く
      ["WebMCP", "https://developer.chrome.com/docs/ai/webmcp?hl=ja"],
      ["Chrome 142 ベータ版", "https://developer.chrome.com/blog/chrome-142-beta?hl=ja"],
      ["タグ: Chrome 142", "https://developer.chrome.com/tags/chrome-142?hl=ja"],
    ],
  )
  const filtered = parseListingPage(html, page, {
    linkPattern: "^https://developer\\.chrome\\.com/(blog|release-notes)/",
  })
  assert.deepEqual(
    filtered.map((i) => i.url),
    [
      "https://developer.chrome.com/blog/new-in-chrome-141?hl=ja",
      "https://developer.chrome.com/release-notes/141",
      "https://developer.chrome.com/blog/chrome-142-beta",
    ],
  )
})

test("記事ページからタイトルと公開日（日本語の日付）を取る", async () => {
  const a = extractArticle(await fixture("article-ja.html"), "https://developer.chrome.com/blog/new-in-chrome-141?hl=ja")
  assert.equal(a.title, "Chrome 141 の新機能")
  assert.equal(a.publishedAt, "2026-09-02T00:00:00.000Z")
  assert.match(a.text, /## CSS の新機能/)
  assert.match(a.text, /`?field-sizing`? プロパティ|field-sizing プロパティ/)
})

test("inbox の書き出し: 既存ファイルは上書きしない", async () => {
  const dir = path.join(await mkdtemp(path.join(tmpdir(), "inbox-")), "inbox")
  const a = await writeInbox(dir, "2026-09-24", "vercel-next.js", { n: 1 })
  const b = await writeInbox(dir, "2026-09-24", "vercel-next.js", { n: 2 })
  const c = await writeInbox(dir, "2026-09-24", "vercel-next.js", { n: 3 })
  assert.equal(path.basename(a), "2026-09-24-vercel-next.js.json")
  assert.equal(path.basename(b), "2026-09-24-vercel-next.js-2.json")
  assert.equal(path.basename(c), "2026-09-24-vercel-next.js-3.json")
  assert.deepEqual(JSON.parse(await readFile(a, "utf8")), { n: 1 })
  assert.deepEqual(JSON.parse(await readFile(c, "utf8")), { n: 3 })
})

test("JST の日付", () => {
  assert.equal(jstDate(new Date("2026-09-23T21:17:00Z")), "2026-09-24")
  assert.equal(jstDate(new Date("2026-09-24T14:59:00Z")), "2026-09-24")
})

// ---------------------------------------------------------------------------
// GitHub API（モック）

function searchItem(number, mergedAt, extra = {}) {
  return {
    number,
    title: `PR ${number}`,
    html_url: `https://github.com/react/react/pull/${number}`,
    user: { login: "alice", type: "User" },
    labels: [],
    body: "",
    pull_request: { merged_at: mergedAt },
    ...extra,
  }
}

function repoRoutes({ searchItems, filesFail = false }) {
  let filesCalls = 0
  return [
    [/\/repos\/facebook\/react$/, () => json({ full_name: "react/react", default_branch: "trunk" })],
    [
      /\/repos\/react\/react\/releases\/latest$/,
      () =>
        json({
          tag_name: "v19.3.0",
          published_at: "2026-09-20T00:00:00Z",
          html_url: "https://github.com/react/react/releases/tag/v19.3.0",
        }),
    ],
    [
      /\/repos\/react\/react\/releases\?/,
      () =>
        json([
          { tag_name: "v19.4.0-canary.1", name: "", draft: false, prerelease: true, published_at: "2026-09-22T00:00:00Z", html_url: "u1", body: "canary <!-- x -->" },
          { tag_name: "v19.4.0-draft", draft: true, prerelease: false, published_at: null, html_url: "u2" },
          { tag_name: "v19.3.0", name: "19.3.0 (Sep 20)", draft: false, prerelease: false, published_at: "2026-09-20T00:00:00Z", html_url: "u3", body: "## React DOM\n- x" },
          { tag_name: "v19.2.0", name: "19.2.0", draft: false, prerelease: false, published_at: "2026-08-01T00:00:00Z", html_url: "u4", body: "old" },
        ]),
    ],
    [/\/search\/issues\?/, () => json({ total_count: searchItems.length, items: searchItems })],
    [
      /\/repos\/react\/react\/pulls\/(\d+)$/,
      (m) =>
        json({
          number: Number(m[1]),
          body: `Body of ${m[1]} <!-- remove me -->`,
          merge_commit_sha: `sha${m[1]}`,
          merged_at: searchItems.find((i) => i.number === Number(m[1])).pull_request.merged_at,
          changed_files: m[1] === "1" ? 55 : 1,
        }),
    ],
    [
      /\/repos\/react\/react\/pulls\/(\d+)\/files/,
      (m) => {
        filesCalls++
        // 1 回目はレート制限で失敗させ、リトライを確かめる
        if (filesCalls === 1) return json({ message: "API rate limit exceeded" }, 403, { "x-ratelimit-remaining": "0" })
        if (filesFail && m[1] === "4") return json({ message: "boom" }, 422)
        const files =
          m[1] === "1"
            ? [
                // テストのファイルが先に来ても、本体のファイルを優先して並べる
                ...Array.from({ length: 3 }, (_, i) => ({ filename: `packages/react/src/__tests__/t${i}-test.js`, additions: 9, deletions: 0 })),
                ...Array.from({ length: 40 }, (_, i) => ({ filename: `packages/react/src/f${i}.js`, additions: 1, deletions: 0 })),
              ]
            : m[1] === "6"
              ? [{ filename: "docs/intro.md", additions: 1, deletions: 1 }]
            : [{ filename: "packages/react-dom/src/client/ReactDOM.js", additions: 3, deletions: 2 }]
        return json(files)
      },
    ],
    [
      /\/compare\/([^/]+)\.\.\.(\w+)\?/,
      (m) => {
        const tag = decodeURIComponent(m[1])
        const sha = m[2]
        if (sha === "sha1" && tag === "v19.3.0") return json({ status: "behind" })
        if (sha === "sha4" && tag === "v19.4.0-canary.1") return json({ status: "identical" })
        if (sha === "sha5") return json({ status: "diverged" })
        return json({ status: "ahead" })
      },
    ],
  ]
}

test("collectRepo: 正式名・除外・収録状況・Release・state", async () => {
  const from = "2026-09-17T00:00:00Z"
  const searchItems = [
    searchItem(0, from), // 前回取り込み済み（from ちょうど）
    searchItem(1, "2026-09-18T00:00:00Z", { title: "feat: add useThing" }),
    searchItem(2, "2026-09-19T00:00:00Z", { user: { login: "dependabot[bot]", type: "Bot" } }),
    searchItem(3, "2026-09-20T00:00:00Z", { labels: [{ name: "Dependencies" }] }),
    searchItem(4, "2026-09-21T00:00:00Z", { title: "Fix hydration mismatch" }),
    searchItem(5, "2026-09-23T00:00:00Z", { title: "Refactor scheduler" }),
    searchItem(6, "2026-09-23T01:00:00Z", { title: "Update intro" }),
  ]
  const { fetchImpl, calls } = mockFetch(repoRoutes({ searchItems }))
  const gh = createGitHub({ token: "t", fetchImpl, wait: noWait })
  const cfg = { repo: "facebook/react", branch: "main", excludeLabels: ["dependencies"] }
  const now = new Date("2026-09-23T21:17:00Z")
  const { inbox, state } = await collectRepo(gh, cfg, { lastMergedAt: from }, now)

  assert.equal(inbox.kind, "repo")
  assert.equal(inbox.repo, "react/react")
  assert.equal(inbox.maxPrs, 60)
  assert.deepEqual(inbox.range, { from, to: "2026-09-23T21:17:00Z" })
  // search には正式名を使う
  const searchUrl = decodeURIComponent(calls.find((u) => u.includes("/search/issues")))
  assert.match(searchUrl, /repo:react\/react is:pr is:merged base:main merged:2026-09-17T00:00:00Z\.\.2026-09-23T21:17:00Z/)

  assert.deepEqual(inbox.prs.map((p) => p.number), [1, 4, 5, 6])
  const [p1, p4, p5, p6] = inbox.prs
  assert.equal(p1.hint, "feature")
  assert.equal(p1.release, "📦 v19.3.0")
  assert.equal(p1.body, "Body of 1")
  assert.equal(p1.files.length, 10)
  assert.equal(p1.files[0], "packages/react/src/f0.js (+1 -0)")
  assert.equal(p1.filesTotal, 55)
  assert.equal("labels" in p1, false)
  assert.equal(p4.hint, "fix")
  assert.equal(p4.release, "📦 v19.4.0-canary.1")
  assert.deepEqual(p4.files, ["packages/react-dom/src/client/ReactDOM.js (+3 -2)"])
  assert.equal(p4.filesTotal, 1)
  assert.equal(p5.hint, "unknown")
  assert.equal(p5.release, "⏳ 未リリース")
  // 「その他」は本文と変更ファイルを持たない
  assert.equal(p6.hint, "other")
  assert.equal("body" in p6, false)
  assert.equal("files" in p6, false)
  assert.equal(p6.filesTotal, 1)

  assert.equal(inbox.latest.stable.tag, "v19.3.0")
  assert.equal(inbox.latest.prerelease.tag, "v19.4.0-canary.1")
  assert.deepEqual(inbox.releasesInRange.map((r) => r.tag), ["v19.3.0", "v19.4.0-canary.1"])
  assert.equal(inbox.releasesInRange[1].name, "v19.4.0-canary.1")
  // プレリリースの本文は持たない
  assert.equal(inbox.releasesInRange[0].body, "## React DOM\n- x")
  assert.equal("body" in inbox.releasesInRange[1], false)
  assert.deepEqual(inbox.errors, [])

  // bot や除外ラベルの PR も含め、見た中で最新のマージ日時まで進める
  assert.equal(state.lastMergedAt, "2026-09-23T01:00:00Z")
  assert.equal(state.fullName, "react/react")
})

test("collectRepo: 一部の取得に失敗しても続け、errors に残す", async () => {
  const searchItems = [searchItem(4, "2026-09-21T00:00:00Z", { title: "Fix x" })]
  const { fetchImpl } = mockFetch(repoRoutes({ searchItems, filesFail: true }))
  const gh = createGitHub({ fetchImpl, wait: noWait })
  const now = new Date("2026-09-23T21:17:00Z")
  const { inbox } = await collectRepo(gh, { repo: "facebook/react" }, undefined, now)
  // branch を省略したら既定ブランチ
  assert.equal(inbox.branch, "trunk")
  // 初回は直近 7 日
  assert.equal(inbox.range.from, "2026-09-16T21:17:00Z")
  assert.equal(inbox.prs.length, 1)
  assert.equal(inbox.prs[0].files.length, 0)
  assert.equal(inbox.errors.length, 1)
  assert.match(inbox.errors[0], /#4 の変更ファイル/)
})

test("collectRepo: 新着が無ければ inbox は null、検索に失敗したら state を進めない", async () => {
  const now = new Date("2026-09-23T21:17:00Z")
  const prev = { lastMergedAt: "2026-09-22T00:00:00Z" }
  {
    const { fetchImpl } = mockFetch(repoRoutes({ searchItems: [] }))
    const gh = createGitHub({ fetchImpl, wait: noWait })
    const { inbox, state } = await collectRepo(gh, { repo: "facebook/react" }, prev, now)
    assert.equal(inbox, null)
    assert.equal(state.lastMergedAt, prev.lastMergedAt)
  }
  {
    const routes = repoRoutes({ searchItems: [] })
    routes.unshift([/\/search\/issues\?/, () => json({ message: "Validation Failed" }, 422)])
    const { fetchImpl } = mockFetch(routes)
    const gh = createGitHub({ fetchImpl, wait: noWait })
    const { inbox, state } = await collectRepo(gh, { repo: "facebook/react" }, prev, now)
    assert.equal(state.lastMergedAt, prev.lastMergedAt)
    assert.match(inbox.errors[0], /検索できませんでした/)
  }
  {
    const { fetchImpl } = mockFetch([])
    const gh = createGitHub({ fetchImpl, wait: noWait })
    const { inbox } = await collectRepo(gh, { repo: "nobody/nothing" }, prev, now)
    assert.match(inbox.errors[0], /nobody\/nothing/)
  }
})

test("search: 1000 件を超える期間は分割して取り直す", async () => {
  const queries = []
  const fetchImpl = async (url) => {
    const q = decodeURIComponent(new URL(url).searchParams.get("q"))
    queries.push(q)
    const [, a, b] = /merged:(\S+)\.\.(\S+)/.exec(q)
    const span = Date.parse(b) - Date.parse(a)
    if (span > 2 * 24 * 3600 * 1000) return json({ total_count: 1500, items: [] })
    return json({ total_count: 2, items: [searchItem(Date.parse(a) / 1000, a), searchItem(1, "2026-09-10T00:00:00Z")] })
  }
  const gh = createGitHub({ fetchImpl, wait: noWait })
  const items = await searchMergedPrs(gh, {
    fullName: "react/react",
    branch: "main",
    from: "2026-09-01T00:00:00Z",
    to: "2026-09-08T00:00:00Z",
  })
  assert.ok(queries.length > 3)
  // from ちょうどの PR は除き、重複を除いてマージ日時順に並べる
  assert.equal(items.filter((i) => i.number === 1).length, 1)
  assert.ok(items.every((i) => i.pull_request.merged_at > "2026-09-01T00:00:00Z"))
  const dates = items.map((i) => i.pull_request.merged_at)
  assert.deepEqual(dates, [...dates].sort())
})

// ---------------------------------------------------------------------------
// ブログ（モック）

async function blogRoutes() {
  const rss = await fixture("rss.xml")
  const article = await fixture("article.html")
  return [
    [/nextjs\.org\/feed\.xml$/, () => new Response(rss)],
    [/nextjs\.org\/blog\/next-16-4$/, () => new Response(article)],
    [/nextjs\.org\/blog\/next-16-3$/, () => new Response("gone", { status: 500 })],
  ]
}

test("collectBlog: 初回は直近の数件だけ取り込み、残りは seen に登録する", async () => {
  const saved = LIMITS.initialPosts
  LIMITS.initialPosts = 2
  try {
    const { fetchImpl } = mockFetch(await blogRoutes())
    const cfg = { id: "nextjs", title: "Next.js Blog", feed: "https://nextjs.org/feed.xml", relatedRepo: "vercel/next.js" }
    const { inbox, state } = await collectBlog(cfg, undefined, { fetchImpl })
    assert.equal(inbox.kind, "blog")
    assert.equal(inbox.relatedRepo, "vercel/next.js")
    // 古い順
    assert.deepEqual(inbox.posts.map((p) => p.title), ["Next.js 16.3", "Next.js 16.4 & Turbopack"])
    const [p163, p164] = inbox.posts
    assert.match(p164.text, /## next analyze/)
    assert.deepEqual(p164.versions, ["16.4", "16.4.0", "16.3.6"])
    // 記事ページが取れなければフィードの本文を使い、エラーを残す
    assert.equal(p163.text, "Next.js 16.3 is out.")
    assert.equal(inbox.errors.length, 1)
    assert.equal(state.seen.length, 3)

    // 2 回目: 新着が無ければ inbox は null
    const second = await collectBlog(cfg, state, { fetchImpl })
    assert.equal(second.inbox, null)
    assert.deepEqual(second.state.seen, state.seen)

    // seen に無い記事だけを取り込む
    const third = await collectBlog(cfg, { seen: ["https://nextjs.org/blog/next-16-3"] }, { fetchImpl })
    assert.deepEqual(third.inbox.posts.map((p) => p.url), [
      "https://nextjs.org/blog/building-apis",
      "https://nextjs.org/blog/next-16-4",
    ])
  } finally {
    LIMITS.initialPosts = saved
  }
})

test("collectBlog: titleFilter とフィード取得の失敗", async () => {
  const { fetchImpl } = mockFetch(await blogRoutes())
  const cfg = { id: "nextjs", feed: "https://nextjs.org/feed.xml", titleFilter: "^Next\\.js \\d" }
  const { inbox } = await collectBlog(cfg, { seen: [] }, { fetchImpl })
  assert.deepEqual(inbox.posts.map((p) => p.title), ["Next.js 16.3", "Next.js 16.4 & Turbopack"])

  const failed = await collectBlog({ id: "x", feed: "https://example.com/none.xml" }, { seen: ["a"] }, { fetchImpl })
  assert.equal(failed.inbox.posts.length, 0)
  assert.match(failed.inbox.errors[0], /フィード/)
  assert.deepEqual(failed.state.seen, ["a"])
})

test("collectBlog: RSS の無いサイトの一覧ページ（page）から取り込む", async () => {
  const listing = await fixture("listing.html")
  const article = await fixture("article-ja.html")
  const { fetchImpl } = mockFetch([
    [/\/new\?hl=ja$/, () => new Response(listing)],
    [/\/blog\/new-in-chrome-141\?hl=ja$/, () => new Response(article)],
    [/\/release-notes\/141\?hl=ja$/, () => new Response("<html><body></body></html>")],
  ])
  const cfg = {
    id: "chrome",
    title: "Chrome の新機能",
    page: "https://developer.chrome.com/new?hl=ja",
    linkPattern: "^https://developer\\.chrome\\.com/(blog|release-notes)/",
    articleParams: { hl: "ja" },
  }
  const { inbox, state } = await collectBlog(cfg, undefined, { fetchImpl })
  assert.equal(inbox.relatedRepo, null)
  assert.deepEqual(state.seen, [
    "https://developer.chrome.com/blog/new-in-chrome-141?hl=ja",
    "https://developer.chrome.com/release-notes/141?hl=ja",
    "https://developer.chrome.com/blog/chrome-142-beta?hl=ja",
  ])
  // 古い順（一覧ページの下から）
  const [beta, notes, whatsNew] = inbox.posts
  assert.equal(whatsNew.title, "Chrome 141 の新機能")
  assert.equal(whatsNew.publishedAt, "2026-09-02T00:00:00.000Z")
  assert.match(whatsNew.text, /Chrome 141 がリリースされました/)
  // 本文が取れない記事と、取得できない記事はエラーに残す
  assert.equal(notes.text, "")
  assert.equal(beta.publishedAt, null)
  assert.equal(inbox.errors.length, 2)

  // 記事リンクが 1 つも無ければエラー
  const { fetchImpl: empty } = mockFetch([[/\/new/, () => new Response("<main><p>no links</p></main>")]])
  const none = await collectBlog(cfg, { seen: [] }, { fetchImpl: empty })
  assert.match(none.inbox.errors[0], /一覧ページ.*記事へのリンクが見つかりません/)
})

test("DocC: JSON の URL・一覧・本文", async () => {
  assert.equal(
    doccJsonUrl("https://developer.apple.com/documentation/safari-release-notes"),
    "https://developer.apple.com/tutorials/data/documentation/safari-release-notes.json",
  )
  const index = JSON.parse(await fixture("docc-index.json"))
  const items = parseDoccIndex(index, "https://developer.apple.com/documentation/safari-release-notes")
  assert.deepEqual(
    items.map((i) => [i.title, i.publishedAt]),
    [
      ["Safari 27.2 Beta Release Notes", "2026-09-16T00:00:00.000Z"],
      ["Safari 27 Release Notes", "2026-09-14T00:00:00.000Z"],
      ["Safari 26.6 Release Notes", "2026-07-27T00:00:00.000Z"],
    ],
  )
  assert.equal(items[0].url, "https://developer.apple.com/documentation/safari-release-notes/safari-27_2-release-notes")

  const text = doccToText(JSON.parse(await fixture("docc-article.json")))
  assert.match(text, /^## Overview\n\nSafari 27 is available for iOS 27\./)
  assert.match(text, /#### New Features\n\n- Added support for `:heading`\.\n- Added Navigation API\./)
  assert.doesNotMatch(text, /123456789/)
  assert.match(text, /```\nconst x = 1\nx\.toString\(\)\n```/)
  assert.match(text, /> Note: Beta only\./)
})

test("長い節を省く（Resolved Issues）", async () => {
  const text = doccToText(JSON.parse(await fixture("docc-article.json")))
  const out = dropSections(text, /^(Resolved Issues|Known Issues)$/)
  assert.match(out, /#### Resolved Issues\n\n（3 件は長いため省略）\n\n### JavaScript/)
  assert.doesNotMatch(out, /Fixed a crash/)
  assert.match(out, /Added support for `:heading`/)
  // 末尾の節でも件数を残す
  assert.equal(dropSections("## A\n\n- x\n- y", /^A$/), "## A\n\n（2 件は長いため省略）")
})

test("collectBlog: Apple のドキュメント（docc）から取り込み、長いときは節を省く", async () => {
  const index = await fixture("docc-index.json")
  const article = await fixture("docc-article.json")
  const { fetchImpl, calls } = mockFetch([
    [/\/tutorials\/data\/documentation\/safari-release-notes\.json$/, () => new Response(index)],
    [/safari-27-release-notes\.json$/, () => new Response(article)],
    [/safari-27_2-release-notes\.json$/, () => new Response(article)],
  ])
  const cfg = {
    id: "safari",
    docc: "https://developer.apple.com/documentation/safari-release-notes",
    maxText: 200,
    dropSectionsWhenLong: "^(Resolved Issues|Known Issues)$",
  }
  const { inbox, state } = await collectBlog(cfg, { seen: [items26_6()] }, { fetchImpl })
  assert.deepEqual(inbox.posts.map((p) => p.title), ["Safari 27 Release Notes", "Safari 27.2 Beta Release Notes"])
  const [p27] = inbox.posts
  assert.equal(p27.publishedAt, "2026-09-14T00:00:00.000Z")
  assert.match(p27.text, /（3 件は長いため省略）/)
  assert.ok(calls.some((u) => u.endsWith("/safari-release-notes/safari-27-release-notes.json")))
  assert.equal(state.seen.length, 3)
  assert.deepEqual(inbox.errors, [])
})

const items26_6 = () => "https://developer.apple.com/documentation/safari-release-notes/safari-26_6-release-notes"

test("一覧ページ: linkPattern があれば別ドメインのリンクも拾う", () => {
  const html = `<main>
    <a href="https://www.mozilla.org/en-US/firefox/143.0.1/releasenotes/">143.0.1</a>
    <a href="/en-US/firefox/143.0/releasenotes/">143.0</a>
    <a href="/en-US/firefox/140.3.0esr/releasenotes/">140.3.0esr</a>
    <a href="/en-US/firefox/144.0beta/releasenotes/">144.0beta</a>
    <a href="/en-US/firefox/android/143.0/releasenotes/">Android</a>
  </main>`
  const items = parseListingPage(html, "https://www.firefox.com/en-US/releases/", {
    linkPattern: "/firefox/\\d+(\\.\\d+)+/releasenotes/?$",
  })
  assert.deepEqual(items.map((i) => i.url), [
    "https://www.mozilla.org/en-US/firefox/143.0.1/releasenotes/",
    "https://www.firefox.com/en-US/firefox/143.0/releasenotes/",
  ])
})

test("collectBlog: titleTemplate で URL のバージョン番号からタイトルを作る", async () => {
  const listing = `<main><a href="/firefox/156.0/releasenotes/">156.0</a><a href="/firefox/156.0.1/releasenotes/">156.0.1</a></main>`
  const note = (d) => `<html><body><main><article><h1>Firefox Release Notes</h1><p>Firefox Release</p><p>${d}</p><p>${"Various security and stability fixes are included in this release. ".repeat(5)}</p></article></main></body></html>`
  const { fetchImpl } = mockFetch([
    [/\/releases\/$/, () => new Response(listing)],
    [/156\.0\.1\/releasenotes\/$/, () => new Response(note("September 22, 2026"))],
    [/156\.0\/releasenotes\/$/, () => new Response(note("September 15, 2026"))],
  ])
  const cfg = {
    id: "firefox",
    page: "https://www.firefox.com/en-US/releases/",
    linkPattern: "/firefox/\\d+(\\.\\d+)+/releasenotes/?$",
    sortBy: "version",
    titleTemplate: "Firefox {version}",
  }
  const { inbox } = await collectBlog(cfg, { seen: [] }, { fetchImpl })
  assert.deepEqual(
    inbox.posts.map((p) => [p.title, p.publishedAt, p.versions]),
    [
      ["Firefox 156.0", "2026-09-15T00:00:00.000Z", ["156.0"]],
      ["Firefox 156.0.1", "2026-09-22T00:00:00.000Z", ["156.0.1"]],
    ],
  )
})

test("バージョン番号の大きい順に並べる", () => {
  const urls = ["/firefox/142.0/releasenotes/", "/firefox/143.0.1/releasenotes/", "/about/", "/firefox/143.0/releasenotes/", "/firefox/99.0/releasenotes/"]
  const items = urls.map((u) => ({ url: "https://www.firefox.com" + u }))
  assert.deepEqual(
    sortByVersion(items).map((i) => new URL(i.url).pathname),
    ["/firefox/143.0.1/releasenotes/", "/firefox/143.0/releasenotes/", "/firefox/142.0/releasenotes/", "/firefox/99.0/releasenotes/", "/about/"],
  )
})

// ---------------------------------------------------------------------------

test("run: config.yml から inbox と state.json を作る", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "release-wiki-"))
  await mkdir(path.join(root, "digest"))
  await writeFile(
    path.join(root, "digest", "config.yml"),
    [
      "repos:",
      "  - repo: facebook/react",
      "    branch: main",
      "blogs:",
      "  - id: nextjs",
      "    title: Next.js Blog",
      "    feed: https://nextjs.org/feed.xml",
      "    relatedRepo: vercel/next.js",
    ].join("\n"),
  )
  const searchItems = [searchItem(5, "2026-09-23T00:00:00Z")]
  const { fetchImpl } = mockFetch([...(await blogRoutes()), ...repoRoutes({ searchItems })])
  const now = new Date("2026-09-23T21:17:00Z")
  const { written } = await run({ root, fetchImpl, now, log: () => {}, token: "t" })

  const inbox = await readdir(path.join(root, "digest", "inbox"))
  assert.deepEqual(inbox.sort(), ["2026-09-24-blog-nextjs.json", "2026-09-24-react-react.json"])
  assert.equal(written.length, 2)
  const state = JSON.parse(await readFile(path.join(root, "digest", "state.json"), "utf8"))
  assert.equal(state.repos["facebook/react"].lastMergedAt, "2026-09-23T00:00:00Z")
  assert.equal(state.blogs.nextjs.seen.length, 3)
})
