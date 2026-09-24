---
title: openai/codex rust-v0.155.0
date: 2026-09-17
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.155.0) · 公開: 2026-09-17

## 要点

- 実験的な `/voice` 会話（ライブ文字起こし・マイク操作）を `/experimental` で有効化できるように
- TUI のステータス行にライブ推論サマリー、ターン完了後の完了時刻を表示
- agents overview でタスクの非表示・アーカイブ・削除、worktree の所有者情報表示、クリーンな managed worktree の削除確認に対応
- 対応 Mac のローカル TUI セッションで MCP リクエストに Touch ID 確認を追加
- app-server デーモンの更新スケジュールを設定可能に（`codex app-server daemon update`）。保存済みスレッド・アクティブなゴールはデーモン再起動後も復元できる
- Amazon Bedrock が設定コマンドから AWS 認証情報を取得可能に（キャッシュ・期限切れに応じた再取得・認証回復つき）
- 制限された WSL サンドボックスからの Windows プロセスエスケープをブロックし、ブローカー済みシェルスナップショットの資格情報露出を対策

## 関連

- 取り込み済みの PR: [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
- トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]、[[repos/openai-codex/topics/デーモン|デーモン]]、[[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/Guardian|Guardian]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]
