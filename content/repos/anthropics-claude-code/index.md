---
title: anthropics/claude-code
updated: 2026-09-28
tags:
  - repo/anthropics-claude-code
---

[GitHub](https://github.com/anthropics/claude-code) · ブランチ: `main`

## 最新リリース

- 安定版: [v2.1.283](https://github.com/anthropics/claude-code/releases/tag/v2.1.283)（2026-09-26）→ [[repos/anthropics-claude-code/releases/v2.1.283|まとめ]]
- プレリリース: なし

## 直近の注目変更

- diff: `ui.focus` フックが `diff` / `cc-plugin-diff` どちらの名前にも反応するように（[#96953](https://github.com/anthropics/claude-code/pull/96953)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- telemetry: `log` / `mark` をフックとして実装し、`$.telemetry` を持つエンジンでも動くように（[#96917](https://github.com/anthropics/claude-code/pull/96917)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- agents-md: 自動でページ分割された Read は、ネストした AGENTS.md を「渡し済み」と数えないように（[#96364](https://github.com/anthropics/claude-code/pull/96364)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]]
- diff: `--no-color` を付け、git の色設定を強制していても diff 本文が空にならないように（[#96363](https://github.com/anthropics/claude-code/pull/96363)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- telemetry: 行にエンジンのバージョン・ベースバージョン・ビルド時刻を記録（[#96487](https://github.com/anthropics/claude-code/pull/96487)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- diff: 読み取り専用のシェルコマンドの後は diff を再取得しないように（[#95423](https://github.com/anthropics/claude-code/pull/95423)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: `command.run` フックのコマンド名をリテラルで書き、起動直後のコマンドが待たされないように（[#96570](https://github.com/anthropics/claude-code/pull/96570)）📦 v2.1.283 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- diff: 再開したセッションでのパネル表示・`/clear` の挙動・セッション開始時刻をビルトインに合わせる（[#95587](https://github.com/anthropics/claude-code/pull/95587)）📦 v2.1.281 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]
- telemetry: ビルトインプラグイン向けの完全なテレメトリ収集をバッチ送信に（[#95618](https://github.com/anthropics/claude-code/pull/95618)）📦 v2.1.281 · トピック: [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]]
- diff: ドッキングパネルは開く前にリポジトリを読み、「Loading diff…」を経由しないように（[#95488](https://github.com/anthropics/claude-code/pull/95488)）📦 v2.1.281 · トピック: [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]]

## トピック

- [[repos/anthropics-claude-code/topics/AGENTS.md対応|AGENTS.md 対応]] — CLAUDE.md が無いプロジェクトで AGENTS.md を読む mod（`instructionFiles`）
- [[repos/anthropics-claude-code/topics/Diffパネル|Diff パネル]] — ビルトインの diff パネルに追従する mods/diff の開閉・表示・再取得の挙動
- [[repos/anthropics-claude-code/topics/テレメトリ|テレメトリ]] — ビルトインプラグイン向けのテレメトリ収集（mods/telemetry、`log` / `mark` フック）

## 取り込み

- [[repos/anthropics-claude-code/log|取り込み履歴]]
- 最近の変更: [[repos/anthropics-claude-code/changes/2026-09-28|2026-09-28]]、[[repos/anthropics-claude-code/changes/2026-09-24|2026-09-24]]
