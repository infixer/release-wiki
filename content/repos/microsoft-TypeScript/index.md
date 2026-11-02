---
title: microsoft/TypeScript
updated: 2026-11-02
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: [v7.1-beta](https://github.com/microsoft/TypeScript/releases/tag/v7.1-beta)（2026-10-20）
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- インレイヒントを末尾のタプル引数に揃える（[#64410](https://github.com/microsoft/TypeScript/pull/64410)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- Windows のファイル監視で、バッファのあふれを `ErrOverflow` として報告（変更を黙って失わない）（[#65027](https://github.com/microsoft/TypeScript/pull/65027)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- 各チェッカーのファイルを決まった順で出力（[#64922](https://github.com/microsoft/TypeScript/pull/64922)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `new` 式の呼び出し先を必要に応じてかっこで囲む（[#65060](https://github.com/microsoft/TypeScript/pull/65060)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- union・intersection のプロパティキャッシュで完全なエントリを共有（MUI で保持ヒープ 8.15% 減）（[#64789](https://github.com/microsoft/TypeScript/pull/64789)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- フローの参照の照合で、シンボルより先に名前を比べる（t3code-server で 6.85% 高速化）（[#64868](https://github.com/microsoft/TypeScript/pull/64868)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `tsc` の wasip1（Wasm）ビルドを追加し、ブラウザでも API が使える（実験的）（[#64174](https://github.com/microsoft/TypeScript/pull/64174)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]、[[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- API に `createFileSystemFromSnapshot(oldSnapshot, extraFSLayer)` を追加（[#64679](https://github.com/microsoft/TypeScript/pull/64679)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- 文の位置のクラス宣言（`if (cond) class C {}`）を TS1156 に（[#65005](https://github.com/microsoft/TypeScript/pull/65005)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- es2026 の `JSON.parse` の reviver を省略可能に戻す（[#65012](https://github.com/microsoft/TypeScript/pull/65012)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]

## トピック

- [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]] — `.gts` などのコンテンツマッピングと出力拡張子（`outputExtensions`）の指定
- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリング・インクリメンタルビルドとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-11-02|2026-11-02]]、[[repos/microsoft-TypeScript/changes/2026-10-30|2026-10-30]]、[[repos/microsoft-TypeScript/changes/2026-10-28|2026-10-28]]、[[repos/microsoft-TypeScript/changes/2026-10-26|2026-10-26]]、[[repos/microsoft-TypeScript/changes/2026-10-23|2026-10-23]]
