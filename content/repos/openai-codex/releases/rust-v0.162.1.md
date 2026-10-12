---
title: openai/codex rust-v0.162.1
date: 2026-10-12
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.162.1) · 公開: 2026-10-09

## 要点

- 修正: 非同期の質問が複数行のときの TUI のクラッシュを修正し、改行とハイパーリンクの完全なリンク先を保つ（[#51866](https://github.com/openai/codex/pull/51866)）
- 修正: 実行中のバックグラウンドサーバーの機能設定と CLI の既定値の違いによる起動失敗を修正。互換性の確認はコマンドラインで明示的に上書きした機能だけに適用する（[#52648](https://github.com/openai/codex/pull/52648)）

## 関連

- 取り込み済みの PR: #51866 は [[repos/openai-codex/changes/2026-10-09|2026-10-09 の変更]]（brief の PR として「その他」に記載）、#52648 は [[repos/openai-codex/changes/2026-10-12|2026-10-12 の変更]]
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/デーモン|デーモン]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.162.0|rust-v0.162.0]]
