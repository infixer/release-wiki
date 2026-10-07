---
title: microsoft/TypeScript
updated: 2026-10-07
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- 設定ファイルの無いプログラムでプロジェクト参照の診断を出すと API サーバーがクラッシュする問題を修正（[#64637](https://github.com/microsoft/TypeScript/pull/64637)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- カスタマイズしたモジュール解決で誤った TS2876 などを出さないように（[#64638](https://github.com/microsoft/TypeScript/pull/64638)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- decorator metadata の出力でデコレータ付きのオブジェクトリテラルのメンバーがクラッシュする問題を修正（[#64633](https://github.com/microsoft/TypeScript/pull/64633)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `typeof import()` の型修飾子について emit が付け加える不安定な診断を修正（[#64636](https://github.com/microsoft/TypeScript/pull/64636)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- DOM の型定義を更新（Web Serial・Document Picture-in-Picture・`CloseWatcher`・`Element.setHTML()` など）（[#64604](https://github.com/microsoft/TypeScript/pull/64604)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 非同期 API で dispose の Promise を捨てないように（`[Symbol.asyncDispose]()`）（[#64584](https://github.com/microsoft/TypeScript/pull/64584)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- JS のコンストラクタで定義したプロパティの診断が不安定だった問題を修正（[#64646](https://github.com/microsoft/TypeScript/pull/64646)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 後から低い `node_modules` の深さで到達したファイルの import を処理し直す（外部ライブラリ判定を決定的に）（[#64632](https://github.com/microsoft/TypeScript/pull/64632)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- アイドル時のキャッシュ掃除タイマーを Session に保存し、`Close` が 30 秒待たされないように（[#64624](https://github.com/microsoft/TypeScript/pull/64624)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- `getInferTypeParameters` の結果の順序を安定化（[#64621](https://github.com/microsoft/TypeScript/pull/64621)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]

## トピック

- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-10-07|2026-10-07]]、[[repos/microsoft-TypeScript/changes/2026-10-05|2026-10-05]]、[[repos/microsoft-TypeScript/changes/2026-10-02|2026-10-02]]、[[repos/microsoft-TypeScript/changes/2026-09-30|2026-09-30]]、[[repos/microsoft-TypeScript/changes/2026-09-28|2026-09-28]]
