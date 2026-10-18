---
title: css-syntax-3
updated: 2026-10-19
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Syntax Level 3。CSS のトークン化とパースのアルゴリズムを定義する仕様。2026-10-12 の取り込みで、`style` 属性を正しくパースするための「parse a style attribute」「consume a style attribute」が追加された（#11113）。2026-10-14 の取り込みで、正しい呼び出し元の無かった「parse a block's contents」は完全に削除され、「parse a list of declarations」に戻されて「parse a comma-separated list」と同じように明示的に扱われるようになった（#11113）。また、各パースのアルゴリズムが入力全体を消費するのか、終了時に入力が空であることを確認するのかが一貫して明記された（#11730）。2026-10-19 の取り込みで、「parse a block's contents」への残っていた参照も削除された。

## 主な API・オプション

- parse a list of declarations — 「parse a block's contents」に代わって復活（[`fbd84ec`](https://github.com/w3c/csswg-drafts/commit/fbd84ec61ae093787ced21cd48d3a7536e04b50a)）
- ~~parse a block's contents~~ — 正しい呼び出し元が無いため削除（[`fbd84ec`](https://github.com/w3c/csswg-drafts/commit/fbd84ec61ae093787ced21cd48d3a7536e04b50a)）
- parse a style attribute / consume a style attribute — `style` 属性のパース手順（[`64e5504`](https://github.com/w3c/csswg-drafts/commit/64e5504c81d5292a6df2c27391f2afa75cd076d7)）

## 変更履歴

- 2026-10-16 — 「parse a block's contents」への残っていた参照を削除（[`9d0bb83`](https://github.com/w3c/csswg-drafts/commit/9d0bb83d67f8d74f0891b9cae2991195e7a3d1bf)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-19|変更]]
- 2026-10-14 — 「parse a block's contents」を削除し「parse a list of declarations」に戻す（#11113）（[`fbd84ec`](https://github.com/w3c/csswg-drafts/commit/fbd84ec61ae093787ced21cd48d3a7536e04b50a)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-14|変更]]
- 2026-10-14 — パースのアルゴリズムが入力を最後まで消費するかを一貫して明記（#11730）（[`87c9dba`](https://github.com/w3c/csswg-drafts/commit/87c9dbaae36228c75dc88bf2be7c45e25d051921)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-14|変更]]
- 2026-10-12 — 「parse/consume a style attribute」を追加（#11113）（[`64e5504`](https://github.com/w3c/csswg-drafts/commit/64e5504c81d5292a6df2c27391f2afa75cd076d7)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-12|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-19|2026-10-19 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/w3c-csswg-drafts/topics/cssom-1|cssom-1]]
- [[repos/w3c-csswg-drafts/changes/2026-10-12|2026-10-12 の変更]]
