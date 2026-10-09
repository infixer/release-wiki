---
title: popover
updated: 2026-10-09
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`popover` 属性と、popover の表示・非表示のアルゴリズム（show popover / hide popover）に関する仕様。popover の妥当性チェックで「接続済み・node document が fully active」を要求するのは表示しようとするときだけになり、取り除かれた popover や fully active でない文書の popover も正しく隠れる。hide popover は `beforetoggle` の発火後などに文書を渡してチェックし（別の文書に移されて表示された popover を誤って隠さない）、close watcher は hide の完了時にだけ破棄される。

## 主な API・オプション

- `hidePopover()` — fully active でない文書で表示中の popover にも効く
- `beforetoggle` イベント — リスナーで popover を別の文書に移した場合の扱いを修正

## 変更履歴

- 2026-10-09 — 削除された・別の文書に移された popover が隠れない問題を修正（#9161 を修正）（[#13001](https://github.com/whatwg/html/pull/13001)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-09|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-09|2026-10-09 の変更]]
