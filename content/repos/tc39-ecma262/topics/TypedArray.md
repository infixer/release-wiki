---
title: TypedArray
updated: 2026-10-19
tags:
  - repo/tc39-ecma262
  - topic
---

## 概要

`%TypedArray%.prototype` のメソッドまわりの仕様。リサイズ可能な `ArrayBuffer` を使う TypedArray では、コールバックや値の変換の途中でバッファが縮められたり切り離されたりする場合を手順が正しく扱う必要がある。
2026-10-19 の取り込みで、`filter` と `with` の手順にあった、このような場合に成り立たないアサーションが修正された（[#3979](https://github.com/tc39/ecma262/pull/3979)）。

## 主な API・オプション

- `%TypedArray%.prototype.filter` — コールバック中のリサイズ・切り離しで成り立たないアサーションを修正
- `%TypedArray%.prototype.with` — 値の変換中のリサイズで成り立たないアサーションを修正

## 変更履歴

- 2026-10-16 — `%TypedArray%.prototype.filter` / `with` の誤ったアサーションを修正（Editorial）（[#3979](https://github.com/tc39/ecma262/pull/3979)）⏳ 未リリース · [[repos/tc39-ecma262/changes/2026-10-19|変更]]

## 関連

- [[repos/tc39-ecma262/topics/Atomics|Atomics]]（リサイズ可能な `ArrayBuffer` での再検証）
- [[repos/tc39-ecma262/changes/2026-10-19|2026-10-19 の変更]]
