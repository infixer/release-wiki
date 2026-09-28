---
title: oxc-project/oxc
updated: 2026-09-28
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.85.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.85.0)（2026-09-21）→ [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.151.0|crates_v0.151.0]]、[[repos/oxc-project-oxc/releases/apps_v1.84.0|apps_v1.84.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.70.0|oxfmt_v0.70.0]]（いずれも 2026-09-21）

## 直近の注目変更

- 引数にコメントがあるときはテスト呼び出し用のレイアウトを使わないように（[#27119](https://github.com/oxc-project/oxc/pull/27119)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- 同じプロセスで Oxfmt の `runCli()` を何度も呼べるように（[#27051](https://github.com/oxc-project/oxc/pull/27051)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- React Compiler が再帰する名前付き関数式をコンパイルできるように（[#26796](https://github.com/oxc-project/oxc/pull/26796)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- `oxc_str` に `JSStr`・`JSChar`・`JSStrBuilder` 型を追加（[#26435](https://github.com/oxc-project/oxc/pull/26435)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/oxc_str|oxc_str]]
- `--type-check-only` モードでは型認識ルールを実行しないように（[#27076](https://github.com/oxc-project/oxc/pull/27076)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- 非 8 進数の数値の `_` を許可し、lexer の Babel コンフォーマンスが 100% に（[#27072](https://github.com/oxc-project/oxc/pull/27072)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- 正規表現パーサーがバッファ境界アサーションに対応（[#27048](https://github.com/oxc-project/oxc/pull/27048)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- `oxc-transform-react` に `reportDiagnostics` オプションを追加（[#26624](https://github.com/oxc-project/oxc/pull/26624)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- 代入演算子の前のコメントが消える・重複する問題（oxfmt 0.69.0 からの退行）を修正（[#26997](https://github.com/oxc-project/oxc/pull/26997)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- 型認識ルール `typescript/no-generated-empty-object-type` を追加（[#26958](https://github.com/oxc-project/oxc/pull/26958)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]

## トピック

- [[repos/oxc-project-oxc/topics/JSプラグイン|JSプラグイン]] — oxlint の JS プラグインの実行基盤（CFG ウォーカー・ルール計測）
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import 等、個別 lint ルールの不具合修正
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正
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
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-09-28|2026-09-28]]、[[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24]]
