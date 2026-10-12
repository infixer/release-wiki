---
title: animation-triggers-1
updated: 2026-10-12
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Animation Triggers Level 1。アニメーションを開始させるトリガー（`timeline-trigger` など）を定義する仕様。2026-10-12 の取り込みで、一括指定プロパティ `timeline-trigger-range` が追加され、`timeline-trigger` では範囲の指定を省略できるようになった。トリガーに使える `<event-function>` の値にも最初の正式な定義が入った。

## 主な API・オプション

- `timeline-trigger` — 範囲（range）の指定が省略可能に（[#14524](https://github.com/w3c/csswg-drafts/pull/14524)）
- `timeline-trigger-range` — 追加された一括指定プロパティ（[#14524](https://github.com/w3c/csswg-drafts/pull/14524)）
- `<event-function>` — サポートするイベント関数の値。正式な定義を追加（[#14515](https://github.com/w3c/csswg-drafts/pull/14515)）

## 変更履歴

- 2026-10-12 — `<event-function>` の値の正式な定義を追加（#14129）（[#14515](https://github.com/w3c/csswg-drafts/pull/14515)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-12|変更]]
- 2026-10-12 — `timeline-trigger-range` 一括指定プロパティを追加し、`timeline-trigger` の範囲を省略可能に（#13608）（[#14524](https://github.com/w3c/csswg-drafts/pull/14524)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-12|変更]]

## 関連

- [[repos/w3c-csswg-drafts/topics/scroll-animations-1|scroll-animations-1]]
- [[repos/w3c-csswg-drafts/changes/2026-10-12|2026-10-12 の変更]]
