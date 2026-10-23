---
title: Collections
updated: 2026-10-23
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

react-aria のコレクション基盤（`Document`/`BaseCollection`、`packages/react-aria/src/collections/Document.ts`）は、GridList・ListBox・Table などのキー管理を担う。以前は異なる要素が同じキーを持つと、キーマップが壊れて無限反復によるクラッシュや要素の消失につながっていたが、`Document` が各キーの所有要素を記録するようになり、重複時には開発時に例外を投げて検出できるようになった。
`useSelectableCollection` では選択＋Home/End などのキーボードハンドラーが補われ、TagGroup・GridList・ListBox で Home・End・PageUp・PageDown を押してもページがスクロールしない。`useGridList` は空の間もフォーカスハンドラーを保持し、フォーカスされた空の Tree に行が届いてもキーボードで操作できる。
`TreeItem` は `hasChildItems` を `useTreeItem` に渡し、子の行がまだ無い行でも展開できる（v3・S2 の `TreeView` も同様。未リリース）。
`GridListItem` は `onFocus`・`onBlur`・`onFocusChange` を受け付け、マウスとキーボードの両方で呼ばれる（`useFocus` を使用。テーブルの `Row` は対象外。未リリース）。

## 変更履歴

- 2026-10-22 — `GridListItem` に `onFocus`・`onBlur`・`onFocusChange` を追加（[#10822](https://github.com/adobe/react-spectrum/pull/10822)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-23|変更]]
- 2026-10-20 — `hasChildItems` の `TreeItem` が子の行なしでも展開できるように（`aria-expanded` が付き、シェブロン・矢印キーで開閉）（[#10799](https://github.com/adobe/react-spectrum/pull/10799)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-21|変更]]
- 2026-10-13 — `useSelectableCollection` に抜けていた選択＋Home/End などのキーボードハンドラーを追加（TagGroup・GridList・ListBox で Home・End・PageUp・PageDown でページがスクロールしない）（[#10728](https://github.com/adobe/react-spectrum/pull/10728)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-10-12 — フォーカスされた空の Tree に行が届いてもキーボード操作できるよう、空の間もフォーカスハンドラーを保持（`useGridList`）（[#10689](https://github.com/adobe/react-spectrum/pull/10689)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-09-24 — 異なる要素が同じキーを持つ場合に `Duplicate key "…" found in collection` という例外を投げるように修正。所有権エントリは要素の削除時に解放される（[#10605](https://github.com/adobe/react-spectrum/pull/10605)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-24|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- [[repos/adobe-react-spectrum/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-10-23|2026-10-23 の変更]]
