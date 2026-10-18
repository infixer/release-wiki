---
title: ベースURL
updated: 2026-10-19
tags:
  - repo/whatwg-html
  - topic
---

## 概要

Document のベース URL（document base URL・fallback base URL・about base URL）の決め方。
DOM の `baseURI` が使う「get the base URL」は document base URL を返す。document base URL は、DOM が文書を複製したときに設定する base URL override を考慮するので、`base` 要素の無い複製は複製元のベース URL を返す。
複製時には about base URL もコピーされ、複製内の `base` 要素は元の文書と同じように解決される（[#12674](https://github.com/whatwg/html/pull/12674)）。

## 主な API・オプション

- `Node.baseURI`（DOM）— Document の「get the base URL」を使う
- document base URL — base URL override（複製時に DOM が設定）を考慮
- fallback base URL — iframe srcdoc 文書内の `DOMParser` の Document でも引っかからないようアサーションを削除

## 変更履歴

- 2026-10-16 — 複製した Document のベース URL を考慮するように（base URL override・about base URL のコピー）（[#12674](https://github.com/whatwg/html/pull/12674)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-19|変更]]

## 関連

- [whatwg/dom#454](https://github.com/whatwg/dom/issues/454)
- [[repos/whatwg-html/changes/2026-10-19|2026-10-19 の変更]]
