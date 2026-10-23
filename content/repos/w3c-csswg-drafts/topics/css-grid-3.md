---
title: css-grid-3
updated: 2026-10-23
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Grid Layout Level 3 の仕様。`flow-tolerance` は #10884 に沿って `fit-tolerance` に改名された。2026-10-23 の取り込みで、Grid Lanes の整列で `flow-start`・`flow-end`（と `flex-start`・`flex-end`）が、整列する軸でのコンテナのアイテム配置方向（反転を含む）に従うと定義された。その軸で反転がなければ論理的な `start`・`end` と同じに振る舞う。配置方向に基づく整列を Flexbox に限るとしていた誤った記述も削除された（[[repos/w3c-csswg-drafts/topics/css-align-3|css-align-3]] の #14052）。

## 主な API・オプション

- `fit-tolerance` — 旧名 `flow-tolerance`（2026-10-09 の取り込みで改名）
- `flow-start` / `flow-end`（`flex-start` / `flex-end`）— Grid Lanes ではアイテム配置方向（反転を含む）に従う

## 変更履歴

- 2026-10-21 — Grid Lanes での `flow-start`・`flow-end` の整列を定義（#14052）（[#14539](https://github.com/w3c/csswg-drafts/pull/14539)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-23|変更]]
- 2026-10-09 — `flow-tolerance` を `fit-tolerance` に改名（#10884）（[`0ff603b`](https://github.com/w3c/csswg-drafts/commit/0ff603b443557cb65f379001a8a2a04a938af4d5)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
