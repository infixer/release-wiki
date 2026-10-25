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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-26 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)（2026-10-24）→ [[repos/anthropics-claude-code/releases/v2.1.310\|まとめ]] | 2026-10-26 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-26 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.2](https://github.com/nuxt/nuxt/releases/tag/v4.6.2)（2026-10-16）→ [[repos/nuxt-nuxt/releases/v4.6.2\|まとめ]] | 2026-10-26 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)（2026-10-23）→ [[repos/openai-codex/releases/rust-v0.164.0\|まとめ]] | 2026-10-26 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-26 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.89.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.89.0)（2026-10-19）→ [[repos/oxc-project-oxc/releases/oxlint_v1.89.0\|まとめ]] | 2026-10-26 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.15.0](https://github.com/pnpm/pnpm/releases/tag/v12.15.0)（2026-10-21）→ [[repos/pnpm-pnpm/releases/v12.15.0\|まとめ]] | 2026-10-26 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-10-26 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-26 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3\|まとめ]] | 2026-10-26 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5\|まとめ]] | 2026-10-26 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-10-26 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-23 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-26 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-21 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-23 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-22-donating-agent-skills-to-the-agentic-ai-foundation\|Agent Skills を Agentic AI Foundation に寄贈]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-20-158.0.1\|Firefox 158.0.1]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- anthropics/claude-code 安定版 [[repos/anthropics-claude-code/releases/v2.1.310|v2.1.310]]：Monitor ツールが Bedrock・Vertex・Foundry やテレメトリ無効の環境でも使えるように、一部のゲートウェイでのリクエスト失敗、「Prompt is too long」の後の compaction、Windows のフックのすり抜けを修正
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.164.0|rust-v0.164.0]]（`/presets`、`/model`・`/permissions` の引数、エンタープライズ MCP の認証など）。PR では環境ごとの managed なフックの実行、`thread/fork` の `attachToSource`、独自の設定サーバー `config_server`、`auto_review.timeout_ms` など（[[repos/openai-codex/changes/2026-10-26|変更]]）
- vercel/next.js 安定版 [[repos/vercel-next.js/releases/v16.4.3|v16.4.3]]（16.4 系へのバックポート: Google Fonts の拡張子なし URL・`proxy.ts`・OpenTelemetry のトレース）。canary では `partialPrefetching` でレスポンスが終わらない問題と `global-not-found` からの遷移を修正（[[repos/vercel-next.js/changes/2026-10-26|変更]]）
- pnpm（PR 64 件）：v10 系の安定版 [[repos/pnpm-pnpm/releases/v10.34.8|v10.34.8]]・[[repos/pnpm-pnpm/releases/v10.34.9|v10.34.9]]（Node.js 24.22.1 を埋め込み）。未リリースでは pnpr がメトリクスを既定で配らなくなり（破壊的変更）、v12 が `requiredScripts`・`tag`・`runtime`・`strictSsl` を v11 と同じく読むように、`pnpm setup --no-modify-path` を追加（[[repos/pnpm-pnpm/changes/2026-10-26|変更]]）
- nuxt（未リリース、PR 25 件）：SSR の高速化（ESM の Vue をバンドル、ビルドの短縮）、`navigateTo` の修正、ルートルールの照合の改善、ビルドキャッシュの修正（[[repos/nuxt-nuxt/changes/2026-10-26|変更]]）
- oxc（未リリース）：型認識ルール `typescript/no-unsafe-enum-assignment` と `await-thenable` の `allowMixedPromiseArrays` を追加（`oxlint-tsgolint` は `>=7.0.2005` が必要に）、`Oxlintrc` 型のエクスポート（[[repos/oxc-project-oxc/changes/2026-10-26|変更]]）。vitest はブラウザモードで失敗時のスクリーンショット・トレースを試行ごとに保存し、`--bail` での HTML レポーターのクラッシュを修正（[[repos/vitest-dev-vitest/changes/2026-10-26|変更]]）
- TypeScript は mapped type のシグネチャの問い合わせでメンバーを解決しなくなり MUI の docs で 8% 高速化、クラス・インターフェースのメンバーを遅延解決（[[repos/microsoft-TypeScript/changes/2026-10-26|変更]]）。React Compiler は `ResizeObserver` / `MutationObserver` のコールバックでの ref の誤検知を修正（[[repos/react-react/changes/2026-10-26|変更]]）
- adobe/react-spectrum は macOS で Enter を押すと Select が開き直る問題と Chat のスクロールアンカーを修正（[[repos/adobe-react-spectrum/changes/2026-10-26|変更]]）。vuejs/core はプレリリース v3.6.0-rc.13 を公開（[[repos/vuejs-core/changes/2026-10-26|変更]]）
