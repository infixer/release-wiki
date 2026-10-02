---
title: oxc-project/oxc
updated: 2026-10-02
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.86.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.86.0)（2026-09-28）→ [[repos/oxc-project-oxc/releases/oxlint_v1.86.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.152.0|crates_v0.152.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.71.0|oxfmt_v0.71.0]]（いずれも 2026-09-28）

## 直近の注目変更

- `unicorn/no-useless-switch-case` にサジェスチョンを実装（[#27245](https://github.com/oxc-project/oxc/pull/27245)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- 除外ディレクトリの下のファイルを否定パターンで再び含めないように（明示パス・stdin・LSP）（[#27237](https://github.com/oxc-project/oxc/pull/27237)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- 型に依存するタプルの rest の診断（TS1265・TS1266）を削除（[#27234](https://github.com/oxc-project/oxc/pull/27234)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- Minifier が同じモジュールからの import 文、import + export をまとめるように（[#25534](https://github.com/oxc-project/oxc/pull/25534)、[#25533](https://github.com/oxc-project/oxc/pull/25533)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- TypeScript の型メンバーの区切りを検証するように（[#27222](https://github.com/oxc-project/oxc/pull/27222)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- スクリプトでのモジュール構文をパーサーで拒否するように（[#27220](https://github.com/oxc-project/oxc/pull/27220)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- 埋め込みテンプレートのレイアウトを AST から決めるように（[#27218](https://github.com/oxc-project/oxc/pull/27218)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- `quoteProps: consistent` を分割代入パターンと計算キーにも正しく適用（[#27216](https://github.com/oxc-project/oxc/pull/27216)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Minifier がビット演算の二項式を簡約するように（[#27107](https://github.com/oxc-project/oxc/pull/27107)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- `react/jsx-no-target-blank` にサジェスチョンを実装（[#27181](https://github.com/oxc-project/oxc/pull/27181)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]

## トピック

- [[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]] — `using` / `await using` 宣言の下位変換（`oxc_transformer`）
- [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]] — `oxc_isolated_declarations` による `.d.ts` 生成
- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import/react 等、個別 lint ルールの不具合修正・オプション追加
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正と圧縮の最適化（import / export の統合など）
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
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30]]、[[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28]]、[[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24]]
