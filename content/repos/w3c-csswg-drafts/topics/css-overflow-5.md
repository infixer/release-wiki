---
title: css-overflow-5
updated: 2026-10-23
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Overflow Level 5。`scroll-axis-lock` などを定義する仕様。2026-10-23 の取り込みで、`scroll-axis-lock` がルート要素からビューポートへ伝播することが明記された（`scrollbar-width` の同様の記述に合わせた文言、#13207）。`scroll-axis-lock` は現在 Chromium だけが対応しており、Chromium にはこの変更に合わせるパッチが入っている。

## 主な API・オプション

- `scroll-axis-lock` — ルート要素からビューポートへ伝播する

## 変更履歴

- 2026-10-21 — `scroll-axis-lock` がルート要素からビューポートへ伝播すると明記（#13207）（[#14497](https://github.com/w3c/csswg-drafts/pull/14497)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-23|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-23|2026-10-23 の変更]]
