---
title: openai/codex
updated: 2026-10-07
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.160.1](https://github.com/openai/codex/releases/tag/rust-v0.160.1)（2026-10-05）→ [[repos/openai-codex/releases/rust-v0.160.1|まとめ]]（0.160 系のパッチ。その前は [[repos/openai-codex/releases/rust-v0.160.0|rust-v0.160.0]]）
- プレリリース: [rust-v0.162.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17)（2026-10-06）

## 直近の注目変更

- Windows 10 のドライブレターのパスでの no-follow のファイル操作を修正（[#51511](https://github.com/openai/codex/pull/51511)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- サンドボックスから書き込める bubblewrap の実行ファイルを `PATH` から拒否（[#51211](https://github.com/openai/codex/pull/51211)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- Code Mode のランク付きのツール検索 `tools.tool_search`（`code_mode_tool_search`、既定は無効）（[#51209](https://github.com/openai/codex/pull/51209)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]
- CLI の Daybreak の操作をオプトインの `features.cli_daybreak` に（[#51207](https://github.com/openai/codex/pull/51207)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- `apply_patch` が常に改行コードを保持（`apply_patch_preserve_line_endings` は削除済み扱い）（[#51203](https://github.com/openai/codex/pull/51203)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- ブラウザ拡張のリクエストヘッダーを requirements で指定（`browser_use.extension.request_headers`）（[#51194](https://github.com/openai/codex/pull/51194)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/管理要件|管理要件]]
- 環境ごとに必須のスキルを指定する `skills.required`（[#51157](https://github.com/openai/codex/pull/51157)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- 基本の指示を Responses の `input` の `developer` メッセージとして送信（`instructions` フィールドを削除）（[#51156](https://github.com/openai/codex/pull/51156)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- Guardian のレビューを親のチェックポイントから復旧（[#51137](https://github.com/openai/codex/pull/51137)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- Code Mode に `as_settled`・`stream_settled`（[#51126](https://github.com/openai/codex/pull/51126)）📦 rust-v0.162.0-alpha.17 · トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）の認証
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証など）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き、環境ごとの必須スキル、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任とモデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-07|2026-10-07]]、[[repos/openai-codex/changes/2026-10-05|2026-10-05]]、[[repos/openai-codex/changes/2026-10-02|2026-10-02]]、[[repos/openai-codex/changes/2026-09-30|2026-09-30]]、[[repos/openai-codex/changes/2026-09-28|2026-09-28]]
