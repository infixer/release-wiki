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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.21.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.21.0)（2026-09-04） | 2026-09-28 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.283](https://github.com/anthropics/claude-code/releases/tag/v2.1.283)（2026-09-26）→ [[repos/anthropics-claude-code/releases/v2.1.283\|まとめ]] | 2026-09-28 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-09-28 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.5.2](https://github.com/nuxt/nuxt/releases/tag/v4.5.2)（2026-08-05） | 2026-09-28 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.158.0](https://github.com/openai/codex/releases/tag/rust-v0.158.0)（2026-09-28）→ [[repos/openai-codex/releases/rust-v0.158.0\|まとめ]] | 2026-09-28 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.85.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.85.0)（2026-09-21）→ [[repos/oxc-project-oxc/releases/oxlint_v1.85.0\|まとめ]] | 2026-09-28 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.7.0](https://github.com/pnpm/pnpm/releases/tag/v12.7.0)（2026-09-25）→ [[repos/pnpm-pnpm/releases/v12.7.0\|まとめ]] | 2026-09-28 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09） | 2026-09-24 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-09-24 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-09-24 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.3.6](https://github.com/vercel/next.js/releases/tag/v16.3.6)（2026-09-22）→ [[repos/vercel-next.js/releases/v16.3.6\|まとめ]] | 2026-09-28 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.2](https://github.com/vitest-dev/vitest/releases/tag/v5.0.2)（2026-09-25）→ [[repos/vitest-dev-vitest/releases/v5.0.2\|まとめ]] | 2026-09-28 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.43](https://github.com/vuejs/core/releases/tag/v3.5.43)（2026-09-17）→ [[repos/vuejs-core/releases/v3.5.43\|まとめ]] | 2026-09-24 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-09-28 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-09-28 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-09-24 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-09-28 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-09-23-claude-discovers-novel-enzyme-system\|Claude が CRISPR 様の新規酵素システムを発見]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-09-24-troubleshooting\|Chrome ウェブストアの違反に関するトラブルシューティング]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-09-22-156.0.1\|Firefox 156.0.1]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.158.0|rust-v0.158.0]]：TUI の copy-on-select と右クリック貼り付け、MCP の OAuth クライアントシークレット対応など。PR 188 件（[[repos/openai-codex/changes/2026-09-28|2026-09-28 の変更]]）
- pnpm/pnpm [[repos/pnpm-pnpm/releases/v12.7.0|v12.7.0]]：グローバル `node` シムの `.nvmrc`/`.node-version` 対応、`install --allow-build` など。[[repos/pnpm-pnpm/releases/v11.28.0|v11.28.0]] も公開（[[repos/pnpm-pnpm/changes/2026-09-28|2026-09-28 の変更]]、PR 344 件）
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.282|v2.1.282]] / [[repos/anthropics-claude-code/releases/v2.1.283|v2.1.283]]：管理設定 `availableModelsMatch`・`deniedModels`、`/doctor prompt-audit` を追加（[[repos/anthropics-claude-code/changes/2026-09-28|2026-09-28 の変更]]）
- vitest-dev/vitest [[repos/vitest-dev-vitest/releases/v5.0.2|v5.0.2]]：`toMatchObject`・`agent` レポーター・スパイなどのバグ修正リリース（[[repos/vitest-dev-vitest/changes/2026-09-28|2026-09-28 の変更]]）
- microsoft/TypeScript：tsgo の API に `createBuildOrchestrator` を追加、`createSourceFile` はパースキャッシュを使いリースを返すように（破壊的変更）（[[repos/microsoft-TypeScript/changes/2026-09-28|2026-09-28 の変更]]）
- vercel/next.js：canary.43〜.51 で PR 48 件。PPR ページへの遷移後に [[repos/vercel-next.js/topics/Server-Actions|Server Action]] がハングする不具合を修正、実験的な `customWebpack` は revert（[[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]）
- nuxt/nuxt：`createUseFetch`・`createUseAsyncData` にアドオン機能、`experimental.inlineErrorRendering`、トップレベルの `prerender` オプションを追加（[[repos/nuxt-nuxt/changes/2026-09-28|2026-09-28 の変更]]）
- oxc-project/oxc：フォーマッタのコメント処理を Prettier に合わせる修正が続き、[[repos/oxc-project-oxc/topics/React-Compiler|React Compiler]] に `reportDiagnostics` オプションを追加（[[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]）
- adobe/react-spectrum：S2 の AI コンポーネントに `AttachmentGrid` を追加（[[repos/adobe-react-spectrum/changes/2026-09-28|2026-09-28 の変更]]）
- Web 標準：whatwg/html でメディア要素の `loading` 属性の読み取りタイミングなどを修正（[[repos/whatwg-html/changes/2026-09-28|変更]]）、csswg-drafts の scroll-animations-1 で `ViewTimelineOptions.subject` が必須に（[[repos/w3c-csswg-drafts/changes/2026-09-28|変更]]）
