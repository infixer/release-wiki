---
title: Tabs
updated: 2026-11-04
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

RAC の Tabs（`packages/react-aria-components/src/Tabs.tsx`）。TabPanels はパネルの切り替え時にサイズをアニメーションする。新しいサイズは layout effect から予約した `requestAnimationFrame` で（描画の前、入れ子のコレクションが反映された後に）測るため、入れ子の Tabs でも外側のパネルが誤った高さへアニメーションして跳ねない。すべての TabPanels が `--tab-panel-height` / `--tab-panel-width` をインラインで `auto` と定義し、入れ子の TabPanels が外側の値を継承しない（未リリース）。

## 主な API・オプション

- `--tab-panel-height` / `--tab-panel-width` — TabPanels のサイズの CSS 変数（アニメーション中以外は `auto`）

## 変更履歴

- 2026-11-03 — 入れ子の中身を描画した後に測り、サイズの変数を継承しない（#10292）（[#10819](https://github.com/adobe/react-spectrum/pull/10819)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-04|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-11-04|2026-11-04 の変更]]
