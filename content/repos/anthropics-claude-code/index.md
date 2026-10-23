---
title: anthropics/claude-code
updated: 2026-10-23
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309)（2026-10-22）→ [[repos/anthropics-claude-code/releases/v2.1.309|まとめ]]
- プレリリース: なし

## 直近の注目変更

- サンドボックスの Bash が起動ファイルをサンドボックス外で実行する問題、`--mcp-config` の MCP 設定ファイルを変更できる問題、Bash の権限チェック・worktree の隔離のすり抜けを修正（[v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309)）📦 v2.1.309 · [[repos/anthropics-claude-code/releases/v2.1.309|まとめ]]
- 大きなネストした CLAUDE.md で compact を繰り返す問題を修正（上限超えは先頭だけ読み込む）（[v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309)）📦 v2.1.309 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- `/claude-api api-version`（API バージョン `2026-10-21` への移行）、HTTP MCP のツール呼び出しの二重送信など MCP の修正（[v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307)）📦 v2.1.307 · [[repos/anthropics-claude-code/releases/v2.1.307|まとめ]]
- OpenTelemetry の `claude_code.safety_event` を追加（[v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307)）📦 v2.1.307 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- gateway のセッションで `CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS` が無視される問題などを修正（[v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307)）📦 v2.1.307 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- 「Autocompact is thrashing」の一部、MCP ツールが多いセッションでの「prompt is too long」と不要な compaction を修正（[v2.1.306](https://github.com/anthropics/claude-code/releases/tag/v2.1.306)・[v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307)）📦 v2.1.306 / v2.1.307 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- `sandbox.allowNestedUserNamespaces`、`CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS`、2.1.304 のツール検索拒否で全リクエストが失敗するリグレッションを修正（[v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)）📦 v2.1.305 · [[repos/anthropics-claude-code/releases/v2.1.305|まとめ]]
- transcript ビューの compaction の要約にツール名、`modelOverrides` の表記ゆれで `/autocompact` が効かない問題を修正（[v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)）📦 v2.1.305 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- `/auto-mode-setup`、`/claude-api managed-agents-secure`、再開時の使用上限の警告（Pro・Max）（[v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)）📦 v2.1.304 · [[repos/anthropics-claude-code/releases/v2.1.304|まとめ]]
- mod の `tool.check` に `decider: "person"`・`e.isReadOnly`（[v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)）📦 v2.1.304 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]

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
- [[repos/anthropics-claude-code/topics/管理設定|管理設定]] — managed settings・`managed-mcp.json`（HIPAA 向けの設定例、managed のフックの修正）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-10-23|2026-10-23]]、[[repos/anthropics-claude-code/changes/2026-10-21|2026-10-21]]、[[repos/anthropics-claude-code/changes/2026-10-19|2026-10-19]]、[[repos/anthropics-claude-code/changes/2026-10-16|2026-10-16]]、[[repos/anthropics-claude-code/changes/2026-10-12|2026-10-12]]
