---
title: microsoft/TypeScript
updated: 2026-10-09
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- API: ベータ版リリースに向けた整理（`/unstable` の削除、`api.internal` → `api.debug`、`@deprecated` の削除など）（[#64681](https://github.com/microsoft/TypeScript/pull/64681)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- シンボルのデータ部分を共有し、インスタンス化したシンボルを 96 → 24 バイトに（[#64691](https://github.com/microsoft/TypeScript/pull/64691)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- VS Code 拡張が API クライアントのモジュールを公開（[#64647](https://github.com/microsoft/TypeScript/pull/64647)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]、[[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- 宣言出力で再 export するモジュールを索引化し、最初のインクリメンタル再ビルドを 45.7 秒 → 3.5 秒に（[#64469](https://github.com/microsoft/TypeScript/pull/64469)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- 計算されたプロパティ名を常にチェックし、不安定な診断を解消（[#64674](https://github.com/microsoft/TypeScript/pull/64674)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- デコレータ付きクラス・不正な分割代入での emit のクラッシュを修正（[#64670](https://github.com/microsoft/TypeScript/pull/64670)、[#64651](https://github.com/microsoft/TypeScript/pull/64651)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 設定ファイルの無いプログラムでプロジェクト参照の診断を出すと API サーバーがクラッシュする問題を修正（[#64637](https://github.com/microsoft/TypeScript/pull/64637)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- カスタマイズしたモジュール解決で誤った TS2876 などを出さないように（[#64638](https://github.com/microsoft/TypeScript/pull/64638)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- decorator metadata の出力でデコレータ付きのオブジェクトリテラルのメンバーがクラッシュする問題を修正（[#64633](https://github.com/microsoft/TypeScript/pull/64633)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `typeof import()` の型修飾子について emit が付け加える不安定な診断を修正（[#64636](https://github.com/microsoft/TypeScript/pull/64636)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]

## トピック

- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-10-09|2026-10-09]]、[[repos/microsoft-TypeScript/changes/2026-10-07|2026-10-07]]、[[repos/microsoft-TypeScript/changes/2026-10-05|2026-10-05]]、[[repos/microsoft-TypeScript/changes/2026-10-02|2026-10-02]]、[[repos/microsoft-TypeScript/changes/2026-09-30|2026-09-30]]
