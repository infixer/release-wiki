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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-11-06 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)（2026-11-04）→ [[repos/anthropics-claude-code/releases/v2.1.318\|まとめ]] | 2026-11-06 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-11-06 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4\|まとめ]] | 2026-11-06 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0\|まとめ]] | 2026-11-06 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-11-04 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.91.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.91.0)（2026-11-03）→ [[repos/oxc-project-oxc/releases/oxlint_v1.91.0\|まとめ]] | 2026-11-06 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.18.0](https://github.com/pnpm/pnpm/releases/tag/v12.18.0)（2026-11-05）→ [[repos/pnpm-pnpm/releases/v12.18.0\|まとめ]] | 2026-11-06 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-11-06 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-11-06 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.5](https://github.com/vercel/next.js/releases/tag/v16.4.5)（2026-11-03）→ [[repos/vercel-next.js/releases/v16.4.5\|まとめ]] | 2026-11-06 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.1.0](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0)（2026-11-02）→ [[repos/vitest-dev-vitest/releases/v5.1.0\|まとめ]] | 2026-11-06 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.45](https://github.com/vuejs/core/releases/tag/v3.5.45)（2026-11-05）→ [[repos/vuejs-core/releases/v3.5.45\|まとめ]] | 2026-11-06 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-11-06 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-11-06 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-11-04 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-11-06 |

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

- pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.18.0|v12.18.0]]・[[repos/pnpm-pnpm/releases/v11.28.11|v11.28.11]] を公開。v12.18.0 は platform variants の公開（`publishConfig.variants` を `pnpm pack`/`pnpm publish` で pnpr へ、`--upload-variant`）とエージェントスキルのスキル単位の承認を収録（[[repos/pnpm-pnpm/changes/2026-11-06|変更]]）
- vuejs/core 安定版 [[repos/vuejs-core/releases/v3.5.45|v3.5.45]]：`<Suspense>` とトランジションの修正、setup の `attrs` のコピーと SFC の型解決の高速化（[[repos/vuejs-core/changes/2026-11-06|変更]]）
- nuxt/nuxt：サーバーでルーターのマッチャーを使い回す `experimental.staticRoutes`、Rsbuild ビルダー `builder: 'rsbuild'`、Nuxt v5 への移行向けの診断を追加（[[repos/nuxt-nuxt/changes/2026-11-06|変更]]）
- vercel/next.js canary は v16.5.0-canary.42 まで：`experimental.lockDistDir` の削除（移行が必要）、Turbopack の `require.context()` の作り直し、Route Handler のレスポンスが圧縮されない問題の修正（[[repos/vercel-next.js/changes/2026-11-06|変更]]）
- openai/codex（PR 109 件、未リリース）：`features.daemon_auto_start` が既定で有効の設定として復活、`[features].multi_agent` は非推奨に。Release は今回も取得できず（HTTP 504）（[[repos/openai-codex/changes/2026-11-06|変更]]）
- oxc：型認識 lint が `tsrs-lint` を優先して使うように、`eslint/no-redeclare` に `ignoreDeclarationMerge`（[[repos/oxc-project-oxc/changes/2026-11-06|変更]]）。Vitest は `--shard` を実行開始前に適用、fs モジュールキャッシュにマニフェスト（[[repos/vitest-dev-vitest/changes/2026-11-06|変更]]）
- TypeScript の Checker API に `getAmbientModules()` などを追加、LSP のファイル変更後の処理が約 4 割高速化（[[repos/microsoft-TypeScript/changes/2026-11-06|変更]]）。react-spectrum は ComboBox・Breadcrumbs・DatePicker などの修正（[[repos/adobe-react-spectrum/changes/2026-11-06|変更]]）
- whatwg/html に `WritableStream` を返すストリーミング挿入メソッド（`streamHTML()` など）と `srcset` の候補選択の規範的な定義（[[repos/whatwg-html/changes/2026-11-06|変更]]）、csswg-drafts にメディア特性 `prefers-bold-text`（[[repos/w3c-csswg-drafts/changes/2026-11-06|変更]]）
- claude-code は `privacy` mod のソースを公開（[[repos/anthropics-claude-code/changes/2026-11-06|変更]]）。react・ecma262・aria は CI・Editorial などの軽微な変更のみ
