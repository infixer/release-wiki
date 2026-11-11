---
title: css-gaps-1
updated: 2026-11-11
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

ギャップと gap decoration（`rule-visibility` など）を扱う仕様。
2026-11-06 に、仕様の一部ですでに使われていた用語「gap segments」が正式に定義され、`rule-visibility` プロパティの挙動が明確になった。「gap segments」は「gap decoration segments」とは別の用語（未リリース）。
2026-11-10 に、grid lanes のグリッド軸方向のギャップで、複数のトラックにまたがるアイテム（spanner）の前後に end / start の segment endpoint を作るようになった（self-alignment 後の位置を使い、積み重ね軸のギャップの大きさだけずらす）。これでグリッド軸の rule を整列した spanner まで、またはその先まで伸ばせる。新しい gutter や gap junction は作らず、gutter の配置と rule-break のアルゴリズムは変わらない（未リリース）。

## 主な API・オプション

- `rule-visibility` — 「gap segments」の定義によって挙動が明確化された
- 「gap segments」 — 2026-11-06 に定義された用語（「gap decoration segments」とは別）

## 変更履歴

- 2026-11-10 — grid lanes で spanner の前後に segment endpoint を作る（#14648）（[#14732](https://github.com/w3c/csswg-drafts/pull/14732)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-11|変更]]
- 2026-11-06 — 用語「gap segments」を定義し、`rule-visibility` の挙動を明確化（[#14637](https://github.com/w3c/csswg-drafts/pull/14637)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-11-09|2026-11-09 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-11|2026-11-11 の変更]]
