---
title: tc39/ecma262
updated: 2026-10-26
tags:
  - repo/tc39-ecma262
---

[GitHub](https://github.com/tc39/ecma262) · ブランチ: `main`

## 最新リリース

- 安定版: [es2026-errata](https://github.com/tc39/ecma262/releases/tag/es2026-errata)（2026-07-28）
- プレリリース: なし

## 直近の注目変更

- `Iterator.prototype.chunks` / `windows` を仕様に追加（Stage 4）（[#3970](https://github.com/tc39/ecma262/pull/3970)）⏳ 未リリース · トピック: [[repos/tc39-ecma262/topics/Iterator|Iterator]]
- `%TypedArray%.prototype.toLocaleString` の手順を `JoinIndexedProperties` で定義（[#3958](https://github.com/tc39/ecma262/pull/3958)）⏳ 未リリース · トピック: [[repos/tc39-ecma262/topics/TypedArray|TypedArray]]
- `%TypedArray%.prototype.filter` / `with` の誤ったアサーションを修正（[#3979](https://github.com/tc39/ecma262/pull/3979)）⏳ 未リリース · トピック: [[repos/tc39-ecma262/topics/TypedArray|TypedArray]]
- `RevalidateAtomicAccess` が TypedArray 要素の全バイトを考慮するように修正（Normative）（[#3926](https://github.com/tc39/ecma262/pull/3926)）⏳ 未リリース · トピック: [[repos/tc39-ecma262/topics/Atomics|Atomics]]
- `Iterator.prototype.join` を仕様に追加（[#3948](https://github.com/tc39/ecma262/pull/3948)）⏳ 未リリース · トピック: [[repos/tc39-ecma262/topics/Iterator|Iterator]]

## トピック

- [[repos/tc39-ecma262/topics/Atomics|Atomics]] — `Atomics` 関数が TypedArray の要素にアクセスするときの検証（`RevalidateAtomicAccess` など）
- [[repos/tc39-ecma262/topics/Iterator|Iterator]] — イテレーターまわりの仕様（`Iterator.prototype` の `join`・`chunks`・`windows` など）
- [[repos/tc39-ecma262/topics/TypedArray|TypedArray]] — `%TypedArray%.prototype` のメソッドとリサイズ可能な `ArrayBuffer`

## 取り込み

- [[repos/tc39-ecma262/log|取り込み履歴]]
- 最近の変更: [[repos/tc39-ecma262/changes/2026-10-26|2026-10-26]]、[[repos/tc39-ecma262/changes/2026-10-23|2026-10-23]]、[[repos/tc39-ecma262/changes/2026-10-19|2026-10-19]]、[[repos/tc39-ecma262/changes/2026-10-16|2026-10-16]]、[[repos/tc39-ecma262/changes/2026-10-12|2026-10-12]]
