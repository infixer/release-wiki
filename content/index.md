---
title: Release Wiki
tags:
  - index
---

気になる GitHub リポジトリのマージ済み PR と公式ブログを、週 2 回（月・木）まとめている Wiki です。

## リポジトリ

| リポジトリ | ブランチ | 最新の安定版 | 最終更新 |
|---|---|---|---|
| [[repos/adobe-react-spectrum/index\|adobe/react-spectrum]] | main | [react-aria-components@1.21.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.21.0)（2026-09-04） | 2026-09-24 |
| [[repos/anthropics-claude-code/index\|anthropics/claude-code]] | main | [v2.1.281](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)（2026-09-23）→ [[repos/anthropics-claude-code/releases/v2.1.281\|まとめ]] | 2026-09-24 |
| [[repos/microsoft-TypeScript/index\|microsoft/TypeScript]] | main | [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20） | 2026-09-24 |
| [[repos/nuxt-nuxt/index\|nuxt/nuxt]] | main | [v4.5.2](https://github.com/nuxt/nuxt/releases/tag/v4.5.2)（2026-08-05） | 2026-09-24 |
| [[repos/openai-codex/index\|openai/codex]] | main | [rust-v0.156.1](https://github.com/openai/codex/releases/tag/rust-v0.156.1)（2026-09-23）→ [[repos/openai-codex/releases/rust-v0.156.1\|まとめ]] | 2026-09-24 |
| [[repos/oxc-project-oxc/index\|oxc-project/oxc]] | main | [oxlint_v1.85.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.85.0)（2026-09-21）→ [[repos/oxc-project-oxc/releases/oxlint_v1.85.0\|まとめ]] | 2026-09-24 |
| [[repos/pnpm-pnpm/index\|pnpm/pnpm]] | main | [v12.6.0](https://github.com/pnpm/pnpm/releases/tag/v12.6.0)（2026-09-22）→ [[repos/pnpm-pnpm/releases/v12.6.0\|まとめ]] | 2026-09-24 |
| [[repos/react-react/index\|react/react]] | main | [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09） | 2026-09-24 |
| [[repos/tc39-ecma262/index\|tc39/ecma262]] | main | [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28） | 2026-09-24 |
| [[repos/tc39-proposals/index\|tc39/proposals]] | main | なし（README の Stage 表で管理） | 2026-09-24 |
| [[repos/vercel-next.js/index\|vercel/next.js]] | canary | [v16.3.6](https://github.com/vercel/next.js/releases/tag/v16.3.6)（2026-09-22） | 2026-09-24 |
| [[repos/vitest-dev-vitest/index\|vitest-dev/vitest]] | main | [v5.0.1](https://github.com/vitest-dev/vitest/releases/tag/v5.0.1)（2026-09-15） | 2026-09-24 |
| [[repos/vuejs-core/index\|vuejs/core]] | main | [v3.5.43](https://github.com/vuejs/core/releases/tag/v3.5.43)（2026-09-17）→ [[repos/vuejs-core/releases/v3.5.43\|まとめ]] | 2026-09-24 |
| [[repos/w3c-aria/index\|w3c/aria]] | main | なし | 2026-09-24 |
| [[repos/w3c-csswg-drafts/index\|w3c/csswg-drafts]] | main | なし | 2026-09-24 |
| [[repos/w3c-wcag/index\|w3c/wcag]] | main | なし | 2026-09-24 |
| [[repos/whatwg-html/index\|whatwg/html]] | main | なし | 2026-09-24 |

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

- Safari 27 がリリース。カスタマイズ可能な `<select>`、BigInt Math、WebAssembly JSPI、Safari MCP など大型アップデート（[[blogs/safari/posts/2026-09-14-safari-27-release-notes|Safari 27 リリースノート]]）
- Anthropic: Claude が生命科学ラボで新規酵素システム「ART」を自律的に発見（[[blogs/anthropic/posts/2026-09-23-claude-discovers-novel-enzyme-system|ブログ記事]]）
- pnpm/pnpm [[repos/pnpm-pnpm/releases/v12.6.0|v12.6.0]]：依存関係の自動重複排除 `autoDedupe` とプロジェクト移動時の node_modules 再利用に対応、Python（PyPI）サポートも進行中（[[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]]）
- openai/codex [[repos/openai-codex/releases/rust-v0.156.1|rust-v0.156.1]]：Windows サンドボックスの MXC バックエンド選択に対応、Guardian の委任レビューまわりを中心に多数修正（[[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]）
- oxc-project/oxc [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|oxlint_v1.85.0]]：新しい Markdown フォーマッタを実装、Vite+ 向け設定探索を整理（[[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]）
- anthropics/claude-code [[repos/anthropics-claude-code/releases/v2.1.281|v2.1.281]]：mods（拡張実装）が [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]・[[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] でビルトインの挙動に追従、[[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]がバッチ送信に対応
- microsoft/TypeScript：tsgo（TypeScript 7 のネイティブ移植）の[[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]を整理、型チェッカーのバグ修正多数を取り込み（PR 43 件）
- nuxt/nuxt：開発サーバーの SSR エラーがソースへ正しくマッピングされるように、ルートチャンク・ペイロード等の[[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ]]を1つのスケジューラーに統一
- vuejs/core [[repos/vuejs-core/releases/v3.5.43|v3.5.43]] がリリース
- Firefox 156.0.1：NVDA 読み上げ・CSS アンカー位置指定・macOS 27 のウィンドウ復元などを修正（[[blogs/firefox/posts/2026-09-22-156.0.1|Firefox 156.0.1]]）
- vitest-dev/vitest：`toMatchObject` と非対称マッチャーの組み合わせで余分なフィールドが無視される不具合を修正（[[repos/vitest-dev-vitest/changes/2026-09-24|2026-09-24 の変更]]）
