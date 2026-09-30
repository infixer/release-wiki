---
title: css-scroll-snap-1
updated: 2026-09-30
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

スクロールスナップ（`scroll-snap-type` など）を定義する仕様。スナップ位置を捕捉（capture）するのはスクロールコンテナだけである。単一軸のスクロールコンテナは、スクロールできる軸でだけスナップ位置を確立し、スクロールできない軸への `scroll-snap-type` の指定は効果がない。スナップ位置の捕捉とスナップコンテナの決定は軸ごとに評価され、消費されなかった軸のスナップは祖先のスクロールコンテナへ伝わる。

## 主な API・オプション

- `scroll-snap-type` — スナップを有効にするプロパティ。単一軸のスクロールコンテナでは、スクロールできない軸への指定は無効

## 変更履歴

- 2026-09-30 — 単一軸のスクロールコンテナでのスクロールスナップを軸ごとに扱うよう明確化（#14018）（[#14354](https://github.com/w3c/csswg-drafts/pull/14354)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-09-30|変更]]
- 2026-09-30 — スナップ位置を捕捉するのはスクロールコンテナだけと明記（#14445）（[`528b2e3`](https://github.com/w3c/csswg-drafts/commit/528b2e31b905ff8fd150ab8623a2b300503a2cca)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-09-30|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-09-30|2026-09-30 の変更]]
