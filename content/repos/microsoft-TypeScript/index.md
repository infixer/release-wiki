---
title: microsoft/TypeScript
updated: 2026-11-04
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: [v7.1-beta](https://github.com/microsoft/TypeScript/releases/tag/v7.1-beta)（2026-10-20）
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- `--disableDynamicImportExtensionRewriting` を追加（[#65289](https://github.com/microsoft/TypeScript/pull/65289)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 型注釈の無いインデックスシグネチャを文法エラーではなく暗黙の `any` に（[#65283](https://github.com/microsoft/TypeScript/pull/65283)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- メンバーのレイアウトに `SymbolTable` を使い、メンバーの順序を TS 6.0 と同じに戻す（[#65093](https://github.com/microsoft/TypeScript/pull/65093)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- AST のプロパティの省略可能・必須を修正（`ExportAssignment.type` などが省略可能に）（[#65063](https://github.com/microsoft/TypeScript/pull/65063)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- インクリメンタルな再ビルドで依存ファイルのシグネチャを並列に計算（3.4 秒 → 1.5 秒）（[#64659](https://github.com/microsoft/TypeScript/pull/64659)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- インクリメンタルビルドでのコンパイラオプションの無効化・`tsbuildinfo` の保存内容を修正（[#64712](https://github.com/microsoft/TypeScript/pull/64712)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- 合成 import を持つファイル（自動 JSX ランタイムの `.tsx` など）の編集でもプログラムを再利用（[#65104](https://github.com/microsoft/TypeScript/pull/65104)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- 共通の基底型を持つインターフェースで `hasBaseType` の探索が指数的になる問題を修正（[#64737](https://github.com/microsoft/TypeScript/pull/64737)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- デコレータ付き abstract プロパティを define セマンティクスでフィールドとして出力しない（[#64982](https://github.com/microsoft/TypeScript/pull/64982)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `@throws` / `@returns` 直後のインライン JSDoc リンクを修正（[#64732](https://github.com/microsoft/TypeScript/pull/64732)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]

## トピック

- [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]] — `.gts` などのコンテンツマッピングと出力拡張子（`outputExtensions`）の指定
- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリング・インクリメンタルビルドとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-11-04|2026-11-04]]、[[repos/microsoft-TypeScript/changes/2026-11-02|2026-11-02]]、[[repos/microsoft-TypeScript/changes/2026-10-30|2026-10-30]]、[[repos/microsoft-TypeScript/changes/2026-10-28|2026-10-28]]、[[repos/microsoft-TypeScript/changes/2026-10-26|2026-10-26]]
