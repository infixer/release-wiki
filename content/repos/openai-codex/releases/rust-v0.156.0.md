---
title: openai/codex rust-v0.156.0
date: 2026-09-22
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.156.0) · 公開: 2026-09-22

## 要点

- `/tui` でオプションのフルスクリーン UI を次回起動から選択可能に（トランスクリプト検索、マウス選択、右クリックコピーに対応）
- 音声会話が既定で有効化。F8 トグル、`/voice settings` ピッカー、Linux・Windows 向け音声ランタイムを同梱
- `/usage` 分析ダッシュボードでアカウントの使用量・トークン数・プラグイン/スキルの活動状況を確認可能に
- agent command center でステータス別のタスクフィルタと worktree セッション作成に対応。worktree サポートが既定で有効化
- ターミナルテーマを 6 種追加、Mermaid 図・数式表示にレスポンス内で対応
- `/daemon` でローカルバックグラウンドサーバーを更新可能に（`--no-daemon` で回避も可能）
- ターン失敗・中断・サブエージェント完了イベント時もストリーミング済みの回答・プランを保持
- システムプロキシ経由でのログイン回復、OAuth discovery が 503 を返す場合の MCP 認証情報再取得に対応
- サンドボックス分離の穴（Windows のインバウンド接続、特権 Linux/macOS ソケット、read-only macOS ファイルハンドル経由の書き込み）を修正

## 関連

- 取り込み済みの PR: [[repos/openai-codex/changes/2026-09-24|2026-09-24 の変更]]
- トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]、[[repos/openai-codex/topics/デーモン|デーモン]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]
