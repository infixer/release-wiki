---
title: style要素
updated: 2026-11-13
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`style` 要素をどこに置けるか（content model）に関する仕様。2026-10-12 の取り込みで、`head` の中だけでなく、flow content が期待される場所でも親の最初の子として `style` を置けるようになった。ただしスタイルシートに `@import` が無く、スタイルルールが `<scope-start>` なしの `@scope` ルールの中にある場合に限る。これは文書の適合要件の変更で、UA 側の要件は変わらない。パーサーが `style` 要素の子のパースを終えたときの処理は、2026-11-13 の取り込みで「HTML element children parsed steps」（[[repos/whatwg-html/topics/HTMLパーサー|HTMLパーサー]]）に移された。

## 主な API・オプション

- `style` 要素 — flow content の位置で、親の最初の子として使える（`@import` なし、ルールは `<scope-start>` なしの `@scope` の中、`@mixin`・`@supports-condition` の中は除く）（[#13007](https://github.com/whatwg/html/pull/13007)）

## 変更履歴

- 2026-11-12 — `style` 要素の子のパースを終えたときの処理を「HTML element children parsed steps」に移し、「update a style block」が `style` 要素を引数に取るように（[#13228](https://github.com/whatwg/html/pull/13228)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-11-13|変更]]
- 2026-10-12 — `body` の中で `style` 要素を使えるように（[#13007](https://github.com/whatwg/html/pull/13007)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-12|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/whatwg-html/changes/2026-11-13|2026-11-13 の変更]]
- [[repos/whatwg-html/topics/HTMLパーサー|HTMLパーサー]]
