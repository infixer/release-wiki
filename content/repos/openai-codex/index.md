---
title: openai/codex
updated: 2026-10-05
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.160.0](https://github.com/openai/codex/releases/tag/rust-v0.160.0)（2026-10-01）→ [[repos/openai-codex/releases/rust-v0.160.0|まとめ]]（前日に 0.159 系のパッチ [[repos/openai-codex/releases/rust-v0.159.3|rust-v0.159.3]] も公開）
- プレリリース: [rust-v0.162.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.13)（2026-10-04）

## 直近の注目変更

- 環境に依存するツールの公開を固定する `stable_environment_tools`（既定は無効）（[#50962](https://github.com/openai/codex/pull/50962)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- Responses の `response.failed` イベントの `Retry-After` に従うように（[#50418](https://github.com/openai/codex/pull/50418)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- コマンド実行の出力を `aggregated_output` に一本化（`stdout`・`stderr`・`formatted_output` を削除）（[#50402](https://github.com/openai/codex/pull/50402)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]]
- `SessionConfiguredEvent` から `initial_messages` を削除（[#50360](https://github.com/openai/codex/pull/50360)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- リモートコントロールの自動再接続にジッター付きのバックオフ（[#50348](https://github.com/openai/codex/pull/50348)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- `Ctrl+Insert` で TUI の選択範囲をコピー（[#50215](https://github.com/openai/codex/pull/50215)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- トランスクリプトのマウススクロール速度 `tui.mouse_scroll_speed`（既定を 3 行→1 行に変更）（[#50209](https://github.com/openai/codex/pull/50209)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- `codex doctor` に設定された TUI モードを表示（[#50200](https://github.com/openai/codex/pull/50200)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]]
- exec-server でファイルへの書き込みストリーミング（`fs/open` の `mode: "replace"`・`fs/writeBlock`）（[#50177](https://github.com/openai/codex/pull/50177)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- TUI に管理された Git worktree のツール（`create_worktree` など）（[#50148](https://github.com/openai/codex/pull/50148)）📦 rust-v0.162.0-alpha.13 · トピック: [[repos/openai-codex/topics/TUI|TUI]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行・レスポンス処理
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、端末入力の承認）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）の認証
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き、環境に依存するツールの公開
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任とモデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲート
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-05|2026-10-05]]、[[repos/openai-codex/changes/2026-10-02|2026-10-02]]、[[repos/openai-codex/changes/2026-09-30|2026-09-30]]、[[repos/openai-codex/changes/2026-09-28|2026-09-28]]、[[repos/openai-codex/changes/2026-09-24|2026-09-24]]
