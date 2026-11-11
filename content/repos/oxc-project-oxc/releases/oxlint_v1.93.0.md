---
title: oxc-project/oxc oxlint_v1.93.0
date: 2026-11-11
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.93.0) · 公開: 2026-11-09

## 要点

- 新機能: `promise/prefer-catch` のサジェスチョン（[#28919](https://github.com/oxc-project/oxc/pull/28919)）
- 使われていない `oxlint-disable` ディレクティブを `--fix` で削除（[#27698](https://github.com/oxc-project/oxc/pull/27698)）、区切りと無効化の範囲を保つ（[#28921](https://github.com/oxc-project/oxc/pull/28921)）
- CFG の修正: ラベルの無いジャンプでラベル付きのコンテキストを飛ばす（[#29001](https://github.com/oxc-project/oxc/pull/29001)）、積み重なったループのラベルを通る `continue` を解決（[#29016](https://github.com/oxc-project/oxc/pull/29016)）
- `react/exhaustive-deps`: 依存の削除をサジェスチョンに（[#28925](https://github.com/oxc-project/oxc/pull/28925)）、削除でコメントを保つ（[#29047](https://github.com/oxc-project/oxc/pull/29047)）
- `unicorn/no-useless-undefined` の修正（[#29007](https://github.com/oxc-project/oxc/pull/29007)、[#29000](https://github.com/oxc-project/oxc/pull/29000)、[#29046](https://github.com/oxc-project/oxc/pull/29046)、[#29014](https://github.com/oxc-project/oxc/pull/29014)）
- そのほかのルールの修正: `vitest/expect-expect`（[#29044](https://github.com/oxc-project/oxc/pull/29044)）、`eslint/no-unreachable-loop`（[#29004](https://github.com/oxc-project/oxc/pull/29004)）、`jsdoc/require-param` に関わる JSDoc の解析（[#28923](https://github.com/oxc-project/oxc/pull/28923)）、`eslint/no-lone-blocks`（[#29043](https://github.com/oxc-project/oxc/pull/29043)）、`unicorn/prefer-regexp-test`（[#29045](https://github.com/oxc-project/oxc/pull/29045)）、`react/display-name`（[#29005](https://github.com/oxc-project/oxc/pull/29005)）、`eslint/id-length`（[#29037](https://github.com/oxc-project/oxc/pull/29037)）、`import/no-anonymous-default-export`（[#29002](https://github.com/oxc-project/oxc/pull/29002)）、`eslint/prefer-destructuring`（[#29003](https://github.com/oxc-project/oxc/pull/29003)）、`eslint/no-restricted-imports`（[#28920](https://github.com/oxc-project/oxc/pull/28920)）
- 性能: 通常の lint の前に tsgolint を起動（[#28824](https://github.com/oxc-project/oxc/pull/28824)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-11|2026-11-11 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]、[[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- 前のリリース: [[repos/oxc-project-oxc/releases/oxlint_v1.92.0|oxlint_v1.92.0]]
