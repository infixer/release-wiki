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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-12 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)（2026-10-09）→ [[repos/anthropics-claude-code/releases/v2.1.296\|まとめ]] | 2026-10-12 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-12 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.1](https://github.com/nuxt/nuxt/releases/tag/v4.6.1)（2026-10-09）→ [[repos/nuxt-nuxt/releases/v4.6.1\|まとめ]] | 2026-10-12 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)（2026-10-09）→ [[repos/openai-codex/releases/rust-v0.162.1\|まとめ]] | 2026-10-12 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-09 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.87.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.87.0)（2026-10-05）→ [[repos/oxc-project-oxc/releases/oxlint_v1.87.0\|まとめ]] | 2026-10-12 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.12.1](https://github.com/pnpm/pnpm/releases/tag/v12.12.1)（2026-10-11）→ [[repos/pnpm-pnpm/releases/v12.12.1\|まとめ]] | 2026-10-12 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09） | 2026-10-09 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-12 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-02 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.0](https://github.com/vercel/next.js/releases/tag/v16.4.0)（2026-10-07）→ [[repos/vercel-next.js/releases/v16.4.0\|まとめ]] | 2026-10-12 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.3](https://github.com/vitest-dev/vitest/releases/tag/v5.0.3)（2026-09-30）→ [[repos/vitest-dev-vitest/releases/v5.0.3\|まとめ]] | 2026-10-12 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.43](https://github.com/vuejs/core/releases/tag/v3.5.43)（2026-09-17）→ [[repos/vuejs-core/releases/v3.5.43\|まとめ]] | 2026-10-12 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-12 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-12 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-05 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-12 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-08-anthropic-cyber-mission\|Anthropic Cyber Mission を開始、重要インフラと OSS の防御を支援]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-06-157.0.1\|Firefox 157.0.1]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- pnpm/pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.11.0|v12.11.0]]〜[[repos/pnpm-pnpm/releases/v12.12.1|v12.12.1]] の 5 リリース：Rust ツールチェーンの管理とエージェントスキル、`remoteCache` によるビルド結果の共有と `addMissingPeerTypes`、`tool:` プロトコルと `pnpm dist-tag` の OIDC 認証（[[repos/pnpm-pnpm/changes/2026-10-12|変更]]、PR 58 件）
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.162.1|rust-v0.162.1]] で TUI のクラッシュと起動失敗を修正。main ではスレッドの既読状態 API（`thread/readState/update` など）、`thread/items/read`、フル fork の `preserve_fork_prefix` など（[[repos/openai-codex/changes/2026-10-12|変更]]、PR 66 件）
- vercel/next.js canary（v16.5.0-canary.8）：`--custom-webpack` の再投入、`next/image-optimizer-transform` の公開、Turbopack の GC を既定で有効に（[[repos/vercel-next.js/changes/2026-10-12|変更]]）
- adobe/react-spectrum [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]] でスワイプできる `Sheet` を追加、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]] で `SideNavPanel` と Menu の非同期読み込み・仮想化に対応
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.296|v2.1.296]]：gateway の `managed.policies[]` に `code` キー、サブエージェントの `autoCompactWindow`、Read ツールの `allow_large`（[[repos/anthropics-claude-code/changes/2026-10-12|変更]]）
- nuxt/nuxt [[repos/nuxt-nuxt/releases/v4.6.1|v4.6.1]] を公開。main に sourcemap の `'nosource'`、`<NuxtLoadingIndicator>` の `finishColor` など（[[repos/nuxt-nuxt/changes/2026-10-12|変更]]）
- oxc-project/oxc：Oxfmt に `associations` 設定、`--migrate prettier` の作り直し（破壊的変更）、パーサーが解析中にノード ID を割り当て（[[repos/oxc-project-oxc/changes/2026-10-12|変更]]）
- vitest：ブラウザモードで同時に開くインスタンスを `maxWorkers` までに抑制（ピークメモリ 17.4 GB → 5.6 GB）（[[repos/vitest-dev-vitest/changes/2026-10-12|変更]]）。TypeScript は `esnext` lib に iterator メソッドの型定義を追加（[[repos/microsoft-TypeScript/changes/2026-10-12|変更]]）。vuejs/core は v3.6.0-rc.11 を公開
- Web 標準：csswg-drafts に `timeline-trigger-range` と EdgeSeeker 色域マッピング（[[repos/w3c-csswg-drafts/changes/2026-10-12|変更]]）、whatwg/html で `@scope` だけの `style` 要素を `body` 内に置けるように（[[repos/whatwg-html/changes/2026-10-12|変更]]）、ecma262 で `Atomics` の再検証を修正（[[repos/tc39-ecma262/changes/2026-10-12|変更]]）
