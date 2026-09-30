---
title: select要素
updated: 2026-09-30
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`select`・`option`・`optgroup` 要素と、選択中の `option` の内容を映す `selectedcontent` 要素に関する仕様。`select` の子孫にある `selectedcontent` のうち、無効（disabled）でないものはすべて最新の状態に保たれる。無効かどうかは挿入時に決まり、入れ子になった `selectedcontent` は更新されない。`option` の削除・移動や `selectedcontent` の移動による更新はマイクロタスクで行われ、選択済み `option` や `selectedcontent` の挿入は同期的に更新される。`multiple`・`size`・`disabled`・`selected` 属性の変更では選択状態の設定アルゴリズムが走る。

## 主な API・オプション

- `selectedcontent` 要素 — 選択中の `option` の内容を反映する。無効でないものはすべて更新対象
- `HTMLSelectElement.selectedIndex` / `value` — `[CEReactions]` 付き
- `HTMLOptionsCollection.selectedIndex` — `[CEReactions]` 付き
- `HTMLOptionElement.selected` — `[CEReactions]` 付き。セッターが `selectedcontent` を更新する

## 変更履歴

- 2026-09-30 — 子孫のすべての `selectedcontent` を最新に保つよう変更。削除・移動時の更新をマイクロタスク化し、属性変更時の選択状態の再計算や `[CEReactions]` の追加なども実施（[#12263](https://github.com/whatwg/html/pull/12263)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-09-30|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-09-30|2026-09-30 の変更]]
