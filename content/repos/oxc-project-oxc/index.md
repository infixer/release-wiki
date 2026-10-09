---
title: oxc-project/oxc
updated: 2026-10-09
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.87.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.87.0)（2026-10-05）→ [[repos/oxc-project-oxc/releases/oxlint_v1.87.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.153.0|crates_v0.153.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.72.0|oxfmt_v0.72.0]]（いずれも 2026-10-05）

## 直近の注目変更

- Oxfmt が `prettier-plugin-astro@1.x` 経由で Astro に対応（`--migrate prettier`・LSP も対応）（[#27386](https://github.com/oxc-project/oxc/pull/27386)、[#27387](https://github.com/oxc-project/oxc/pull/27387)、[#27388](https://github.com/oxc-project/oxc/pull/27388)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/LSP|LSP]]
- 型認識の診断でソースをファイルごとに共有し、oxlint のピーク RSS を大幅削減（[#27462](https://github.com/oxc-project/oxc/pull/27462)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- oxlint・oxfmt の LSP が設定のエラーをクライアントに表示（[#25486](https://github.com/oxc-project/oxc/pull/25486)、[#26014](https://github.com/oxc-project/oxc/pull/26014)、[#26003](https://github.com/oxc-project/oxc/pull/26003)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/LSP|LSP]]
- クラスの静的ブロックの変換で合成のプライベートフィールドを使わないように（[#27300](https://github.com/oxc-project/oxc/pull/27300)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]
- Minifier: 定数の引数で呼ばれる未使用の IIFE を除去（[#27434](https://github.com/oxc-project/oxc/pull/27434)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- oxfmt の設定探索がシンボリックリンクの設定をたどるように（[#27389](https://github.com/oxc-project/oxc/pull/27389)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- `typescript/no-import-type-side-effects` と `import/no-duplicates` の自動修正の衝突を防止（[#27409](https://github.com/oxc-project/oxc/pull/27409)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]]
- `oxc_formatter_toml` クレートを追加（埋め込み TOML の整形、TOML 1.1 対応。破壊的変更）（[#27365](https://github.com/oxc-project/oxc/pull/27365)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- oxlint・oxfmt: stderr をブロッキングモードにし、64KB で出力が途切れる問題を修正（[#27363](https://github.com/oxc-project/oxc/pull/27363)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Oxfmt が Markdown ファイルを `oxc_formatter_markdown` で整形（破壊的変更）（[#27256](https://github.com/oxc-project/oxc/pull/27256)）📦 oxlint_v1.87.0 · トピック: [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]、[[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]

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
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤
- [[repos/oxc-project-oxc/topics/パーサー|パーサー]] — `oxc_parser`・AST・`oxc_regular_expression`、TypeScript 診断の tsc 互換
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装・JSX 字句解析・文脈解析（正規表現と除算の判別）
- [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]] — TSGolint による型認識 lint ルールと `--type-check-only`

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09]]、[[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07]]、[[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05]]、[[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30]]
