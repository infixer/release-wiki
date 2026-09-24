---
title: Collections
updated: 2026-09-24
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

react-aria のコレクション基盤（`Document`/`BaseCollection`、`packages/react-aria/src/collections/Document.ts`）は、GridList・ListBox・Table などのキー管理を担う。以前は異なる要素が同じキーを持つと、キーマップが壊れて無限反復によるクラッシュや要素の消失につながっていたが、`Document` が各キーの所有要素を記録するようになり、重複時には開発時に例外を投げて検出できるようになった。

## 変更履歴

- 2026-09-24 — 異なる要素が同じキーを持つ場合に `Duplicate key "…" found in collection` という例外を投げるように修正。所有権エントリは要素の削除時に解放される（[#10605](https://github.com/adobe/react-spectrum/pull/10605)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-24|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-24|2026-09-24 の変更]]
