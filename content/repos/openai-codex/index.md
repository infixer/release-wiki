---
title: openai/codex
updated: 2026-10-21
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)（2026-10-15）→ [[repos/openai-codex/releases/rust-v0.163.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.162.1|rust-v0.162.1]]、2026-10-09）
- プレリリース: [rust-v0.164.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.3)（2026-10-17）

## 直近の注目変更

- TUI の `/permissions` を保留中の権限の変更のガードに通し、接続先のプロジェクトでモデルのアクセスを更新（[#55682](https://github.com/openai/codex/pull/55682)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- キューが満杯のときに in-process の app-server の終了が止まる問題を修正（[#55645](https://github.com/openai/codex/pull/55645)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- デーモンの機能フラグの上書きを照合し、不一致なら embedded へ黙って切り替えずに選択肢を表示（[#55442](https://github.com/openai/codex/pull/55442)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- V2 の executor のプラグインをクラウドのカタログと正規の ID で突き合わせる（[#55301](https://github.com/openai/codex/pull/55301)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/プラグイン|プラグイン]]
- 起動前に設定と要件を JSON で出す `codex app-server --print-startup-config`（[#55300](https://github.com/openai/codex/pull/55300)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- Responses API プロキシに GitHub Actions の OIDC とフェデレーションの認証を追加（[#55297](https://github.com/openai/codex/pull/55297)、[#55298](https://github.com/openai/codex/pull/55298)、[#55299](https://github.com/openai/codex/pull/55299)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- スレッドごとのアンロードの遅延 `thread_unload_delay_secs`（[#55270](https://github.com/openai/codex/pull/55270)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- フックの呼び出しで休止中の MCP サーバーを起動（[#55263](https://github.com/openai/codex/pull/55263)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- エージェントのメッセージでアイドルの root のセッションを起こす `wake_on_agent_messages`（既定は無効）（[#54961](https://github.com/openai/codex/pull/54961)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- app-server の WebSocket の zstd 圧縮を `features.app_server_websocket_compression` で有効に（[#54949](https://github.com/openai/codex/pull/54949)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキル、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合と、内容に結び付いたフックの承認・アーカイブの展開
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）と拡張のリソースの保持期間
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有を含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-21|2026-10-21]]、[[repos/openai-codex/changes/2026-10-19|2026-10-19]]、[[repos/openai-codex/changes/2026-10-16|2026-10-16]]、[[repos/openai-codex/changes/2026-10-14|2026-10-14]]、[[repos/openai-codex/changes/2026-10-12|2026-10-12]]
