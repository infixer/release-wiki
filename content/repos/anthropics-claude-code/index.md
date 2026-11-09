---
title: anthropics/claude-code
updated: 2026-11-09
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)（2026-11-06）→ [[repos/anthropics-claude-code/releases/v2.1.319|まとめ]]
- プレリリース: なし

## 直近の注目変更

- MCP tasks に対応（すぐにバックグラウンドへ移す）、`permissions.denyInsteadOfPrompting`、`CLAUDE_CODE_DISABLE_FEATURE_FLAGS`、`/tasks` の「Earlier in this session」、`/claude-api latency-optimize`。テレメトリ・feature flag を切った環境の auto mode はサーバーで確認できない呼び出しを確認・拒否に（`CLAUDE_CODE_AUTO_MODE_SERVER`）（[v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)）📦 v2.1.319 · [[repos/anthropics-claude-code/releases/v2.1.319|まとめ]]
- Claude apps gateway に `admin.pooled_conflict_rule`・`admin.pooled_priority_order`・`login_notice`・`CLAUDE_GATEWAY_LOG_FORMAT=json`、`/usage` に支出（[v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)）📦 v2.1.319 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- ビルトインの `privacy` mod のソースを `mods/privacy` に公開（挙動の変更なし。`$.session.identity` の型を追加）（[#107768](https://github.com/anthropics/claude-code/pull/107768)）⏳ 未リリース · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- mod の `$.model.fork` に `effort`、Claude apps gateway の `mantle` upstream に `assume_role`、`claude auth status` にサインインの期限（`loginExpiresAt`）。`--continue` で会話が失われる 2.1.314 の退行などを修正（[v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)）📦 v2.1.318 · [[repos/anthropics-claude-code/releases/v2.1.318|まとめ]]
- アイドル時の compaction が要約ではない返答で会話を置き換える問題を修正（[v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)）📦 v2.1.318 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]
- Claude apps gateway の管理 API にコストレポート `GET /v1/organizations/analytics/cost` と IdP グループの日次記録（[v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)）📦 v2.1.317 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- Agent SDK のフックのコールバックに `onFailure: "block"`、OTel に `anthropic.plan` などの属性（[v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)）📦 v2.1.317 · トピック: [[repos/anthropics-claude-code/topics/フック|フック]]、[[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- Opus 4.8 の fast mode を非推奨に（2026-11-30 に削除。削除後はエラーになり通常の Opus 4.8 にはフォールバックしない。Opus 5.5 へ移行）。`CLAUDE_CODE_DISABLE_ULTRATHINK`・`CLAUDE_CODE_SUBAGENT_EFFORT` を追加（[v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)）📦 v2.1.316 · [[repos/anthropics-claude-code/releases/v2.1.316|まとめ]]
- Claude apps gateway にグループ共有の月間予算 `pooled_budget`、`managed.policy_mode: layered`、Bedrock の `guardrail.input_tagging`。全モデルを `availableModels` などで確認するよう修正（[v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)）📦 v2.1.316 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- 終了時にシェルコマンドが残る問題、`claude auth login` が gateway 必須の環境で拒否される問題、PowerShell フックの終了コード 2 などを修正（[v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)）📦 v2.1.316 · トピック: [[repos/anthropics-claude-code/topics/管理設定|管理設定]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]] — upstream ごとの `models`・`groups`・タイムアウト・監査用のリクエスト ID・gateway へのログイン・`managed.policies[]` の `code` キー・共有予算 `pooled_budget`（支払い順の設定）・コストレポート・`assume_role`・`login_notice`
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
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-11-09|2026-11-09]]、[[repos/anthropics-claude-code/changes/2026-11-06|2026-11-06]]、[[repos/anthropics-claude-code/changes/2026-11-04|2026-11-04]]、[[repos/anthropics-claude-code/changes/2026-11-02|2026-11-02]]、[[repos/anthropics-claude-code/changes/2026-10-30|2026-10-30]]
