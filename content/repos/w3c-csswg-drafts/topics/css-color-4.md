---
title: css-color-4
updated: 2026-10-21
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS の色（`lch()`・`oklch()` などの色空間と、その変換）を定義する仕様。仕様内の LCH・Oklch の変換コードから「H（色相）が missing なら a = b = 0 にする」処理が削除され、往復変換（round-tripping）を妨げないようになった。`<opacity-value>` のシリアライズの規則は、`opacity` プロパティだけでなくこの値を取るすべてのプロパティに適用される（#10426）。色域マッピング（gamut mapping）の 3 つのアルゴリズム（Binary Search with Local MINDE・EdgeSeeker・Ray Trace）すべてに疑似コードが揃い、EdgeSeeker は LUT を OkLCh の色相で索引し、虚の原色を持たない RGB 色空間で色域外の色だけをマッピングする形になった。

## 主な API・オプション

- EdgeSeeker 色域マッピング — LUT 構築・曲率計算・色ごとのマッピングと補助アルゴリズム（最大彩度の参照、円弧との交点）の疑似コード（[#14426](https://github.com/w3c/csswg-drafts/pull/14426)）

## 変更履歴

- 2026-10-20 — `Lab_to_XYZ` のサンプルコードを、内部で float を使う実装でも問題が起きないように更新（[#14636](https://github.com/w3c/csswg-drafts/pull/14636)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-21|変更]]
- 2026-10-12 — EdgeSeeker の疑似コードを修正（LUT を OkLCh の色相で索引、色相 60° ごとのサンプリング、hue fold の除去、数値的に安定な円弧交点、虚の原色を持たない RGB 色空間に限定、色域外の色だけをマッピング）（[`778ad60`](https://github.com/w3c/csswg-drafts/commit/778ad60bae76b750fdc96551f0410d72fcb3f9b9) ほか 5 件）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-12|変更]]
- 2026-10-12 — EdgeSeeker 色域マッピングの疑似コードを追加（[#14426](https://github.com/w3c/csswg-drafts/pull/14426)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-12|変更]]
- 2026-10-09 — `<opacity-value>` のシリアライズは、この値を取るすべてのプロパティに適用されると明確化（#10426）（[`4dd6b0d`](https://github.com/w3c/csswg-drafts/commit/4dd6b0d72c9dda90dc6dbe65ae3e8833a64d7446)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-02 — LCH・Oklch の変換コードから「H が missing なら a = b = 0」を削除し、往復変換の妨げを解消（#14530）（[`9c50d37`](https://github.com/w3c/csswg-drafts/commit/9c50d377bb4ccd9f9f513a352d84fa750e6f51b1)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-02|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-21|2026-10-21 の変更]]
