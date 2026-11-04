---
title: css-mixins-1
updated: 2026-11-04
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Mixins Level 1。mixin を定義する仕様。2026-10-16 の取り込みで、mixin の本体の中の `@layer` は無効と定められた（#12417）。
2026-11-04 の取り込みで、`@private` の中に `@property` を置けるようになった（#14442、未リリース）。

## 主な API・オプション

- `@layer` — mixin の本体の中では無効
- `@private` の中の `@property` — 置けるように（#14442）

## 変更履歴

- 2026-11-03 — `@private` の中に `@property` を置けるように（#14442）（[`5df2d97`](https://github.com/w3c/csswg-drafts/commit/5df2d97275eb118fb96be4f8444a5bddd509e2ab)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-10-16 — mixin の本体の中の `@layer` を無効に（#12417）（[#14491](https://github.com/w3c/csswg-drafts/pull/14491)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-16|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04 の変更]]
