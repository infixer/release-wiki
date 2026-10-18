---
title: openai/codex
updated: 2026-10-19
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)（2026-10-15）→ [[repos/openai-codex/releases/rust-v0.163.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.162.1|rust-v0.162.1]]、2026-10-09）
- プレリリース: [rust-v0.164.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.3)（2026-10-17）

## 直近の注目変更

- エージェントのメッセージでアイドルの root のセッションを起こす `wake_on_agent_messages`（既定は無効）（[#54961](https://github.com/openai/codex/pull/54961)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- app-server の WebSocket の zstd 圧縮を `features.app_server_websocket_compression` で有効に（[#54949](https://github.com/openai/codex/pull/54949)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- TUI の設定の未知のフィールドで読み込みに失敗しないように（[#54766](https://github.com/openai/codex/pull/54766)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 環境の間でファイルをコピーするオプトインの `multi_env_copy_file` ツール（[#54674](https://github.com/openai/codex/pull/54674)、[#54741](https://github.com/openai/codex/pull/54741)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- TUI のセッションの選択をバックエンドに結び付け、別のバックエンドでの再開・fork を拒否（[#54681](https://github.com/openai/codex/pull/54681)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- サーバーの状態で MCP のツール一覧のメタデータ `toolListMeta` を公開（[#54686](https://github.com/openai/codex/pull/54686)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- MCP のツール一覧の変更をターンの途中でも反映する `mcp_tool_list_changed`（既定は無効）（[#54656](https://github.com/openai/codex/pull/54656)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- Code Mode で動的ツールの呼び出しを並列に実行（`Promise.all`）（[#54654](https://github.com/openai/codex/pull/54654)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]
- プラグインのフックの承認をプラグインの内容のハッシュに結び付け、内容が変わると再承認が必要に（[#54619](https://github.com/openai/codex/pull/54619)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/プラグイン|プラグイン]]
- V8 を 152.2.0 に更新し `Array.sort` の安全性のチェックをバックポート（[#54519](https://github.com/openai/codex/pull/54519)）📦 rust-v0.164.0-alpha.3 · トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証など）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキル、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合と、内容に結び付いたフックの承認・アーカイブの展開
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）と拡張のリソースの保持期間
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有を含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-19|2026-10-19]]、[[repos/openai-codex/changes/2026-10-16|2026-10-16]]、[[repos/openai-codex/changes/2026-10-14|2026-10-14]]、[[repos/openai-codex/changes/2026-10-12|2026-10-12]]、[[repos/openai-codex/changes/2026-10-09|2026-10-09]]
