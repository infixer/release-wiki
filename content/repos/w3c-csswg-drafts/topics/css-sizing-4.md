---
title: css-sizing-4
updated: 2026-10-28
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

ボックスのサイズ指定（`fit-content()` など）を拡張する仕様。`stretch()` サイズ関数が追加され、`fit-content()` に循環するパーセンテージが使われた場合の扱いが追記された。
2026-10-28 の取り込みで、`calc-size()` 関数と `interpolate-size` プロパティの定義が `css-values-5` からこの仕様へ移された（#14502）。

## 主な API・オプション

- `stretch()` — 2026-10-09 の取り込みで追加されたサイズ関数
- `fit-content()` — 循環するパーセンテージでの扱いを明確化（#11805）
- `calc-size()` / `interpolate-size` — `css-values-5` から移動（#14502）

## 変更履歴

- 2026-10-27 — `calc-size()` と `interpolate-size` を `css-values-5` から移動（#14502）（[`ee30871`](https://github.com/w3c/csswg-drafts/commit/ee30871a66d312e3ea0e1025f383cdca9cebd64a)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]
- 2026-10-09 — 循環するパーセンテージでの `fit-content()` を明確化（#11805）（[`77c7337`](https://github.com/w3c/csswg-drafts/commit/77c733720a9bf8e4de5453a1eeb7ba6b8eb56484)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — `stretch()` サイズ関数を追加（[`062dc94`](https://github.com/w3c/csswg-drafts/commit/062dc9481737fb64fef91e61d7488488501aa5f9)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-28|2026-10-28 の変更]]
