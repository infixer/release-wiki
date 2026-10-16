---
title: Server Components
updated: 2026-10-16
tags:
  - repo/react-react
  - topic
---

## 概要

Flight プロトコル（React Server Components のシリアライズ形式）まわりの実装。関数だけでなくオブジェクトも Server Reference として参照できる実験的な仕組みや、テキストのシリアライズ・デコード時の互換性の修正が含まれる。エラーを debug info として送る処理（`serializeDebugErrorValue`）では、スタックフレームの無いエラー（Node 内部の `ECONNREFUSED` など）をクライアントで復元できず、`AggregateError` では root が解決されなくなる問題が修正された。2026-10-14 には Flight の転送プロトコルの改善（クライアント・Reply の処理・各環境のストリーム設定）が main に入り、同じ題名の変更が 19.0.9・19.1.10・19.2.9・19.3.1 として各リリースラインに公開された（詳細は PR に書かれていない）。

## 主な API・オプション

- `registerServerObjectReference()` — オブジェクトを Server Reference として登録する（実験的フラグ `enableFlightObjectReferences`、現時点では Turbopack バインディングのみ）

## 変更履歴

- 2026-10-14 — Flight の転送プロトコルを改善（[#37846](https://github.com/react/react/pull/37846)）⏳ 未リリース（バックポートは v19.0.9〜v19.3.1 に収録） · [[repos/react-react/changes/2026-10-16|変更]]
- 2026-10-07 — スタックフレームの無いエラーを debug info から復元できない問題を修正（#37728）（[#37730](https://github.com/react/react/pull/37730)）⏳ 未リリース · [[repos/react-react/changes/2026-10-07|変更]]
- 2026-09-24 — Server Reference が任意のオブジェクトを参照できるように（実験的）（[#37636](https://github.com/react/react/pull/37636)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — Flight クライアントが outlined text row 先頭の `U+FEFF` を保持するよう修正（[#37625](https://github.com/react/react/pull/37625)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]

## 関連

- [[repos/react-react/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/react-react/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/react-react/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/react-react/releases/v19.3.1|v19.3.1]]、[[repos/react-react/releases/v19.2.9|v19.2.9]]、[[repos/react-react/releases/v19.1.10|v19.1.10]]、[[repos/react-react/releases/v19.0.9|v19.0.9]]
