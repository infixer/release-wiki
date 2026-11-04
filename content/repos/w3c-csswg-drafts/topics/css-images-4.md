---
title: css-images-4
updated: 2026-11-04
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

`image()` など画像関連の値・関数を定義する仕様。`image(<color>)` の形で色を渡した場合、その値は `<color>` としてアニメーション補間されることが明文化された。
2026-11-04 の取り込みで、グラデーションの色域外の色は CSS の色域マッピングにかけることが必須になり（#14545）、色の補間と補間の色空間の記述は `css-color-4` を参照するようになった（未リリース）。

## 変更履歴

- 2026-11-02 — グラデーションの色域外の色を CSS の色域マッピングにかけることを必須に（#14545）（[`12ab907`](https://github.com/w3c/csswg-drafts/commit/12ab9071206ce8c70860808cec8a7af1f4ee0297)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-11-02 — 色の補間と補間の色空間について `css-color-4` を参照（[`4b2261c`](https://github.com/w3c/csswg-drafts/commit/4b2261c0b00b31517c6779865c6cabe3ab45f0b6)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-09-24 — `image(<color>)` は `<color>` として補間すると定義（[`a620112`](https://github.com/w3c/csswg-drafts/commit/a6201123f190cb3fa9660ce1af10890e8201ef8c)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-09-24|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04 の変更]]
- [[repos/w3c-csswg-drafts/topics/css-color-4|css-color-4]]
