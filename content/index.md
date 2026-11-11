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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-11-11 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.322](https://github.com/anthropics/claude-code/releases/tag/v2.1.322)（2026-11-10）→ [[repos/anthropics-claude-code/releases/v2.1.322\|まとめ]] | 2026-11-11 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-11-11 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4\|まとめ]] | 2026-11-11 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1)（2026-11-10）→ [[repos/openai-codex/releases/rust-v0.167.1\|まとめ]] | 2026-11-11 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-11-04 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.93.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.93.0)（2026-11-09）→ [[repos/oxc-project-oxc/releases/oxlint_v1.93.0\|まとめ]] | 2026-11-11 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.19.0](https://github.com/pnpm/pnpm/releases/tag/v12.19.0)（2026-11-10）→ [[repos/pnpm-pnpm/releases/v12.19.0\|まとめ]] | 2026-11-11 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-11-11 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-11-09 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.6](https://github.com/vercel/next.js/releases/tag/v16.4.6)（2026-11-10）→ [[repos/vercel-next.js/releases/v16.4.6\|まとめ]] | 2026-11-11 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.1.0](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0)（2026-11-02）→ [[repos/vitest-dev-vitest/releases/v5.1.0\|まとめ]] | 2026-11-11 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.45](https://github.com/vuejs/core/releases/tag/v3.5.45)（2026-11-05）→ [[repos/vuejs-core/releases/v3.5.45\|まとめ]] | 2026-11-06 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-11-09 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-11-11 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-11-11 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-11-11 |

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

- claude-code 安定版 [[repos/anthropics-claude-code/releases/v2.1.321|v2.1.321]]・[[repos/anthropics-claude-code/releases/v2.1.322|v2.1.322]]：Claude Fable 5.2 を Fable の既定モデルに、`claude remote-control --settings`、MCP の OAuth・Bash の権限チェックのセキュリティ修正、Vertex の fast mode（[[repos/anthropics-claude-code/changes/2026-11-11|変更]]）
- pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.19.0|v12.19.0]]：`pnpm fund`、ビルドが必要なパッケージに対応した loaded リンカー、`projectScopedOptionalPeers`、実験的な `lockfile.format: v13`（[[repos/pnpm-pnpm/changes/2026-11-11|変更]]）
- next.js 安定版 [[repos/vercel-next.js/releases/v16.4.6|v16.4.6]]（バックポート）。canary では partial に再生成されたルートの RSC 応答が空になる問題を修正、`next build --experimental-cpu-prof` が静的ワーカーも対象に（[[repos/vercel-next.js/changes/2026-11-11|変更]]）
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.167.0|rust-v0.167.0]]・[[repos/openai-codex/releases/rust-v0.167.1|rust-v0.167.1]]：`codex agents --no-daemon`、バックエンドの切り替え、画像添付のプレビュー。main では TUI のサイドチャットの改善、ゲートウェイの OAuth でのモデルカタログ発見（[[repos/openai-codex/changes/2026-11-11|変更]]）
- oxc：安定版 [[repos/oxc-project-oxc/releases/oxlint_v1.93.0|oxlint_v1.93.0]]・[[repos/oxc-project-oxc/releases/oxfmt_v0.78.0|oxfmt_v0.78.0]]・[[repos/oxc-project-oxc/releases/crates_v0.158.0|crates_v0.158.0]]。`promise/prefer-catch` のサジェスチョン、CFG のラベル付きジャンプの修正、Oxfmt の Less・Astro・JSDoc の整形修正（[[repos/oxc-project-oxc/changes/2026-11-11|変更]]）
- nuxt：サーバーに依存しないレンダラープラグイン `addRendererPlugin` と `nuxt/server` の `defineHandler` を追加、island の head の共有配列が別の描画に漏れる問題を修正（[[repos/nuxt-nuxt/changes/2026-11-11|変更]]）
- TypeScript：PR のビルドを npm に公開して試せるように、LSP のメッセージを直接エンコード（補完の応答が 34.2% 高速化）（[[repos/microsoft-TypeScript/changes/2026-11-11|変更]]）。Vitest はシード付きシャッフルの順序を再現可能に、ソースマップを文字列で送る（[[repos/vitest-dev-vitest/changes/2026-11-11|変更]]）
- react：React Native DevTools 向けに Suspense タブの入口、Hermes のスタックフレームの修正（[[repos/react-react/changes/2026-11-11|変更]]）。react-spectrum は Separator の冗長な `role` を削除（[[repos/adobe-react-spectrum/changes/2026-11-11|変更]]）
- whatwg/html：`selectedcontent` への複製から `script`・`iframe` などを除去、カスタム要素のアップグレードでレジストリが null の場合を扱う（[[repos/whatwg-html/changes/2026-11-11|変更]]）。csswg-drafts は css-gaps-1 で grid lanes の segment endpoint（[[repos/w3c-csswg-drafts/changes/2026-11-11|変更]]）
- ブログ：[[blogs/firefox/posts/2026-11-10-160.0|Firefox 160.0]]（PiP の再生速度、Mini Window、`SpeechRecognition`）、Anthropic が [[blogs/anthropic/posts/2026-11-10-roadshow-launch|IPO のロードショーを開始]]（想定価格 1 株 70〜78 ドル）
