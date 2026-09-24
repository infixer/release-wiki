---
title: openai/codex
updated: 2026-09-24
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.156.1](https://github.com/openai/codex/releases/tag/rust-v0.156.1)（2026-09-23）→ [[repos/openai-codex/releases/rust-v0.156.1|まとめ]]
- プレリリース: [rust-v0.158.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.8)（2026-09-24）

## 直近の注目変更

- Windows 10 で no-reparse なディレクトリを開けない不具合を修正（[#47672](https://github.com/openai/codex/pull/47672)）📦 rust-v0.158.0-alpha.8 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- ネストした書き込み可能ルートでの読み取り専用メタデータのマウント順序を修正（[#47623](https://github.com/openai/codex/pull/47623)）📦 rust-v0.158.0-alpha.8 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- 読み取り専用エージェントセッションでの `Esc` ナビゲーションを修正（[#47320](https://github.com/openai/codex/pull/47320)）📦 rust-v0.158.0-alpha.8 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ハンドオフ時の Realtime V3 文字起こしの統合処理を修正（[#46922](https://github.com/openai/codex/pull/46922)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]
- TUI のピッカー表示を統一し、折り返し時の表示崩れを修正（[#46691](https://github.com/openai/codex/pull/46691)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- standalone ネットワークプロキシの初期化を修正（[#46578](https://github.com/openai/codex/pull/46578)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- アクティブターンの環境選択の取得先を修正（[#46557](https://github.com/openai/codex/pull/46557)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- 互換性のある機能上書きを指定していても共有デーモンを使えるように（[#46529](https://github.com/openai/codex/pull/46529)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- フィードバックレポートに設定・機能フラグの診断情報を追加（[#46501](https://github.com/openai/codex/pull/46501)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]]
- モデルカタログによるツール説明の上書きが全マルチエージェント V2 ツールに対応（[#46297](https://github.com/openai/codex/pull/46297)）📦 rust-v0.156.1 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行・レスポンス処理
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・数式表示
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux 向けコマンド実行の隔離
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセスの内部基盤
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択と接続ルーティング
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし処理

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-09-24|2026-09-24]]
