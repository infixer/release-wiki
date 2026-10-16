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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-16 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)（2026-10-15）→ [[repos/anthropics-claude-code/releases/v2.1.301\|まとめ]] | 2026-10-16 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-16 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.1](https://github.com/nuxt/nuxt/releases/tag/v4.6.1)（2026-10-09）→ [[repos/nuxt-nuxt/releases/v4.6.1\|まとめ]] | 2026-10-16 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)（2026-10-15）→ [[repos/openai-codex/releases/rust-v0.163.0\|まとめ]] | 2026-10-16 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-16 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.88.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.88.0)（2026-10-13）→ [[repos/oxc-project-oxc/releases/oxlint_v1.88.0\|まとめ]] | 2026-10-16 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.14.0](https://github.com/pnpm/pnpm/releases/tag/v12.14.0)（2026-10-15）→ [[repos/pnpm-pnpm/releases/v12.14.0\|まとめ]] | 2026-10-16 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-10-16 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-16 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)（2026-10-15）→ [[repos/vercel-next.js/releases/v16.4.2\|まとめ]] | 2026-10-16 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5\|まとめ]] | 2026-10-16 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-10-14 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-16 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-16 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-05 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-16 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-15-an-update-on-independent-evaluators\|独立した評価者との取り組みの最新状況]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-13-158.0\|Firefox 158.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- vercel/next.js：[[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]・[[repos/vercel-next.js/releases/v15.5.28|v15.5.28]] でセキュリティ修正。画像最適化 API の SVG と `use cache` 関数が型付き配列を返す場合のリモートコード実行（Critical）、Server Actions の DoS（High）。[[repos/vercel-next.js/releases/v16.4.2|v16.4.2]] は Turbopack の修正のバックポート。canary では middleware を通るリクエストが 1 つの OpenTelemetry トレースにまとまる（[[repos/vercel-next.js/changes/2026-10-16|変更]]）
- react/react：19.0〜19.3 の各系列に RSC の転送プロトコルを改善するパッチ（[[repos/react-react/releases/v19.3.1|v19.3.1]] ほか）。main ではプリレンダー中断時の replay 復元が revert された（[[repos/react-react/changes/2026-10-16|変更]]）
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.163.0|rust-v0.163.0]]：`/config` での設定の検索、応答中のフォローアップ、`/keymap` のリーダーキー、Daybreak を既定で有効に。未リリースでは `features.worktrees`・`features.realtime_conversation` の廃止など（[[repos/openai-codex/changes/2026-10-16|変更]]、PR 100 件）
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.299|v2.1.299]]〜[[repos/anthropics-claude-code/releases/v2.1.301|v2.1.301]]：アイドル中の会話をプロンプトキャッシュが切れる前にコンパクションする機能、mod 向けの `virtualText`・`$.ui.view`、OpenTelemetry に分類器の判定を追加
- pnpm/pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.14.0|v12.14.0]]：`sideEffectsCache.exclude` 設定など。[[repos/pnpm-pnpm/releases/v11.28.6|v11.28.6]] は `pnpm publish` の `NPM_ID_TOKEN` の扱いを修正。未リリースで pnpr に運用向けの機能（レート制限・Prometheus のメトリクス・`pnpr cache-gc`・監査ログなど）（[[repos/pnpm-pnpm/changes/2026-10-16|変更]]）
- vitest 安定版 [[repos/vitest-dev-vitest/releases/v5.0.5|v5.0.5]]・[[repos/vitest-dev-vitest/releases/v4.1.12|v4.1.12]]：サーバーで Vite の既定の `fs.deny` と API トークンのファイルを拒否する修正、`--bail` での並行テストの中断など（[[repos/vitest-dev-vitest/changes/2026-10-16|変更]]）
- oxc：oxlint の各ルールに上流プラグインの recommended を反映する印（[[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]]）、Minifier の誤った畳み込みの修正（[[repos/oxc-project-oxc/changes/2026-10-16|変更]]）。TypeScript はネットワークパスからのファイル読み込みを禁止し、ユーザーキャッシュが無いときは ATA を無効に（[[repos/microsoft-TypeScript/changes/2026-10-16|変更]]）。nuxt は複数アプリを 1 プロセスで読み込んだときの asset URL の混同を修正（[[repos/nuxt-nuxt/changes/2026-10-16|変更]]）
- Web 標準：whatwg/html にシリアライズと転送を同じ agent cluster に制限する `[SameAgentCluster]`（[[repos/whatwg-html/changes/2026-10-16|変更]]）、csswg-drafts で mixin の本体の中の `@layer` を無効に（[[repos/w3c-csswg-drafts/changes/2026-10-16|変更]]）
- Anthropic：[[blogs/anthropic/posts/2026-10-15-an-update-on-independent-evaluators|独立した評価者との取り組みの最新状況]]、[[blogs/anthropic/posts/2026-10-14-2026-us-midterms|2026 年米国中間選挙への備え]]、[[blogs/anthropic/posts/2026-10-14-singapore-office-opening|シンガポールにオフィスを開設]]
