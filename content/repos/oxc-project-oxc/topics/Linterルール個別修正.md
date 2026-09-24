---
title: Linterルール個別修正
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`no-unused-vars` 以外の個別 lint ルールについての細かい不具合修正をまとめたトピック。vitest/unicorn 系ルールの自動修正の適用範囲、`prefer-const`・`preserve-caught-error`・`import/no-duplicates`・`node/no-exports-assign` などのルールについて、判定基準や自動修正の適用条件を上流（ESLint・Unicorn・import-js）や実際の意味論に揃える変更が中心。

## 変更履歴

- 2026-09-24 — `node/no-exports-assign` のカテゴリを style から suspicious に変更（[#26555](https://github.com/oxc-project/oxc/pull/26555)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — `import/no-duplicates` が import attributes の異なるインポートを区別するように修正（[#26936](https://github.com/oxc-project/oxc/pull/26936)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — `unicorn/prefer-spread` から `String#split('')` の検出を削除（Unicorn v66 に追従）（[#26935](https://github.com/oxc-project/oxc/pull/26935)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — `eslint/prefer-const` が式に埋め込まれた代入を誤検知しないよう修正（[#26920](https://github.com/oxc-project/oxc/pull/26920)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — `eslint/preserve-caught-error` と `unicorn/prefer-optional-catch-binding` の競合する自動修正を解消（[#26726](https://github.com/oxc-project/oxc/pull/26726)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — `unicorn/consistent-function-scoping` が祖先のみを参照する関数も検出するように修正（[#26625](https://github.com/oxc-project/oxc/pull/26625)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — `vitest/prefer-to-be-truthy` 等の自動修正をサジェスチョンに再分類（[#26761](https://github.com/oxc-project/oxc/pull/26761)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|oxlint_v1.85.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
