---
title: Isolated-Declarations
updated: 2026-09-30
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`oxc_isolated_declarations`（`--isolatedDeclarations` 相当の型宣言 `.d.ts` 生成）。既定値付き・省略可能な引数で暗黙に `| undefined` を付ける必要がある場合の扱いを tsc 7 に合わせる修正が進んでいる。`readonly` 型演算子に続いて `keyof` も含むすべての型演算子で `| undefined` を付けるようになり、これまで出ていた TS9025 エラーが減った。チェッカー無しで解決できない型では冗長な `| undefined` が付くことがある（型としては同じ）。

## 主な API・オプション

- 特になし

## 変更履歴

- 2026-09-30 — `keyof` 型の引数にも `| undefined` を付けられるように（[#27173](https://github.com/oxc-project/oxc/pull/27173)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `readonly` 型の引数に対応（TS9025 の代わりに `| undefined` を付ける）（[#27009](https://github.com/oxc-project/oxc/pull/27009)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
