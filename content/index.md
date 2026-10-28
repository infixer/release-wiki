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
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0\|まとめ]] | 2026-10-28 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.312](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)（2026-10-28）→ [[repos/anthropics-claude-code/releases/v2.1.312\|まとめ]] | 2026-10-28 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-10-28 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.3](https://github.com/nuxt/nuxt/releases/tag/v4.6.3)（2026-10-27）→ [[repos/nuxt-nuxt/releases/v4.6.3\|まとめ]] | 2026-10-28 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0)（2026-10-27）→ [[repos/openai-codex/releases/rust-v0.165.0\|まとめ]] | 2026-10-28 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-10-26 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.90.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.90.0)（2026-10-27）→ [[repos/oxc-project-oxc/releases/oxlint_v1.90.0\|まとめ]] | 2026-10-28 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.16.1](https://github.com/pnpm/pnpm/releases/tag/v12.16.1)（2026-10-28）→ [[repos/pnpm-pnpm/releases/v12.16.1\|まとめ]] | 2026-10-28 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-10-28 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-10-26 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3\|まとめ]] | 2026-10-28 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5\|まとめ]] | 2026-10-28 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-10-28 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-10-28 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-10-28 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-21 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-10-28 |

各リポジトリのページは [[repos/index|リポジトリ一覧]] から。

## ブログ

| ブログ | 関連リポジトリ | 最新の記事 |
|---|---|---|
| [[blogs/anthropic/index\|Anthropic News]] | — | [[blogs/anthropic/posts/2026-10-27-expanding-partnership-gsa\|GSA との提携を拡大、あらゆるレベルの政府に Claude を提供]] |
| [[blogs/chrome/index\|Chrome の新機能]] | — | [[blogs/chrome/posts/2026-10-05-modern-web-guidance\|最新のウェブ ガイダンス]] |
| [[blogs/firefox/index\|Firefox リリースノート]] | — | [[blogs/firefox/posts/2026-10-27-159.0\|Firefox 159.0]] |
| [[blogs/safari/index\|Safari リリースノート]] | — | [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes\|Safari 27.2 Beta リリースノート]] |

各ブログのページは [[blogs/index|ブログ一覧]] から。

## 最近の更新

- anthropics/claude-code 安定版 [[repos/anthropics-claude-code/releases/v2.1.312|v2.1.312]]：gateway に `oidc.user_id_claim`、プラグインマーケットプレイスを claude-plugins-official に集約（`ralph-wiggum` は `ralph-loop` に改名）。[[repos/anthropics-claude-code/releases/v2.1.311|v2.1.311]] では 200K トークン超で 1M コンテキストの課金を求めて止まる問題を修正（[[repos/anthropics-claude-code/changes/2026-10-28|変更]]）
- openai/codex 安定版 [[repos/openai-codex/releases/rust-v0.165.0|rust-v0.165.0]]（Vertex AI のプロバイダー、GPT-6.1 Terra、メモリ v2 を既定に）。PR 188 件では設定サーバーの起動への組み込み、FedRAMP キーの振り分け、MITM の本文のシークレットの置き換えなど（[[repos/openai-codex/changes/2026-10-28|変更]]）
- pnpm [[repos/pnpm-pnpm/releases/v12.16.0|v12.16.0]]（`--env-file`・`pnpm setup --no-modify-path`）・[[repos/pnpm-pnpm/releases/v12.16.1|v12.16.1]]・[[repos/pnpm-pnpm/releases/v11.28.9|v11.28.9]] を公開。絞り込んだインストールで配置の設定が変わったときに失敗させる修正、`store prune` が使用中のパッケージを消さない修正など（[[repos/pnpm-pnpm/changes/2026-10-28|変更]]）
- nuxt/nuxt [[repos/nuxt-nuxt/releases/v4.6.3|v4.6.3]] 公開（セキュリティ修正 5 件）。main ではテンプレートのコンポーネント解決をコンパイラーへ移行、`experimental.templateDiagnostics`、`onNuxtReady` の `timeout`/`signal` などを追加（[[repos/nuxt-nuxt/changes/2026-10-28|変更]]）
- oxc [[repos/oxc-project-oxc/releases/oxlint_v1.90.0|oxlint_v1.90.0]]・[[repos/oxc-project-oxc/releases/oxfmt_v0.75.0|oxfmt_v0.75.0]]・[[repos/oxc-project-oxc/releases/crates_v0.156.0|crates_v0.156.0]] を公開。React Compiler は依存が合わない手動メモ化を残すように、Oxfmt のかっこ・コメントの修正多数（[[repos/oxc-project-oxc/changes/2026-10-28|変更]]）
- vercel/next.js canary.29：Turbopack にサーバー側のチャンクサイズ設定（`minServerChunkSize` など）と pnpm GVS の自動検出、FileSystemCache が再検証を無視する問題と MPA の Server Actions で HTML が欠ける問題を修正（[[repos/vercel-next.js/changes/2026-10-28|変更]]）
- vitest は browser に `traceView: 'failure-only'` を追加（[[repos/vitest-dev-vitest/changes/2026-10-28|変更]]）。TypeScript は reverse mapped type の TS2352 リグレッションを修正し交差型の処理を高速化（[[repos/microsoft-TypeScript/changes/2026-10-28|変更]]）。React Compiler は `PerformanceObserver` などでの ref の誤検知を修正（[[repos/react-react/changes/2026-10-28|変更]]）。react-spectrum の `ColorField` が `Form` の `validationBehavior` を継承（[[repos/adobe-react-spectrum/changes/2026-10-28|変更]]）
- Web 標準：csswg-drafts に `matchContainer()` / `ContainerQueryList`、`calc-size()`・`interpolate-size` が css-sizing-4 へ（[[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]）。whatwg/html は編集上の修正 4 件（[[repos/whatwg-html/changes/2026-10-28|変更]]）、w3c/aria は HTML-AAM の image map を `ATK_ROLE_IMAGE_MAP` に（[[repos/w3c-aria/changes/2026-10-28|変更]]）
- ブログ：[[blogs/firefox/posts/2026-10-27-159.0|Firefox 159.0]]（macOS のネイティブ共有ピッカー、Smart Window の `/watch`、CSS スクロール駆動アニメーション）と ESR [[blogs/firefox/posts/2026-10-27-153.6.0|153.6.0]]・[[blogs/firefox/posts/2026-10-27-115.44.0|115.44.0]]。Anthropic が [[blogs/anthropic/posts/2026-10-26-s1-sec|SEC に S-1 を提出]]、[[blogs/anthropic/posts/2026-10-27-expanding-partnership-gsa|GSA との提携を拡大]]
