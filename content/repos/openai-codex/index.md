---
title: openai/codex
updated: 2026-10-23
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)（2026-10-15）→ [[repos/openai-codex/releases/rust-v0.163.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.162.1|rust-v0.162.1]]、2026-10-09）
- プレリリース: [rust-v0.164.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.3)（2026-10-17）

## 直近の注目変更

- 診断レポートをアップロードせずにローカルへ ZIP で保存する app-server の RPC（[#55940](https://github.com/openai/codex/pull/55940)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]]
- NFS 上の SQLite を `DELETE` ジャーナルモードに移行する実験的な `codex migrate-nfs-db`（[#55975](https://github.com/openai/codex/pull/55975)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/状態データベース|状態データベース]]
- Desktop のワークスペースの保存先を管理要件 `application.storage.*` で指定（[#55965](https://github.com/openai/codex/pull/55965)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/管理要件|管理要件]]
- ローカルのメッセージボードの保存先の名前空間 `storage_namespace` と、公開するツールの選択 `MessageBoardTool`（[#55971](https://github.com/openai/codex/pull/55971)、[#55973](https://github.com/openai/codex/pull/55973)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- クラウドのプラグイン・スキルのカタログをターン途中の認証の変化に合わせて更新し、失敗時は最大 5 分のバックオフ（[#55957](https://github.com/openai/codex/pull/55957)、[#55968](https://github.com/openai/codex/pull/55968)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/プラグイン|プラグイン]]
- スレッドの再開・巻き戻しで保存済みのサービスティア・推論の要約・パーソナリティを保つ（[#55923](https://github.com/openai/codex/pull/55923)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- エンタープライズの MCP でアカウントの付与を優先し、拒否された付与を覚えて再認証を求める（[#55859](https://github.com/openai/codex/pull/55859)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- 資格情報のマスクが使えないときも警告付きで unified exec のコマンドを実行（[#55719](https://github.com/openai/codex/pull/55719)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]]
- 管理された app-server とアップデーターの stderr ログに上限（1 MiB で切り詰め）（[#55856](https://github.com/openai/codex/pull/55856)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- TUI の `/permissions` を保留中の権限の変更のガードに通し、接続先のプロジェクトでモデルのアクセスを更新（[#55682](https://github.com/openai/codex/pull/55682)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索、gRPC のセッションのルーティング
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）・OAuth の認証、ツール一覧の更新と `toolListMeta`、elicitation・承認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証、古いリリースの片付けなど）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き（ストリーミングの書き込み）、環境間のファイルのコピー、環境ごとの必須スキル、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース（NFS 向けの `codex migrate-nfs-db`）
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード（機能フラグの照合）、起動時の設定の確認（`--print-startup-config`）、ソケット接続（WebSocket の zstd 圧縮）とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い、Responses API プロキシの認証（GitHub Actions の OIDC・フェデレーション）
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構、診断レポートのローカルの ZIP 保存と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイス・ソースのパスの照合、内容に結び付いたフックの承認・アーカイブの展開、クラウドのカタログの更新とバックオフ
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）と拡張のリソースの保持期間
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有を含む）、エージェントのメッセージによる起床、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定（Desktop のワークスペースの保存先を含む）
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-23|2026-10-23]]、[[repos/openai-codex/changes/2026-10-21|2026-10-21]]、[[repos/openai-codex/changes/2026-10-19|2026-10-19]]、[[repos/openai-codex/changes/2026-10-16|2026-10-16]]、[[repos/openai-codex/changes/2026-10-14|2026-10-14]]
