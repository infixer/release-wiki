---
title: openai/codex
updated: 2026-10-12
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)（2026-10-09）→ [[repos/openai-codex/releases/rust-v0.162.1|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.162.0|rust-v0.162.0]]、2026-10-08）
- プレリリース: [rust-v0.163.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5)（2026-10-10）

## 直近の注目変更

- 起動時の下書きの復元で保留中の Vim の Replace のキーを正しく扱う（[#53148](https://github.com/openai/codex/pull/53148)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ツールの出力をモデル履歴に残す `TurnToolOutput` の `retain`（[#52671](https://github.com/openai/codex/pull/52671)、[#52686](https://github.com/openai/codex/pull/52686)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- 仲介した資格情報の別名で MITM のフックを回避できないように（[#52661](https://github.com/openai/codex/pull/52661)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- サブエージェントでモデルの既定のコンテキスト設定を使う `subagent_default_context_limits`（[#52659](https://github.com/openai/codex/pull/52659)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- バックグラウンドサーバーとの機能の互換性確認をコマンドラインの明示的な上書きだけに（[#52648](https://github.com/openai/codex/pull/52648)）📦 rust-v0.163.0-alpha.5（rust-v0.162.1 にも記載）· トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- ID でスレッドのアイテムを取得する実験的な `thread/items/read`（[#52637](https://github.com/openai/codex/pull/52637)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- メッセージボードの権限の公開と構造化された拒否（[#52568](https://github.com/openai/codex/pull/52568)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- フル fork で親の履歴のプレフィックスを保つ `preserve_fork_prefix`（[#52535](https://github.com/openai/codex/pull/52535)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- gRPC の Code Mode でセッションごとのルーティングを保持（[#52381](https://github.com/openai/codex/pull/52381)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/Code-Mode|Code Mode]]
- app-server でスレッドの既読状態を扱う実験的な API（`readState`・`thread/readState/changed`・`thread/readState/update`）（[#52350](https://github.com/openai/codex/pull/52350)、[#52384](https://github.com/openai/codex/pull/52384)、[#52395](https://github.com/openai/codex/pull/52395)）📦 rust-v0.163.0-alpha.5 · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]

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
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション・既読状態・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイスの追加と、ローカル・managed のソースのパスの照合
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-12|2026-10-12]]、[[repos/openai-codex/changes/2026-10-09|2026-10-09]]、[[repos/openai-codex/changes/2026-10-07|2026-10-07]]、[[repos/openai-codex/changes/2026-10-05|2026-10-05]]、[[repos/openai-codex/changes/2026-10-02|2026-10-02]]
