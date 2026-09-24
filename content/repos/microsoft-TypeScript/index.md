---
title: microsoft/TypeScript
updated: 2026-09-24
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし

## 直近の注目変更

- OneLoc パイプラインの不具合を修正（[#64414](https://github.com/microsoft/TypeScript/pull/64414)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- ローカライズ作業を再開できるようファイル構成を作り直し（[#63987](https://github.com/microsoft/TypeScript/pull/63987)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- 型キャッシュに関する不具合を2件修正（[#64408](https://github.com/microsoft/TypeScript/pull/64408)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- composite project のルートチェックで正規化済みパスを使うよう修正（[#64407](https://github.com/microsoft/TypeScript/pull/64407)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- モジュール解決をオーバーライドする API を追加（[#64299](https://github.com/microsoft/TypeScript/pull/64299)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- `never` を可変な配列風の型として誤判定していたのを修正（[#64389](https://github.com/microsoft/TypeScript/pull/64389)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- VS Code のローカライズツールの依存関係をピン留め（[#64403](https://github.com/microsoft/TypeScript/pull/64403)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- 診断メッセージを遅延マップ化し Go のビルド時間を短縮（[#64402](https://github.com/microsoft/TypeScript/pull/64402)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- tsconfig の plugins 解析と `MappedType` プロパティの公開に対応（[#64397](https://github.com/microsoft/TypeScript/pull/64397)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- コード生成のテストを修正し、コード生成キャッシュをリポジトリのルートごとに分離（[#64395](https://github.com/microsoft/TypeScript/pull/64395)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]

## トピック

- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正とパフォーマンス改善
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP まわりの不具合修正
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決など）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-09-24|2026-09-24]]
