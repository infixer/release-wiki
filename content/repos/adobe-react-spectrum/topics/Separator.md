---
title: Separator
updated: 2026-11-11
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

React Aria Components の `Separator`（`packages/react-aria-components/src/Separator.tsx`）。既定では `<hr>` を描画し、`<hr>` が持つ組み込みの `separator` ロールに任せて `role` 属性は付けない（HTML のバリデーターで冗長なロールと指摘されないように。未リリース）。`<hr>` 以外の要素（`div` など）で描画するときは `role="separator"` を持ち、縦向きのときは `aria-orientation` も付く。

## 変更履歴

- 2026-11-11 — 既定の `<hr>` に冗長な `role="separator"` を付けない（[#10946](https://github.com/adobe/react-spectrum/pull/10946)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-11|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-11-11|2026-11-11 の変更]]
- [[repos/adobe-react-spectrum/topics/Menu|Menu]]（S2 の Menu のセパレーター表示）
- リポジトリ: [[repos/adobe-react-spectrum/index|adobe/react-spectrum]]
