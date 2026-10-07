---
title: oxc-project/oxc
updated: 2026-10-07
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.87.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.87.0)（2026-10-05）→ [[repos/oxc-project-oxc/releases/oxlint_v1.87.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.153.0|crates_v0.153.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.72.0|oxfmt_v0.72.0]]（いずれも 2026-10-05）

## 直近の注目変更

- `oxc_formatter_toml` クレートを追加（埋め込み TOML の整形、TOML 1.1 対応。破壊的変更）（[#27365](https://github.com/oxc-project/oxc/pull/27365)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- oxlint・oxfmt: stderr をブロッキングモードにし、64KB で出力が途切れる問題を修正（[#27363](https://github.com/oxc-project/oxc/pull/27363)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- codegen: `-` の後の負の `BigIntLiteral` が `--1n` と出力される問題を修正（[#27378](https://github.com/oxc-project/oxc/pull/27378)、[#27377](https://github.com/oxc-project/oxc/pull/27377)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- semantic: `TSMethodSignature` の計算されたキーを外側のスコープで解決（[#27357](https://github.com/oxc-project/oxc/pull/27357)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- レキサー: 文脈解析の改行と型の終わりの規則を tsc に揃える（[#27353](https://github.com/oxc-project/oxc/pull/27353)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- `unicorn/prefer-query-selector` に `allowWithVariables` オプションを追加（[#27346](https://github.com/oxc-project/oxc/pull/27346)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- Oxfmt が Markdown ファイルを `oxc_formatter_markdown` で整形（破壊的変更）（[#27256](https://github.com/oxc-project/oxc/pull/27256)）📦 oxlint_v1.87.0 · トピック: [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]、[[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Markdown フォーマッタ: すべての `proseWrap` で中国語・日本語の文字まわりの改行を保持（[#27331](https://github.com/oxc-project/oxc/pull/27331)）📦 oxlint_v1.87.0 · トピック: [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
- Minifier: 委譲しない `yield` の `undefined` 引数を畳み込む（[#27324](https://github.com/oxc-project/oxc/pull/27324)）📦 oxlint_v1.87.0 · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- JavaScript で TypeScript 専用のクラス修飾子を TS8009 として拒否（[#27312](https://github.com/oxc-project/oxc/pull/27312)）📦 crates_v0.153.0 · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]

## トピック

- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]] — `oxc_isolated_declarations` による `.d.ts` 生成
- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import/react 等、個別 lint ルールの不具合修正・オプション追加
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート（oxfmt_v0.72.0 から Oxfmt の Markdown 整形に使用）
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正と圧縮の最適化（import / export の統合など）
- [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]] — NAPI パッケージの WASI（wasm32-wasip1）ビルド
- [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]] — ESLint `no-unused-vars` ルールの判定・自動修正
- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]] — Oxfmt（`oxc_formatter`、CSS・JSON・TOML フォーマッタを含む）の Prettier 互換性・コメント処理・同梱 Prettier の追従
- [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]] — `JSStr` などの文字列型を提供するクレート
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤
- [[repos/oxc-project-oxc/topics/パーサー|パーサー]] — `oxc_parser`・AST・`oxc_regular_expression`、TypeScript 診断の tsc 互換
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint による型認識 lint ルールと `--type-check-only`

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07]]、[[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05]]、[[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30]]、[[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28]]
