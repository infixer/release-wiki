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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-11-04 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)（2026-11-04）→ [[repos/anthropics-claude-code/releases/v2.1.318\|まとめ]] | 2026-11-04 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-11-04 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4\|まとめ]] | 2026-11-04 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0\|まとめ]] | 2026-11-04 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-11-04 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.91.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.91.0)（2026-11-03）→ [[repos/oxc-project-oxc/releases/oxlint_v1.91.0\|まとめ]] | 2026-11-04 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.17.0](https://github.com/pnpm/pnpm/releases/tag/v12.17.0)（2026-10-30）→ [[repos/pnpm-pnpm/releases/v12.17.0\|まとめ]] | 2026-11-04 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-11-02 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-11-04 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.5](https://github.com/vercel/next.js/releases/tag/v16.4.5)（2026-11-03）→ [[repos/vercel-next.js/releases/v16.4.5\|まとめ]] | 2026-11-04 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.1.0](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0)（2026-11-02）→ [[repos/vitest-dev-vitest/releases/v5.1.0\|まとめ]] | 2026-11-04 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-11-04 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-11-02 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-11-04 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-11-04 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-11-04 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-28-ai-for-science-expands-foundations-research-institutions\|AI for Science を科学財団・研究機関に拡大]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-11-03-159.0.1\|Firefox 159.0.1]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-11-03-safari-27_3-release-notes\|Safari 27.3 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- vercel/next.js でセキュリティ修正の安定版 [[repos/vercel-next.js/releases/v16.4.5|v16.4.5]] / [[repos/vercel-next.js/releases/v15.5.29|v15.5.29]] と [[repos/vercel-next.js/releases/v16.4.4|v16.4.4]] が公開。canary には `instrumentationInject`、`router.experimental_prepare()`、実験的な `route.go` ハンドラー（[[repos/vercel-next.js/changes/2026-11-04|変更]]）
- Nuxt [[repos/nuxt-nuxt/releases/v4.6.4|v4.6.4]] はセキュリティリリース（Nuxt 8 件・Nitro 3 件のアドバイザリを修正）。Vitest [[repos/vitest-dev-vitest/releases/v5.1.0|v5.1.0]] で失敗したスナップショットの対話的なレビューと `experimental.traceTimeline`（[[repos/vitest-dev-vitest/changes/2026-11-04|変更]]）
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.317|v2.1.317]]・[[repos/anthropics-claude-code/releases/v2.1.318|v2.1.318]]：gateway のコストレポート、`$.model.fork` の `effort`（[[repos/anthropics-claude-code/changes/2026-11-04|変更]]）
- oxc：[[repos/oxc-project-oxc/releases/oxfmt_v0.76.0|oxfmt_v0.76.0]] で HTML 整形がネイティブの `oxc_formatter_htmlish` に（破壊的変更）。[[repos/oxc-project-oxc/releases/oxlint_v1.91.0|oxlint_v1.91.0]]・[[repos/oxc-project-oxc/releases/crates_v0.157.0|crates_v0.157.0]] も公開（[[repos/oxc-project-oxc/changes/2026-11-04|変更]]）
- pnpm（PR 87 件、未リリース）：pnpr がメタデータを SQLite・libSQL に保存し公開を原子的にコミット、`pnpm store add` で tarball からストアを準備、繰り返しの `pnpm install` が変わっていない `package.json` を読まなくなった（[[repos/pnpm-pnpm/changes/2026-11-04|変更]]）
- openai/codex：app-server に `modelProvider/list`・`modelProvider/config/write`、`daemon_auto_start` を廃止して共有デーモンを常用（`--no-daemon` で無効）（[[repos/openai-codex/changes/2026-11-04|変更]]。Release は取得できず）
- TypeScript に `--disableDynamicImportExtensionRewriting`、インクリメンタルビルドのシグネチャ計算を並列化（[[repos/microsoft-TypeScript/changes/2026-11-04|変更]]）。Vue は `<Suspense>`・`<KeepAlive>`・非同期コンポーネントの修正 14 件（[[repos/vuejs-core/changes/2026-11-04|変更]]）。ecma262 に dynamic code brand checks（`HostGetCodeForEval`）（[[repos/tc39-ecma262/changes/2026-11-04|変更]]）
- [[blogs/safari/posts/2026-11-03-safari-27_3-release-notes|Safari 27.3 Beta]]：CSS `if()`・`@function`・`attr()`・`corner-shape`、JavaScript の `Temporal`・`import defer` など。[[blogs/firefox/posts/2026-11-03-159.0.1|Firefox 159.0.1]] も公開
- csswg-drafts でグラデーションの色域外の色に色域マッピングが必須に（[[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]）、WCAG に 1.4.13 の失敗例 F114（[[repos/w3c-wcag/changes/2026-11-04|変更]]）、HTML のフォーカスとフォームの手順を修正（[[repos/whatwg-html/changes/2026-11-04|変更]]）。react-spectrum は Tabs・ComboBox などの修正（[[repos/adobe-react-spectrum/changes/2026-11-04|変更]]）
