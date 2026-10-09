---
title: anthropics/claude-code
updated: 2026-10-09
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)（2026-10-08）→ [[repos/anthropics-claude-code/releases/v2.1.295|まとめ]]
- プレリリース: なし

## 直近の注目変更

- command・HTTP フックに `onFailure: "block"`、Program Status Protocol（OSC 7501）に対応（[v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)）📦 v2.1.295 · トピック: [[repos/anthropics-claude-code/topics/フック|フック]]
- Claude apps gateway: upstream ごとの `models` 一覧・`timeouts.upstream_ttfb_ms`・`upstream_request_id` など（[v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)）📦 v2.1.295 · トピック: [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]]
- 指示の形で書いた `prompt`・`agent` フックがブロックすべきものを通す問題を修正（[v2.1.294](https://github.com/anthropics/claude-code/releases/tag/v2.1.294)）📦 v2.1.294 · トピック: [[repos/anthropics-claude-code/topics/フック|フック]]
- Claude Haiku 5.5（`claude-haiku-5-5`）を追加し既定の Haiku に、mod の `$.tool.register` に `isDeferred`（[v2.1.293](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)）📦 v2.1.293 · トピック: [[repos/anthropics-claude-code/topics/mod-API|mod API]]
- diff: ドッキングしたパネルの上の自前の空行を削除し、エンジンが確保する先頭行の下にヘッダーから描くように（[#99206](https://github.com/anthropics/claude-code/pull/99206)）⏳ 未リリース · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: `/diff` のダイアログで一覧のどのファイルも開けるように、閉じても何も出さないように（[#98555](https://github.com/anthropics/claude-code/pull/98555)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 完了したマージを自分で検知し、珍しいブランチ名で git を起動し続けないように（[#98357](https://github.com/anthropics/claude-code/pull/98357)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 全ファイルの hunk を 1 つの git プロセスで読むように（[#98445](https://github.com/anthropics/claude-code/pull/98445)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 完了したリベースの後に「Diff unavailable」が続かないように（[#98374](https://github.com/anthropics/claude-code/pull/98374)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- agents-md: 「AGENTS.md loaded」の行を transcript ではなくデバッグログに出す（[#98275](https://github.com/anthropics/claude-code/pull/98275)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Claude-apps-gateway|Claude apps gateway]] — upstream ごとの `models`・タイムアウト・監査用のリクエスト ID・gateway へのログイン
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動
- [[repos/anthropics-claude-code/topics/mod-API|mod API]] — mod から使う `$` の API と UI 部品（`$.tool.register`・`$.ui.notify`・`Button`）
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]] — 組織が seat するセキュリティ既定の mod（user tier の制限、`allowManagedModsOnly` など）
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）
- [[repos/anthropics-claude-code/topics/フック|フック]] — command・HTTP・`prompt`・`agent` フックの失敗時の扱いと判定、mod の `classic.*` フック

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-10-09|2026-10-09]]、[[repos/anthropics-claude-code/changes/2026-10-07|2026-10-07]]、[[repos/anthropics-claude-code/changes/2026-10-05|2026-10-05]]、[[repos/anthropics-claude-code/changes/2026-10-02|2026-10-02]]、[[repos/anthropics-claude-code/changes/2026-09-30|2026-09-30]]
