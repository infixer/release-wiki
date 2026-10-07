---
title: openai/codex rust-v0.160.1
date: 2026-10-07
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.160.1) · 公開: 2026-10-05

## 要点

- 修正: リモート環境変数を明示的に設定してリモートの stdio の MCP サーバーを起動するとき、`SYSTEMROOT`・`TEMP`・`TMP` を保持する。Unix のホストから Windows の executor の起動環境を維持できる
- 0.160 へのバックポート（[#51121](https://github.com/openai/codex/pull/51121)）

## 関連

- 取り込み済みの PR: [[repos/openai-codex/changes/2026-10-07|2026-10-07 の変更]]（この版のバックポートの PR #51121 自体は取り込み対象に含まれていない）
- トピック: [[repos/openai-codex/topics/MCP|MCP]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.160.0|rust-v0.160.0]]
