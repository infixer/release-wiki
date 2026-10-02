---
title: microsoft/TypeScript
updated: 2026-10-02
tags:
  - repo/microsoft-TypeScript
---

[GitHub](https://github.com/microsoft/TypeScript) · ブランチ: `main`

## 最新リリース

- 安定版: [v7.0.2](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2)（2026-08-20）
- プレリリース: なし
- その他: [vscode-typescript/v1.0.1](https://github.com/microsoft/TypeScript/releases/tag/vscode-typescript/v1.0.1)（2026-09-30、VS Code 拡張。TypeScript 7.0.2 を同梱）→ [[repos/microsoft-TypeScript/releases/vscode-typescript-v1.0.1|まとめ]]

## 直近の注目変更

- `esnext` に `Promise.allKeyed` / `Promise.allSettledKeyed` を追加（[#64093](https://github.com/microsoft/TypeScript/pull/64093)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- API に `getSymbol(decl)` を追加（TS 6 の `declaration.symbol` 相当）（[#64571](https://github.com/microsoft/TypeScript/pull/64571)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- コンパイラオプションをコード生成し、`tsconfig.schema.json` をパッケージに同梱（[#64457](https://github.com/microsoft/TypeScript/pull/64457)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]]
- `verbatimModuleSyntax` でデフォルト import の横の空の `{}` を出力しないように（[#64578](https://github.com/microsoft/TypeScript/pull/64578)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- `export=` のクラスとトップレベルの `export type` が並ぶときの可視性を修正（[#64573](https://github.com/microsoft/TypeScript/pull/64573)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 型引数からの推論をキャッシュし、推論の欠落を修正（[#64553](https://github.com/microsoft/TypeScript/pull/64553)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- 宣言出力で循環構造と打ち切りをエラーとして報告（`/* elided */ any` を黙って出さない）（[#64461](https://github.com/microsoft/TypeScript/pull/64461)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- API が返す補完の Symbol を常に現在のスナップショットのものに（[#64554](https://github.com/microsoft/TypeScript/pull/64554)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]]
- `with` 文で CommonJS 出力がクラッシュする不具合を修正（[#64574](https://github.com/microsoft/TypeScript/pull/64574)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]
- マージされた宣言の診断位置を決定的に（DefinitelyTyped での非決定性を解消）（[#64566](https://github.com/microsoft/TypeScript/pull/64566)）⏳ 未リリース · トピック: [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]]

## トピック

- [[repos/microsoft-TypeScript/topics/開発ツールとCI|開発ツールとCI]] — tsgo（TypeScript 7）を支えるビルド・CI・コード生成（コンパイラオプション・JSON スキーマ）・ローカライズのインフラ整備
- [[repos/microsoft-TypeScript/topics/型チェッカー・コンパイラ|型チェッカー・コンパイラ]] — 型チェッカー（`tsc/internal/checker`）の正しさの修正とパフォーマンス改善
- [[repos/microsoft-TypeScript/topics/言語サービス|言語サービス]] — エディタ向け補完・LSP まわりの不具合修正
- [[repos/microsoft-TypeScript/topics/ビルドとファイル監視|ビルドとファイル監視]] — `tsc -b` のビルドスケジューリングとファイル監視（watch）の改善
- [[repos/microsoft-TypeScript/topics/プログラム的API|プログラム的API]] — tsgo 向けのプログラム的 API（スナップショット・プロジェクト・モジュール解決・ビルドオーケストレーターなど）

## 取り込み

- [[repos/microsoft-TypeScript/log|取り込み履歴]]
- 最近の変更: [[repos/microsoft-TypeScript/changes/2026-10-02|2026-10-02]]、[[repos/microsoft-TypeScript/changes/2026-09-30|2026-09-30]]、[[repos/microsoft-TypeScript/changes/2026-09-28|2026-09-28]]、[[repos/microsoft-TypeScript/changes/2026-09-24|2026-09-24]]
