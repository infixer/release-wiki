---
title: LSP
updated: 2026-10-09
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

oxlint（`oxlint --lsp`）と oxfmt（`oxfmt --lsp`）の言語サーバー。共通部分は `oxc_language_server` クレート（`Backend`）にある。設定のエラーをエディタから見えるようにする改善が進んでおり、oxlint はワークスペース初期化時のルート・入れ子・カスタムパスの設定の読み込み・構築の失敗を、oxfmt はルート設定の解決エラーを、`window/showMessage` 通知として LSP クライアントに表示するようになった。oxfmt では整形時に設定の解決に失敗すると、黙って整形をやめるのではなくエラーを返す。oxfmt の LSP は `astro` の言語 ID にも対応した（各 IDE 拡張側の対応も必要）。いずれも未リリース。

## 主な API・オプション

- `window/showMessage` — 設定のエラーをクライアントに通知（VS Code は短時間に最大 5 件まで表示）
- `oxc.configPath` — VS Code で oxlint の設定ファイルのパスを指定する設定

## 変更履歴

- 2026-10-09 — oxlint の LSP が設定のエラーをクライアントに表示（[#25486](https://github.com/oxc-project/oxc/pull/25486)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-10-09 — oxfmt の LSP がルート設定のエラーをクライアントに表示（[#26014](https://github.com/oxc-project/oxc/pull/26014)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-10-09 — `oxfmt --lsp` が設定の解決エラー時にエラーを返すように（[#26003](https://github.com/oxc-project/oxc/pull/26003)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-10-09 — `oxfmt --lsp` が Astro の言語に対応（[#27388](https://github.com/oxc-project/oxc/pull/27388)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]

## 関連

- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]
