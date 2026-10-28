---
title: css-color-hdr-1
updated: 2026-10-28
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Color HDR Module Level 1。HDR の色（Jzazbz などの色空間、PQ の伝達関数）を扱う仕様。
2026-10-28 の取り込みで、サンプルコード `jzazbz.js` の Jzazbz の逆変換（`Jzazbz_to_LMS` の未定義の `ninv`、行列の掛け算の引数の順序）と、本文の PQ のデコードの例の括弧が修正され、どちらもそのまま動くコードになった。

## 主な API・オプション

- `css-color-hdr-1/jzazbz.js` — Jzazbz の変換のサンプルコード（`Jzazbz_to_LMS` など）

## 変更履歴

- 2026-10-26 — PQ のデコードの例の余分な開き括弧を削除（SyntaxError の解消）（[#14665](https://github.com/w3c/csswg-drafts/pull/14665)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]
- 2026-10-26 — `Jzazbz_to_LMS` で PQ の指数の逆数 `ninv` を定義、逆変換の行列の掛け算の引数の順序を修正（[#14666](https://github.com/w3c/csswg-drafts/pull/14666)、[#14667](https://github.com/w3c/csswg-drafts/pull/14667)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]

## 関連

- [[repos/w3c-csswg-drafts/topics/css-color-4|css-color-4]]
- [[repos/w3c-csswg-drafts/changes/2026-10-28|2026-10-28 の変更]]
