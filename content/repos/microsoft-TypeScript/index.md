---
title: microsoft/TypeScript
updated: 2026-11-06
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: [v7.1-beta](https://github.com/microsoft/TypeScript/releases/tag/v7.1-beta)（2026-10-20）
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- Checker の API に不足していたメソッドを追加（`getAugmentedPropertiesOfType` は削除）（[#65037](https://github.com/microsoft/TypeScript/pull/65037)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- API に `parseConfigFileTextToJson` を追加（[#65328](https://github.com/microsoft/TypeScript/pull/65328)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- LSP のパフォーマンス最適化（ファイルの作成・削除や tsconfig の変更後が約 4 割高速化）（[#64877](https://github.com/microsoft/TypeScript/pull/64877)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- VS Code 拡張がワークスペースの `typescript` パッケージも検出（[#65344](https://github.com/microsoft/TypeScript/pull/65344)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- 引数の数が不正な動的 `import()` の TS1450 をエラーに（[#65317](https://github.com/microsoft/TypeScript/pull/65317)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 離れた abstract メソッドの宣言に TS2516 を報告（[#65099](https://github.com/microsoft/TypeScript/pull/65099)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `--disableDynamicImportExtensionRewriting` を追加（[#65289](https://github.com/microsoft/TypeScript/pull/65289)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 型注釈の無いインデックスシグネチャを文法エラーではなく暗黙の `any` に（[#65283](https://github.com/microsoft/TypeScript/pull/65283)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- メンバーのレイアウトに `SymbolTable` を使い、メンバーの順序を TS 6.0 と同じに戻す（[#65093](https://github.com/microsoft/TypeScript/pull/65093)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- AST のプロパティの省略可能・必須を修正（`ExportAssignment.type` などが省略可能に）（[#65063](https://github.com/microsoft/TypeScript/pull/65063)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]

## トピック

- [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]] — `.gts` などのコンテンツマッピングと出力拡張子（`outputExtensions`）の指定
- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリング・インクリメンタルビルドとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-11-06|2026-11-06]]、[[repos/microsoft-TypeScript/changes/2026-11-04|2026-11-04]]、[[repos/microsoft-TypeScript/changes/2026-11-02|2026-11-02]]、[[repos/microsoft-TypeScript/changes/2026-10-30|2026-10-30]]、[[repos/microsoft-TypeScript/changes/2026-10-28|2026-10-28]]
