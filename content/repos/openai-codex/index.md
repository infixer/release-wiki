---
title: openai/codex
updated: 2026-10-14
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)（2026-10-09）→ [[repos/openai-codex/releases/rust-v0.162.1|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.162.0|rust-v0.162.0]]、2026-10-08）
- プレリリース: [rust-v0.163.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10)（2026-10-13）

## 直近の注目変更

- macOS のユーザー確認のプロンプトの取り消しを修正（[#53790](https://github.com/openai/codex/pull/53790)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- `codex app-server daemon restart` で `--enable`・`--disable`・`-c features.*` の上書きを適用・保存（[#53751](https://github.com/openai/codex/pull/53751)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- 非同期（バックグラウンド）コンパクションの設定 `async_compaction`・`model_async_compact_threshold_percent` と、先行要求・結果の再利用の土台（[#53595](https://github.com/openai/codex/pull/53595)、[#53606](https://github.com/openai/codex/pull/53606)、[#53614](https://github.com/openai/codex/pull/53614)、[#53620](https://github.com/openai/codex/pull/53620)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- ネイティブのツールを隠しつつ V2 のランタイムを保つ `features.multi_agent_v2.disable_native_tools`（[#53617](https://github.com/openai/codex/pull/53617)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- ネットワークプロキシで重複した `Host` ヘッダーを `400` で拒否（[#53506](https://github.com/openai/codex/pull/53506)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- WSL で Windows のクリップボードを優先し、コピーの試行に時間制限（[#53453](https://github.com/openai/codex/pull/53453)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 不完全な応答を再試行しない終端のエラー `ResponseIncomplete` に（[#53451](https://github.com/openai/codex/pull/53451)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- 設定の切り替えを再起動なしで反映し、設定パネルの全グループ検索と Effects のピッカー（[#53429](https://github.com/openai/codex/pull/53429)、[#53496](https://github.com/openai/codex/pull/53496)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 保存したスレッドの権限を設定の読み込み中に復元（[#53419](https://github.com/openai/codex/pull/53419)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- 独立したランタイムでローカルのメッセージボードを共有する `LocalBoard`・`LocalBoardConnection`（[#53400](https://github.com/openai/codex/pull/53400)）📦 rust-v0.163.0-alpha.10 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）の認証、elicitation・ユーザー確認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証など）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き、環境ごとの必須スキル、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイスの追加と、ローカル・managed のソースのパスの照合
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有を含む）、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-14|2026-10-14]]、[[repos/openai-codex/changes/2026-10-12|2026-10-12]]、[[repos/openai-codex/changes/2026-10-09|2026-10-09]]、[[repos/openai-codex/changes/2026-10-07|2026-10-07]]、[[repos/openai-codex/changes/2026-10-05|2026-10-05]]
