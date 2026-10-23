---
title: css-align-3
updated: 2026-10-23
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Box Alignment Level 3。ボックスの整列（`<self-position>`・`<content-position>` など）を定義する仕様。2026-10-23 の取り込みで、CSSWG の決定（#14052）に沿って `flow-start`・`flow-end` が `flex-start`・`flex-end` の別名として定義された。シリアライズでは `flow-start`・`flow-end` が正式な綴りになる（決定にある Web 互換性の注意点は issue として残っている）。Flexbox の既存の挙動は変わらず、Grid Lanes ではアイテム配置方向に従う（[[repos/w3c-csswg-drafts/topics/css-grid-3|css-grid-3]]）。

## 主な API・オプション

- `flow-start` / `flow-end` — `flex-start` / `flex-end` の別名。`<self-position>`・`<content-position>` に含まれ、正式な綴りとしてシリアライズされる（新規）

## 変更履歴

- 2026-10-21 — `flow-start`・`flow-end` を `flex-start`・`flex-end` の別名として定義（#14052）（[#14539](https://github.com/w3c/csswg-drafts/pull/14539)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-23|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-23|2026-10-23 の変更]]
