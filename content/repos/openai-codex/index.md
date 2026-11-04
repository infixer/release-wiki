---
title: openai/codex
updated: 2026-11-04
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.165.0|rust-v0.165.0]]、2026-10-27）
- プレリリース: なし（安定版より新しいものは未公開。期間内に公開された最新のプレリリースは [rust-v0.166.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6)、2026-10-29）
- 2026-11-02・2026-11-04 の回は collect で Release を取得できなかった（`Release を取得できませんでした: terminated`）ため、上は 2026-10-30 の回の時点の情報

## 直近の注目変更

- app-server でモデルプロバイダーの一覧と設定の書き込み（`modelProvider/list`・`modelProvider/config/write`）（[#58845](https://github.com/openai/codex/pull/58845)、[#58876](https://github.com/openai/codex/pull/58876)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- `daemon_auto_start` を廃止し、対象の起動では共有のデーモンを常に使う（使わないときは `--no-daemon`）（[#58940](https://github.com/openai/codex/pull/58940)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- ローカルの履歴を現在の ChatGPT アカウントに絞る `currentAccountOnly`、別アカウントのスレッドの再開を拒否する `cli_resume_account_check`（[#58918](https://github.com/openai/codex/pull/58918)、[#58890](https://github.com/openai/codex/pull/58890)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- 直接の Guardian のレビューでパッチと権限のリクエストを評価、`guardian_include_additional_context`（[#58899](https://github.com/openai/codex/pull/58899)、[#58903](https://github.com/openai/codex/pull/58903)、[#58931](https://github.com/openai/codex/pull/58931)、[#59238](https://github.com/openai/codex/pull/59238)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- メッセージボードの単体の HTTP の MCP サーバー・`message-board` のプラグイン・インメモリのランチャー（[#58904](https://github.com/openai/codex/pull/58904)、[#58908](https://github.com/openai/codex/pull/58908)、[#58909](https://github.com/openai/codex/pull/58909)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]、[[repos/openai-codex/topics/MCP|MCP]]
- 一時的な HTTP のフォールバックの後に WebSocket に戻る、プロバイダーの設定後のモデルの選択を修正（[#58950](https://github.com/openai/codex/pull/58950)、[#58945](https://github.com/openai/codex/pull/58945)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- 既存のリアルタイムの通話に呼び出し側のチャンネルでアタッチ（[#58953](https://github.com/openai/codex/pull/58953)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]
- エージェントのコマンドセンターを embedded のセッションでも使える（`codex agents --no-daemon`、タスクのツールを `codex_tui` の名前空間に）（[#58238](https://github.com/openai/codex/pull/58238)、[#58239](https://github.com/openai/codex/pull/58239)、[#58240](https://github.com/openai/codex/pull/58240)）⏳ 未リリース（2026-11-02 時点）· トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/デーモン|デーモン]]
- コマンドセンターとセッションのピッカーに未読の表示（[#58263](https://github.com/openai/codex/pull/58263)、[#58264](https://github.com/openai/codex/pull/58264)）⏳ 未リリース（2026-11-02 時点）· トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ゲートウェイの OAuth の資格情報をファイルに保存（`credentials_store = "file"`）、リモートの executor の資格情報の読み直しとタイムアウトからの復旧（[#58219](https://github.com/openai/codex/pull/58219)、[#58251](https://github.com/openai/codex/pull/58251)、[#58355](https://github.com/openai/codex/pull/58355)）⏳ 未リリース（2026-11-02 時点）· トピック: [[repos/openai-codex/topics/認証|認証]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（直接のレビューでのパッチ・権限のリクエストの評価、認可の証跡、会話履歴の参照、チェックポイントからの復旧、タイムアウトの設定）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト（キーボードでの選択・検索）・コマンドセンター（embedded のセッション、未読の表示）・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けと macOS の `lsof` の扱いなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック、ネットワークプロキシ（MITM のフックの本文のシークレットの置き換え、制約付きの単体の設定）
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキルと managed なフック、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・ソースに結び付けた fork・アカウントで絞った履歴の発見・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（`daemon_auto_start` の廃止、機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）、FedRAMP の API キーの振り分け、ランタイムの認証
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`（`--network-only`）、ツールのクリティカルパスの計測（`critical_path_timing`）
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ、表示用の情報の省略、モデルカタログによるガイダンスの上書き
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）、拡張のリソースの保持期間、外部エージェントからの取り込み、`thread/memory/read`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有、通知しない追記、単体の HTTP の MCP サーバーとプラグインを含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先、独自の設定サーバーと起動・サインインへの組み込み、OpenTelemetry の設定を含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、app-server のプロバイダーの一覧・設定の書き込み、Responses のリクエスト形式、接続ルーティングとリトライ（WebSocket への復帰）、Vertex AI（GCP）のプロバイダーと資格情報ファイル
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス・呼び出し側のチャンネルでのアタッチ

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-11-04|2026-11-04]]、[[repos/openai-codex/changes/2026-11-02|2026-11-02]]、[[repos/openai-codex/changes/2026-10-30|2026-10-30]]、[[repos/openai-codex/changes/2026-10-28|2026-10-28]]、[[repos/openai-codex/changes/2026-10-26|2026-10-26]]
