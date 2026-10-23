---
title: oxc-project/oxc
updated: 2026-10-23
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.89.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.89.0)（2026-10-19）→ [[repos/oxc-project-oxc/releases/oxlint_v1.89.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.155.0|crates_v0.155.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.74.0|oxfmt_v0.74.0]]（いずれも 2026-10-19）

## 直近の注目変更

- Minifier: 範囲外の文字列の添字（`"a"[1]` など）を `void 0` に畳み込む（[#28004](https://github.com/oxc-project/oxc/pull/28004)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- React Compiler: `catch` に到達しない `try` での panic（リリースビルドでプロセスが落ちる）を修正し、`try` 内で throw しうる呼び出しもリアクティブさに反映（[#28066](https://github.com/oxc-project/oxc/pull/28066)、[#28005](https://github.com/oxc-project/oxc/pull/28005)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- パーサー: sloppy モードの `let--`、エスケープされたクラスフィールド名、`import source type from` を正しく解析（[#28060](https://github.com/oxc-project/oxc/pull/28060)、[#28061](https://github.com/oxc-project/oxc/pull/28061)、[#28062](https://github.com/oxc-project/oxc/pull/28062)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- Oxfmt: インスタンス化式・プライベートの `in` 式のかっこを保ち、幅を表示幅で測る（[#28025](https://github.com/oxc-project/oxc/pull/28025)、[#28096](https://github.com/oxc-project/oxc/pull/28096)、[#28026](https://github.com/oxc-project/oxc/pull/28026)、[#28098](https://github.com/oxc-project/oxc/pull/28098)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Minifier: rest 引数の分割代入の副作用を保ち、`parseFloat`・`trim` などの畳み込みで ECMAScript の空白を使う（[#27981](https://github.com/oxc-project/oxc/pull/27981)、[#27719](https://github.com/oxc-project/oxc/pull/27719)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- `eslint/prefer-const`・`jest/no-conditional-expect`・`eslint/no-useless-concat` の修正と、孤立サロゲートを含む名前の報告（[#28008](https://github.com/oxc-project/oxc/pull/28008)、[#28055](https://github.com/oxc-project/oxc/pull/28055)、[#27984](https://github.com/oxc-project/oxc/pull/27984)、[#27991](https://github.com/oxc-project/oxc/pull/27991)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- 定数評価: 孤立サロゲートを含む文字列も `JSStr` で畳み込み、`indexOf`・`substring` などを UTF-16 単位の実装に統一（破壊的変更）（[#27098](https://github.com/oxc-project/oxc/pull/27098)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- Minifier: 定数メンバーの `delete` を値に畳み込まない（0.155.0 で生じた誤りを修正）（[#27990](https://github.com/oxc-project/oxc/pull/27990)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- React Compiler: `try` の中の分岐で選ばれる値をリアクティブに扱う（[#27817](https://github.com/oxc-project/oxc/pull/27817)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- Oxfmt: 行幅ちょうどのアローのシグネチャを保つ（[#27989](https://github.com/oxc-project/oxc/pull/27989)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]

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
- [[repos/oxc-project-oxc/topics/oxlint-CLI|oxlint-CLI]] — oxlint の CLI・npm パッケージの実行時の挙動と性能
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理と `ReplaceGlobalDefines`
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤
- [[repos/oxc-project-oxc/topics/パーサー|パーサー]] — `oxc_parser`・AST（ノード ID・コメントの付属先）・`oxc_regular_expression`、TypeScript 診断の tsc 互換
- [[repos/oxc-project-oxc/topics/ランタイムヘルパー|ランタイムヘルパー]] — `npm/runtime` の変換用ランタイムヘルパー（`asyncIterator` など）
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装（AVX2・NEON）と CPU 機能の実行時検出・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint による型認識 lint ルールと `--type-check-only`
- [[repos/oxc-project-oxc/topics/推奨ルール|推奨ルール]] — 上流のプラグインに合わせたルールの `recommended` の印
- [[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]] — oxlint・oxfmt の設定ファイルの読み込みとエラー表示

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23]]、[[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21]]、[[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19]]、[[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16]]、[[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14]]
