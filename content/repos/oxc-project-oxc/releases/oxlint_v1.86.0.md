---
title: oxc-project/oxc oxlint_v1.86.0
date: 2026-09-28
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.86.0) · 公開: 2026-09-28

## 要点

- 型認識ルール `typescript/no-generated-empty-object-type` を追加（[#26958](https://github.com/oxc-project/oxc/pull/26958)）
- `react/only-export-components` に `allowCompoundComponents` オプションを追加（[#27117](https://github.com/oxc-project/oxc/pull/27117)）
- `--type-check-only` モードでは型認識ルールを実行しないように（[#27076](https://github.com/oxc-project/oxc/pull/27076)）
- `node/no-exports-assign` のカテゴリを style から suspicious に変更（[#26555](https://github.com/oxc-project/oxc/pull/26555)）
- ルールの修正: `eslint/require-await` が `await using` を await として数える、`eslint/one-var` が分割時に `declare` を保持、`typescript/no-unnecessary-parameter-property-assignment` が引数の再代入を考慮、`typescript/unified-signatures` を上流に合わせる（[#27080](https://github.com/oxc-project/oxc/pull/27080)、[#27081](https://github.com/oxc-project/oxc/pull/27081)、[#26955](https://github.com/oxc-project/oxc/pull/26955)、[#26956](https://github.com/oxc-project/oxc/pull/26956)）
- `no-unused-vars`・`prefer-const`・`import/no-duplicates`・`unicorn/prefer-spread` の判定修正（[#26923](https://github.com/oxc-project/oxc/pull/26923)、[#26782](https://github.com/oxc-project/oxc/pull/26782)、[#26920](https://github.com/oxc-project/oxc/pull/26920)、[#26936](https://github.com/oxc-project/oxc/pull/26936)、[#26935](https://github.com/oxc-project/oxc/pull/26935)）
- JS プラグイン: CFG ウォーカーが `undefined` の子要素を飛ばす、ルール計測にセレクタの実行時間を含める（[#27075](https://github.com/oxc-project/oxc/pull/27075)、[#27111](https://github.com/oxc-project/oxc/pull/27111)）
- React Compiler: 再帰する関数式を扱う、引数なしの `new Date` を不純として扱う（[#26796](https://github.com/oxc-project/oxc/pull/26796)、[#26894](https://github.com/oxc-project/oxc/pull/26894)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]、[[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]]、[[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]]、[[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
