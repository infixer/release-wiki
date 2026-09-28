---
title: microsoft/TypeScript
updated: 2026-09-28
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし

## 直近の注目変更

- グローバル診断の集め方を Strada に合わせ、エディタでは診断以外のグローバルエラーを出さないように（[#64452](https://github.com/microsoft/TypeScript/pull/64452)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- ビルドオーケストレーター API（`createBuildOrchestrator`）を追加（[#64158](https://github.com/microsoft/TypeScript/pull/64158)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- api-extractor が使う AST ヘルパーを追加（[#64439](https://github.com/microsoft/TypeScript/pull/64439)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- `createSourceFile` が parse キャッシュを使い、破棄可能な lease を返すように（[#64434](https://github.com/microsoft/TypeScript/pull/64434)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- OneLoc パイプラインの不具合を修正（[#64414](https://github.com/microsoft/TypeScript/pull/64414)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- ローカライズ作業を再開できるようファイル構成を作り直し（[#63987](https://github.com/microsoft/TypeScript/pull/63987)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- 型キャッシュに関する不具合を2件修正（[#64408](https://github.com/microsoft/TypeScript/pull/64408)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- composite project のルートチェックで正規化済みパスを使うよう修正（[#64407](https://github.com/microsoft/TypeScript/pull/64407)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- モジュール解決をオーバーライドする API を追加（[#64299](https://github.com/microsoft/TypeScript/pull/64299)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- `never` を可変な配列風の型として誤判定していたのを修正（[#64389](https://github.com/microsoft/TypeScript/pull/64389)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]

## トピック

- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正とパフォーマンス改善
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP まわりの不具合修正
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-09-28|2026-09-28]]、[[repos/microsoft-TypeScript/changes/2026-09-24|2026-09-24]]
