---
title: css-mixins-1
updated: 2026-11-06
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Mixins Level 1。mixin を定義する仕様。2026-10-16 の取り込みで、mixin の本体の中の `@layer` は無効と定められた（#12417）。
2026-11-04 の取り込みで、`@private` の中に `@property` を置けるようになった（#14442、未リリース）。
2026-11-06 の取り込みで、空の引数が許されて取り除かれ、最後の末尾カンマは JS と同じ扱いになった（#14370）。`result` の型は戻り値の型であると直され、`initial` / `inherit` の働きを説明する非規範の節も加わった（未リリース）。

## 主な API・オプション

- `@layer` — mixin の本体の中では無効
- `@private` の中の `@property` — 置けるように（#14442）
- 引数 — 空の引数は許され取り除かれる。最後の末尾カンマは JS と同じ扱い（#14370）
- `result` — 型を持つ（戻り値の型）

## 変更履歴

- 2026-11-04 — 空の引数を許して取り除き、最後の末尾カンマを JS と同じ扱いに（#14370）（[`909869d`](https://github.com/w3c/csswg-drafts/commit/909869d6b501d19e4bf632e458848f3c81af425f)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-06|変更]]
- 2026-11-04 — `result` にも型がある（戻り値の型）と修正（[`d069cab`](https://github.com/w3c/csswg-drafts/commit/d069cab7faf6cfa8a181203a46fe6ce85563df5b)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-06|変更]]
- 2026-11-03 — `@private` の中に `@property` を置けるように（#14442）（[`5df2d97`](https://github.com/w3c/csswg-drafts/commit/5df2d97275eb118fb96be4f8444a5bddd509e2ab)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-10-16 — mixin の本体の中の `@layer` を無効に（#12417）（[#14491](https://github.com/w3c/csswg-drafts/pull/14491)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-16|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-06|2026-11-06 の変更]]
