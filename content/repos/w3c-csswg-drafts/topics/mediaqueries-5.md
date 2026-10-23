---
title: mediaqueries-5
updated: 2026-10-23
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

Media Queries Level 5。メディアクエリとメディア特性を定義する仕様。2026-10-19 の取り込みで、`display-mode` にアプリケーションの文脈にいることを表す値 `application` が加わり、`display-mode` の値どうしの排他性がなくなった（値ごとに独立して判定し、複数の値が同時に一致する）。これまでは `display-mode: standalone` のときにユーザーが全画面に入ると `standalone` が一致しなくなり、`fullscreen` だけが一致していた（#14125）。2026-10-23 の取り込みで、manifest に `display` メンバーが無いページ（適用される表示モードが `browser` のアプリケーションの文脈）でも `display-mode: browser` が一致するよう、#14587 で入った一文が直された。

## 主な API・オプション

- `display-mode: application` — アプリケーションの文脈にいることを表す安定した値（新規）
- `display-mode` — 値ごとに独立して判定し、複数の値が同時に一致できる（子の文脈への継承は従来どおり）
- `display-mode: browser` — アプリケーションの文脈（manifest に `display` メンバーが無いページ）でも一致する

## 変更履歴

- 2026-10-22 — アプリケーションの文脈でも `display-mode: browser` が一致するように（#14125）（[#14624](https://github.com/w3c/csswg-drafts/pull/14624)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-23|変更]]
- 2026-10-16 — `display-mode: application` を追加し、複数の値に同時に一致できるように（#14125）（[#14587](https://github.com/w3c/csswg-drafts/pull/14587)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-19|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-19|2026-10-19 の変更]]
