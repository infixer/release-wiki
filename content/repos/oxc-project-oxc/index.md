---
title: oxc-project/oxc
updated: 2026-11-13
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.93.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.93.0)（2026-11-09）→ [[repos/oxc-project-oxc/releases/oxlint_v1.93.0|まとめ]]
- プレリリース: なし

ほかの最新の安定版: [[repos/oxc-project-oxc/releases/oxfmt_v0.78.0|oxfmt_v0.78.0]]（2026-11-09）、[[repos/oxc-project-oxc/releases/crates_v0.158.0|crates_v0.158.0]]（2026-11-09）

## 直近の注目変更

- linter: 通常の lint 中（`--fix` なしでも）の panic・無限再帰を多数のルールで修正（Unicode の空白、かっこで囲んだ呼び出し先、波かっこを含む文字列など）（[#29271](https://github.com/oxc-project/oxc/pull/29271)、[#29272](https://github.com/oxc-project/oxc/pull/29272)、[#29277](https://github.com/oxc-project/oxc/pull/29277)、[#29270](https://github.com/oxc-project/oxc/pull/29270)、[#29274](https://github.com/oxc-project/oxc/pull/29274)、[#29275](https://github.com/oxc-project/oxc/pull/29275) ほか）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- Minifier: 1 回だけ使うメンバーの読み取りを呼び出しの引数・`new` 式・呼び出し先（`(0, o.m)()`）に埋め込む、同じ本体の隣り合う `switch` の `case` をまとめる（[#29303](https://github.com/oxc-project/oxc/pull/29303)、[#29304](https://github.com/oxc-project/oxc/pull/29304)、[#29305](https://github.com/oxc-project/oxc/pull/29305)、[#29316](https://github.com/oxc-project/oxc/pull/29316)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- linter: `typescript/no-misused-promises` に `flagUnions` オプション（oxlint-tsgolint 7.0.2007）（[#29380](https://github.com/oxc-project/oxc/pull/29380)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- lexer: `oxc_lexer` と SIMD のクレートを crates.io に公開（[#29264](https://github.com/oxc-project/oxc/pull/29264)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- Oxfmt・HTML フォーマッタ: 型エイリアスのユニオンの抱え込み、文字参照を含む属性を保つ、Angular のブロック（[#29256](https://github.com/oxc-project/oxc/pull/29256)、[#29261](https://github.com/oxc-project/oxc/pull/29261)、[#29257](https://github.com/oxc-project/oxc/pull/29257)、[#29258](https://github.com/oxc-project/oxc/pull/29258)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]
- linter: `no-unused-vars` が使われていない型パラメーターの削除を提案（危険なサジェスチョン）（[#28762](https://github.com/oxc-project/oxc/pull/28762)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]]
- React Compiler: 論理代入演算子（`??=`・`||=`・`&&=`）に対応（[#29137](https://github.com/oxc-project/oxc/pull/29137)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- linter: `oxc` プラグインのルールに `recommended` の印（[#28091](https://github.com/oxc-project/oxc/pull/28091)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]]
- parser: `abstract declare` とアサーションに隠れた `**` のオペランドを拒否、数値の区切り文字のエラー位置（[#29111](https://github.com/oxc-project/oxc/pull/29111)、[#29115](https://github.com/oxc-project/oxc/pull/29115)、[#29117](https://github.com/oxc-project/oxc/pull/29117)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- linter: `eslint/no-use-before-define` の多数の修正、`eslint/arrow-body-style` の修正の収束、`eslint/no-restricted-imports` の不正な正規表現の報告、`jsdoc/require-param-description` のサジェスチョン（[#28861](https://github.com/oxc-project/oxc/pull/28861)、[#29101](https://github.com/oxc-project/oxc/pull/29101)、[#29119](https://github.com/oxc-project/oxc/pull/29119)、[#29118](https://github.com/oxc-project/oxc/pull/29118)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]

## トピック

- [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]] — `oxc_transformer` の ES2022 クラス機能（静的ブロックなど）の下位変換
- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]] — `oxc_formatter_htmlish` クレート（oxfmt_v0.76.0 から HTML・埋め込み HTML、oxfmt_v0.77.0 から Vue の整形に使用）
- [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]] — `oxc_isolated_declarations` による `.d.ts` 生成（enum・アクセサーの出力の TypeScript との一致）
- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import/react 等、個別 lint ルールの不具合修正・オプション追加
- [[repos/oxc-project-oxc/topics/LSP|LSP]] — oxlint・oxfmt の言語サーバー（`oxc_language_server`）と設定エラーの通知
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート（oxfmt_v0.72.0 から Oxfmt の Markdown 整形に使用）
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正と圧縮の最適化（import / export の統合、メンバーの読み取りの埋め込みなど）
- [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]] — NAPI パッケージの WASI（wasm32-wasip1）ビルド
- [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]] — ESLint `no-unused-vars` ルールの判定・自動修正（使われていない型パラメーターの削除の提案を含む）
- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]] — Oxfmt（`oxc_formatter`、CSS・JSON・TOML フォーマッタを含む）の Prettier 互換性・コメント処理・同梱 Prettier の追従
- [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]] — `JSStr` などの文字列型を提供するクレート
- [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]] — oxlint の CLI・npm パッケージの実行時の挙動と性能
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能（プロパティ名のマングリング、ヘルパーのモジュール名の指定）
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション・メモ化の正しさ・論理代入演算子への対応
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理と `ReplaceGlobalDefines`・inject（`oxc_transformer_plugins`）
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤とメモリ割り当ての計測
- [[repos/oxc-project-oxc/topics/パーサー|パーサー]] — `oxc_parser`・AST（ノード ID・コメントの付属先）・`oxc_regular_expression`、TypeScript 診断の tsc 互換
- [[repos/oxc-project-oxc/topics/ランタイムヘルパー|ランタイムヘルパー]] — `npm/runtime` の変換用ランタイムヘルパー（`asyncIterator` など）
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装（AVX2・NEON、`oxc_simd`）と CPU 機能の実行時検出・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint（`tsrs-lint` / `tsgolint`）による型認識 lint ルールと `--type-check-only`
- [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]] — 上流のプラグインに合わせたルールの `recommended` の印
- [[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]] — oxlint・oxfmt の設定ファイルの読み込みとエラー表示

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-11-13|2026-11-13]]、[[repos/oxc-project-oxc/changes/2026-11-11|2026-11-11]]、[[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09]]、[[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04]]
