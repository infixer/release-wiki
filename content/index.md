---
title: Release Wiki
description: 追っている GitHub リポジトリ（React・Next.js・Vue・TypeScript・Web 標準など）と、ブラウザや Anthropic の公式ブログの変更を、週 3 回（月・水・金）日本語でまとめている Wiki です。
tags:
  - index
---

気になる GitHub リポジトリのマージ済み PR と公式ブログを、週 3 回（月・水・金）まとめている Wiki です。

## リポジトリ

| リポジトリ | ブランチ | 最新の安定版 | 最終更新 |
|---|---|---|---|
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-11-13 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)（2026-11-12）→ [[repos/anthropics-claude-code/releases/v2.1.323\|まとめ]] | 2026-11-13 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-11-13 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4\|まとめ]] | 2026-11-13 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1)（2026-11-10）→ [[repos/openai-codex/releases/rust-v0.167.1\|まとめ]] | 2026-11-13 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-11-04 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.93.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.93.0)（2026-11-09）→ [[repos/oxc-project-oxc/releases/oxlint_v1.93.0\|まとめ]] | 2026-11-13 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.20.0](https://github.com/pnpm/pnpm/releases/tag/v12.20.0)（2026-11-12）→ [[repos/pnpm-pnpm/releases/v12.20.0\|まとめ]] | 2026-11-13 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-11-13 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-11-13 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.6](https://github.com/vercel/next.js/releases/tag/v16.4.6)（2026-11-10）→ [[repos/vercel-next.js/releases/v16.4.6\|まとめ]] | 2026-11-13 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.1.0](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0)（2026-11-02）→ [[repos/vitest-dev-vitest/releases/v5.1.0\|まとめ]] | 2026-11-13 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.45](https://github.com/vuejs/core/releases/tag/v3.5.45)（2026-11-05）→ [[repos/vuejs-core/releases/v3.5.45\|まとめ]] | 2026-11-13 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-11-09 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-11-13 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-11-11 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-11-13 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-11-10-roadshow-launch\|新規株式公開に向けたロードショーを開始]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-11-10-160.0\|Firefox 160.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-11-03-safari-27_3-release-notes\|Safari 27.3 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- claude-code 安定版 [[repos/anthropics-claude-code/releases/v2.1.323|v2.1.323]]：実験的な Code Mode（Claude が JavaScript を書いてツールを呼ぶ）、plugin.json の `engines["claude-code"]`、`claude plugin validate` の hooks の型チェックを追加し、`/compact` で未回答のメッセージが消える問題を修正（[[repos/anthropics-claude-code/changes/2026-11-13|変更]]）
- pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.20.0|v12.20.0]]：v13 lockfile がローカルのディレクトリの依存の指定を記録、`workspace:` パスの `overrides`・git 依存の `::` 区切り・hoisted リンカーと peer 依存の不具合を修正。未リリースでは pnpr の 1.0 に向けた整理、`pnpm store add` の tarball URL・git 依存対応（[[repos/pnpm-pnpm/changes/2026-11-13|変更]]）
- next.js：Turbopack のスケーリングとメモリの改善（Linux での書き込みの並列化、ローダーツリーの O(N²) の解消、解析器のメモリ約 -20%）、immediate を await するルートハンドラーのプリレンダー対応、ESLint の `no-html-link-for-pages` の強化（[[repos/vercel-next.js/changes/2026-11-13|変更]]）
- nuxt：`<NuxtErrorBoundary>` が SSR のエラーも捕捉（`experimental.ssrErrorBoundary`）、`render:document` フックを追加、`vue`・`vue-router` が peer dependency に（破壊的変更）、ペイロードの決定的なシリアライズ（[[repos/nuxt-nuxt/changes/2026-11-13|変更]]）
- openai/codex：Git の資格情報ヘルパー `codex git-credential`、承認したプランを新しいスレッドへ引き継ぐ `thread/prepareApprovedPlan`、大きすぎる WebSocket のリクエストを HTTP へフォールバック（Release の取得は HTTP 504 で失敗）（[[repos/openai-codex/changes/2026-11-13|変更]]）
- oxc：通常の lint 中に起きていた panic を多数のルールで修正、Minifier が 1 回だけ使うメンバーの読み取りを埋め込み、`typescript/no-misused-promises` に `flagUnions`（[[repos/oxc-project-oxc/changes/2026-11-13|変更]]）
- vue：`<style>` の `v-bind()` が Teleport・KeepAlive・ループ・フラグメントの中でも付くよう修正、v3.6.0-rc.15 公開（[[repos/vuejs-core/changes/2026-11-13|変更]]）。react は Flight の同期 abort 後にストリームが閉じない問題を修正（[[repos/react-react/changes/2026-11-13|変更]]）
- TypeScript：コンテンツマッパーの登録を include の glob で絞り込めるように（[[repos/microsoft-TypeScript/changes/2026-11-13|変更]]）。Vitest は取り残された forks のワーカーを watchdog で終了、ファイルフィルタの解決を高速化（[[repos/vitest-dev-vitest/changes/2026-11-13|変更]]）。react-spectrum は NumberField・DateField など 8 件を修正（[[repos/adobe-react-spectrum/changes/2026-11-13|変更]]）
- whatwg/html：canvas にトーンマッピング（`toneMapping`）を追加、`selectedcontent` の更新タイミングを精密化（[[repos/whatwg-html/changes/2026-11-13|変更]]）。csswg-drafts は css-overflow-4 で `line-clamp` の構文を柔軟に（[[repos/w3c-csswg-drafts/changes/2026-11-13|変更]]）。ecma262 は Editorial のみ（[[repos/tc39-ecma262/changes/2026-11-13|変更]]）
