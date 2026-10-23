---
title: Iterator
updated: 2026-10-23
tags:
  - repo/tc39-ecma262
  - topic
---

## 概要

`Iterator.prototype` のメソッドなど、イテレーターまわりの仕様。2026-10-05 の取り込みで、提案 [proposal-iterator-join](https://github.com/tc39/proposal-iterator-join) の `Iterator.prototype.join` が仕様本体にマージされた（PR には `has stage 4` ラベル）。2026-10-23 の取り込みで、提案 [proposal-iterator-chunking](https://github.com/tc39/proposal-iterator-chunking) の Stage 4 の PR として `Iterator.prototype.chunks` と `Iterator.prototype.windows` も加わった（[#3970](https://github.com/tc39/ecma262/pull/3970)）。

## 主な API・オプション

- `Iterator.prototype.join` — 仕様に追加（[#3948](https://github.com/tc39/ecma262/pull/3948)）
- `Iterator.prototype.chunks` / `Iterator.prototype.windows` — 仕様に追加（Normative）（[#3970](https://github.com/tc39/ecma262/pull/3970)）

## 変更履歴

- 2026-10-22 — `Iterator.prototype.chunks` / `windows` を仕様に追加（Stage 4）（[#3970](https://github.com/tc39/ecma262/pull/3970)）⏳ 未リリース · [[repos/tc39-ecma262/changes/2026-10-23|変更]]
- 2026-10-05 — `Iterator.prototype.join` を仕様に追加（[#3948](https://github.com/tc39/ecma262/pull/3948)）⏳ 未リリース · [[repos/tc39-ecma262/changes/2026-10-05|変更]]

## 関連

- [[repos/tc39-ecma262/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/tc39-ecma262/changes/2026-10-05|2026-10-05 の変更]]
