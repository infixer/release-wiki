---
title: oxc-project/oxc oxlint_v1.92.0
date: 2026-11-09
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.92.0) · 公開: 2026-11-06

## 要点

- 型認識 lint で `tsrs` を探して使う（[#28751](https://github.com/oxc-project/oxc/pull/28751)）
- `eslint/no-redeclare` に `ignoreDeclarationMerge` オプション（[#28816](https://github.com/oxc-project/oxc/pull/28816)）
- Vite+ の設定の `root` を設定ファイルのディレクトリから解決（oxfmt と共通）（[#28801](https://github.com/oxc-project/oxc/pull/28801)）
- `oxlint --init` が既存の設定ファイルを上書きしない（[#28754](https://github.com/oxc-project/oxc/pull/28754)）
- ルールの修正: `jsdoc/require-param`（[#28866](https://github.com/oxc-project/oxc/pull/28866)）、`react/only-export-components`（[#28761](https://github.com/oxc-project/oxc/pull/28761)）、`vitest/prefer-called-exactly-once-with`（[#28864](https://github.com/oxc-project/oxc/pull/28864)、[#28850](https://github.com/oxc-project/oxc/pull/28850)）、`jsx-a11y/aria-role`（[#28804](https://github.com/oxc-project/oxc/pull/28804)）、`eslint/no-restricted-imports`（[#28842](https://github.com/oxc-project/oxc/pull/28842)）、`eslint/no-misleading-character-class`（[#28822](https://github.com/oxc-project/oxc/pull/28822)、[#28733](https://github.com/oxc-project/oxc/pull/28733)）、`unicorn/prefer-type-error`（[#28819](https://github.com/oxc-project/oxc/pull/28819)）、`eslint/no-fallthrough`（[#28755](https://github.com/oxc-project/oxc/pull/28755)）、`eslint/prefer-spread`（[#28753](https://github.com/oxc-project/oxc/pull/28753)）、`unicorn/no-zero-fractions`（[#28752](https://github.com/oxc-project/oxc/pull/28752)）、`unicorn/prefer-single-call`（[#28763](https://github.com/oxc-project/oxc/pull/28763)）
- React Compiler: コールバック内のローカルな再代入を無視（[#28820](https://github.com/oxc-project/oxc/pull/28820)）
- 性能: import グラフのバッチを重ねて処理し、プールのワーカーでポーリングしない（[#28323](https://github.com/oxc-project/oxc/pull/28323)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]、[[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]、[[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]、[[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
