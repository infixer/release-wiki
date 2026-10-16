---
title: openai/codex
updated: 2026-10-16
tags:
  - repo/openai-codex
---

[GitHub](https://github.com/openai/codex) · ブランチ: `main`

## 最新リリース

- 安定版: [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)（2026-10-15）→ [[repos/openai-codex/releases/rust-v0.163.0|まとめ]]（その前は [[repos/openai-codex/releases/rust-v0.162.1|rust-v0.162.1]]、2026-10-09）
- プレリリース: なし（安定版より新しいものは無い。直近は rust-v0.163.0-alpha.10.2、2026-10-15）

## 直近の注目変更

- `features.worktrees`・`features.realtime_conversation` を廃止し、worktree の作成と TUI の音声を機能フラグなしで利用可能に（[#54175](https://github.com/openai/codex/pull/54175)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]
- リモートの MCP サーバーで `SYSTEMDRIVE`・`LOCALAPPDATA` を保つ（[#54069](https://github.com/openai/codex/pull/54069)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- 非同期の Guardian の承認をレビューの後始末を待たずに返す（[#54039](https://github.com/openai/codex/pull/54039)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/Guardian|Guardian]]
- メモリの拡張のリソースの保持を 14 日に、抽出の入力を最大 8 MiB に（[#54033](https://github.com/openai/codex/pull/54033)、[#53940](https://github.com/openai/codex/pull/53940)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/メモリ|メモリ]]
- ロールアウトの圧縮（`.jsonl.zst`）後のセッションの検索と再開を修正（[#54008](https://github.com/openai/codex/pull/54008)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- リモート環境でもホストの MCP とプラグインの設定をローカル環境から作る（[#53990](https://github.com/openai/codex/pull/53990)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/MCP|MCP]]
- コンパクションが失敗しても会話の履歴に途中の出力を残さない（[#53932](https://github.com/openai/codex/pull/53932)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]
- Unix でデーモンの更新処理のソケットのパス長と起動の準備完了を修正（[#53845](https://github.com/openai/codex/pull/53845)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- 使わなくなったデーモンのリリースを安全に削除（[#53827](https://github.com/openai/codex/pull/53827)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]
- WinGet のパッケージからデーモンをインストールできるように（[#53811](https://github.com/openai/codex/pull/53811)）⏳ 未リリース · トピック: [[repos/openai-codex/topics/デーモン|デーモン]]

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
- [[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]] — スレッドの起動・再開・アーカイブ・ゴール・コンパクション（非同期コンパクションを含む）・既読状態・状態管理
- [[repos/openai-codex/topics/デーモン|デーモン]] — app-server の共有デーモン/embedded モード、ソケット接続とリモートコントロールの再接続
- [[repos/openai-codex/topics/認証|認証]] — ChatGPT へのブラウザサインインとアカウント切り替え時の扱い
- [[repos/openai-codex/topics/フィードバック・診断|フィードバック・診断]] — 利用状況・設定のレポート機構と `codex doctor`
- [[repos/openai-codex/topics/プラグイン|プラグイン]] — プラグインのマーケットプレイスの追加と、ローカル・managed のソースのパスの照合
- [[repos/openai-codex/topics/メモリ|メモリ]] — 過去のロールアウトからのメモリの抽出（入力の上限）と拡張のリソースの保持期間
- [[repos/openai-codex/topics/マルチエージェント|マルチエージェント]] — `spawn_agent` などによるサブエージェントへの委任、fork、メッセージボード（独立したランタイム間の共有を含む）、モデルカタログ
- [[repos/openai-codex/topics/管理要件|管理要件]] — `requirements.toml` などの managed requirements による機能ゲートと設定
- [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]] — モデル・サービスティアの選択、Responses のリクエスト形式、接続ルーティングとリトライ
- [[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]] — 音声会話（realtime voice）の文字起こし・音声トラック・入出力デバイス

## 取り込み

- [[repos/openai-codex/log|取り込み履歴]]
- 最近の変更: [[repos/openai-codex/changes/2026-10-16|2026-10-16]]、[[repos/openai-codex/changes/2026-10-14|2026-10-14]]、[[repos/openai-codex/changes/2026-10-12|2026-10-12]]、[[repos/openai-codex/changes/2026-10-09|2026-10-09]]、[[repos/openai-codex/changes/2026-10-07|2026-10-07]]
