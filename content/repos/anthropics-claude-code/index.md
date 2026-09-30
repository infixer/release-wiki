---
title: anthropics/claude-code
updated: 2026-09-30
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.285](https://github.com/anthropics/claude-code/releases/tag/v2.1.285)（2026-09-29）→ [[repos/anthropics-claude-code/releases/v2.1.285|まとめ]]
- プレリリース: なし

## 直近の注目変更

- sec-default: `prompt.compose` も user tier を飛ばし、個人のプラグインがシステムプロンプトのセクションを変えられないように（[#97241](https://github.com/anthropics/claude-code/pull/97241)）⏳ 未リリース · トピック: [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- sec-default: settings の deny ルールが個人のプラグインの allow / ask より優先（[#98080](https://github.com/anthropics/claude-code/pull/98080)）📦 v2.1.285 · トピック: [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- sec-default: managed option `allowManagedModsOnly` で個人がインストールした mod を拒否（[#98083](https://github.com/anthropics/claude-code/pull/98083)）📦 v2.1.285 · トピック: [[repos/anthropics-claude-code/topics/sec-default|sec-default]]
- mods: agents-md の部分読み取りの扱い（#96364）と diff の `--no-color`（#96363）を revert（[#98018](https://github.com/anthropics/claude-code/pull/98018)）📦 v2.1.285 · トピック: [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]、[[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: `ui.focus` フックが `diff` / `cc-plugin-diff` どちらの名前にも反応するように（[#96953](https://github.com/anthropics/claude-code/pull/96953)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- telemetry: `log` / `mark` をフックとして実装し、`$.telemetry` を持つエンジンでも動くように（[#96917](https://github.com/anthropics/claude-code/pull/96917)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- agents-md: 自動でページ分割された Read は、ネストした AGENTS.md を「渡し済み」と数えないように（[#96364](https://github.com/anthropics/claude-code/pull/96364)）📦 v2.1.283（v2.1.285 で revert）· トピック: [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]
- diff: `--no-color` を付け、git の色設定を強制していても diff 本文が空にならないように（[#96363](https://github.com/anthropics/claude-code/pull/96363)）📦 v2.1.283（v2.1.285 で revert）· トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- telemetry: 行にエンジンのバージョン・ベースバージョン・ビルド時刻を記録（[#96487](https://github.com/anthropics/claude-code/pull/96487)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- diff: 読み取り専用のシェルコマンドの後は diff を再取得しないように（[#95423](https://github.com/anthropics/claude-code/pull/95423)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動
- [[repos/anthropics-claude-code/topics/sec-default|sec-default]] — 組織が seat するセキュリティ既定の mod（user tier の制限、`allowManagedModsOnly` など）
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-09-30|2026-09-30]]、[[repos/anthropics-claude-code/changes/2026-09-28|2026-09-28]]、[[repos/anthropics-claude-code/changes/2026-09-24|2026-09-24]]
