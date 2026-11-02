---
title: openai/codex
updated: 2026-11-02
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.165.0|rust-v0.165.0]]、2026-10-27）
- プレリリース: なし（安定版より新しいものは未公開。期間内に公開された最新のプレリリースは [rust-v0.166.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6)、2026-10-29）
- 2026-11-02 の回は collect で Release を取得できなかった（`Release を取得できませんでした: terminated`）ため、上は 2026-10-30 の回の時点の情報

## 直近の注目変更

- エージェントのコマンドセンターを embedded のセッションでも使える（`codex agents --no-daemon`、タスクのツールを `codex_tui` の名前空間に）（[#58238](https://github.com/openai/codex/pull/58238)、[#58239](https://github.com/openai/codex/pull/58239)、[#58240](https://github.com/openai/codex/pull/58240)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/デーモン|デーモン]]
- コマンドセンターとセッションのピッカーに未読の表示（[#58263](https://github.com/openai/codex/pull/58263)、[#58264](https://github.com/openai/codex/pull/58264)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- TUI のコンポーザーに添付画像のサムネイル、承認のプロンプト中にパッチの詳細を展開、`Ctrl+L` で履歴を残す（[#58261](https://github.com/openai/codex/pull/58261)、[#58281](https://github.com/openai/codex/pull/58281)、[#58266](https://github.com/openai/codex/pull/58266)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ゲートウェイの OAuth の資格情報をファイルに保存（`credentials_store = "file"`）、リモートの executor の資格情報の読み直しとタイムアウトからの復旧（[#58219](https://github.com/openai/codex/pull/58219)、[#58251](https://github.com/openai/codex/pull/58251)、[#58355](https://github.com/openai/codex/pull/58355)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- `features.apps_early_resource_discovery`・`AgentMcpMetadataRecipient`・メッセージボードの MCP アダプター（[#58352](https://github.com/openai/codex/pull/58352)、[#58378](https://github.com/openai/codex/pull/58378)、[#58341](https://github.com/openai/codex/pull/58341)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/MCP|MCP]]、[[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- ネットワークの承認のプロンプトをリクエストの終了で解決し、接続先ごとに順番に出す（[#58350](https://github.com/openai/codex/pull/58350)、[#58351](https://github.com/openai/codex/pull/58351)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- `thread/section/changed` の通知、使用量の無い応答もコンテキストの見積もりに含める（[#58380](https://github.com/openai/codex/pull/58380)、[#58404](https://github.com/openai/codex/pull/58404)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- 直接の Guardian のレビューの前に `PreToolUse` のフックを適用（[#58368](https://github.com/openai/codex/pull/58368)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- Code Mode のホストの出力の切り詰めを求める `code_mode_host_output_truncation` の機能フラグ（[#58159](https://github.com/openai/codex/pull/58159)）⏳ 未リリース（2026-10-30 時点）· トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]
- `GuardianAssessment` で Guardian の判定を応答のストリームで受け取る、レビューで親の接続のルーティングを保つ（[#57757](https://github.com/openai/codex/pull/57757)、[#57710](https://github.com/openai/codex/pull/57710)）📦 rust-v0.166.0 · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧、タイムアウトの設定）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト（キーボードでの選択・検索）・コマンドセンター（embedded のセッション、未読の表示）・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けと macOS の `lsof` の扱いなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック、ネットワークプロキシ（MITM のフックの本文のシークレットの置き換え、制約付きの単体の設定）
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキルと managed なフック、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・ソースに結び付けた fork・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）、FedRAMP の API キーの振り分け、ランタイムの認証
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`（`--network-only`）、ツールのクリティカルパスの計測（`critical_path_timing`）
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ、表示用の情報の省略
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）、拡張のリソースの保持期間、外部エージェントからの取り込み、`thread/memory/read`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有、通知しない追記、MCP アダプターを含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先、独自の設定サーバーと起動・サインインへの組み込み、OpenTelemetry の設定を含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ、Vertex AI（GCP）のプロバイダーと資格情報ファイル
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-11-02|2026-11-02]]、[[repos/openai-codex/changes/2026-10-30|2026-10-30]]、[[repos/openai-codex/changes/2026-10-28|2026-10-28]]、[[repos/openai-codex/changes/2026-10-26|2026-10-26]]、[[repos/openai-codex/changes/2026-10-23|2026-10-23]]
