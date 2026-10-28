---
title: oxc-project/oxc oxlint_v1.90.0
date: 2026-10-28
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.90.0) · 公開: 2026-10-27

## 要点

- 型認識 lint: `typescript/no-unsafe-enum-assignment` を追加（[#28117](https://github.com/oxc-project/oxc/pull/28117)）、`typescript/await-thenable` に `allowMixedPromiseArrays` オプション（[#28116](https://github.com/oxc-project/oxc/pull/28116)）
- **最低バージョン**: optional な peer dependency `oxlint-tsgolint` は `>=7.0.2005` が必要（[#28118](https://github.com/oxc-project/oxc/pull/28118)）
- `oxlint` パッケージから設定の型 `Oxlintrc` をエクスポート（[#28132](https://github.com/oxc-project/oxc/pull/28132)）
- 型認識ルールの重大度を、同名の他のプラグインのルールと取り違えない（[#28138](https://github.com/oxc-project/oxc/pull/28138)）
- ルールの修正: `eslint/array-callback-return`（追加の引数があるコールバック）（[#28133](https://github.com/oxc-project/oxc/pull/28133)）、`eslint/no-useless-concat`（かっこを通して見る）（[#27984](https://github.com/oxc-project/oxc/pull/27984)）、`jest/no-conditional-expect`（関数式のコールバック）（[#28055](https://github.com/oxc-project/oxc/pull/28055)）、`eslint/prefer-const`（再代入される宣言子があれば修正しない）（[#28008](https://github.com/oxc-project/oxc/pull/28008)）、`arrow-body-style`（ブロック本体にするとき型アサーションを保つ）（[#27978](https://github.com/oxc-project/oxc/pull/27978)）
- React Compiler: `catch` に到達しない `try` で panic せずにコンパイル（[#28066](https://github.com/oxc-project/oxc/pull/28066)）
- 孤立サロゲートを含む名前の報告（[#27991](https://github.com/oxc-project/oxc/pull/27991)）、定数メンバーの `delete` と後の JSX のキーを保つ（[#27990](https://github.com/oxc-project/oxc/pull/27990)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-26|2026-10-26 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]、[[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]]、[[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]、[[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
