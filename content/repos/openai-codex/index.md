---
title: openai/codex
updated: 2026-11-09
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0)（2026-10-29）→ [[repos/openai-codex/releases/rust-v0.166.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.165.0|rust-v0.165.0]]、2026-10-27）
- プレリリース: なし（安定版より新しいものは未公開。期間内に公開された最新のプレリリースは [rust-v0.166.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6)、2026-10-29）
- 2026-11-02・2026-11-04・2026-11-09 の回（`Release を取得できませんでした: terminated`）と 2026-11-06 の回（`Release を取得できませんでした: HTTP 504`）は collect で Release を取得できなかったため、上は 2026-10-30 の回の時点の情報

## 直近の注目変更

- TUI のサイドバーで複数のサイドのチャット（番号付きのタブ、引数付きの `/side` で新規作成）とチューザーの幅の変更（[#59784](https://github.com/openai/codex/pull/59784)、[#59824](https://github.com/openai/codex/pull/59824)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- TUI にクラウドのバックエンド（`TuiMultiBackend`）、クラウドへの送信の受領に従い不確かな下書きを自動で送り直さない（[#59828](https://github.com/openai/codex/pull/59828)、[#59817](https://github.com/openai/codex/pull/59817)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ゲートウェイの認証で資格情報を書き出すコマンド（`gateway_oauth.credential_export`）とデバイスコードの認可、`account/gatewayOAuth/*` でプロバイダーを選べる（[#59787](https://github.com/openai/codex/pull/59787)、[#59816](https://github.com/openai/codex/pull/59816)、[#59822](https://github.com/openai/codex/pull/59822)、[#59819](https://github.com/openai/codex/pull/59819)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- ランタイムの認証を資格情報の取得元ごとに登録・再利用（[#59823](https://github.com/openai/codex/pull/59823)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- 通常の OpenAI Responses でインクリメンタルなツールの宣言（`incremental_tools_legacy`、既定で無効）、拡張の予算の確認（`SessionBudgetExceeded`）、最終回答のモデレーションの判定（[#59832](https://github.com/openai/codex/pull/59832)、[#59794](https://github.com/openai/codex/pull/59794)、[#59842](https://github.com/openai/codex/pull/59842)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- Guardian Decisions で暗黙の FedRAMP の API キーを拒否、モデルの切り替えで承認のレビュアーを計算し直す（[#59905](https://github.com/openai/codex/pull/59905)、[#59893](https://github.com/openai/codex/pull/59893)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- `features.daemon_auto_start` を安定版・既定で有効の設定として復活（2026-11-04 の回の廃止を取り消し）（[#59447](https://github.com/openai/codex/pull/59447)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- `[features].multi_agent` を非推奨に（無効化は `[agents].enabled = false`）、有効な旧フラグがあってもプロジェクトのエージェントのオプトインを保つ（[#59479](https://github.com/openai/codex/pull/59479)、[#59496](https://github.com/openai/codex/pull/59496)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- ワークスペースモードで左右の会話へフォーカスを移す `focus_pane_left`・`focus_pane_right`、ペインの切り替えでトランスクリプトの状態を保つ（[#59287](https://github.com/openai/codex/pull/59287)、[#59472](https://github.com/openai/codex/pull/59472)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 推論の要約の復元、ツールの実行で途切れたアシスタントのメッセージを修正（[#59698](https://github.com/openai/codex/pull/59698)、[#59700](https://github.com/openai/codex/pull/59700)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（直接のレビューでのパッチ・権限のリクエストの評価、同期のレビューの伸縮する予算、認可の証跡、会話履歴の参照、チェックポイントからの復旧、タイムアウトの設定）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト（キーボードでの選択・検索）・コマンドセンター（embedded のセッション、未読の表示）・ワークスペースモードのペインのフォーカス移動・サイドバーの複数のサイドのチャット・クラウドのバックエンド・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けと macOS の `lsof` の扱いなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック、ネットワークプロキシ（MITM のフックの本文のシークレットの置き換え、制約付きの単体の設定）
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキルと managed なフック、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・ソースに結び付けた fork・アカウントで絞った履歴の発見・クラウドのスレッドの有効化と事前準備・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（`daemon_auto_start` の自動起動、機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）、ゲートウェイの認証（資格情報を書き出すコマンド・デバイスコード）、FedRAMP の API キーの振り分け、ランタイムの認証
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`（`--network-only`）、ツールのクリティカルパスの計測（`critical_path_timing`）
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ、表示用の情報の省略、モデルカタログによるガイダンスの上書き
- [[repos/openai-codex/topics/プロジェクトの指示|プロジェクトの指示]] — `AGENTS.md` などのプロジェクトの指示の読み込みと `project_doc_max_bytes` の予算（超過時の警告）
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）、拡張のリソースの保持期間、外部エージェントからの取り込み、`thread/memory/read`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任（`multi_agent` の機能フラグは非推奨）、fork、メッセージボード（独立したランタイム間の共有、通知しない追記、単体の HTTP の MCP サーバーとプラグインを含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先、独自の設定サーバーと起動・サインインへの組み込み、OpenTelemetry の設定を含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、app-server のプロバイダーの一覧・設定の書き込み、Responses のリクエスト形式（インクリメンタルなツールの宣言）、拡張の予算の確認、接続ルーティングとリトライ（WebSocket への復帰）、Vertex AI（GCP）のプロバイダーと資格情報ファイル
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス・呼び出し側のチャンネルでのアタッチ

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-11-09|2026-11-09]]、[[repos/openai-codex/changes/2026-11-06|2026-11-06]]、[[repos/openai-codex/changes/2026-11-04|2026-11-04]]、[[repos/openai-codex/changes/2026-11-02|2026-11-02]]、[[repos/openai-codex/changes/2026-10-30|2026-10-30]]
