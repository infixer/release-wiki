---
title: css-color-4
updated: 2026-10-09
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS の色（`lch()`・`oklch()` などの色空間と、その変換）を定義する仕様。仕様内の LCH・Oklch の変換コードから「H（色相）が missing なら a = b = 0 にする」処理が削除され、往復変換（round-tripping）を妨げないようになった。`<opacity-value>` のシリアライズの規則は、`opacity` プロパティだけでなくこの値を取るすべてのプロパティに適用される（#10426）。

## 変更履歴

- 2026-10-09 — `<opacity-value>` のシリアライズは、この値を取るすべてのプロパティに適用されると明確化（#10426）（[`4dd6b0d`](https://github.com/w3c/csswg-drafts/commit/4dd6b0d72c9dda90dc6dbe65ae3e8833a64d7446)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-02 — LCH・Oklch の変換コードから「H が missing なら a = b = 0」を削除し、往復変換の妨げを解消（#14530）（[`9c50d37`](https://github.com/w3c/csswg-drafts/commit/9c50d377bb4ccd9f9f513a352d84fa750e6f51b1)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-02|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-02|2026-10-02 の変更]]
