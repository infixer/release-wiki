---
title: Server Components
updated: 2026-09-24
tags:
  - repo/react-react
  - topic
---

## 概要

Flight プロトコル（React Server Components のシリアライズ形式）まわりの実装。関数だけでなくオブジェクトも Server Reference として参照できる実験的な仕組みや、テキストのシリアライズ・デコード時の互換性の修正が含まれる。

## 主な API・オプション

- `registerServerObjectReference()` — オブジェクトを Server Reference として登録する（実験的フラグ `enableFlightObjectReferences`、現時点では Turbopack バインディングのみ）

## 変更履歴

- 2026-09-24 — Server Reference が任意のオブジェクトを参照できるように（実験的）（[#37636](https://github.com/react/react/pull/37636)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — Flight クライアントが outlined text row 先頭の `U+FEFF` を保持するよう修正（[#37625](https://github.com/react/react/pull/37625)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]

## 関連

- [[repos/react-react/changes/2026-09-24|2026-09-24 の変更]]
