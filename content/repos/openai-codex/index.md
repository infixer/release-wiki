---
title: openai/codex
updated: 2026-09-28
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.158.0](https://github.com/openai/codex/releases/tag/rust-v0.158.0)（2026-09-28）→ [[repos/openai-codex/releases/rust-v0.158.0|まとめ]]
- プレリリース: なし（安定版より新しいプレリリースは無い。期間内で最後に出たプレリリースは [rust-v0.159.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.12)（2026-09-28））

## 直近の注目変更

- Mermaid フローチャートの記法サポートを拡充（[#48895](https://github.com/openai/codex/pull/48895)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- Windows サンドボックスのプロビジョニングサービスの起動を少し待つように（[#48829](https://github.com/openai/codex/pull/48829)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- 最初のターン前のスレッドをアーカイブ可能に（[#48828](https://github.com/openai/codex/pull/48828)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- Ghostty・Kitty でトランスクリプトのリンク上にハンドポインタを表示（[#48827](https://github.com/openai/codex/pull/48827)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- 音声の RTP タイムスタンプを 20 ms 単位に揃えるように（[#48824](https://github.com/openai/codex/pull/48824)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]
- Windows のターミナルでの SGR マウスレポートを修正（[#48799](https://github.com/openai/codex/pull/48799)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]
- ローカルの app-server で ChatGPT のブラウザサインインが動くように（[#48502](https://github.com/openai/codex/pull/48502)）📦 rust-v0.159.0-alpha.10 · トピック: [[repos/openai-codex/topics/認証|認証]]
- macOS のパッチ権限チェックでシステムのパスエイリアスを正しく扱うように（[#47879](https://github.com/openai/codex/pull/47879)）📦 rust-v0.159.0-alpha.10 · トピック: [[repos/openai-codex/topics/サンドボックス|サンドボックス]]
- Guardian の判定結果を OTLP ログに出力するオプション `otel.log_guardian_assessments` を追加（[#47870](https://github.com/openai/codex/pull/47870)）📦 rust-v0.159.0-alpha.10 · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- レビュー中に新しいユーザー入力が来ても Guardian レビューをやり直すように（[#47819](https://github.com/openai/codex/pull/47819)）📦 rust-v0.159.0-alpha.10 · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]

## トピック

- [[repos/openai-codex/topics/Code-Mode|Code Mode]] — コードを介したツール呼び出しの実行・レスポンス処理
- [[repos/openai-codex/topics/Guardian|Guardian]] — エージェント行動の自動レビュー・承認（認可の証跡、端末入力の承認）
- [[repos/openai-codex/topics/TUI|TUI]] — ターミナル上のフルスクリーン UI・トランスクリプト・数式・Mermaid 表示
- [[repos/openai-codex/topics/サンドボックス|サンドボックス]] — Windows・Linux・macOS 向けコマンド実行の隔離と権限チェック
- [[repos/openai-codex/topics/シェル・コマンド実行|シェル・コマンド実行]] — シェルスナップショットなど、コマンド実行時のシェル環境の扱い
- [[repos/openai-codex/topics/実行環境アクセス|実行環境アクセス]] — サンドボックス設定に紐づくファイルシステムアクセスの内部基盤
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モードとソケット接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインイン
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択と接続ルーティング
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック処理

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-09-28|2026-09-28]]、[[repos/openai-codex/changes/2026-09-24|2026-09-24]]
