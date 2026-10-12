---
title: Atomics
updated: 2026-10-12
tags:
  - repo/tc39-ecma262
  - topic
---

## 概要

`Atomics` の各関数が TypedArray の要素にアクセスするときの検証まわりの仕様。引数の変換中に（リサイズ可能な）`ArrayBuffer` が縮められる場合に備え、変換後に `RevalidateAtomicAccess` でアクセス先を検証し直す。2026-10-12 の取り込みで、この再検証が要素の先頭だけでなく全バイトが範囲内かを考慮するよう修正された（[#3926](https://github.com/tc39/ecma262/pull/3926)）。

## 主な API・オプション

- `RevalidateAtomicAccess` — `Atomics` 関数の引数変換後にアクセス先を再検証する抽象操作。複数バイト要素の全バイトを考慮するように（[#3926](https://github.com/tc39/ecma262/pull/3926)）
- `Atomics.and` など — 長さ追従の TypedArray（`Int32Array`・`BigInt64Array` など）で上記の再検証の対象になる

## 変更履歴

- 2026-10-12 — `RevalidateAtomicAccess` が TypedArray 要素の全バイトを考慮するように修正（[#3926](https://github.com/tc39/ecma262/pull/3926)）⏳ 未リリース · [[repos/tc39-ecma262/changes/2026-10-12|変更]]

## 関連

- [[repos/tc39-ecma262/changes/2026-10-12|2026-10-12 の変更]]
