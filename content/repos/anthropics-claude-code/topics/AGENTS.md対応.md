---
title: AGENTS.md 対応
updated: 2026-09-28
tags:
  - repo/anthropics-claude-code
  - topic
---

## 概要

`mods/agents-md` は、`CLAUDE.md` が無いプロジェクトでエンジンと同じ仕組みで `AGENTS.md` を読み込むための mod（`sec-default`・`diff`・`telemetry` と同じ構成で提供される）。`instructionFiles` オプションで `CLAUDE.md` と `AGENTS.md` のどちらを・どう使うかを切り替えられ、`prompt.context` の指示ファイル読み込み、`Read` への `tool.call`、`agent.spawn`、`$.fs.ancestors` など複数の箇所で一貫して振る舞う。`--bare`（`CLAUDE_CODE_SIMPLE`）や `CLAUDE_CODE_DISABLE_ATTACHMENTS` でエンジン自体が指示ファイルの添付を行わない実行では、この mod もネストした `AGENTS.md` を添付しない。ネストした `AGENTS.md` の `Read` がトークン上限で自動的にページ分割された場合（`truncatedByTokenCap` など）は部分的な読み取りとして扱い、次の `Read` でファイル全体を添付する。

## 主な API・オプション

- `instructionFiles` — `claude-md` / `claude-md-or-agents-md`（既定）/ `claude-md-and-agents-md` / `managed-only`。旧 `projectInstructions` キーの値も引き続き有効
- `$.env.get` によるスイッチ判定 — `--bare`（`CLAUDE_CODE_SIMPLE`）、`CLAUDE_CODE_DISABLE_ATTACHMENTS`（`1`/`true`/`yes`/`on` を認識）

## 変更履歴

- 2026-09-28 — 自動でページ分割された `Read`（`truncatedByTokenCap`、1 行目以外からの開始、行数不足）はネストした `AGENTS.md` を渡し済みと数えず、次の `Read` で全体を添付するように（[#96364](https://github.com/anthropics/claude-code/pull/96364)）📦 v2.1.283 · [[repos/anthropics-claude-code/changes/2026-09-28|変更]]
- 2026-09-24 — `--bare`（`CLAUDE_CODE_SIMPLE`）や `CLAUDE_CODE_DISABLE_ATTACHMENTS` の実行では、`Read` もネストした `AGENTS.md` を添付しないように（[#95417](https://github.com/anthropics/claude-code/pull/95417)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]
- 2026-09-24 — `mods/agents-md` のソースを追加：`instructionFiles` オプションで `CLAUDE.md` / `AGENTS.md` の扱いを切り替え可能に（[#95409](https://github.com/anthropics/claude-code/pull/95409)）📦 v2.1.281 · [[repos/anthropics-claude-code/changes/2026-09-24|変更]]

## 関連

- [[repos/anthropics-claude-code/releases/v2.1.283|v2.1.283]]
- [[repos/anthropics-claude-code/releases/v2.1.281|v2.1.281]]
- [[repos/anthropics-claude-code/releases/v2.1.277|v2.1.277]]（ビルトインの AGENTS.md 対応を追加したリリース）
