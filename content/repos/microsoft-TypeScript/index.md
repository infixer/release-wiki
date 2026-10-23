---
title: microsoft/TypeScript
updated: 2026-10-23
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: [v7.1-beta](https://github.com/microsoft/TypeScript/releases/tag/v7.1-beta)（2026-10-20）
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- ファイル監視の `Created` イベントでもキャッシュ済みのファイルを読み直す（アトミックな保存で診断が古いまま残る問題）（[#64909](https://github.com/microsoft/TypeScript/pull/64909)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- 変更のない `tsc -b` でルートファイルを繰り返し走査しないように（[#64898](https://github.com/microsoft/TypeScript/pull/64898)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]
- プロパティのホバーにインデックスシグネチャの詳細を戻す（[#64586](https://github.com/microsoft/TypeScript/pull/64586)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]]
- LSP サーバーがワークスペースフォルダ外の node_modules のコンテンツマッパーを読み込まないように（[#64837](https://github.com/microsoft/TypeScript/pull/64837)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]]
- API: package.json の `"imports"` を削除（CDN から読み込むための前提）（[#64879](https://github.com/microsoft/TypeScript/pull/64879)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- API: クライアントの性能改善（アロケーション 57% 減）（[#64823](https://github.com/microsoft/TypeScript/pull/64823)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- `prop?: undefined` の合成プロパティのキャッシュをシンボルごとにし、宣言出力を `--checkers` に依存しないように（[#64728](https://github.com/microsoft/TypeScript/pull/64728)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- API: `pathsBasePath` が正しく渡されるように（[#64843](https://github.com/microsoft/TypeScript/pull/64843)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- API: 環境変数 `TS_API_TIMING_DIR` でタイミング情報を収集・出力（[#64846](https://github.com/microsoft/TypeScript/pull/64846)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- グローバルなファイルの削除後に、インクリメンタルの診断が古いまま残る問題を修正（[#64845](https://github.com/microsoft/TypeScript/pull/64845)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]]

## トピック

- [[repos/microsoft-TypeScript/topics/コンテンツマッパー|コンテンツマッパー]] — `.gts` などのコンテンツマッピングと出力拡張子（`outputExtensions`）の指定
- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正・パフォーマンス改善と、同梱の lib（DOM の型定義など）
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP・フォーマッタまわりの修正と VS Code 拡張の LSP ミドルウェア
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリング・インクリメンタルビルドとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-10-23|2026-10-23]]、[[repos/microsoft-TypeScript/changes/2026-10-21|2026-10-21]]、[[repos/microsoft-TypeScript/changes/2026-10-19|2026-10-19]]、[[repos/microsoft-TypeScript/changes/2026-10-16|2026-10-16]]、[[repos/microsoft-TypeScript/changes/2026-10-14|2026-10-14]]
