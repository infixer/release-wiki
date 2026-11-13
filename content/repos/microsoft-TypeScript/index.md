---
title: microsoft/TypeScript
updated: 2026-11-13
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: [v7.1-beta](https://github.com/microsoft/TypeScript/releases/tag/v7.1-beta)（2026-10-20）
- その他: [vscode-typescript/v1.0.2](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.2)（2026-11-06、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.2|まとめ]]

## 直近の注目変更

- コンテンツマッパーの登録を `include` の glob で絞り込めるように（既定の `extension` はマニフェストから）（[#65047](https://github.com/microsoft/TypeScript/pull/65047)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]]
- 遅延した indexed access 型のキャッシュのキーを永続的な access flags に（移植のバグ）（[#65450](https://github.com/microsoft/TypeScript/pull/65450)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- コンテンツマッパーの仮想ファイルのモジュール形式を修正し、形式の食い違いに診断を出す（[#65432](https://github.com/microsoft/TypeScript/pull/65432)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]]
- 折りたたみ範囲の終わりの行は、閉じかっこの後に何かあるときだけ戻す（[#65319](https://github.com/microsoft/TypeScript/pull/65319)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- PR のビルドを npm に公開し、インストールや Playground で使えるように（[#65406](https://github.com/microsoft/TypeScript/pull/65406)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- モジュール指定子からコンテンツマッピングしたファイルへ定義へ移動（[#65009](https://github.com/microsoft/TypeScript/pull/65009)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- LSP のメッセージを直接エンコード（補完の応答で 34.2% 高速化）（[#65407](https://github.com/microsoft/TypeScript/pull/65407)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- API の `Program` に `getProjectReferences`・`getRootFileNames`・`getStatistics` を追加し、`Program`・`Project` の重複メソッドを削除（[#64988](https://github.com/microsoft/TypeScript/pull/64988)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- fanotify がマウントを `EXDEV` で拒否したときは inotify にフォールバック（[#65325](https://github.com/microsoft/TypeScript/pull/65325)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- エスケープしたキーワードのクラスメンバーの前の ASI を修正（[#64885](https://github.com/microsoft/TypeScript/pull/64885)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]

## トピック

- [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]] — `.gts` などのコンテンツマッピングと出力拡張子（`outputExtensions`）の指定、仮想ファイルのモジュール形式・モジュール解決
- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備、PR のビルドの npm への公開
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリング・インクリメンタルビルドとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-11-13|2026-11-13]]、[[repos/microsoft-TypeScript/changes/2026-11-11|2026-11-11]]、[[repos/microsoft-TypeScript/changes/2026-11-09|2026-11-09]]、[[repos/microsoft-TypeScript/changes/2026-11-06|2026-11-06]]、[[repos/microsoft-TypeScript/changes/2026-11-04|2026-11-04]]
