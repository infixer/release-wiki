---
title: oxc-project/oxc
updated: 2026-11-02
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.90.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.90.0)（2026-10-27）→ [[repos/oxc-project-oxc/releases/oxlint_v1.90.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.156.0|crates_v0.156.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.75.0|oxfmt_v0.75.0]]（いずれも 2026-10-27）

## 直近の注目変更

- Oxfmt: `.html` と html-in-js などの埋め込み HTML を Prettier ではなく新しいクレート `oxc_formatter_htmlish` でネイティブに整形（破壊的変更）（[#28272](https://github.com/oxc-project/oxc/pull/28272)、[#28273](https://github.com/oxc-project/oxc/pull/28273)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]
- HTML フォーマッタ: 開始タグを省略した `html`・`head`・`body` の終了タグ、`</${For}>` のような動的なタグ名の閉じタグに対応（[#28388](https://github.com/oxc-project/oxc/pull/28388)、[#28389](https://github.com/oxc-project/oxc/pull/28389)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]
- レキサー: 実行時の CPU 機能検出に向けて、`carve`・`Lanes`・`disambiguate` などの関数を CPU 機能セットごとにコンパイル（[#28613](https://github.com/oxc-project/oxc/pull/28613) など 25 件）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- linter ルールごとのメモリ割り当ての計測を追加（ローカル専用）（[#28470](https://github.com/oxc-project/oxc/pull/28470)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]]
- React Compiler: 未マージの修正 11 件をまとめて取り込み、28 件の issue を解決（[#28195](https://github.com/oxc-project/oxc/pull/28195)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- パーサー: 重複した import 属性のキーに専用のエラー、かっこで囲んだ `#x in obj` を許可、TS の ESTree の `Program` の範囲にコメントを含める（[#28262](https://github.com/oxc-project/oxc/pull/28262)、[#28284](https://github.com/oxc-project/oxc/pull/28284)、[#28326](https://github.com/oxc-project/oxc/pull/28326)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- 数値の文字列化を `zmij_ecma` に置き換えて高速化（[#28282](https://github.com/oxc-project/oxc/pull/28282)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- oxlint: GitLab 形式のフィンガープリントを診断ごとに一意に（[#28307](https://github.com/oxc-project/oxc/pull/28307)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]]
- JS プラグイン: AST ノードを `Object.create` で生成して高速化（[#27816](https://github.com/oxc-project/oxc/pull/27816)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]]
- `import/no-cycle` の割り当て削減、`unicorn/no-await-expression-member` の高速化（[#27478](https://github.com/oxc-project/oxc/pull/27478)、[#28348](https://github.com/oxc-project/oxc/pull/28348)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]

## トピック

- [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]] — `oxc_transformer` の ES2022 クラス機能（静的ブロックなど）の下位変換
- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]] — `oxc_formatter_htmlish` クレート（Oxfmt の HTML・埋め込み HTML の整形に使用、未リリース）
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
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30]]、[[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28]]、[[repos/oxc-project-oxc/changes/2026-10-26|2026-10-26]]、[[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23]]
