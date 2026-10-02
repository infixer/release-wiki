---
title: openai/codex rust-v0.160.0
date: 2026-10-02
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.160.0) · 公開: 2026-10-01

## 要点

- 新機能: agent command center で、キーボードで操作できる「Show more」から古いタスクを閲覧できる（#49106）
- 新機能: 対応するローカルの Linux X11 端末では、フルスクリーンモードでトランスクリプトのテキストを選択し、中クリックで貼り付けられる（#49112）
- 新機能: ポリシーが許せば、プロジェクトの外でワークスペースの既定値を使ってセッションを開始でき、再開時には保存した権限を復元する（#49160）
- 新機能: オプトインの Guardian レビュー機能として、以前のユーザー指示の取得と、エージェントのハンドオフからのコンテキストを追加（[#49036](https://github.com/openai/codex/pull/49036)、[#49057](https://github.com/openai/codex/pull/49057)）
- 修正: 再接続後、不確かな送信が解決してから未送信のキュー中メッセージを再開し、二重送信を避ける（#49105）。TUI がサーバーのプロバイダ・推論サマリー・verbosity の設定を保持し、再開・フォークの履歴に正しいセッションを表示（#49144, #49161, [#49171](https://github.com/openai/codex/pull/49171)）
- 修正: Windows サンドボックスの PowerShell フォールバックと長いパスの権限修復、バックグラウンドのヘルパーの不要なコンソールウィンドウを修正（[#49019](https://github.com/openai/codex/pull/49019), [#49058](https://github.com/openai/codex/pull/49058), #49098, #49164, #49386）
- 修正: サブエージェントが起動中の環境を保持し、その設定や準備の失敗を受け取る（[#49075](https://github.com/openai/codex/pull/49075)）。SQLite の接続設定とログによる停止を防ぎ、初期化エラーをタイムアウトとして隠さず表示（[#49032](https://github.com/openai/codex/pull/49032), #49102）。明示したプロバイダのモデルカタログに非対応の同梱モデルを含めず、更新失敗後に古いエントリを再利用しない（#49135）
- その他: プロバイダの資格情報の保存先と `env_key` の説明を明確化（#49118）。プラグインのマニフェストのキャッシュと HTTP 接続の再利用（#49099, #49100）、ログ用データベースの未使用領域のバックグラウンド回収（[#49069](https://github.com/openai/codex/pull/49069)）

## 関連

- 取り込み済みの PR: [[repos/openai-codex/changes/2026-09-30|2026-09-30 の変更]]（この版の変更の多くは前回取り込んだ PR）
- トピック: [[repos/openai-codex/topics/Guardian|Guardian]]、[[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]、[[repos/openai-codex/topics/マルチエージェント|マルチエージェント]]、[[repos/openai-codex/topics/状態データベース|状態データベース]]、[[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.159.3|rust-v0.159.3]]、[[repos/openai-codex/releases/rust-v0.159.0|rust-v0.159.0]]
