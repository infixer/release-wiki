---
title: microsoft/TypeScript
updated: 2026-09-30
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし

## 直近の注目変更

- `es2026` を `target` と `lib` に指定できるように（[#64096](https://github.com/microsoft/TypeScript/pull/64096)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `getJSDocCommentsAndTags` を TS 6.0 と同じ動作で復活（[#64455](https://github.com/microsoft/TypeScript/pull/64455)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- API のコールバック式ファイルシステムで全関数の実装指定が必須に、`createVirtualFileSystem` を削除（破壊的変更）（[#64447](https://github.com/microsoft/TypeScript/pull/64447)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- バインダーが作った Symbol をスナップショット間で同一に（[#64518](https://github.com/microsoft/TypeScript/pull/64518)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- ファイルシステムのルートに近いプロジェクトでも watch が再ビルドするように（[#64366](https://github.com/microsoft/TypeScript/pull/64366)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- テンプレートリテラル型のサイズに上限を設け、TS2589 を報告（[#64194](https://github.com/microsoft/TypeScript/pull/64194)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `resolveObjectTypeMembers` の冪等性を回復し、無限循環するインスタンス化のエラーを改善（[#64372](https://github.com/microsoft/TypeScript/pull/64372)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 同じオブジェクト型のマップの交差を簡約しないように（Zod などの再帰スキーマ向け）（[#64481](https://github.com/microsoft/TypeScript/pull/64481)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 宣言出力の打ち切り後にキャッシュ済みの型を複製しないように（[#63969](https://github.com/microsoft/TypeScript/pull/63969)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- チェッカーを排他的に取得するように（[#64543](https://github.com/microsoft/TypeScript/pull/64543)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]

## トピック

- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正とパフォーマンス改善
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP まわりの不具合修正
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-09-30|2026-09-30]]、[[repos/microsoft-TypeScript/changes/2026-09-28|2026-09-28]]、[[repos/microsoft-TypeScript/changes/2026-09-24|2026-09-24]]
