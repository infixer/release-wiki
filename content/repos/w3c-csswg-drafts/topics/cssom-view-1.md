---
title: cssom-view-1
updated: 2026-11-06
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSSOM View（スクロール用のメソッドなど、ビューに関する API）を定義する仕様。スクロールのメソッドが返す Promise は `ScrollResult` 辞書で解決され、スムーズスクロールがアルゴリズムやユーザー操作で中断された場合は `interrupted: true`、要素にスクロールボックスが無い場合などそれ以外は `interrupted: false` になる。
2026-11-06 の取り込みで、export されたアルゴリズム「determine the device pixel ratio」が `Document` を引数に取り、その文書のページズームを使うようになった。HTML の画像の候補の選択（whatwg/html#13183）などから呼ぶため（未リリース）。

## 主な API・オプション

- `ScrollResult` — スクロールの Promise の解決値。`interrupted` でスクロールが中断されたかを示す
- 「determine the device pixel ratio」(`document`) — 引数の `Document` の現在のページズームを使う。`Window.devicePixelRatio` は関連付いた `Document` を渡す（[#14724](https://github.com/w3c/csswg-drafts/pull/14724)）

## 変更履歴

- 2026-11-05 — 「determine the device pixel ratio」に `Document` の引数を追加（[#14724](https://github.com/w3c/csswg-drafts/pull/14724)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-06|変更]]
- 2026-10-09 — スクロールの Promise を `ScrollResult` 辞書（`interrupted`）で解決するように（#12495 を修正）（[#14556](https://github.com/w3c/csswg-drafts/pull/14556)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-06|2026-11-06 の変更]]
- [[repos/whatwg-html/topics/画像|whatwg/html の画像]]（`srcset` の候補の選択から呼ばれる）
