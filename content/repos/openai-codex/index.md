---
title: openai/codex
updated: 2026-09-30
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.159.2](https://github.com/openai/codex/releases/tag/rust-v0.159.2)（2026-09-29）→ [[repos/openai-codex/releases/rust-v0.159.2|まとめ]]（同日に [[repos/openai-codex/releases/rust-v0.159.0|rust-v0.159.0]]、[[repos/openai-codex/releases/rust-v0.159.1|rust-v0.159.1]] も公開）
- プレリリース: なし（安定版より新しいプレリリースは無い。期間内で最後に出たプレリリースは [rust-v0.161.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.2)（2026-09-29））

## 直近の注目変更

- 会話履歴を検索・参照する Guardian レビューのツールを追加（`guardian_conversation_history_tools`、オプトイン）（[#49036](https://github.com/openai/codex/pull/49036)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- ハンドオフを考慮した Guardian の root コンテキスト（`guardian_root_handoff_context`、オプトイン）（[#49057](https://github.com/openai/codex/pull/49057)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- フォローアップ指示（`:codex-followup[...]`）をラベルとして表示（[#49089](https://github.com/openai/codex/pull/49089)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- フルスクリーンのステータス行に Plan mode の切り替えヒントを表示（[#49037](https://github.com/openai/codex/pull/49037)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ログ用 SQLite データベースの空き領域をバックグラウンドで回収（[#49069](https://github.com/openai/codex/pull/49069)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/状態データベース|状態データベース]]
- サブエージェントの起動時に準備中の環境を引き継ぐように（[#49075](https://github.com/openai/codex/pull/49075)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]
- 音声カタログの取得失敗を TUI に表示（[#49073](https://github.com/openai/codex/pull/49073)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]
- Windows サンドボックスの ACL 修復で長いパスに対応（[#49058](https://github.com/openai/codex/pull/49058)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- Windows の MXC サンドボックスで互換性のある PowerShell にフォールバック（[#49019](https://github.com/openai/codex/pull/49019)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- メッセージボードの通知で完了済みの回答が再開されないように（[#48982](https://github.com/openai/codex/pull/48982)）📦 rust-v0.159.2 · トピック: [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行・レスポンス処理
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、端末入力の承認）
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・数式・Mermaid 表示
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットなど、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセスの内部基盤
- [[repos/openai-codex/topics/状態データベース|状態データベース]] — スレッドのメタデータ・ログを保存するローカルの SQLite データベース
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モードとソケット接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインイン
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択と接続ルーティング
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック処理

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-09-30|2026-09-30]]、[[repos/openai-codex/changes/2026-09-28|2026-09-28]]、[[repos/openai-codex/changes/2026-09-24|2026-09-24]]
