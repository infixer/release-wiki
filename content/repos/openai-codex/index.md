---
title: openai/codex
updated: 2026-10-26
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)（2026-10-23）→ [[repos/openai-codex/releases/rust-v0.164.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.163.0|rust-v0.163.0]]、2026-10-15）
- プレリリース: [rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1)（2026-10-23）

## 直近の注目変更

- 環境の managed なフックを環境ごとに発見し、その環境の executor（シェル・作業ディレクトリ・ネットワークのポリシー）で実行（[#56302](https://github.com/openai/codex/pull/56302)、[#56304](https://github.com/openai/codex/pull/56304)、[#56343](https://github.com/openai/codex/pull/56343)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]]
- `thread/fork` の `attachToSource` でソースに結び付けた実験的な fork、`thread/sample` の `threadSource`（[#56351](https://github.com/openai/codex/pull/56351)、[#56364](https://github.com/openai/codex/pull/56364)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- `config_server` で独自の設定サーバーから管理された設定のバンドルを読み込む（[#56314](https://github.com/openai/codex/pull/56314)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/管理要件|管理要件]]
- TUI のセッションのピッカーで `Cwd` を今のディレクトリに限り、worktree をまたぐ `Repo` のフィルターとコマンドセンターの `Directory` のグループ分けを追加（[#56308](https://github.com/openai/codex/pull/56308)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- Guardian のレビュー全体の予算を `auto_review.timeout_ms` で設定（既定 90 秒、`0` で無制限）、開発中の `guardianv3`（[#56371](https://github.com/openai/codex/pull/56371)、[#56459](https://github.com/openai/codex/pull/56459)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- メッセージボードの通知しない `append`・`upsert_channel`・購読中のチャンネルの一覧（[#56461](https://github.com/openai/codex/pull/56461)、[#56494](https://github.com/openai/codex/pull/56494)、[#56495](https://github.com/openai/codex/pull/56495)）📦 rust-v0.165.0-alpha.1 ほか · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- エージェントのメッセージによる起床が中断と Plan モードを尊重（[#56330](https://github.com/openai/codex/pull/56330)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- スレッドのメモリの要約を読む実験的な `thread/memory/read`、外部エージェントのメモリの取り込みの v2 対応とロック（[#56465](https://github.com/openai/codex/pull/56465)、[#56414](https://github.com/openai/codex/pull/56414)、[#56462](https://github.com/openai/codex/pull/56462)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/メモリ|メモリ]]
- プロバイダーの `model_not_found` を再試行しない終端の失敗に（`modelNotFound`）（[#56445](https://github.com/openai/codex/pull/56445)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- モデルカタログで書き込み可能なルートの権限の文言と `history`・`notes` などのツールの定義を上書き（[#56309](https://github.com/openai/codex/pull/56309)、[#56313](https://github.com/openai/codex/pull/56313)）📦 rust-v0.165.0-alpha.1 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧、タイムアウトの設定）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキルと managed なフック、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・ソースに結び付けた fork・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ、表示用の情報の省略
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）、拡張のリソースの保持期間、外部エージェントからの取り込み、`thread/memory/read`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有、通知しない追記を含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先、独自の設定サーバーを含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-26|2026-10-26]]、[[repos/openai-codex/changes/2026-10-23|2026-10-23]]、[[repos/openai-codex/changes/2026-10-21|2026-10-21]]、[[repos/openai-codex/changes/2026-10-19|2026-10-19]]、[[repos/openai-codex/changes/2026-10-16|2026-10-16]]
