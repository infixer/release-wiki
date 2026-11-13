---
title: anthropics/claude-code
updated: 2026-11-13
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)（2026-11-12）→ [[repos/anthropics-claude-code/releases/v2.1.323|まとめ]]（前の安定版: [[repos/anthropics-claude-code/releases/v2.1.322|v2.1.322]]）
- プレリリース: なし

## 直近の注目変更

- 実験的な Code Mode（Claude が JavaScript を書いてツールを呼ぶオプトイン）、`plugin.json` の `engines["claude-code"]`（対応バージョン範囲外のプラグインはインストール・更新・読み込みしない）（[v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)）📦 v2.1.323 · [[repos/anthropics-claude-code/releases/v2.1.323|まとめ]]
- `claude plugin validate` に TypeScript の hooks モジュールの型チェック（`--strict` で失敗）と `engine.create` が変える `$` の名詞の表示、mod のペインの props に `isPromptCovered`（[v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)）📦 v2.1.323 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- `/compact` の再実行や `/context` の後の実行で未回答のメッセージが要約で消える問題を修正、`claude -p`・SDK で長く動くフックの間に 30 秒ごとのハートビート（[v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323)）📦 v2.1.323 · トピック: [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]]、[[repos/anthropics-claude-code/topics/フック|フック]]
- Vertex の global・us・eu リージョンで fast mode に対応（拒否されたら通常の速度にフォールバック）（[v2.1.322](https://github.com/anthropics/claude-code/releases/tag/v2.1.322)）📦 v2.1.322 · [[repos/anthropics-claude-code/releases/v2.1.322|まとめ]]
- Claude Fable 5.2（`claude-fable-5-2`）を追加し Fable の既定モデルに、`claude remote-control --settings <file>` を追加（[v2.1.321](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)）📦 v2.1.321 · [[repos/anthropics-claude-code/releases/v2.1.321|まとめ]]
- セキュリティ修正: MCP の OAuth がリダイレクト先の別ホストに秘密情報を送る問題、Bash の権限チェック・`cp`/`mv` の deny ルールの抜け（[v2.1.321](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)）📦 v2.1.321 · トピック: [[repos/anthropics-claude-code/topics/管理設定|管理設定]]
- MCP tasks に対応（すぐにバックグラウンドへ移す）、`permissions.denyInsteadOfPrompting`、`CLAUDE_CODE_DISABLE_FEATURE_FLAGS`、`/tasks` の「Earlier in this session」、`/claude-api latency-optimize`。テレメトリ・feature flag を切った環境の auto mode はサーバーで確認できない呼び出しを確認・拒否に（`CLAUDE_CODE_AUTO_MODE_SERVER`）（[v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)）📦 v2.1.319 · [[repos/anthropics-claude-code/releases/v2.1.319|まとめ]]
- Claude apps gateway に `admin.pooled_conflict_rule`・`admin.pooled_priority_order`・`login_notice`・`CLAUDE_GATEWAY_LOG_FORMAT=json`、`/usage` に支出（[v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)）📦 v2.1.319 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- ビルトインの `privacy` mod のソースを `mods/privacy` に公開（挙動の変更なし。`$.session.identity` の型を追加）（[#107768](https://github.com/anthropics/claude-code/pull/107768)）⏳ 未リリース · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- mod の `$.model.fork` に `effort`、Claude apps gateway の `mantle` upstream に `assume_role`、`claude auth status` にサインインの期限（`loginExpiresAt`）。`--continue` で会話が失われる 2.1.314 の退行などを修正（[v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)）📦 v2.1.318 · [[repos/anthropics-claude-code/releases/v2.1.318|まとめ]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]] — upstream ごとの `models`・`groups`・タイムアウト・監査用のリクエスト ID・gateway へのログイン・`managed.policies[]` の `code` キー・共有予算 `pooled_budget`（支払い順の設定）・コストレポート・`assume_role`・`login_notice`
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動（`/diff to close` のヒント）
- [[repos/anthropics-claude-code/topics/mod-API|mod API]] — mod から使う `$` の API と UI 部品（`$.tool.register`・`$.ui.notify`・`Button`）
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]] — 組織が seat するセキュリティ既定の mod（user tier の制限、`allowManagedModsOnly` など）
- [[repos/anthropics-claude-code/topics/エージェントビュー|エージェントビュー]] — `claude agents` のエージェントビュー、バックグラウンドのセッション・サブエージェントの扱い
- [[repos/anthropics-claude-code/topics/コンテキスト・コンパクション|コンテキスト・コンパクション]] — アイドル時の compaction、`/autocompact`、`@` メンションの扱い
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）と OpenTelemetry の出力（`claude_code.safety_event` など）
- [[repos/anthropics-claude-code/topics/フック|フック]] — command・HTTP・`prompt`・`agent` フックの失敗時の扱いと判定、mod の `classic.*` フック
- [[repos/anthropics-claude-code/topics/プラグインマーケットプレイス|プラグインマーケットプレイス]] — `claude-code-plugins` マーケットプレイス（claude-plugins-official からのインストール、`renames`、改名・廃止）
- [[repos/anthropics-claude-code/topics/管理設定|管理設定]] — managed settings・`managed-mcp.json`（HIPAA 向けの設定例、managed のフックの修正、`CLAUDE_CODE_AUTO_MODE_MODEL`）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-11-13|2026-11-13]]、[[repos/anthropics-claude-code/changes/2026-11-11|2026-11-11]]、[[repos/anthropics-claude-code/changes/2026-11-09|2026-11-09]]、[[repos/anthropics-claude-code/changes/2026-11-06|2026-11-06]]、[[repos/anthropics-claude-code/changes/2026-11-04|2026-11-04]]
