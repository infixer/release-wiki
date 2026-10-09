---
title: css-overflow-4
updated: 2026-10-09
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

あふれた内容の扱い（`line-clamp`・`block-ellipsis`・`text-overflow` など）を定義する仕様。`line-clamp` の構文と longhand は issue #13670 に沿って更新された。同じ行に `block-ellipsis`（line-clamp の省略記号）と `text-overflow` の省略記号がかかる場合は `block-ellipsis` が先に適用され、`text-overflow` はその後もまだあふれている場合だけ適用される。clamp された内容は視覚的に隠されるだけで、既定ではアクセシビリティツリーから外れたりフォーカスできなくなったりはしない。

## 主な API・オプション

- `line-clamp`（と longhand）— 2026-10-09 の取り込みで構文を更新（#13670）
- `block-ellipsis` — line-clamp の省略記号。`text-overflow` より先に適用
- `text-overflow` — `block-ellipsis` の適用後もあふれている行にだけ適用

## 変更履歴

- 2026-10-09 — clamp された内容は視覚的に隠されるだけ（アクセシビリティツリー・フォーカスからは既定で外れない）と明記（#12859）（[`1dafa60`](https://github.com/w3c/csswg-drafts/commit/1dafa60598a1d313471673f7e06a8e4c9f94646f)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — `block-ellipsis` を先に、`text-overflow` を後に適用すると明記（[#14516](https://github.com/w3c/csswg-drafts/pull/14516)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — `line-clamp` の構文と longhand を更新（#13670）（[`15e844e`](https://github.com/w3c/csswg-drafts/commit/15e844ee15ec526318964af6275a35a6da9b6679)、[`bf9279e`](https://github.com/w3c/csswg-drafts/commit/bf9279eff11732ce0cbd236e487442333aa06af8)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
