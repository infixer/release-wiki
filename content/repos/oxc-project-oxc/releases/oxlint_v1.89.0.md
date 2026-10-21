---
title: oxc-project/oxc oxlint_v1.89.0
date: 2026-10-21
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.89.0) · 公開: 2026-10-19

## 要点

- **破壊的変更**: 静的なプロパティ名・メンバー名で孤立サロゲートを保つ（[#27095](https://github.com/oxc-project/oxc/pull/27095)、[#26677](https://github.com/oxc-project/oxc/pull/26677)）
- 各プラグインのルールに上流の `recommended` の印を付けた（ESLint・TypeScript・Unicorn・import・jest/vitest・jsdoc・jsx-a11y・Next.js・node・promise・react/react-hooks・Vue 3）（[#27632](https://github.com/oxc-project/oxc/pull/27632)、[#27634](https://github.com/oxc-project/oxc/pull/27634)、[#27670](https://github.com/oxc-project/oxc/pull/27670)、[#27671](https://github.com/oxc-project/oxc/pull/27671)、[#27672](https://github.com/oxc-project/oxc/pull/27672)、[#27689](https://github.com/oxc-project/oxc/pull/27689)、[#27690](https://github.com/oxc-project/oxc/pull/27690)、[#27691](https://github.com/oxc-project/oxc/pull/27691)、[#27692](https://github.com/oxc-project/oxc/pull/27692)、[#27693](https://github.com/oxc-project/oxc/pull/27693)、[#27701](https://github.com/oxc-project/oxc/pull/27701)、[#27717](https://github.com/oxc-project/oxc/pull/27717)）
- 孤立サロゲートを含むモジュール指定子・文字列値もチェック（[#26717](https://github.com/oxc-project/oxc/pull/26717)、[#26716](https://github.com/oxc-project/oxc/pull/26716)）
- ESLint・Unicorn との差異を埋めるルール修正: `prefer-const`（ブロック内の分割代入）、`sort-vars`、`no-loop-func`、`block-scoped-var`、`no-lonely-if`、`sort-imports`、`sort-keys`、`prefer-template`、`prefer-arrow-callback`、`no-unused-vars`、`unicorn/no-useless-undefined`（`React.useRef`）、`unicorn/prefer-spread`、`unicorn/prefer-string-replace-all`、`unicorn/prefer-at`、`unicorn/prefer-native-coercion-functions`、`unicorn/prefer-string-raw` など（[#27856](https://github.com/oxc-project/oxc/pull/27856)、[#27767](https://github.com/oxc-project/oxc/pull/27767)、[#27754](https://github.com/oxc-project/oxc/pull/27754)、[#25027](https://github.com/oxc-project/oxc/pull/25027) ほか）

（Release の本文は取り込み時に途中で切れていたため、それ以降の項目は載せていない）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]]、[[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/oxc_str|oxc_str]]、[[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]
