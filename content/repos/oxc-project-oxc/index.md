---
title: oxc-project/oxc
updated: 2026-09-30
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.86.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.86.0)（2026-09-28）→ [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.152.0|crates_v0.152.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.71.0|oxfmt_v0.71.0]]（いずれも 2026-09-28）

## 直近の注目変更

- `react/jsx-no-target-blank` にサジェスチョンを実装（[#27181](https://github.com/oxc-project/oxc/pull/27181)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- 呼び出し先と開きかっこの間のコメントを呼び出し先側に保つ（[#27172](https://github.com/oxc-project/oxc/pull/27172)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- isolated declarations が `readonly`・`keyof` 型の引数に `| undefined` を付けられるように（TS9025 の解消）（[#27009](https://github.com/oxc-project/oxc/pull/27009)、[#27173](https://github.com/oxc-project/oxc/pull/27173)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]]
- `catch` / `finally` 内と `for` 文初期化子の `using` を下位変換するように（[#27142](https://github.com/oxc-project/oxc/pull/27142)、[#27148](https://github.com/oxc-project/oxc/pull/27148)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]]
- `prefer-exponentiation-operator` の自動修正で優先順位を保つように（[#27150](https://github.com/oxc-project/oxc/pull/27150)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- Minifier が抜ける `if` ブロックの後ろの文を else 側へまとめるように（[#26667](https://github.com/oxc-project/oxc/pull/26667)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- Minifier が同じ内容の隣接する `if` 文をまとめるように（[#26445](https://github.com/oxc-project/oxc/pull/26445)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- `react/only-export-components` に `allowCompoundComponents` オプションを追加（[#27117](https://github.com/oxc-project/oxc/pull/27117)）📦 oxlint_v1.86.0 · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- `eslint/require-await` が `await using` を await として数えるように（危険な自動修正で壊れたコードになる問題を解消）（[#27080](https://github.com/oxc-project/oxc/pull/27080)）📦 oxlint_v1.86.0 · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- 型認識ルール `typescript/no-generated-empty-object-type` を追加（[#26958](https://github.com/oxc-project/oxc/pull/26958)）📦 oxlint_v1.86.0 · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]

## トピック

- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]] — `oxc_isolated_declarations` による `.d.ts` 生成
- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import/react 等、個別 lint ルールの不具合修正・オプション追加
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正と圧縮の最適化
- [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]] — NAPI パッケージの WASI（wasm32-wasip1）ビルド
- [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]] — ESLint `no-unused-vars` ルールの判定・自動修正
- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]] — Oxfmt（`oxc_formatter`）の Prettier 互換性・コメント処理・同梱 Prettier の追従
- [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]] — `JSStr` などの文字列型を提供するクレート
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤
- [[repos/oxc-project-oxc/topics/パーサー|パーサー]] — `oxc_parser`・AST のコメント・`oxc_regular_expression`
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint による型認識 lint ルールと `--type-check-only`

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30]]、[[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28]]、[[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24]]
