---
title: microsoft/TypeScript
updated: 2026-10-14
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- コンテンツマッパーに出力拡張子の指定 `outputExtensions` を追加（`rewriteRelativeImportExtensions: true` が必要）（[#64581](https://github.com/microsoft/TypeScript/pull/64581)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]]
- API: 循環する `extends` で `createSnapshot` が止まる問題を修正（[#64755](https://github.com/microsoft/TypeScript/pull/64755)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- 同じファイルで宣言した ambient module の中の import を解決しないように（`@types/lodash` 全体の取り込みを回避）（[#64491](https://github.com/microsoft/TypeScript/pull/64491)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `tsc -b` の依存の深さ順のビルドスケジューリングを復活（[#64615](https://github.com/microsoft/TypeScript/pull/64615)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- シンボルテーブルの種別マスクを修正し、エイリアスのキャッシュとメンバーの高速パスを有効に（[#64762](https://github.com/microsoft/TypeScript/pull/64762)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `--stripInternal` で型エイリアスの右辺が消えると宣言出力がパニックする問題を修正（[#64770](https://github.com/microsoft/TypeScript/pull/64770)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `es2023.intl` に `Intl.PluralRules.prototype.selectRange` の型定義を追加（[#63424](https://github.com/microsoft/TypeScript/pull/63424)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- link store を密に割り当て、8 チェッカーでの VS Code のコンパイルのメモリを 8〜9% 削減（[#64711](https://github.com/microsoft/TypeScript/pull/64711)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `esnext` の lib に iterator のメソッドの型定義（`lib.esnext.iterator.d.ts`）を追加（[#64095](https://github.com/microsoft/TypeScript/pull/64095)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- API: 同期接続で入れ子のリクエストにスタックの順で応答し、複数スレッドのローダーで import が誤ったモジュールに結び付く問題を修正（[#64639](https://github.com/microsoft/TypeScript/pull/64639)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]

## トピック

- [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]] — `.gts` などのコンテンツマッピングと出力拡張子（`outputExtensions`）の指定
- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-10-14|2026-10-14]]、[[repos/microsoft-TypeScript/changes/2026-10-12|2026-10-12]]、[[repos/microsoft-TypeScript/changes/2026-10-09|2026-10-09]]、[[repos/microsoft-TypeScript/changes/2026-10-07|2026-10-07]]、[[repos/microsoft-TypeScript/changes/2026-10-05|2026-10-05]]
