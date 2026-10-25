---
title: Linterルール個別修正
updated: 2026-10-26
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

`no-unused-vars` 以外の個別 lint ルールについての細かい不具合修正をまとめたトピック。vitest/unicorn 系ルールの自動修正の適用範囲、`prefer-const`・`preserve-caught-error`・`import/no-duplicates`・`node/no-exports-assign` などのルールについて、判定基準や自動修正の適用条件を上流（ESLint・Unicorn・import-js・typescript-eslint）や実際の意味論に揃える変更が中心。自動修正が不正なコードや意味の変わるコードを生む問題（`require-await` と `await using`、`one-var` の `declare` 落ち、`prefer-exponentiation-operator` の優先順位、`unicorn/no-zero-fractions` の区切り文字付き整数）の修正も続いている。オプション追加としては `react/only-export-components` の `allowCompoundComponents`（oxlint_v1.86.0）、`react/jsx-no-target-blank`・`unicorn/no-useless-switch-case`・`react/no-unescaped-entities` のサジェスチョン実装がある。jsx-a11y 系（`lang`・`mouse-events-have-key-events`・`label-has-associated-control`）では、式の文字列・nullish な値・空の属性値の判定を直す修正が入った。`unicorn/prefer-query-selector` には `allowWithVariables` オプションが追加された（oxlint_v1.88.0 で公開）。`typescript/no-import-type-side-effects` と `import/no-duplicates` の自動修正が同じパスで衝突して不正な構文を生む問題も修正された（oxlint_v1.88.0 で公開）。`unicorn/prefer-bigint-literals` は `BigInt(123n)` を `123n` に簡約し、実行時の値が変わる（精度が落ちる）自動修正は行わないようになった。精度の判定は `utils/number.rs` に共通化され、`no-loss-of-precision` の 2・8・16 進数の判定も直った（oxlint_v1.88.0 で公開）。`sort-keys` の `natural: true` の比較は ESLint の `natural-compare` の移植になり、全順序でない比較による自動修正の panic も解消した。`oxc/bad-array-method-on-arguments` は `arguments` の参照をファイルごとに 1 回だけ調べるようになり、`var arguments;` に束縛された参照もチェックする（いずれも oxlint_v1.88.0）。2026-10-16 の回では、#27710・#27746 の報告をもとに ESLint・Unicorn との差異を埋める修正が多数入った（`no-setter-return` のディスクリプタのセッター、`no-useless-assignment` の引数への代入、`max-params` の rest 引数、`id-length` の分割代入、`no-magic-numbers`・`no-div-regex`、`unicorn/consistent-function-scoping`・`no-array-callback-reference`・`prefer-type-error`・`catch-error-name` など）。`no-var` と `unicorn/catch-error-name` の自動修正が不正なコードを生む問題も直った（いずれも未リリース）。2026-10-19 の回では `eslint/prefer-template` が入れ子の連結を ESLint と同じく別々に報告するようになった（未リリース）。これらは oxlint_v1.89.0（2026-10-19）で公開された。同じリリースで、孤立サロゲートを含む文字列でも各ルールがチェックを行うようになった（UTF-8 が必要な自動修正は診断だけ残す。ユーザー設定の正規表現・glob はそうした値に一致しない）。その後、`eslint/arrow-body-style` の自動修正が型アサーションを保ち、`react/jsx-key` の `warnOnDuplicates` が置換を含むテンプレートの `key` の後の重複を再び報告するようになった（いずれも未リリース）。2026-10-23 の回では、`eslint/prefer-const` が再代入される宣言子を含む宣言を自動修正しない、`jest/no-conditional-expect`（Vitest も）が関数式のコールバックをたどる、`eslint/no-useless-concat` がかっこを見通す、孤立サロゲートを含む名前でも `jest/no-jasmine-globals`・`import/no-commonjs`・`import/namespace`・`react/rules-of-hooks` などが報告する、という修正が入った（いずれも未リリース）。2026-10-26 の回では、`eslint/array-callback-return` が初期値付きの `reduce` / `reduceRight` や `thisArg` 付きの `map`・`Array.from` のように追加の引数があるコールバックも ESLint と同じくチェックするようになった（未リリース）。

## 変更履歴

- 2026-10-26 — `eslint/array-callback-return`: 追加の引数があるコールバックもチェック（#28128）（[#28133](https://github.com/oxc-project/oxc/pull/28133)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-26|変更]]
- 2026-10-23 — `eslint/prefer-const`: どれかの宣言子が再代入されるなら自動修正しない（#28003）（[#28008](https://github.com/oxc-project/oxc/pull/28008)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-23 — `jest/no-conditional-expect`・`vitest/no-conditional-expect`: 関数式のコールバックをテスト呼び出しまでたどる（[#28055](https://github.com/oxc-project/oxc/pull/28055)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-23 — `eslint/no-useless-concat`: かっこで囲まれた式を見通す（[#27984](https://github.com/oxc-project/oxc/pull/27984)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-23 — 孤立サロゲートを含む名前も `jest/no-jasmine-globals`・`import/no-commonjs`・`import/namespace`・`react/rules-of-hooks` で報告、enum の重複メンバーも TS2300 で報告（[#27991](https://github.com/oxc-project/oxc/pull/27991)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-23|変更]]
- 2026-10-21 — `react/jsx-key`: `warnOnDuplicates` で置換を含むテンプレートの `key` の次の `key` を読む（[#27990](https://github.com/oxc-project/oxc/pull/27990)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — `eslint/arrow-body-style`: ブロック本体にする自動修正で型アサーション（`as`・`satisfies`・`<T>`）を保つ（[#27978](https://github.com/oxc-project/oxc/pull/27978)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-21 — 孤立サロゲートを含むモジュール指定子・文字列値でもチェックを行う（[#26716](https://github.com/oxc-project/oxc/pull/26716)、[#26717](https://github.com/oxc-project/oxc/pull/26717)） 📦 oxlint_v1.89.0 · [[repos/oxc-project-oxc/changes/2026-10-21|変更]]
- 2026-10-19 — `eslint/prefer-template`: 関係の無い `+` の中に入れ子になった連結を別々に報告（#27746 の報告 10）（[#27764](https://github.com/oxc-project/oxc/pull/27764)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-19|変更]]
- 2026-10-16 — `unicorn/catch-error-name`: 自動修正の名前の衝突を防ぎ、未使用の `_err`・`__` も報告（[#27702](https://github.com/oxc-project/oxc/pull/27702)、[#27751](https://github.com/oxc-project/oxc/pull/27751)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-16 — `eslint/no-var`: 再宣言された束縛では自動修正しない（[#27697](https://github.com/oxc-project/oxc/pull/27697)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-16 — `unicorn/consistent-function-scoping`・`no-array-callback-reference`・`prefer-type-error` を Unicorn に揃える（[#27726](https://github.com/oxc-project/oxc/pull/27726)、[#27763](https://github.com/oxc-project/oxc/pull/27763)、[#27766](https://github.com/oxc-project/oxc/pull/27766)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-16 — `eslint/no-div-regex`・`no-magic-numbers`・`id-length`・`no-setter-return`・`no-useless-assignment`・`max-params` を ESLint に揃える（[#27722](https://github.com/oxc-project/oxc/pull/27722)、[#27723](https://github.com/oxc-project/oxc/pull/27723)、[#27724](https://github.com/oxc-project/oxc/pull/27724)、[#27731](https://github.com/oxc-project/oxc/pull/27731)、[#27735](https://github.com/oxc-project/oxc/pull/27735)、[#27757](https://github.com/oxc-project/oxc/pull/27757)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-16|変更]]
- 2026-10-14 — `sort-keys`: `natural: true` の比較を ESLint の `natural-compare` に揃え、自動修正の panic・重複キーの入れ替えを解消（[#27579](https://github.com/oxc-project/oxc/pull/27579)） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-14 — `oxc/bad-array-method-on-arguments`: `arguments` の参照をファイルごとに 1 回だけ調べ、`var arguments;` に束縛された参照もチェック（[#26930](https://github.com/oxc-project/oxc/pull/26930)） 📦 oxlint_v1.88.0 · [[repos/oxc-project-oxc/changes/2026-10-14|変更]]
- 2026-10-12 — `unicorn/prefer-bigint-literals`: 冗長な `BigInt()` を外し、精度が落ちる自動修正をしない（[#25690](https://github.com/oxc-project/oxc/pull/25690)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-12|変更]]
- 2026-10-09 — `typescript/no-import-type-side-effects` と `import/no-duplicates` の自動修正の衝突を防止（[#27409](https://github.com/oxc-project/oxc/pull/27409)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-09|変更]]
- 2026-10-07 — `unicorn/prefer-query-selector` に `allowWithVariables` オプションを追加（[#27346](https://github.com/oxc-project/oxc/pull/27346)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-07|変更]]
- 2026-10-05 — `react/no-unescaped-entities` にサジェスチョンを実装（[#27292](https://github.com/oxc-project/oxc/pull/27292)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-05|変更]]
- 2026-10-05 — `jsx-a11y/label-has-associated-control` がラベル・関連付け属性の値（空文字など）を検証（[#27302](https://github.com/oxc-project/oxc/pull/27302)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-05|変更]]
- 2026-10-05 — `jsx-a11y/mouse-events-have-key-events` が nullish なイベントハンドラーを正しく扱う（[#27306](https://github.com/oxc-project/oxc/pull/27306)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-05|変更]]
- 2026-10-05 — `jsx-a11y/lang` が式の文字列・式を含まないテンプレートも BCP 47 で検証（[#27304](https://github.com/oxc-project/oxc/pull/27304)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-05|変更]]
- 2026-10-02 — `unicorn/no-useless-switch-case` にサジェスチョンを実装（[#27245](https://github.com/oxc-project/oxc/pull/27245)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — `unicorn/numeric-separators-style` が区切り位置の誤った BigInt を報告するよう修正（[#27207](https://github.com/oxc-project/oxc/pull/27207)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-10-02 — `unicorn/no-zero-fractions` の自動修正で区切り文字付き・巨大な整数をかっこで囲むよう修正（[#27206](https://github.com/oxc-project/oxc/pull/27206)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-02|変更]]
- 2026-09-30 — `react/jsx-no-target-blank` にサジェスチョンを実装（[#27181](https://github.com/oxc-project/oxc/pull/27181)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `prefer-exponentiation-operator` の自動修正で演算子の優先順位を保つ（かっこで囲む）（[#27150](https://github.com/oxc-project/oxc/pull/27150)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — jest/vitest の `valid-title` が `disallowedWords` 設定時も残りのチェックを続けるよう修正（[#27146](https://github.com/oxc-project/oxc/pull/27146)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `typescript/no-unnecessary-parameter-property-assignment` が引数の再代入を考慮するよう修正（[#26955](https://github.com/oxc-project/oxc/pull/26955)）📦 oxlint_v1.86.0 · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `react/only-export-components` に `allowCompoundComponents` オプションを追加（[#27117](https://github.com/oxc-project/oxc/pull/27117)）📦 oxlint_v1.86.0 · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `eslint/one-var` の分割時に `declare` を保持するよう修正（[#27081](https://github.com/oxc-project/oxc/pull/27081)）📦 oxlint_v1.86.0 · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
- 2026-09-30 — `eslint/require-await` が `await using` を await として数えるよう修正（[#27080](https://github.com/oxc-project/oxc/pull/27080)）📦 oxlint_v1.86.0 · [[repos/oxc-project-oxc/changes/2026-09-30|変更]]
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
- [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|oxlint_v1.86.0]]
- [[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.87.0|oxlint_v1.87.0]]
- [[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.88.0|oxlint_v1.88.0]]
- [[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19 の変更]]
- [[repos/oxc-project-oxc/releases/oxlint_v1.89.0|oxlint_v1.89.0]]
- [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23 の変更]]
