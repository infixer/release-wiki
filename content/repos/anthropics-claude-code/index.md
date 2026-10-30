---
title: anthropics/claude-code
updated: 2026-10-30
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)（2026-10-30）→ [[repos/anthropics-claude-code/releases/v2.1.314|まとめ]]
- プレリリース: なし

## 直近の注目変更

- `permissions.blockWritesOutsideWorkingDirectories` を追加（どの権限モードでも作業ディレクトリの外への書き込みを拒否）。effort の上限で「Invalid effort level」が続く問題などを修正（[v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)）📦 v2.1.314 · トピック: [[repos/anthropics-claude-code/topics/管理設定|管理設定]]
- Claude apps gateway の upstream に `groups`（IdP グループで振り分け）、Bedrock upstream に `guardrail_trace`（[v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)）📦 v2.1.314 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- VS Code・Claude Desktop の Code タブにアイドル時の compaction、Bedrock の画像が多いセッションの「400 Input is too long.」を修正（[v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)）📦 v2.1.314 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- マーケットプレイスの全プラグインを claude-plugins-official からインストールし、古いコピーを削除。`ralph-wiggum` → `ralph-loop`、`claude-opus-4-5-migration` を廃止（[#105303](https://github.com/anthropics/claude-code/pull/105303)）📦 v2.1.312 · トピック: [[repos/anthropics-claude-code/topics/プラグインマーケットプレイス|プラグインマーケットプレイス]]
- `security-guidance` のコピーを削除（`/plugin install security-guidance@claude-plugins-official` で再インストール）（[#105270](https://github.com/anthropics/claude-code/pull/105270)）📦 v2.1.312 · トピック: [[repos/anthropics-claude-code/topics/プラグインマーケットプレイス|プラグインマーケットプレイス]]
- Claude apps gateway に `oidc.user_id_claim`、認識しないモデル名で短いシステムプロンプトを使う変更（`CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT=0` で全文）（[v2.1.312](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)）📦 v2.1.312 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- VS Code 拡張機能からのサインイン後に managed settings が取得されない問題を修正（[v2.1.312](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)）📦 v2.1.312 · トピック: [[repos/anthropics-claude-code/topics/管理設定|管理設定]]
- 200K トークン超えの標準コンテキストのセッションが「Usage credits required for 1M context」で止まる問題を修正（compact して続ける）（[v2.1.311](https://github.com/anthropics/claude-code/releases/tag/v2.1.311)）📦 v2.1.311 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- `SubagentStop` フックが 1 分に約 2 回動く問題、サブエージェントの worktree の早すぎる削除などを修正。`self-hosted-runner` に `--hold-idle-file`・`--max-hold-min`（[v2.1.311](https://github.com/anthropics/claude-code/releases/tag/v2.1.311)）📦 v2.1.311 · [[repos/anthropics-claude-code/releases/v2.1.311|まとめ]]
- Monitor ツールとプラグインの monitor が Bedrock・Vertex・Foundry やテレメトリ無効の環境でも使えるように、`effort-2025-11-24` などを拒否するゲートウェイでの失敗を再試行で回避（[v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)）📦 v2.1.310 · [[repos/anthropics-claude-code/releases/v2.1.310|まとめ]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]] — upstream ごとの `models`・タイムアウト・監査用のリクエスト ID・gateway へのログイン・`managed.policies[]` の `code` キー
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動
- [[repos/anthropics-claude-code/topics/mod-API|mod API]] — mod から使う `$` の API と UI 部品（`$.tool.register`・`$.ui.notify`・`Button`）
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]] — 組織が seat するセキュリティ既定の mod（user tier の制限、`allowManagedModsOnly` など）
- [[repos/anthropics-claude-code/topics/エージェントビュー|エージェントビュー]] — `claude agents` のエージェントビュー、バックグラウンドのセッション・サブエージェントの扱い
- [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]] — アイドル時の compaction、`/autocompact`、`@` メンションの扱い
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）と OpenTelemetry の出力（`claude_code.safety_event` など）
- [[repos/anthropics-claude-code/topics/フック|フック]] — command・HTTP・`prompt`・`agent` フックの失敗時の扱いと判定、mod の `classic.*` フック
- [[repos/anthropics-claude-code/topics/プラグインマーケットプレイス|プラグインマーケットプレイス]] — `claude-code-plugins` マーケットプレイス（claude-plugins-official からのインストール、`renames`、改名・廃止）
- [[repos/anthropics-claude-code/topics/管理設定|管理設定]] — managed settings・`managed-mcp.json`（HIPAA 向けの設定例、managed のフックの修正）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-10-30|2026-10-30]]、[[repos/anthropics-claude-code/changes/2026-10-28|2026-10-28]]、[[repos/anthropics-claude-code/changes/2026-10-26|2026-10-26]]、[[repos/anthropics-claude-code/changes/2026-10-23|2026-10-23]]、[[repos/anthropics-claude-code/changes/2026-10-21|2026-10-21]]
