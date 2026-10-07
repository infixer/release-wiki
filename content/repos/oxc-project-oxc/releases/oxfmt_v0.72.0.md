---
title: oxc-project/oxc oxfmt_v0.72.0
date: 2026-10-07
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.72.0) · 公開: 2026-10-05

## 要点

- **破壊的変更**: `parser:markdown` のファイルを `oxc_formatter_markdown` で整形するように（Prettier から置き換え。コードフェンス内の JS も `oxc_formatter` で整形）（[#27256](https://github.com/oxc-project/oxc/pull/27256)）
- CSS フォーマッタが埋め込み CSS をブロックの中身として解析（[#27284](https://github.com/oxc-project/oxc/pull/27284)）
- Markdown フォーマッタの修正: fuzz で見つかった問題、すべての `proseWrap` で中国語・日本語の文字まわりの改行を保持、表にならない区切り行の前の改行、`useTabs` でもコンテナの桁揃えを空白に（[#27334](https://github.com/oxc-project/oxc/pull/27334)、[#27331](https://github.com/oxc-project/oxc/pull/27331)、[#27278](https://github.com/oxc-project/oxc/pull/27278)、[#27277](https://github.com/oxc-project/oxc/pull/27277)）
- CSS・JSON フォーマッタの修正: mdn-content（css-in-md）で見つかったレイアウト、`@import` の `url()` の例外、at-rule の prelude の `ident (`、ブロックコメントだけの配列・オブジェクト（[#27326](https://github.com/oxc-project/oxc/pull/27326)、[#27288](https://github.com/oxc-project/oxc/pull/27288)、[#27283](https://github.com/oxc-project/oxc/pull/27283)、[#27274](https://github.com/oxc-project/oxc/pull/27274)）
- JS フォーマッタの修正: 代入先のプロパティを代入と同様に整形、埋め込みテンプレートのレイアウトを AST から決定、パターン・計算キーでの `quoteProps: consistent`、呼び出し先と開きかっこの間のコメント（[#27289](https://github.com/oxc-project/oxc/pull/27289)、[#27218](https://github.com/oxc-project/oxc/pull/27218)、[#27216](https://github.com/oxc-project/oxc/pull/27216)、[#27172](https://github.com/oxc-project/oxc/pull/27172)）
- CLI・LSP: 除外ディレクトリの下のファイルを否定パターンで再び含めない、Stdin モードでソース付き診断・グローバル ignore の先行確認、LSP で `.prettierignore` を再読み込み（[#27237](https://github.com/oxc-project/oxc/pull/27237)、[#27130](https://github.com/oxc-project/oxc/pull/27130)、[#27128](https://github.com/oxc-project/oxc/pull/27128)、[#27129](https://github.com/oxc-project/oxc/pull/27129)）
- Prettier 互換層: Doc → IR で改行後の空行を保持、1 状態の `conditionalGroup` の判定（[#27325](https://github.com/oxc-project/oxc/pull/27325)、[#27275](https://github.com/oxc-project/oxc/pull/27275)）
- 性能: `will_break` の指数的なチェックを回避、Markdown の IR バッファの事前確保など（[#27211](https://github.com/oxc-project/oxc/pull/27211)、[#27333](https://github.com/oxc-project/oxc/pull/27333)、[#27147](https://github.com/oxc-project/oxc/pull/27147)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
