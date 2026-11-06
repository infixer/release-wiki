---
title: oxc-project/oxc
updated: 2026-11-06
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.91.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.91.0)（2026-11-03）→ [[repos/oxc-project-oxc/releases/oxlint_v1.91.0|まとめ]]
- プレリリース: なし

ほかの最新の安定版: [[repos/oxc-project-oxc/releases/oxfmt_v0.76.0|oxfmt_v0.76.0]]（2026-11-03）、[[repos/oxc-project-oxc/releases/crates_v0.157.0|crates_v0.157.0]]（2026-11-02）

## 直近の注目変更

- oxlint: 型認識 lint で `tsrs-lint` を探して優先的に使い、無ければ `tsgolint` にフォールバック（[#28751](https://github.com/oxc-project/oxc/pull/28751)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- `eslint/no-redeclare` に `ignoreDeclarationMerge` オプション（既定 `true`）、`react/only-export-components`・`vitest/prefer-called-exactly-once-with`・`jsdoc/require-param` などの修正（[#28816](https://github.com/oxc-project/oxc/pull/28816)、[#28761](https://github.com/oxc-project/oxc/pull/28761)、[#28850](https://github.com/oxc-project/oxc/pull/28850)、[#28866](https://github.com/oxc-project/oxc/pull/28866)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- Oxfmt: `sortTailwindcss` で整形が 1 回で安定しない問題を修正（[#28744](https://github.com/oxc-project/oxc/pull/28744)、[#28745](https://github.com/oxc-project/oxc/pull/28745)、[#28791](https://github.com/oxc-project/oxc/pull/28791)、[#28794](https://github.com/oxc-project/oxc/pull/28794)）、rest 引数のデコレーターを出力（[#28731](https://github.com/oxc-project/oxc/pull/28731)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- transformer: 静的プライベートフィールド・プライベートメソッド・アクセサーへの代入の下位変換を修正（[#28606](https://github.com/oxc-project/oxc/pull/28606)、[#28788](https://github.com/oxc-project/oxc/pull/28788)、[#28790](https://github.com/oxc-project/oxc/pull/28790)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]
- codegen: 無限大を `1e400` で出力（[#28812](https://github.com/oxc-project/oxc/pull/28812)）、ソースマップの重複マッピングを解消（[#28844](https://github.com/oxc-project/oxc/pull/28844)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- lexer: `cpu`・`simd` 以外の `#[cfg(target_arch)]` を外し、AVX2・Neon・汎用のすべてのコードを全プラットフォームでコンパイル（[#28772](https://github.com/oxc-project/oxc/pull/28772)）、アラインされた `VecData128` / `VecData256` を導入（[#28766](https://github.com/oxc-project/oxc/pull/28766)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- oxlint: `--init` が既存の設定ファイルを上書きせずエラーで終了（[#28754](https://github.com/oxc-project/oxc/pull/28754)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]
- パーサー: `st\u0061tic` などエスケープされた文脈キーワードを名前として扱う（[#28748](https://github.com/oxc-project/oxc/pull/28748)）、semantic: ブロックの型の束縛を巻き上げる `var` と分ける（[#28601](https://github.com/oxc-project/oxc/pull/28601)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- lexer: SIMD のベクター型 `Vec256` / `Vec128` を導入し、CPU 機能のマクロを proc macro（`oxc_lexer_macros`）に（[#28679](https://github.com/oxc-project/oxc/pull/28679)、[#28681](https://github.com/oxc-project/oxc/pull/28681)）📦 oxlint_v1.91.0 · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- Oxfmt: `.html` と埋め込み HTML を `oxc_formatter_htmlish` でネイティブに整形（破壊的変更）（[#28273](https://github.com/oxc-project/oxc/pull/28273)、[#28272](https://github.com/oxc-project/oxc/pull/28272)）📦 oxfmt_v0.76.0 · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]

## トピック

- [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]] — `oxc_transformer` の ES2022 クラス機能（静的ブロックなど）の下位変換
- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]] — `oxc_formatter_htmlish` クレート（oxfmt_v0.76.0 から Oxfmt の HTML・埋め込み HTML の整形に使用）
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
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装（AVX2・NEON）と CPU 機能の実行時検出・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint（`tsrs-lint` / `tsgolint`）による型認識 lint ルールと `--type-check-only`
- [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]] — 上流のプラグインに合わせたルールの `recommended` の印
- [[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]] — oxlint・oxfmt の設定ファイルの読み込みとエラー表示

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04]]、[[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30]]、[[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28]]
