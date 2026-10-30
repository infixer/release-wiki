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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-30 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)（2026-10-30）→ [[repos/anthropics-claude-code/releases/v2.1.314\|まとめ]] | 2026-10-30 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-30 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.3](https://github.com/nuxt/nuxt/releases/tag/v4.6.3)（2026-10-27）→ [[repos/nuxt-nuxt/releases/v4.6.3\|まとめ]] | 2026-10-30 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0\|まとめ]] | 2026-10-30 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-30 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.90.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.90.0)（2026-10-27）→ [[repos/oxc-project-oxc/releases/oxlint_v1.90.0\|まとめ]] | 2026-10-30 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.16.1](https://github.com/pnpm/pnpm/releases/tag/v12.16.1)（2026-10-28）→ [[repos/pnpm-pnpm/releases/v12.16.1\|まとめ]] | 2026-10-30 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-10-30 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-26 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3\|まとめ]] | 2026-10-30 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5\|まとめ]] | 2026-10-30 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-10-30 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-28 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-30 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-21 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-28 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-28-ai-for-science-expands-foundations-research-institutions\|AI for Science を科学財団・研究機関に拡大]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-27-159.0\|Firefox 159.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-10-23-safari-27_1-release-notes\|Safari 27.1 リリースノート]]（[[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2]] は正式版に） |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- anthropics/claude-code 安定版 [[repos/anthropics-claude-code/releases/v2.1.314|v2.1.314]]：`permissions.blockWritesOutsideWorkingDirectories`（どの権限モードでも作業ディレクトリの外への書き込みを拒否）、gateway の upstream に `groups`・Bedrock の `guardrail_trace`、VS Code・Claude Desktop にアイドル時の compaction。effort の上限で「Invalid effort level」が続く問題などを修正（[[repos/anthropics-claude-code/changes/2026-10-30|変更]]）
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.166.0|rust-v0.166.0]]（キーボードによるトランスクリプトの選択・検索、`codex queue --resume`、`codex doctor --network-only`）。PR 107 件では `requirements.toml` による OpenTelemetry の設定の管理、`review/start` の detached の配信の削除（移行が必要）など（[[repos/openai-codex/changes/2026-10-30|変更]]）
- vercel/next.js canary.30〜.32：create-next-app が常に App Router を使うように（Pages Router は `--no-app`）、`experimental.hydrationChangeEvent` を追加。204 レスポンスでルートハンドラーや fetch が固まる問題、Turbopack のファイルトレースなどを修正（[[repos/vercel-next.js/changes/2026-10-30|変更]]）
- pnpm：`overrides` に `:prod`・`:optional`・`:peer` と `*` のワイルドカード、`pnpm outdated`/`update` がランタイム・Cargo・Python の依存も扱うように。「Already up to date」の誤判定、新しいファイルが `0600` で作られる問題などを修正（[[repos/pnpm-pnpm/changes/2026-10-30|変更]]）
- nuxt/nuxt は Nitro 3 RC へ移行（破壊的変更）、`nuxt dev` で WebSocket のアップグレードが動くように（[[repos/nuxt-nuxt/changes/2026-10-30|変更]]）。oxc は React Compiler の修正 11 件をまとめて取り込み、パーサーの改善と高速化（[[repos/oxc-project-oxc/changes/2026-10-30|変更]]）
- vitest は browser の `traceView` の既定を `'failure-only'` に、`vi.mock` が効かないキャッシュの問題を修正（[[repos/vitest-dev-vitest/changes/2026-10-30|変更]]）。TypeScript は `tsc` の wasip1（Wasm）ビルドを実験的に追加（[[repos/microsoft-TypeScript/changes/2026-10-30|変更]]）
- React は View Transitions のエラー分類を Chrome 153 に合わせて更新（[[repos/react-react/changes/2026-10-30|変更]]）、Vue は `<dialog>` の `closedby` の型と静的な真偽値のバインディングの修正（[[repos/vuejs-core/changes/2026-10-30|変更]]）、react-spectrum は S2 の `page.css` の型宣言を復元（[[repos/adobe-react-spectrum/changes/2026-10-30|変更]]）、csswg-drafts は css-color-4 のサンプルコードの修正（[[repos/w3c-csswg-drafts/changes/2026-10-30|変更]]）
- ブログ：[[blogs/safari/posts/2026-10-23-safari-27_1-release-notes|Safari 27.1]]（折りたたみ端末向けの Device Posture API・Viewport Segments API）、[[blogs/safari/posts/2026-09-16-safari-27_2-release-notes|Safari 27.2]] が Beta から正式版に。Anthropic が [[blogs/anthropic/posts/2026-10-28-ai-for-science-expands-foundations-research-institutions|AI for Science を科学財団・研究機関に拡大]]
