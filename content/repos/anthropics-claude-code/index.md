---
title: anthropics/claude-code
updated: 2026-10-21
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)（2026-10-20）→ [[repos/anthropics-claude-code/releases/v2.1.305|まとめ]]
- プレリリース: なし

## 直近の注目変更

- `sandbox.allowNestedUserNamespaces`、`CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS`、2.1.304 のツール検索拒否で全リクエストが失敗するリグレッションを修正（[v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)）📦 v2.1.305 · [[repos/anthropics-claude-code/releases/v2.1.305|まとめ]]
- `/auto-mode-setup`、`/claude-api managed-agents-secure`、再開時の使用上限の警告（Pro・Max）（[v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)）📦 v2.1.304 · [[repos/anthropics-claude-code/releases/v2.1.304|まとめ]]
- mod の `tool.check` に `decider: "person"`・`e.isReadOnly`（[v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)）📦 v2.1.304 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- transcript ビューの compaction の要約にツール名、`modelOverrides` の表記ゆれで `/autocompact` が効かない問題を修正（[v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)）📦 v2.1.305 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- `CLAUDE_CODE_AUTO_MODE_MODEL`（クライアント側の auto mode 分類器のモデル）、Claude Design 単体版の終了予告（2026-12-14）、Read ツールで 128 MB 超の画像を拒否（[v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)）📦 v2.1.302 · [[repos/anthropics-claude-code/releases/v2.1.302|まとめ]]
- `/config` に `Idle compaction` の行、compact 中に止めたときの「Prompt is too long」を修正（[v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)）📦 v2.1.302 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- OpenTelemetry の `tool_decision` の `classifier_category` 欠落と属性数上限での押し出しを修正（[v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)）📦 v2.1.302 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- `WorktreeCreate` フックの worktree を確認なしで削除する問題、Edit・Write を対象にした PreToolUse フックで artifact の更新が拒否される問題を修正（[v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)）📦 v2.1.301 · トピック: [[repos/anthropics-claude-code/topics/フック|フック]]
- OpenTelemetry の `tool_decision` に `classifier_verdict`・`permission_mode`・`classifier_category`、vim モードの `%`、`CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS`（[v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)）📦 v2.1.301 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- mod に `virtualText`・`$.ui.view({ agentId })`・`prompt.change` フック、`agent.spawn` でワークフローのエージェントを書き換え（[v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)）📦 v2.1.300 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]

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
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-10-21|2026-10-21]]、[[repos/anthropics-claude-code/changes/2026-10-19|2026-10-19]]、[[repos/anthropics-claude-code/changes/2026-10-16|2026-10-16]]、[[repos/anthropics-claude-code/changes/2026-10-12|2026-10-12]]、[[repos/anthropics-claude-code/changes/2026-10-09|2026-10-09]]
