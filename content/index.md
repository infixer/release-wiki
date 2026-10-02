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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.21.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.21.0)（2026-09-04） | 2026-10-02 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)（2026-10-01）→ [[repos/anthropics-claude-code/releases/v2.1.287\|まとめ]] | 2026-10-02 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-02 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.5.2](https://github.com/nuxt/nuxt/releases/tag/v4.5.2)（2026-08-05） | 2026-10-02 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.160.0](https://github.com/openai/codex/releases/tag/rust-v0.160.0)（2026-10-01）→ [[repos/openai-codex/releases/rust-v0.160.0\|まとめ]] | 2026-10-02 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-02 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.86.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.86.0)（2026-09-28）→ [[repos/oxc-project-oxc/releases/oxlint_v1.86.0\|まとめ]] | 2026-10-02 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.8.2](https://github.com/pnpm/pnpm/releases/tag/v12.8.2)（2026-09-30）→ [[repos/pnpm-pnpm/releases/v12.8.2\|まとめ]] | 2026-10-02 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09） | 2026-09-30 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-02 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-02 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.3.8](https://github.com/vercel/next.js/releases/tag/v16.3.8)（2026-10-01）→ [[repos/vercel-next.js/releases/v16.3.8\|まとめ]] | 2026-10-02 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.3](https://github.com/vitest-dev/vitest/releases/tag/v5.0.3)（2026-09-30）→ [[repos/vitest-dev-vitest/releases/v5.0.3\|まとめ]] | 2026-10-02 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.43](https://github.com/vuejs/core/releases/tag/v3.5.43)（2026-09-17）→ [[repos/vuejs-core/releases/v3.5.43\|まとめ]] | 2026-10-02 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-09-30 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-02 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-09-24 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-02 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-01-barclays-scales-claude\|Barclays が Claude の活用を全社に拡大]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-09-24-troubleshooting\|Chrome ウェブストアの違反に関するトラブルシューティング]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-09-29-157.0\|Firefox 157.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- vercel/next.js セキュリティ修正の安定版 [[repos/vercel-next.js/releases/v16.3.8|v16.3.8]]（画像最適化の SSRF〈High〉、SSG/ISR のキャッシュポイズニングなど）と [[repos/vercel-next.js/releases/v15.5.27|v15.5.27]]。canary では `ensureStatic` が安定 API に、`unstable_paramMatching` を追加、Turbopack の共有ランタイムとエクスポート名マングリングが既定で有効に（[[repos/vercel-next.js/changes/2026-10-02|2026-10-02 の変更]]）
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.286|v2.1.286]]・[[repos/anthropics-claude-code/releases/v2.1.287|v2.1.287]]：Claude Mods とビルトイン mod「You should know」を追加。Diff パネルのリベース・マージ後の「Diff unavailable」を修正（[[repos/anthropics-claude-code/changes/2026-10-02|2026-10-02 の変更]]）
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.159.3|rust-v0.159.3]]・[[repos/openai-codex/releases/rust-v0.160.0|rust-v0.160.0]]。main には TUI の会話フォーク、マイク・スピーカーの選択、[[repos/openai-codex/topics/管理要件|管理要件]]による機能ゲート、[[repos/openai-codex/topics/MCP|MCP]] の認可サーバー検証など（[[repos/openai-codex/changes/2026-10-02|2026-10-02 の変更]]、PR 136 件）
- pnpm/pnpm [[repos/pnpm-pnpm/releases/v12.8.2|v12.8.2]]・[[repos/pnpm-pnpm/releases/v11.28.3|v11.28.3]]：ppc64le の起動クラッシュ、`UnknownIssuer`、ストア共有時の「database disk image is malformed」などを修正。未リリースでは `registries` ごとの `networkConcurrency` など（[[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02 の変更]]）
- vitest-dev/vitest [[repos/vitest-dev-vitest/releases/v5.0.3|v5.0.3]]（バグ修正）。未リリースでは `fsModuleCache` が既定で有効に、ブラウザモードでモックが効かない競合を修正（[[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02 の変更]]）
- microsoft/TypeScript：`esnext` に `Promise.allKeyed` / `Promise.allSettledKeyed`、API に `getSymbol(decl)`。宣言出力の型の循環・切り詰めをエラーとして報告。VS Code 拡張 [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|vscode-typescript/v1.0.1]] を公開（[[repos/microsoft-TypeScript/changes/2026-10-02|2026-10-02 の変更]]）
- oxc-project/oxc：Minifier が同じモジュールからの import 文をまとめるように。Oxfmt の埋め込みテンプレートの改善、パーサーで型メンバーの区切りを検証（[[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]）
- Web 標準：whatwg/html で `sizes="auto"` の画像が最後の描画幅を保持、文字列タイマーの Trusted Types チェックが同期的に（[[repos/whatwg-html/changes/2026-10-02|変更]]）。csswg-drafts の css-color-4 で LCH・Oklch 変換コードを修正（[[repos/w3c-csswg-drafts/changes/2026-10-02|変更]]）。tc39 は Stage の移動なし
- その他：react-spectrum の `@react-aria/optimize-locales-plugin` が Turbopack に対応（[[repos/adobe-react-spectrum/changes/2026-10-02|変更]]）、nuxt の `@nuxt/kit` に `resolveServerVariant` を追加（[[repos/nuxt-nuxt/changes/2026-10-02|変更]]）、vuejs/core は v3.6.0-rc.10 を公開
- Anthropic News：[[blogs/anthropic/posts/2026-10-01-barclays-scales-claude|Barclays が Claude の活用を全社に拡大]]
