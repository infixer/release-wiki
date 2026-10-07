---
title: oxc-project/oxc oxlint_v1.87.0
date: 2026-10-07
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.87.0) · 公開: 2026-10-05

## 要点

- サジェスチョンを実装: `react/no-unescaped-entities`、`unicorn/no-useless-switch-case`、`react/jsx-no-target-blank`（[#27292](https://github.com/oxc-project/oxc/pull/27292)、[#27245](https://github.com/oxc-project/oxc/pull/27245)、[#27181](https://github.com/oxc-project/oxc/pull/27181)）
- jsx-a11y の修正: `label-has-associated-control` がラベル属性の値を検証、`mouse-events-have-key-events` が nullish なハンドラーを扱う、`lang` が式の文字列を検証（[#27302](https://github.com/oxc-project/oxc/pull/27302)、[#27306](https://github.com/oxc-project/oxc/pull/27306)、[#27304](https://github.com/oxc-project/oxc/pull/27304)）
- unicorn の修正: `numeric-separators-style` が誤ったグループ分けの BigInt リテラルを報告、`no-zero-fractions` の自動修正で区切り文字付き・大きな整数をかっこで囲む（[#27207](https://github.com/oxc-project/oxc/pull/27207)、[#27206](https://github.com/oxc-project/oxc/pull/27206)）
- `eslint/prefer-exponentiation-operator` の自動修正で優先順位を保持、`valid-title` が許可された語の後もチェックを続ける（[#27150](https://github.com/oxc-project/oxc/pull/27150)、[#27146](https://github.com/oxc-project/oxc/pull/27146)）
- `eslint/no-unused-vars`: 使われている ignore パターンについて、無効にした引数のチェックの設定を尊重する（[#26925](https://github.com/oxc-project/oxc/pull/26925)）
- パーサー: TypeScript の型メンバーの区切りを検証（[#27222](https://github.com/oxc-project/oxc/pull/27222)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]]、[[repos/oxc-project-oxc/topics/パーサー|パーサー]]
