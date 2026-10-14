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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-14 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)（2026-10-09）→ [[repos/anthropics-claude-code/releases/v2.1.296\|まとめ]] | 2026-10-12 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-14 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.1](https://github.com/nuxt/nuxt/releases/tag/v4.6.1)（2026-10-09）→ [[repos/nuxt-nuxt/releases/v4.6.1\|まとめ]] | 2026-10-14 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)（2026-10-09）→ [[repos/openai-codex/releases/rust-v0.162.1\|まとめ]] | 2026-10-14 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-09 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.88.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.88.0)（2026-10-13）→ [[repos/oxc-project-oxc/releases/oxlint_v1.88.0\|まとめ]] | 2026-10-14 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.13.0](https://github.com/pnpm/pnpm/releases/tag/v12.13.0)（2026-10-13）→ [[repos/pnpm-pnpm/releases/v12.13.0\|まとめ]] | 2026-10-14 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09） | 2026-10-14 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-12 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-02 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.0](https://github.com/vercel/next.js/releases/tag/v16.4.0)（2026-10-07）→ [[repos/vercel-next.js/releases/v16.4.0\|まとめ]] | 2026-10-14 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.4](https://github.com/vitest-dev/vitest/releases/tag/v5.0.4)（2026-10-12）→ [[repos/vitest-dev-vitest/releases/v5.0.4\|まとめ]] | 2026-10-14 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-10-14 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-14 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-14 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-05 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-14 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-08-anthropic-cyber-mission\|Anthropic Cyber Mission を開始、重要インフラと OSS の防御を支援]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-13-158.0\|Firefox 158.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- pnpm/pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.13.0|v12.13.0]]：`pnpm token`・`pnpm profile` コマンド、共有ストア向けの `storeIndexFormat: files`、package map の設定をまとめた `nodePackageMap`。Python の依存解決は PEP 658 のメタデータで高速化。v10 系は [[repos/pnpm-pnpm/releases/v10.34.7|v10.34.7]]（[[repos/pnpm-pnpm/changes/2026-10-14|変更]]、PR 31 件）
- vuejs/core 安定版 [[repos/vuejs-core/releases/v3.5.44|v3.5.44]] で 25 件の修正：sync / immediate の `watch` が外側の effect に依存を追跡させない、`Map` / `Set` の `shallowReactive()` で `isShallow()` が正しく動く、`<Suspense>`・`KeepAlive`・`Teleport` や SSR の不具合など（[[repos/vuejs-core/changes/2026-10-14|変更]]）
- oxc-project/oxc 安定版 [[repos/oxc-project-oxc/releases/oxlint_v1.88.0|oxlint_v1.88.0]]・[[repos/oxc-project-oxc/releases/oxfmt_v0.73.0|oxfmt_v0.73.0]]・[[repos/oxc-project-oxc/releases/crates_v0.154.0|crates_v0.154.0]]：AST のコメントの付属先とノード ID の追加（破壊的変更）、Oxfmt の `associations` 設定と Astro 対応（[[repos/oxc-project-oxc/changes/2026-10-14|変更]]）
- vitest 安定版 [[repos/vitest-dev-vitest/releases/v5.0.4|v5.0.4]]：experimental の `test.ui.theme`・`experimental.recordDependencies` など、`fsModuleCache` を既定で有効に
- openai/codex（rust-v0.163.0-alpha.10）：非同期コンパクション（`async_compaction`）の土台、ランタイム間でメッセージボードを共有する `LocalBoard`、`features.multi_agent_v2.disable_native_tools`、不完全な応答を `ResponseIncomplete` エラーに（[[repos/openai-codex/changes/2026-10-14|変更]]、PR 74 件）
- vercel/next.js canary（v16.5.0-canary.10）：アップグレードのリマインダーを `AGENTS.md` の `nextjs-agent-upgrade` ブロックに分離、`generateStaticParams` から呼ぶ `"use cache"` 関数を `durableUseCacheEntries` で再利用（[[repos/vercel-next.js/changes/2026-10-14|変更]]）
- TypeScript：コンテンツマッパーに `outputExtensions`、`es2023.intl` に `Intl.PluralRules.prototype.selectRange` の型（[[repos/microsoft-TypeScript/changes/2026-10-14|変更]]）。nuxt はエラー時のレスポンスヘッダーが別ユーザーに漏れる問題を修正（[[repos/nuxt-nuxt/changes/2026-10-14|変更]]）。react-spectrum はキーボード操作まわりの修正が中心（[[repos/adobe-react-spectrum/changes/2026-10-14|変更]]）
- Web 標準：whatwg/html に `appendHTML()`・`prependHTML()` など位置指定の HTML 挿入 API（[[repos/whatwg-html/changes/2026-10-14|変更]]）、csswg-drafts に `css-overscroll-2` の最初の草案と `::interest-invoker`（[[repos/w3c-csswg-drafts/changes/2026-10-14|変更]]）。React は `use()` や React Compiler の `react-hooks/refs` の誤検知を修正（[[repos/react-react/changes/2026-10-14|変更]]）
- ブラウザ：[[blogs/firefox/posts/2026-10-13-158.0|Firefox 158.0]] で JPEG XL 対応、Smart Window のフォーム入力提案、CSS `calc()` の型付き演算。[[blogs/safari/posts/2026-09-16-safari-27_2-release-notes|Safari 27.2 Beta]] のリリースノートが更新され、`<select>` の `::field-content` などが追加
