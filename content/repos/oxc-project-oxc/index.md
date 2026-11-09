---
title: oxc-project/oxc
updated: 2026-11-09
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.92.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.92.0)（2026-11-06）→ [[repos/oxc-project-oxc/releases/oxlint_v1.92.0|まとめ]]
- プレリリース: なし

ほかの最新の安定版: [[repos/oxc-project-oxc/releases/oxfmt_v0.77.0|oxfmt_v0.77.0]]（2026-11-06）、[[repos/oxc-project-oxc/releases/crates_v0.157.0|crates_v0.157.0]]（2026-11-02）

## 直近の注目変更

- Oxfmt: `.vue` ファイルと `vue` コードブロックを Prettier ではなく `oxc_formatter_htmlish` で整形（破壊的変更）（[#28848](https://github.com/oxc-project/oxc/pull/28848)、[#28847](https://github.com/oxc-project/oxc/pull/28847)、[#28846](https://github.com/oxc-project/oxc/pull/28846)）📦 oxfmt_v0.77.0 · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]
- linter: 使われていない `oxlint-disable` コメントを `--fix` で削除（[#27698](https://github.com/oxc-project/oxc/pull/27698)、[#28921](https://github.com/oxc-project/oxc/pull/28921)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]
- lexer: CPU 機能（AVX2）の実行時検出、不規則な空白の報告、`oxc_simd` / `oxc_simd_macros` クレートの新設（[#28829](https://github.com/oxc-project/oxc/pull/28829)、[#29050](https://github.com/oxc-project/oxc/pull/29050)、[#29020](https://github.com/oxc-project/oxc/pull/29020)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- linter: `promise/prefer-catch` のサジェスチョン、CFG のラベル付きジャンプの修正（`no-unreachable`）、`react/exhaustive-deps` の依存の削除を危険なサジェスチョンに（[#28919](https://github.com/oxc-project/oxc/pull/28919)、[#29001](https://github.com/oxc-project/oxc/pull/29001)、[#29016](https://github.com/oxc-project/oxc/pull/29016)、[#28925](https://github.com/oxc-project/oxc/pull/28925)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- Vite+ の設定の `root` を設定ファイルのディレクトリから解決（[#28801](https://github.com/oxc-project/oxc/pull/28801)）📦 oxlint_v1.92.0 · トピック: [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]
- JSDoc: すべての行終端子を改行として扱う（[#28902](https://github.com/oxc-project/oxc/pull/28902)、[#28909](https://github.com/oxc-project/oxc/pull/28909)、[#28910](https://github.com/oxc-project/oxc/pull/28910)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- oxlint: 型認識 lint で `tsrs-lint` を探して優先的に使い、無ければ `tsgolint` にフォールバック（[#28751](https://github.com/oxc-project/oxc/pull/28751)）📦 oxlint_v1.92.0 · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- `eslint/no-redeclare` に `ignoreDeclarationMerge` オプション（既定 `true`）、`react/only-export-components`・`vitest/prefer-called-exactly-once-with`・`jsdoc/require-param` などの修正（[#28816](https://github.com/oxc-project/oxc/pull/28816)、[#28761](https://github.com/oxc-project/oxc/pull/28761)、[#28850](https://github.com/oxc-project/oxc/pull/28850)、[#28866](https://github.com/oxc-project/oxc/pull/28866)）📦 oxlint_v1.92.0 · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- Oxfmt: `sortTailwindcss` で整形が 1 回で安定しない問題を修正（[#28744](https://github.com/oxc-project/oxc/pull/28744)、[#28745](https://github.com/oxc-project/oxc/pull/28745)、[#28791](https://github.com/oxc-project/oxc/pull/28791)、[#28794](https://github.com/oxc-project/oxc/pull/28794)）、rest 引数のデコレーターを出力（[#28731](https://github.com/oxc-project/oxc/pull/28731)）📦 oxfmt_v0.77.0 · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- transformer: 静的プライベートフィールド・プライベートメソッド・アクセサーへの代入の下位変換を修正（[#28606](https://github.com/oxc-project/oxc/pull/28606)、[#28788](https://github.com/oxc-project/oxc/pull/28788)、[#28790](https://github.com/oxc-project/oxc/pull/28790)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]

## トピック

- [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]] — `oxc_transformer` の ES2022 クラス機能（静的ブロックなど）の下位変換
- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]] — `oxc_formatter_htmlish` クレート（oxfmt_v0.76.0 から HTML・埋め込み HTML、oxfmt_v0.77.0 から Vue の整形に使用）
- [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]] — `oxc_isolated_declarations` による `.d.ts` 生成
- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import/react 等、個別 lint ルールの不具合修正・オプション追加
- [[repos/oxc-project-oxc/topics/LSP|LSP]] — oxlint・oxfmt の言語サーバー（`oxc_language_server`）と設定エラーの通知
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート（oxfmt_v0.72.0 から Oxfmt の Markdown 整形に使用）
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正と圧縮の最適化（import / export の統合など）
- [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]] — NAPI パッケージの WASI（wasm32-wasip1）ビルド
- [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]] — ESLint `no-unused-vars` ルールの判定・自動修正
- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]] — Oxfmt（`oxc_formatter`、CSS・JSON・TOML フォーマッタを含む）の Prettier 互換性・コメント処理・同梱 Prettier の追従
- [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]] — `JSStr` などの文字列型を提供するクレート
- [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]] — oxlint の CLI・npm パッケージの実行時の挙動と性能
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション・メモ化の正しさ
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
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09]]、[[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04]]、[[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30]]
