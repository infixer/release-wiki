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
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)（2026-10-31）→ [[repos/anthropics-claude-code/releases/v2.1.316\|まとめ]] | 2026-11-02 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-11-02 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.6.3](https://github.com/nuxt/nuxt/releases/tag/v4.6.3)（2026-10-27）→ [[repos/nuxt-nuxt/releases/v4.6.3\|まとめ]] | 2026-11-02 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0\|まとめ]] | 2026-11-02 |
| [[repos/openui-open-ui/index\|openui/open-ui]] | main | なし | 2026-11-02 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.90.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.90.0)（2026-10-27）→ [[repos/oxc-project-oxc/releases/oxlint_v1.90.0\|まとめ]] | 2026-11-02 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.17.0](https://github.com/pnpm/pnpm/releases/tag/v12.17.0)（2026-10-30）→ [[repos/pnpm-pnpm/releases/v12.17.0\|まとめ]] | 2026-11-02 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1\|まとめ]] | 2026-11-02 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-11-02 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-10-16 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.4.3](https://github.com/vercel/next.js/releases/tag/v16.4.3)（2026-10-23）→ [[repos/vercel-next.js/releases/v16.4.3\|まとめ]] | 2026-11-02 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5\|まとめ]] | 2026-11-02 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.44](https://github.com/vuejs/core/releases/tag/v3.5.44)（2026-10-13）→ [[repos/vuejs-core/releases/v3.5.44\|まとめ]] | 2026-11-02 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-11-02 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-11-02 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-10-21 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-11-02 |

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

- anthropics/claude-code 安定版 [[repos/anthropics-claude-code/releases/v2.1.316|v2.1.316]]：Opus 4.8 の fast mode を非推奨に（2026-11-30 に削除、Opus 5.5 へ移行）。`CLAUDE_CODE_DISABLE_ULTRATHINK`・`CLAUDE_CODE_SUBAGENT_EFFORT`、gateway のグループ共有予算 `pooled_budget`・`managed.policy_mode: layered`・Bedrock の `guardrail.input_tagging` を追加（[[repos/anthropics-claude-code/changes/2026-11-02|変更]]）
- pnpm 安定版 [[repos/pnpm-pnpm/releases/v12.17.0|v12.17.0]]（`pnpm peers check --global`、`overrides` の `:prod`・`:optional`・`:peer` と `*`、ランタイム・Cargo・Python の依存の更新、作るファイルの権限が umask に従う）と [[repos/pnpm-pnpm/releases/v11.28.10|v11.28.10]]。main ではエージェントスキルのリンク名をスキル自身の名前に（[[repos/pnpm-pnpm/changes/2026-11-02|変更]]）
- openai/codex：`codex agents --no-daemon` でデーモンなしでもコマンドセンターが使えるように、ゲートウェイの OAuth 資格情報のファイル保存（`credentials_store = "file"`）、ネットワーク承認を接続先ごとに順番に表示（[[repos/openai-codex/changes/2026-11-02|変更]]。Release は取得できず）
- oxc：Oxfmt が `.html` と埋め込み HTML を新しい `oxc_formatter_htmlish` で整形するように（破壊的変更）、`oxc_lexer` を CPU 機能セットごとにコンパイルする作業（[[repos/oxc-project-oxc/changes/2026-11-02|変更]]）
- vercel/next.js canary.33〜.36：`'use cache'` のエラーを catch してもプリレンダリングが失敗する問題、レスポンス複製の後片付けでプロセスが終了しうる問題、Turbopack のチャンクグループの panic を修正（[[repos/vercel-next.js/changes/2026-11-02|変更]]）
- tc39/ecma262 に `Iterator.prototype.includes`（Stage 4）、`DataView` の `byteLength`/`byteOffset` が切り離し後も throw しないように（[[repos/tc39-ecma262/changes/2026-11-02|変更]]）。React は hidden の Activity まわりのクラッシュと Fizz の resume の修正（[[repos/react-react/changes/2026-11-02|変更]]）
- vitest は `fsModuleCache` に書き込めないときに警告してキャッシュを無効化、ブラウザモードの接続失敗の扱いを修正（[[repos/vitest-dev-vitest/changes/2026-11-02|変更]]）。TypeScript はインレイヒントと Windows のファイル監視の `ErrOverflow`、型チェッカーの性能改善（[[repos/microsoft-TypeScript/changes/2026-11-02|変更]]）
- nuxt は SSR のプリフェッチのヒントをハイドレーション後に遅らせる実験的機能（[[repos/nuxt-nuxt/changes/2026-11-02|変更]]）、w3c/aria は Core-AAM に「Computed Accessibility Properties」の節（[[repos/w3c-aria/changes/2026-11-02|変更]]）、csswg-drafts は css-color-4 のレイトレーシングのエッジケース修正（[[repos/w3c-csswg-drafts/changes/2026-11-02|変更]]）。Vue は v3.6.0-rc.14
