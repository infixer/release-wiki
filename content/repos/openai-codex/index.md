---
title: openai/codex
updated: 2026-11-11
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1)（2026-11-10）→ [[repos/openai-codex/releases/rust-v0.167.1|まとめ]]（その前は [rust-v0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0)、2026-11-06 → [[repos/openai-codex/releases/rust-v0.167.0|まとめ]]）
- プレリリース: [rust-v0.169.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.9)（2026-11-10）

## 直近の注目変更

- TUI のサイドのチャットのチューザーで最新のプロンプトのプレビュー、発見の失敗時の再試行（[#60319](https://github.com/openai/codex/pull/60319)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- `thread/items/list` で MCP のプレーンテキストの出力を後回し（`deferOutput.mcpToolCall`）、リソース一覧に待機中のサーバー（`deferredServers`）（[#60390](https://github.com/openai/codex/pull/60390)、[#60423](https://github.com/openai/codex/pull/60423)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- ゲートウェイの OAuth で API キーなしにモデルカタログを発見（[#60414](https://github.com/openai/codex/pull/60414)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/認証|認証]]
- リアルタイムのアタッチの取り消しと `start_before` の期限（`RealtimeAttachmentOptions`）（[#60443](https://github.com/openai/codex/pull/60443)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]
- ワークスペース・アクセスプログラムの拒否と `content_policy_violation` を再試行しない終端のエラーに（[#60475](https://github.com/openai/codex/pull/60475)、[#60480](https://github.com/openai/codex/pull/60480)、[#60476](https://github.com/openai/codex/pull/60476)、[#60481](https://github.com/openai/codex/pull/60481)、[#60479](https://github.com/openai/codex/pull/60479)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- クラウドのスレッドの修正（古い失敗をトランスクリプトに含める、古いストリームの切断を抑える、再開でメッセージを重複させない）（[#60320](https://github.com/openai/codex/pull/60320)、[#60327](https://github.com/openai/codex/pull/60327)、[#60335](https://github.com/openai/codex/pull/60335)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 同梱の SQLite を 3.54 に更新、診断ログが失敗してもスレッドの保存を使える（[#60432](https://github.com/openai/codex/pull/60432)、[#60466](https://github.com/openai/codex/pull/60466)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/状態データベース|状態データベース]]
- `codex app-server daemon start` で機能の上書きを反映（[#60489](https://github.com/openai/codex/pull/60489)）📦 rust-v0.169.0-alpha.9 · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- TUI のサイドバーで複数のサイドのチャット（番号付きのタブ、引数付きの `/side` で新規作成）とチューザーの幅の変更（[#59784](https://github.com/openai/codex/pull/59784)、[#59824](https://github.com/openai/codex/pull/59824)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- TUI にクラウドのバックエンド（`TuiMultiBackend`）、クラウドへの送信の受領に従い不確かな下書きを自動で送り直さない（[#59828](https://github.com/openai/codex/pull/59828)、[#59817](https://github.com/openai/codex/pull/59817)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（直接のレビューでのパッチ・権限のリクエストの評価、同期のレビューの伸縮する予算、認可の証跡、会話履歴の参照、チェックポイントからの復旧、タイムアウトの設定）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、待機中のサーバーの一覧（`deferredServers`）と出力の後回し（`deferOutput.mcpToolCall`）、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト（キーボードでの選択・検索）・コマンドセンター（embedded のセッション、未読の表示）・ワークスペースモードのペインのフォーカス移動・サイドバーの複数のサイドのチャット・クラウドのバックエンド・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けと macOS の `lsof` の扱いなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック、ネットワークプロキシ（MITM のフックの本文のシークレットの置き換え、制約付きの単体の設定）
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキルと managed なフック、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`、同梱の SQLite 3.54、診断ログの失敗時もスレッドの保存を継続）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・ソースに結び付けた fork・アカウントで絞った履歴の発見・クラウドのスレッドの有効化と事前準備・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（`daemon_auto_start` の自動起動、機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）、ゲートウェイの認証（資格情報を書き出すコマンド・デバイスコード）、FedRAMP の API キーの振り分け、ランタイムの認証
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`（`--network-only`）、ツールのクリティカルパスの計測（`critical_path_timing`）
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ、表示用の情報の省略、モデルカタログによるガイダンスの上書き
- [[repos/openai-codex/topics/プロジェクトの指示|プロジェクトの指示]] — `AGENTS.md` などのプロジェクトの指示の読み込みと `project_doc_max_bytes` の予算（超過時の警告）
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）、拡張のリソースの保持期間、外部エージェントからの取り込み、`thread/memory/read`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任（`multi_agent` の機能フラグは非推奨）、fork、メッセージボード（独立したランタイム間の共有、通知しない追記、単体の HTTP の MCP サーバーとプラグインを含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先、独自の設定サーバーと起動・サインインへの組み込み、OpenTelemetry の設定を含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、app-server のプロバイダーの一覧・設定の書き込み、Responses のリクエスト形式（インクリメンタルなツールの宣言）、拡張の予算の確認、接続ルーティングとリトライ（WebSocket への復帰、ワークスペース・アクセスプログラムの拒否やコンテンツポリシーの違反は終端のエラー）、Vertex AI（GCP）のプロバイダーと資格情報ファイル
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス・呼び出し側のチャンネルでのアタッチ（取り消しと期限）

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-11-11|2026-11-11]]、[[repos/openai-codex/changes/2026-11-09|2026-11-09]]、[[repos/openai-codex/changes/2026-11-06|2026-11-06]]、[[repos/openai-codex/changes/2026-11-04|2026-11-04]]、[[repos/openai-codex/changes/2026-11-02|2026-11-02]]
