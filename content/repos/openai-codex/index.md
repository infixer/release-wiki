---
title: openai/codex
updated: 2026-10-28
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0)（2026-10-27）→ [[repos/openai-codex/releases/rust-v0.165.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.164.0|rust-v0.164.0]]、2026-10-23）
- プレリリース: なし（安定版より新しいものは未公開。期間内に公開された最新のプレリリースは [rust-v0.166.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.3)、2026-10-27）

## 直近の注目変更

- 設定サーバーのポリシーを CLI・exec・TUI・app-server の起動とサインインに組み込み、`requirements.toml` で設定サーバーを選択（[#57175](https://github.com/openai/codex/pull/57175)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/管理要件|管理要件]]
- FedRAMP の API キー（`sk-proj-fedramp-` など）を既定で政府向けのエンドポイントに振り分け、`X-OpenAI-Fedramp: true` を送る（[#57178](https://github.com/openai/codex/pull/57178)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- `ModelClient::with_runtime_auth` によるモデルへのリクエストのランタイムの認証（[#57171](https://github.com/openai/codex/pull/57171)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/認証|認証]]
- ネットワークプロキシの MITM のフックで本文のシークレットを置き換える `body_secret_substitution`、制約付きの単体のプロキシの設定（`--strict`）（[#57174](https://github.com/openai/codex/pull/57174)、[#57180](https://github.com/openai/codex/pull/57180)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- `ThreadItem` に `startedAtMs`・`completedAtMs`、信頼しない追加のコンテキストの `name`、ロールアウトの予算の `enforce_limit`（[#57172](https://github.com/openai/codex/pull/57172)、[#57181](https://github.com/openai/codex/pull/57181)、[#57187](https://github.com/openai/codex/pull/57187)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- `model_providers.gcp.credential_file` で GCP のプロバイダーの ADC のファイルを指定（[#57188](https://github.com/openai/codex/pull/57188)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- マーケットプレイスの自動更新の失敗を起動時の警告として通知（TUI で `F2` で詳細）（[#57166](https://github.com/openai/codex/pull/57166)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/プラグイン|プラグイン]]
- 機能の発見の V2 を executor のバージョン `0.164.0` 以上に限り、それ以外は V1 に戻る（[#57192](https://github.com/openai/codex/pull/57192)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- トランスクリプトの選択を抜けたときに入力がコンポーザーに流れて下書きが送信される問題を修正（[#57224](https://github.com/openai/codex/pull/57224)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- Linux の拒否 glob の展開で探索のルートを読めないときは黙って飛ばさず失敗にする（[#57186](https://github.com/openai/codex/pull/57186)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧、タイムアウトの設定）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けと macOS の `lsof` の扱いなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック、ネットワークプロキシ（MITM のフックの本文のシークレットの置き換え、制約付きの単体の設定）
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキルと managed なフック、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・ソースに結び付けた fork・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）、FedRAMP の API キーの振り分け、ランタイムの認証
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`、ツールのクリティカルパスの計測（`critical_path_timing`）
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ、表示用の情報の省略
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）、拡張のリソースの保持期間、外部エージェントからの取り込み、`thread/memory/read`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有、通知しない追記を含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先、独自の設定サーバーと起動・サインインへの組み込みを含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ、Vertex AI（GCP）のプロバイダーと資格情報ファイル
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-28|2026-10-28]]、[[repos/openai-codex/changes/2026-10-26|2026-10-26]]、[[repos/openai-codex/changes/2026-10-23|2026-10-23]]、[[repos/openai-codex/changes/2026-10-21|2026-10-21]]、[[repos/openai-codex/changes/2026-10-19|2026-10-19]]
