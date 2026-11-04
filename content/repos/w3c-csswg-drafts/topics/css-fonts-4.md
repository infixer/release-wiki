---
title: css-fonts-4
updated: 2026-11-04
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Fonts Level 4。フォントの選択とフォントの機能（カーニングなど）の扱いを定義する仕様。2026-10-19 の取り込みで、カーニングはプロポーショナルな（等幅でない）グリフにだけ適用されると明確化され、OpenType がカーニングを既定で有効にするよう推奨している、という不正確な記述が削除された（#6723）。2026-10-23 の取り込みで、カーニングが `palt` に依存することが規範的に記述され、説明用の図（`kerning.svg`）も追加された。
2026-11-04 の取り込みで、`@font-feature-values` の feature value のシリアライズが、ブロックの順序と空白・句読点を固定したアルゴリズムとして定義された。マップはソースの順に埋め、名前は最初の位置・値は最後の有効な値を保つ。`@historical-forms` はブラウザーが実装している 6 種類のブロックの後に置かれ、空のルールと `font-display` 記述子も扱う（#14658、未リリース）。

## 主な API・オプション

- カーニング — プロポーショナルなグリフにだけ適用される（[`b1af0bd`](https://github.com/w3c/csswg-drafts/commit/b1af0bd2f2d02dc19da3cbb584f3a7fa2dc0d83c)）
- カーニングと `palt` — カーニングが `palt` に依存することを規範的に記述（[`a1dd397`](https://github.com/w3c/csswg-drafts/commit/a1dd3973e461e13cfe2d56a3513948882e595034)）
- feature value のシリアライズ — ブロックの順序・空白・句読点を固定したアルゴリズム（[#14677](https://github.com/w3c/csswg-drafts/pull/14677)）

## 変更履歴

- 2026-11-02 — フォントの feature value のシリアライズを定義（ソース順のマップ、固定のブロック順と空白・句読点、`@historical-forms` は 6 種類のブロックの後）（#14658）（[#14677](https://github.com/w3c/csswg-drafts/pull/14677)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-11-04|変更]]
- 2026-10-22 — カーニングが `palt` に依存することを規範的に記述（#6723）（[`a1dd397`](https://github.com/w3c/csswg-drafts/commit/a1dd3973e461e13cfe2d56a3513948882e595034)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-23|変更]]
- 2026-10-16 — カーニングはプロポーショナルなグリフだけに適用されると明確化、OpenType についての不正確な記述を削除（#6723）（[`b1af0bd`](https://github.com/w3c/csswg-drafts/commit/b1af0bd2f2d02dc19da3cbb584f3a7fa2dc0d83c)、[`a17071d`](https://github.com/w3c/csswg-drafts/commit/a17071ddd3a207698d6b5625234a71268a008c13)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-19|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-19|2026-10-19 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04 の変更]]
