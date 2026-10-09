---
title: openai/codex
updated: 2026-10-09
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0)（2026-10-08）→ [[repos/openai-codex/releases/rust-v0.162.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.161.0|rust-v0.161.0]]、2026-10-07）
- プレリリース: [rust-v0.163.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.1)（2026-10-08）

## 直近の注目変更

- TUI の Daybreak の選択で API キーの機能ゲート（`CliDaybreak` と `ApiKeyCyberAccessPrograms`）に従う（[#52228](https://github.com/openai/codex/pull/52228)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 切断中に作られたマルチエージェント v2 の子のアイドル時の片付けを修正、`thread_unload_delay_secs` の既定を 1800 秒に（[#52081](https://github.com/openai/codex/pull/52081)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- MCP のユーザー確認の失敗理由を `openai/userVerificationReason` で保持（[#51808](https://github.com/openai/codex/pull/51808)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- Amazon Bedrock の GPT-6.1 Sol で Ultrafast を提供（[#51794](https://github.com/openai/codex/pull/51794)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- Guardian のレビューで永続化した送信元のコンテキストを読み込む（[#51734](https://github.com/openai/codex/pull/51734)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- Code Mode でツールの説明を先に置く機能フラグ `code_mode_tool_description_first`（[#51690](https://github.com/openai/codex/pull/51690)、[#51704](https://github.com/openai/codex/pull/51704)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]
- プロキシは許可・承認されたホスト名だけを DNS で解決（[#51650](https://github.com/openai/codex/pull/51650)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- `thread/list` に `excludedThreadIds`（[#51595](https://github.com/openai/codex/pull/51595)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- Windows で MXC サンドボックスを無効にする `windows.allow_mxc`（[#51547](https://github.com/openai/codex/pull/51547)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- realtime の会話の接続の完了通知とセッション単位の切り離し（[#51539](https://github.com/openai/codex/pull/51539)）📦 rust-v0.163.0-alpha.1 · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行、決着順の結果ヘルパー、ランク付きのツール検索
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、会話履歴の参照、チェックポイントからの復旧）
- [[repos/openai-codex/topics/MCP|MCP]] — MCP サーバーへの接続とエンタープライズ管理（EMA）の認証、elicitation・ユーザー確認
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・コマンドセンター・権限設定・worktree のツール
- [[repos/openai-codex/topics/インストール|インストール]] — インストールスクリプト（Windows PowerShell のチェックサム検証など）
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットやログインシェルの `PATH` など、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセス、exec-server のファイル読み書き、環境ごとの必須スキル、`apply_patch`
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任とモデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-09|2026-10-09]]、[[repos/openai-codex/changes/2026-10-07|2026-10-07]]、[[repos/openai-codex/changes/2026-10-05|2026-10-05]]、[[repos/openai-codex/changes/2026-10-02|2026-10-02]]、[[repos/openai-codex/changes/2026-09-30|2026-09-30]]
