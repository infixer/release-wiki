---
title: openai/codex rust-v0.161.0
date: 2026-10-09
tags:
  - repo/openai-codex
  - release
---

[Release ページ](https://github.com/openai/codex/releases/tag/rust-v0.161.0) · 公開: 2026-10-07

## 要点

- 新機能: 同梱のカタログと Amazon Bedrock のカタログで GPT-6.1 Sol が既定のモデルに（#49318, #49339）。Bedrock は対応モデルでマルチエージェント V2 と Ultra の推論に対応し、Bedrock Mantle は AWS GovCloud のリージョンも受け付ける（#49345, #49813）
- 新機能: 起動中のターミナルのセッションから `/mcp login <name>` で MCP サーバーにサインインできる（#49290）
- 新機能: 音声会話でマイク・スピーカー・マイクの入力チャンネルを選べ、設定はローカルに保存される（#49437, #49836）
- 新機能: Daybreak は `--enable cli_daybreak` か `features.cli_daybreak=true` によるオプトインに。`daybreak=true` だけでは有効にならず、既定では操作・表示が隠れ、`/daybreak` は使えず、Cyber の自動ルーティングも行わない（保存済みの Daybreak のスレッドでも同様。保存した設定は残る）（#49856, #49858, #49859, #49861, [#51207](https://github.com/openai/codex/pull/51207)）
- 新機能: `codex exec --cyber-access-program` や TypeScript SDK の `cyberAccessProgram` で、ターンごとに Cyber のアクセスプログラムを選べる。`cli_daybreak` が無効でも使え、保存した選択は変えない（#49939, [#51207](https://github.com/openai/codex/pull/51207)）
- 修正: 承認されたファイルシステムの昇格で、拒否した読み取りとネットワークの制限を保ったまま広い書き込みを許可できる。バックグラウンドタスクは元のターンの権限を保持（#49353, #49880）。明示した起動時の権限がターミナルの再接続や新しいセッションでも残り、暗黙のクライアント設定がサーバーや保存済みスレッドの Web 検索の設定を上書きしない（#49809, #49799）
- 修正: 管理者権限の Windows のターミナルのセッションが embedded のサーバーで起動でき、サンドボックスの PowerShell が保護されたユーザープロファイル配下の相対パスを保持（#49855, #49690）。貼り付け検出の期限切れ後に Enter でバッファの入力を送信（Vim の挿入モードを含む）（#49810）
- 修正: スレッドの再開に最新の確定済みの履歴を含め、起動時に復旧可能な SQLite の破損を早めに検出し、壊れたデータベースをバックアップとして残す（#49599, #49701）。Responses の再試行と WebSocket から HTTP へのフォールバックがサーバーの再試行の指示に従う（#49441）
- その他: 認証のガイドがキーリングへの保存を考慮した説明に（#49361）。古い alpha やホットフィックスの公開で npm の alpha タグが後戻りしない（#49704）

## 関連

- 取り込み済みの PR: この版の変更の多くは以前の回に取り込んだ PR（[[repos/openai-codex/changes/2026-09-30|2026-09-30 の変更]]、[[repos/openai-codex/changes/2026-10-02|2026-10-02 の変更]] など）。公開はこの回の [[repos/openai-codex/changes/2026-10-09|2026-10-09 の変更]] の期間内
- トピック: [[repos/openai-codex/topics/モデル・接続設定|モデル・接続設定]]、[[repos/openai-codex/topics/MCP|MCP]]、[[repos/openai-codex/topics/リアルタイム音声|リアルタイム音声]]、[[repos/openai-codex/topics/TUI|TUI]]、[[repos/openai-codex/topics/サンドボックス|サンドボックス]]、[[repos/openai-codex/topics/状態データベース|状態データベース]]、[[repos/openai-codex/topics/セッション・スレッド管理|セッション・スレッド管理]]、[[repos/openai-codex/topics/認証|認証]]
- 前のリリース: [[repos/openai-codex/releases/rust-v0.160.1|rust-v0.160.1]]、[[repos/openai-codex/releases/rust-v0.160.0|rust-v0.160.0]]
- 次のリリース: [[repos/openai-codex/releases/rust-v0.162.0|rust-v0.162.0]]
