---
title: oxc-project/oxc
updated: 2026-11-04
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.91.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.91.0)（2026-11-03）→ [[repos/oxc-project-oxc/releases/oxlint_v1.91.0|まとめ]]
- プレリリース: なし

ほかの最新の安定版: [[repos/oxc-project-oxc/releases/oxfmt_v0.76.0|oxfmt_v0.76.0]]（2026-11-03）、[[repos/oxc-project-oxc/releases/crates_v0.157.0|crates_v0.157.0]]（2026-11-02）

## 直近の注目変更

- lexer: `cpu`・`simd` 以外の `#[cfg(target_arch)]` を外し、AVX2・Neon・汎用のすべてのコードを全プラットフォームでコンパイル（[#28772](https://github.com/oxc-project/oxc/pull/28772)）、アラインされた `VecData128` / `VecData256` を導入（[#28766](https://github.com/oxc-project/oxc/pull/28766)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- oxlint: `--init` が既存の設定ファイルを上書きせずエラーで終了（[#28754](https://github.com/oxc-project/oxc/pull/28754)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]
- lint ルールの修正: `no-misleading-character-class`・`unicorn/no-zero-fractions`・`prefer-spread`・`no-fallthrough`（[#28733](https://github.com/oxc-project/oxc/pull/28733)、[#28752](https://github.com/oxc-project/oxc/pull/28752)、[#28753](https://github.com/oxc-project/oxc/pull/28753)、[#28755](https://github.com/oxc-project/oxc/pull/28755)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- パーサー: `st\u0061tic` などエスケープされた文脈キーワードを名前として扱う（[#28748](https://github.com/oxc-project/oxc/pull/28748)）、semantic: ブロックの型の束縛を巻き上げる `var` と分ける（[#28601](https://github.com/oxc-project/oxc/pull/28601)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- transformer: プライベートアクセサーへの `+=`・`??=`・`++` の値を保つ（[#28716](https://github.com/oxc-project/oxc/pull/28716)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]
- Minifier: 配列の `concat` の連鎖の誤った統合を修正（[#28261](https://github.com/oxc-project/oxc/pull/28261)）、codegen: ソースマップで識別子の名前を保つ（[#26051](https://github.com/oxc-project/oxc/pull/26051)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- lexer: SIMD のベクター型 `Vec256` / `Vec128` を導入し、CPU 機能のマクロを proc macro（`oxc_lexer_macros`）に（[#28679](https://github.com/oxc-project/oxc/pull/28679)、[#28681](https://github.com/oxc-project/oxc/pull/28681)）📦 oxlint_v1.91.0 · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- Oxfmt: XHTML に対応（[#28703](https://github.com/oxc-project/oxc/pull/28703)）、アローの条件式の本体のかっこを保つ（[#28710](https://github.com/oxc-project/oxc/pull/28710)）📦 oxlint_v1.91.0 · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]、[[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Oxfmt: `.html` と埋め込み HTML を `oxc_formatter_htmlish` でネイティブに整形（破壊的変更）（[#28273](https://github.com/oxc-project/oxc/pull/28273)、[#28272](https://github.com/oxc-project/oxc/pull/28272)）📦 oxfmt_v0.76.0 · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]
- linter ルールごとのメモリ割り当ての計測を追加（ローカル専用）（[#28470](https://github.com/oxc-project/oxc/pull/28470)）📦 oxlint_v1.91.0 · トピック: [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]]

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
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint による型認識 lint ルールと `--type-check-only`
- [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]] — 上流のプラグインに合わせたルールの `recommended` の印
- [[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]] — oxlint・oxfmt の設定ファイルの読み込みとエラー表示

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04]]、[[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30]]、[[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28]]、[[repos/oxc-project-oxc/changes/2026-10-26|2026-10-26]]
