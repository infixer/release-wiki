---
title: css-color-5
updated: 2026-10-28
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Color Level 5。色の関数（`alpha()` など）を定義する仕様。2026-10-23 の取り込みで、issue #14070 に基づき `alpha()` 関数の `<alpha>` の値が必須になった。
2026-10-28 の取り込みで、値が `none` のチャンネルキーワードを数式の中で使ったときの扱いが明確になった（#10280）。`light-dark()` に `none` が加わった後、`none` へのリンクがすべてそちらを指していた問題も直った。

## 主な API・オプション

- `alpha()` — `<alpha>` の値が必須

## 変更履歴

- 2026-10-26 — 数式の中での `none` とチャンネルキーワードの扱いを明確化（#10280）（[`7d677b2`](https://github.com/w3c/csswg-drafts/commit/7d677b2f04a68fb1795dc3a92f36d57fdb427bbc)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]
- 2026-10-21 — `alpha()` の `<alpha>` を必須に（#14070）（[#14353](https://github.com/w3c/csswg-drafts/pull/14353)、[`b186fae`](https://github.com/w3c/csswg-drafts/commit/b186fae25203333688daa3e502eebe6b2aa608dc)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-23|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-28|2026-10-28 の変更]]
