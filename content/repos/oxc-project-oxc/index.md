---
title: oxc-project/oxc
updated: 2026-11-11
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.93.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.93.0)（2026-11-09）→ [[repos/oxc-project-oxc/releases/oxlint_v1.93.0|まとめ]]
- プレリリース: なし

ほかの最新の安定版: [[repos/oxc-project-oxc/releases/oxfmt_v0.78.0|oxfmt_v0.78.0]]（2026-11-09）、[[repos/oxc-project-oxc/releases/crates_v0.158.0|crates_v0.158.0]]（2026-11-09）

## 直近の注目変更

- linter: `no-unused-vars` が使われていない型パラメーターの削除を提案（危険なサジェスチョン）（[#28762](https://github.com/oxc-project/oxc/pull/28762)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]]
- React Compiler: 論理代入演算子（`??=`・`||=`・`&&=`）に対応（[#29137](https://github.com/oxc-project/oxc/pull/29137)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- linter: `oxc` プラグインのルールに `recommended` の印（[#28091](https://github.com/oxc-project/oxc/pull/28091)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]]
- parser: `abstract declare` とアサーションに隠れた `**` のオペランドを拒否、数値の区切り文字のエラー位置（[#29111](https://github.com/oxc-project/oxc/pull/29111)、[#29115](https://github.com/oxc-project/oxc/pull/29115)、[#29117](https://github.com/oxc-project/oxc/pull/29117)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- linter: `eslint/no-use-before-define` の多数の修正、`eslint/arrow-body-style` の修正の収束、`eslint/no-restricted-imports` の不正な正規表現の報告、`jsdoc/require-param-description` のサジェスチョン（[#28861](https://github.com/oxc-project/oxc/pull/28861)、[#29101](https://github.com/oxc-project/oxc/pull/29101)、[#29119](https://github.com/oxc-project/oxc/pull/29119)、[#29118](https://github.com/oxc-project/oxc/pull/29118)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- transformer: TypeScript でラップした代入先の下位変換と計算メンバーのレシーバー（[#29113](https://github.com/oxc-project/oxc/pull/29113)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]
- Isolated Declarations: enum の計算メンバー・テンプレートリテラル、アクセサーの型推論と `readonly`（[#29040](https://github.com/oxc-project/oxc/pull/29040)、[#28997](https://github.com/oxc-project/oxc/pull/28997)、[#29038](https://github.com/oxc-project/oxc/pull/29038)、[#29039](https://github.com/oxc-project/oxc/pull/29039)）📦 oxlint_v1.93.0 · トピック: [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]]
- transformer: シャドーされたクラス名での静的プライベートのブランド、namespace をまたぐ export した enum のマージ（[#28894](https://github.com/oxc-project/oxc/pull/28894)、[#28999](https://github.com/oxc-project/oxc/pull/28999)）📦 oxlint_v1.93.0 · トピック: [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]、[[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]
- Oxfmt: Astro の中の TypeScript を TSX として整形、Less の `%` セレクターと `~` エスケープ（[#29080](https://github.com/oxc-project/oxc/pull/29080)、[#29088](https://github.com/oxc-project/oxc/pull/29088)、[#29089](https://github.com/oxc-project/oxc/pull/29089)）📦 oxlint_v1.93.0 · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Oxfmt: `.vue` ファイルと `vue` コードブロックを Prettier ではなく `oxc_formatter_htmlish` で整形（破壊的変更）（[#28848](https://github.com/oxc-project/oxc/pull/28848)、[#28847](https://github.com/oxc-project/oxc/pull/28847)、[#28846](https://github.com/oxc-project/oxc/pull/28846)）📦 oxfmt_v0.77.0 · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]

## トピック

- [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]] — `oxc_transformer` の ES2022 クラス機能（静的ブロックなど）の下位変換
- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]] — `oxc_formatter_htmlish` クレート（oxfmt_v0.76.0 から HTML・埋め込み HTML、oxfmt_v0.77.0 から Vue の整形に使用）
- [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]] — `oxc_isolated_declarations` による `.d.ts` 生成（enum・アクセサーの出力の TypeScript との一致）
- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import/react 等、個別 lint ルールの不具合修正・オプション追加
- [[repos/oxc-project-oxc/topics/LSP|LSP]] — oxlint・oxfmt の言語サーバー（`oxc_language_server`）と設定エラーの通知
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート（oxfmt_v0.72.0 から Oxfmt の Markdown 整形に使用）
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正と圧縮の最適化（import / export の統合など）
- [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]] — NAPI パッケージの WASI（wasm32-wasip1）ビルド
- [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]] — ESLint `no-unused-vars` ルールの判定・自動修正（使われていない型パラメーターの削除の提案を含む）
- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]] — Oxfmt（`oxc_formatter`、CSS・JSON・TOML フォーマッタを含む）の Prettier 互換性・コメント処理・同梱 Prettier の追従
- [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]] — `JSStr` などの文字列型を提供するクレート
- [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]] — oxlint の CLI・npm パッケージの実行時の挙動と性能
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
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
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-11-11|2026-11-11]]、[[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09]]、[[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04]]、[[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02]]
