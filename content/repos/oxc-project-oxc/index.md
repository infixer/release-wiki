---
title: oxc-project/oxc
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
---

[GitHub](https://github.com/oxc-project/oxc) · ブランチ: `main`

## 最新リリース

- 安定版: [oxlint_v1.85.0](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.85.0)（2026-09-21）→ [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|まとめ]]
- プレリリース: なし

同日に公開された他の安定版: [[repos/oxc-project-oxc/releases/crates_v0.151.0|crates_v0.151.0]]、[[repos/oxc-project-oxc/releases/apps_v1.84.0|apps_v1.84.0]]、[[repos/oxc-project-oxc/releases/oxfmt_v0.70.0|oxfmt_v0.70.0]]（いずれも 2026-09-21）

## 直近の注目変更

- 新しい Markdown フォーマッタ `oxc_formatter_markdown` を実装（[#26434](https://github.com/oxc-project/oxc/pull/26434)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
- oxlint・oxfmt が `vite.config.*` の全バリアントを検出できるように（[#26755](https://github.com/oxc-project/oxc/pull/26755)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]
- Vite+ モードでは入れ子設定を探索しないように（[#26763](https://github.com/oxc-project/oxc/pull/26763)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]
- NAPI パッケージにスレッドを使わない WASI（`wasm32-wasip1`）ビルドを追加（[#26898](https://github.com/oxc-project/oxc/pull/26898)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]]
- Playground でプロパティ名のマングリングを指定できるように（[#26408](https://github.com/oxc-project/oxc/pull/26408)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/Playground|Playground]]
- enum の逆マッピング判定を tsc と同じ構文的な判定に修正（[#26724](https://github.com/oxc-project/oxc/pull/26724)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]
- `no-unused-vars` が private な namespace バインディングを報告するように修正（[#26842](https://github.com/oxc-project/oxc/pull/26842)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]]
- minifier の `BooleanLiteral` 否定処理の無駄なラップを解消（[#26847](https://github.com/oxc-project/oxc/pull/26847)）📦 oxlint_v1.85.0 · トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]
- JSX タグ内のコメント・Unicode 空白の扱いを修正（[#26940](https://github.com/oxc-project/oxc/pull/26940)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]]
- Oxfmt 同梱の Prettier を 3.9.9 に更新（[#27002](https://github.com/oxc-project/oxc/pull/27002)）⏳ 未リリース · トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]

## トピック

- [[repos/oxc-project-oxc/topics/カバレッジ・テスト基盤|カバレッジ・テスト基盤]] — TypeScript フィクスチャなど、テスト・カバレッジ収集基盤
- [[repos/oxc-project-oxc/topics/no-unused-vars|no-unused-vars]] — ESLint `no-unused-vars` ルールの判定・自動修正
- [[repos/oxc-project-oxc/topics/NAPI・WASIビルド|NAPI・WASIビルド]] — NAPI パッケージの WASI（wasm32-wasip1）ビルド
- [[repos/oxc-project-oxc/topics/Linterルール個別修正|Linterルール個別修正]] — vitest/unicorn/import 等、個別 lint ルールの不具合修正
- [[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]] — Vite+ 向けの設定ファイル探索・入れ子設定の扱い
- [[repos/oxc-project-oxc/topics/Playground|Playground]] — oxc Playground の機能
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]] — `oxc_formatter_markdown` クレート
- [[repos/oxc-project-oxc/topics/Minifier|Minifier]] — `oxc_minifier` / codegen の正しさ修正
- [[repos/oxc-project-oxc/topics/レキサー基盤|レキサー基盤]] — `oxc_lexer` の SIMD 実装・JSX 字句解析
- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]] — Oxfmt 同梱 Prettier のバージョン追従
- [[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]] — TypeScript の enum 等の変換処理

## 取り込み

- [[repos/oxc-project-oxc/log|取り込み履歴]]
- 最近の変更: [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24]]
