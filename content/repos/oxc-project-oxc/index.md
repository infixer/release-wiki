---
title: oxc-project/oxc
updated: 2026-10-14
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.88.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.88.0)（2026-10-13）→ [[repos/oxc-project-oxc/releases/oxlint_v1.88.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.154.0|crates_v0.154.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.73.0|oxfmt_v0.73.0]]（いずれも 2026-10-13）

## 直近の注目変更

- Minifier: `Math.cbrt` の負の数を `NaN` に畳み込む誤りを修正（[#27621](https://github.com/oxc-project/oxc/pull/27621)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- レキサー: aarch64 向けに NEON による `classify` を実装（[#27642](https://github.com/oxc-project/oxc/pull/27642)）📦 oxlint_v1.88.0 · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- Oxfmt: css-in-js の補間を含むコメントでのクラッシュを修正し、プレースホルダーを `@media`・プロパティ名・条件で扱う（[#27638](https://github.com/oxc-project/oxc/pull/27638)、[#27639](https://github.com/oxc-project/oxc/pull/27639)、[#27640](https://github.com/oxc-project/oxc/pull/27640)）📦 oxlint_v1.88.0 · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- `sort-keys` の `natural: true` の比較を ESLint の `natural-compare` に揃える（[#27579](https://github.com/oxc-project/oxc/pull/27579)）📦 oxlint_v1.88.0 · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- sloppy モードの `arguments` の扱いを修正（semantic が暗黙の `arguments` を外側に解決しない、Minifier が mapped arguments 経由の書き込みを保つ）（[#26929](https://github.com/oxc-project/oxc/pull/26929)、[#27494](https://github.com/oxc-project/oxc/pull/27494)）📦 oxlint_v1.88.0 · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- JS の codegen（`packages/codegen`）が `V8IntrinsicExpression` に対応し、megamorphic な `type` 読み取りの削減などで高速化（[#27597](https://github.com/oxc-project/oxc/pull/27597)、[#27599](https://github.com/oxc-project/oxc/pull/27599) ほか）📦 oxlint_v1.88.0 · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- Oxfmt に `associations` 設定を追加（ファイルパスごとに言語を指定）、`--migrate prettier` も `overrides[].parser` を移行（[#27437](https://github.com/oxc-project/oxc/pull/27437)、[#27475](https://github.com/oxc-project/oxc/pull/27475)）📦 oxfmt_v0.73.0 · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- `oxfmt --migrate prettier` を改善（カレントディレクトリのみ探索・`overrides` の移行・非互換オプションの警告。破壊的変更）（[#27444](https://github.com/oxc-project/oxc/pull/27444)）📦 oxfmt_v0.73.0 · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- パーサーが解析中にノード ID を割り当て、`Comment` に付属先（attachment）を追加（破壊的変更）（[#27411](https://github.com/oxc-project/oxc/pull/27411)、[#27393](https://github.com/oxc-project/oxc/pull/27393)、[#27512](https://github.com/oxc-project/oxc/pull/27512)）📦 crates_v0.154.0 · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- Minifier: `delete` 式の畳み込みを追加し、NaN・Infinity への畳み込みで結果が変わる問題を修正（[#27522](https://github.com/oxc-project/oxc/pull/27522)、[#27466](https://github.com/oxc-project/oxc/pull/27466)）📦 crates_v0.154.0 · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]

## トピック

- [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]] — `oxc_transformer` の ES2022 クラス機能（静的ブロックなど）の下位変換
- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
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
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理と `ReplaceGlobalDefines`
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤
- [[repos/oxc-project-oxc/topics/パーサー|パーサー]] — `oxc_parser`・AST（ノード ID・コメントの付属先）・`oxc_regular_expression`、TypeScript 診断の tsc 互換
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装（AVX2・NEON）・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint による型認識 lint ルールと `--type-check-only`

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14]]、[[repos/oxc-project-oxc/changes/2026-10-12|2026-10-12]]、[[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09]]、[[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07]]、[[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05]]
