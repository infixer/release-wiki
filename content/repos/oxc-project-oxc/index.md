---
title: oxc-project/oxc
updated: 2026-10-28
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.90.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.90.0)（2026-10-27）→ [[repos/oxc-project-oxc/releases/oxlint_v1.90.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.156.0|crates_v0.156.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.75.0|oxfmt_v0.75.0]]（いずれも 2026-10-27）

## 直近の注目変更

- React Compiler: 依存が守れない手動の `useMemo` / `useCallback` は推論した依存で置き換えず、そのコンポーネント・フックをコンパイルしない（網羅性の検証を既定で有効に）（[#28101](https://github.com/oxc-project/oxc/pull/28101)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- React Compiler: 非 null アサーション越しのオプショナルチェーンを保ち、短絡後のキャッシュで `TypeError` が隠れないように、JSX のアウトライン化でハイフンを含む props の束縛名を修正（[#28144](https://github.com/oxc-project/oxc/pull/28144)、[#28165](https://github.com/oxc-project/oxc/pull/28165)、[#28111](https://github.com/oxc-project/oxc/pull/28111)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]]
- Oxfmt: `(a ?? b)?.#x`・型アサーションの中のジェネリックな関数型のかっこを保ち、`this.b`・`x.#b`・`(a + b)[c]` を `foo.b`・`(a + b).c` と同じに扱う（[#28188](https://github.com/oxc-project/oxc/pull/28188)、[#28173](https://github.com/oxc-project/oxc/pull/28173)、[#28193](https://github.com/oxc-project/oxc/pull/28193)、[#28200](https://github.com/oxc-project/oxc/pull/28200)、[#28199](https://github.com/oxc-project/oxc/pull/28199)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- oxfmt: `OXC_LOG=debug` でファイル読み込みの時間を出す（[#28204](https://github.com/oxc-project/oxc/pull/28204)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Oxfmt: 閉じの HTML コメント・`in` / `instanceof` のクラスメンバーの `;`・JSX のスプレッドの子のコメント・配列の fill レイアウトの修正（[#28064](https://github.com/oxc-project/oxc/pull/28064)、[#28166](https://github.com/oxc-project/oxc/pull/28166)、[#28103](https://github.com/oxc-project/oxc/pull/28103)、[#28170](https://github.com/oxc-project/oxc/pull/28170)、[#28169](https://github.com/oxc-project/oxc/pull/28169)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- Minifier: 短縮形の代入先のデフォルト値、負の数・有限でない数のキーの角かっこを保つ（[#28183](https://github.com/oxc-project/oxc/pull/28183)、[#27855](https://github.com/oxc-project/oxc/pull/27855)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- inject: 素の参照が残っていれば素の inject を残す（[#26965](https://github.com/oxc-project/oxc/pull/26965)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]
- semantic: 巻き上げる `var` とブロック内の型の束縛を分ける（[#27936](https://github.com/oxc-project/oxc/pull/27936)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- 型認識 lint: `typescript/no-unsafe-enum-assignment` を追加、`typescript/await-thenable` に `allowMixedPromiseArrays`、`oxlint-tsgolint` は `>=7.0.2005` が必要に（[#28117](https://github.com/oxc-project/oxc/pull/28117)、[#28116](https://github.com/oxc-project/oxc/pull/28116)、[#28118](https://github.com/oxc-project/oxc/pull/28118)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/型認識Lint|型認識Lint]]
- `oxlint` パッケージから設定の型 `Oxlintrc` をエクスポート（[#28132](https://github.com/oxc-project/oxc/pull/28132)）📦 oxlint_v1.90.0 · トピック: [[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]]

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
- [[repos/oxc-project-oxc/topics/React-Compiler|React-Compiler]] — `oxc_react_compiler` と `oxc-transform-react` のオプション・メモ化の正しさ
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理と `ReplaceGlobalDefines`・inject（`oxc_transformer_plugins`）
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
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28]]、[[repos/oxc-project-oxc/changes/2026-10-26|2026-10-26]]、[[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23]]、[[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21]]、[[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19]]
