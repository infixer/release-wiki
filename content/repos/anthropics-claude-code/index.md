---
title: anthropics/claude-code
updated: 2026-10-02
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)（2026-10-01）→ [[repos/anthropics-claude-code/releases/v2.1.287|まとめ]]
- プレリリース: なし

## 直近の注目変更

- diff: `/diff` のダイアログで一覧のどのファイルも開けるように、閉じても何も出さないように（[#98555](https://github.com/anthropics/claude-code/pull/98555)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 完了したマージを自分で検知し、珍しいブランチ名で git を起動し続けないように（[#98357](https://github.com/anthropics/claude-code/pull/98357)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 全ファイルの hunk を 1 つの git プロセスで読むように（[#98445](https://github.com/anthropics/claude-code/pull/98445)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 完了したリベースの後に「Diff unavailable」が続かないように（[#98374](https://github.com/anthropics/claude-code/pull/98374)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- agents-md: 「AGENTS.md loaded」の行を transcript ではなくデバッグログに出す（[#98275](https://github.com/anthropics/claude-code/pull/98275)）📦 v2.1.287 · トピック: [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]
- sec-default: `prompt.compose` も user tier を飛ばし、個人のプラグインがシステムプロンプトのセクションを変えられないように（[#97241](https://github.com/anthropics/claude-code/pull/97241)）⏳ 未リリース · トピック: [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- sec-default: settings の deny ルールが個人のプラグインの allow / ask より優先（[#98080](https://github.com/anthropics/claude-code/pull/98080)）📦 v2.1.285 · トピック: [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- sec-default: managed option `allowManagedModsOnly` で個人がインストールした mod を拒否（[#98083](https://github.com/anthropics/claude-code/pull/98083)）📦 v2.1.285 · トピック: [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- mods: agents-md の部分読み取りの扱い（#96364）と diff の `--no-color`（#96363）を revert（[#98018](https://github.com/anthropics/claude-code/pull/98018)）📦 v2.1.285 · トピック: [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]、[[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: `ui.focus` フックが `diff` / `cc-plugin-diff` どちらの名前にも反応するように（[#96953](https://github.com/anthropics/claude-code/pull/96953)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]] — 組織が seat するセキュリティ既定の mod（user tier の制限、`allowManagedModsOnly` など）
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-10-02|2026-10-02]]、[[repos/anthropics-claude-code/changes/2026-09-30|2026-09-30]]、[[repos/anthropics-claude-code/changes/2026-09-28|2026-09-28]]、[[repos/anthropics-claude-code/changes/2026-09-24|2026-09-24]]
