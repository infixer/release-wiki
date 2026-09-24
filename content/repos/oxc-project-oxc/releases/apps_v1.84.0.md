---
title: oxc-project/oxc apps_v1.84.0
date: 2026-09-21
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/apps_v1.84.0) · 公開: 2026-09-21

Oxlint v1.84.0 と Oxfmt v0.69.0 をまとめたアプリのリリース。

## 要点

- oxlint・oxfmt: `vite.config.*` の全バリアントを検出できるように（[#26755](https://github.com/oxc-project/oxc/pull/26755)）
- linter: JavaScript プラグインルールの実行時間をレポートできるように（[#26415](https://github.com/oxc-project/oxc/pull/26415)）
- linter/unicorn/no-unreadable-iife: 自動修正のサジェスチョンを実装（[#26658](https://github.com/oxc-project/oxc/pull/26658)）
- oxfmt/formatter_markdown: Markdown の frontmatter をそのまま保持するように（[#26779](https://github.com/oxc-project/oxc/pull/26779)）
- linter/eslint/no-unused-vars: private な namespace バインディングの報告漏れ、コメントを含むインポート削除、配列 rest バインディング削除時の構文崩れなどを修正（[#26842](https://github.com/oxc-project/oxc/pull/26842)、[#26781](https://github.com/oxc-project/oxc/pull/26781)、[#26778](https://github.com/oxc-project/oxc/pull/26778)）
- linter: `preserve-caught-error`・`unicorn/consistent-function-scoping`・`vitest/prefer-to-be-truthy` の自動修正まわりの不具合を修正（[#26726](https://github.com/oxc-project/oxc/pull/26726)、[#26625](https://github.com/oxc-project/oxc/pull/26625)、[#26761](https://github.com/oxc-project/oxc/pull/26761)）
- oxlint/lsp: 入れ子設定の判定を `configPath` の意味論に合わせて統一（[#26762](https://github.com/oxc-project/oxc/pull/26762)）
- linter/react/no-unknown-property: 見つかっていなかったプロパティをいくつか追加（[#26572](https://github.com/oxc-project/oxc/pull/26572)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]、[[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]]、[[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
