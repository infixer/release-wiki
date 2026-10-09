---
title: cssom-view-1
updated: 2026-10-09
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSSOM View（スクロール用のメソッドなど、ビューに関する API）を定義する仕様。スクロールのメソッドが返す Promise は `ScrollResult` 辞書で解決され、スムーズスクロールがアルゴリズムやユーザー操作で中断された場合は `interrupted: true`、要素にスクロールボックスが無い場合などそれ以外は `interrupted: false` になる。

## 主な API・オプション

- `ScrollResult` — スクロールの Promise の解決値。`interrupted` でスクロールが中断されたかを示す

## 変更履歴

- 2026-10-09 — スクロールの Promise を `ScrollResult` 辞書（`interrupted`）で解決するように（#12495 を修正）（[#14556](https://github.com/w3c/csswg-drafts/pull/14556)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
