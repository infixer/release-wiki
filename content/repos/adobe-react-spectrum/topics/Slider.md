---
title: Slider
updated: 2026-11-13
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

スライダーの状態を扱う `useSliderState`（`react-stately`）まわり。
制御された Slider（`value` + `onChange`）で、つまみが新しい値に動いたあと同じステップ内でポインターを動かしても、変わらない値で `onChange` を繰り返し呼ばない（`updateValue` は、つまみがすでにスナップ後の値にあるときは何もしない。未リリース）。

## 主な API・オプション

- `useSliderState`（`react-stately`）— スライダーの値とつまみの状態

## 変更履歴

- 2026-11-11 — 値が変わらないドラッグで `onChange` を繰り返し呼ばないように（#10950）（[#10952](https://github.com/adobe/react-spectrum/pull/10952)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-13|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-11-13|2026-11-13 の変更]]
