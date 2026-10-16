---
title: anthropics/claude-code
updated: 2026-10-16
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)（2026-10-15）→ [[repos/anthropics-claude-code/releases/v2.1.301|まとめ]]
- プレリリース: なし

## 直近の注目変更

- `WorktreeCreate` フックの worktree を確認なしで削除する問題、Edit・Write を対象にした PreToolUse フックで artifact の更新が拒否される問題を修正（[v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)）📦 v2.1.301 · トピック: [[repos/anthropics-claude-code/topics/フック|フック]]
- OpenTelemetry の `tool_decision` に `classifier_verdict`・`permission_mode`・`classifier_category`、vim モードの `%`、`CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS`（[v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)）📦 v2.1.301 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- mod に `virtualText`・`$.ui.view({ agentId })`・`prompt.change` フック、`agent.spawn` でワークフローのエージェントを書き換え（[v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)）📦 v2.1.300 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- OpenTelemetry に `cache_creation_5m_tokens`・`cache_creation_1h_tokens` と GenAI のセマンティック規約の属性、Claude Platform on AWS で `/advisor`（[v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)）📦 v2.1.300 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- エージェントビュー・`/tasks`・`claude agents` の表示や再開の扱いを修正（[v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)）📦 v2.1.300 · トピック: [[repos/anthropics-claude-code/topics/エージェントビュー|エージェントビュー]]
- アイドル時の compaction（200K トークン以上を約 54 分放置でキャッシュ切れ前に compact）と `CLAUDE_CODE_DISABLE_FILE_MENTIONS`（[v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)）📦 v2.1.299 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- managed settings の mod 向けに `$.prompt.media`・`$.session.identity()`、`Text`・`Box` の書式の追加（[v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)）📦 v2.1.299 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- HIPAA 向けの managed settings・`managed-mcp.json` の設定例を `examples/settings` に追加（[#100293](https://github.com/anthropics/claude-code/pull/100293)）📦 v2.1.296 · トピック: [[repos/anthropics-claude-code/topics/管理設定|管理設定]]
- managed の `PreToolUse`・`prompt` フックの拒否でターンを終える、`UserPromptSubmit` 中の Esc でプロンプトが通る問題などを修正（[v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)）📦 v2.1.296 · トピック: [[repos/anthropics-claude-code/topics/フック|フック]]
- Claude apps gateway: `managed.policies[]` に `code` キー（Claude Desktop の Code タブ）、サインインの退行を修正（[v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)）📦 v2.1.296 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]] — upstream ごとの `models`・タイムアウト・監査用のリクエスト ID・gateway へのログイン・`managed.policies[]` の `code` キー
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動
- [[repos/anthropics-claude-code/topics/mod-API|mod API]] — mod から使う `$` の API と UI 部品（`$.tool.register`・`$.ui.notify`・`Button`）
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]] — 組織が seat するセキュリティ既定の mod（user tier の制限、`allowManagedModsOnly` など）
- [[repos/anthropics-claude-code/topics/エージェントビュー|エージェントビュー]] — `claude agents` のエージェントビュー、バックグラウンドのセッション・サブエージェントの扱い
- [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]] — アイドル時の compaction、`/autocompact`、`@` メンションの扱い
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）と OpenTelemetry の出力
- [[repos/anthropics-claude-code/topics/フック|フック]] — command・HTTP・`prompt`・`agent` フックの失敗時の扱いと判定、mod の `classic.*` フック
- [[repos/anthropics-claude-code/topics/管理設定|管理設定]] — managed settings・`managed-mcp.json`（HIPAA 向けの設定例、managed のフックの修正）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-10-16|2026-10-16]]、[[repos/anthropics-claude-code/changes/2026-10-12|2026-10-12]]、[[repos/anthropics-claude-code/changes/2026-10-09|2026-10-09]]、[[repos/anthropics-claude-code/changes/2026-10-07|2026-10-07]]、[[repos/anthropics-claude-code/changes/2026-10-05|2026-10-05]]
