---
title: openai/codex
updated: 2026-10-02
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.160.0](https://github.com/openai/codex/releases/tag/rust-v0.160.0)（2026-10-01）→ [[repos/openai-codex/releases/rust-v0.160.0|まとめ]]（前日に 0.159 系のパッチ [[repos/openai-codex/releases/rust-v0.159.3|rust-v0.159.3]] も公開）
- プレリリース: [rust-v0.162.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.1)（2026-10-01）

## 直近の注目変更

- Linux サンドボックスで拒否ファイルを複数指定すると起動しない問題を修正（[#50059](https://github.com/openai/codex/pull/50059)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- requirements でブラウザのアノテーション API を制御する `browser_annotation_api`（[#49784](https://github.com/openai/codex/pull/49784)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/管理要件|管理要件]]
- managed requirements でデスクトップアプリの音声を制御する `in_app_voice`（[#49683](https://github.com/openai/codex/pull/49683)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/管理要件|管理要件]]
- ゴールの編集に `origin`（`user` / `automatic`）を付け、ユーザーの編集をモデルの履歴に残すように（[#49598](https://github.com/openai/codex/pull/49598)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- モデル一覧を `<model_catalog>` メッセージで渡す `model_catalog_in_context`（オプトイン）（[#49560](https://github.com/openai/codex/pull/49560)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- コマンドセンターで会話をフォーク（`f`、`agents.fork`）（[#49517](https://github.com/openai/codex/pull/49517)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- MCP の ID-JAG 交換の前に認可サーバーを発見・検証（`exchange_ema_auth_token`）（[#49478](https://github.com/openai/codex/pull/49478)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- TUI の権限設定を接続先サーバーの定義に従うように（[#49472](https://github.com/openai/codex/pull/49472)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- Responses のリトライとフォールバックでサーバーの再試行の指示（`Retry-After`）に従うように（[#49441](https://github.com/openai/codex/pull/49441)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- TUI の音声設定でローカルのマイク・スピーカーを選択（`audio.microphone`・`audio.speaker`）（[#49437](https://github.com/openai/codex/pull/49437)）📦 rust-v0.162.0-alpha.1 · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行・レスポンス処理
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、端末入力の承認）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）の認証
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセスとパスの URI 変換の内部基盤
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モードとソケット接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任とモデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲート
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-02|2026-10-02]]、[[repos/openai-codex/changes/2026-09-30|2026-09-30]]、[[repos/openai-codex/changes/2026-09-28|2026-09-28]]、[[repos/openai-codex/changes/2026-09-24|2026-09-24]]
