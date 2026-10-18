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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-19 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.303](https://github.com/anthropics/claude-code/releases/tag/v2.1.303)（2026-10-19）→ [[repos/anthropics-claude-code/releases/v2.1.303\|まとめ]] | 2026-10-19 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-19 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.2](https://github.com/nuxt/nuxt/releases/tag/v4.6.2)（2026-10-16）→ [[repos/nuxt-nuxt/releases/v4.6.2\|まとめ]] | 2026-10-19 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)（2026-10-15）→ [[repos/openai-codex/releases/rust-v0.163.0\|まとめ]] | 2026-10-19 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-19 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.88.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.88.0)（2026-10-13）→ [[repos/oxc-project-oxc/releases/oxlint_v1.88.0\|まとめ]] | 2026-10-19 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.14.0](https://github.com/pnpm/pnpm/releases/tag/v12.14.0)（2026-10-15）→ [[repos/pnpm-pnpm/releases/v12.14.0\|まとめ]] | 2026-10-19 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-10-16 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-19 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.2](https://github.com/vercel/next.js/releases/tag/v16.4.2)（2026-10-15）→ [[repos/vercel-next.js/releases/v16.4.2\|まとめ]] | 2026-10-19 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5\|まとめ]] | 2026-10-19 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-10-19 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-16 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-19 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-05 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-19 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-18-public-benefit-fund\|Anthropic Public Benefit Fund を設立、株式の一部を公益に]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-13-158.0\|Firefox 158.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- nuxt/nuxt 安定版 [[repos/nuxt-nuxt/releases/v4.6.2|v4.6.2]]：ルート相対パスの判定、数字で始まる ID へのスクロール、vapor スロットの検出などを修正。`nuxt/schema` を拡張するモジュールの型が無視される問題や tsconfig の生成も修正（[[repos/nuxt-nuxt/changes/2026-10-19|変更]]）
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.302|v2.1.302]]・[[repos/anthropics-claude-code/releases/v2.1.303|v2.1.303]]：`CLAUDE_CODE_AUTO_MODE_MODEL`、`/config` の `Idle compaction`、単体の Claude Design が 2026-12-14 までに終了する通知、Read ツールで 128 MB を超える画像を拒否
- pnpm/pnpm（未リリース）：pnpr がすべてのエコシステムを接頭辞で配るように（破壊的変更）、`lockfile.integrityTarget: tar`、`pnpm-workspace.yaml` の `include` で設定を分割、公式 Docker イメージに Alpine 版（[[repos/pnpm-pnpm/changes/2026-10-19|変更]]、PR 115 件）
- openai/codex（rust-v0.164.0-alpha.3）：環境の間でファイルをコピーする `multi_env_copy_file`、ターン途中で MCP のツール一覧の変更を反映、プラグインのフックの承認を内容のハッシュに結び付ける（[[repos/openai-codex/changes/2026-10-19|変更]]）
- oxc：レキサーの CPU 機能（AVX2・NEON）の検出を実行時に移行、Oxfmt が穴のある配列のコメント位置を保つ、JSON フォーマッタが不正な JSON を拒否（[[repos/oxc-project-oxc/changes/2026-10-19|変更]]、PR 94 件）
- vercel/next.js（v16.5.0-canary.17）：middleware のリクエストを 1 つの OpenTelemetry トレースにまとめる変更を取り消し、`next upgrade --agent` がパッケージマネージャーの最小リリース経過期間を守って canary を選ぶように（[[repos/vercel-next.js/changes/2026-10-19|変更]]）
- vitest：モックファクトリーの実行中に始まった並行 import にも同じモックを返す、`--changed` の絞り込み後にセットアップファイルを再実行（[[repos/vitest-dev-vitest/changes/2026-10-19|変更]]）。TypeScript は `TS_API_TIMING_DIR` で API クライアントのタイミング情報を出力、グローバルなファイル削除後のインクリメンタル診断を修正（[[repos/microsoft-TypeScript/changes/2026-10-19|変更]]）
- CSS：mediaqueries-5 に `display-mode: application`（複数の値が同時に一致）、css-contain-2 で `content-visibility: hidden` のメディア要素の再生を定義（[[repos/w3c-csswg-drafts/changes/2026-10-19|変更]]）
- Web 標準：whatwg/html で複製した Document のベース URL を考慮（[[repos/whatwg-html/changes/2026-10-19|変更]]）、tc39/ecma262 で `%TypedArray%.prototype.filter` / `with` の誤ったアサーションを修正（[[repos/tc39-ecma262/changes/2026-10-19|変更]]）。react-spectrum は Select の型から `excludeFromTabOrder` を削除（[[repos/adobe-react-spectrum/changes/2026-10-19|変更]]）
- Anthropic：[[blogs/anthropic/posts/2026-10-18-public-benefit-fund|Anthropic Public Benefit Fund を設立]]（株式の 5% を拠出し、価値が 50% 増えるごとに 2% を追加できる）
