---
title: SSR・ハイドレーション
updated: 2026-10-16
tags:
  - repo/react-react
  - topic
---

## 概要

サーバーレンダラー Fizz（`packages/react-server/src/ReactFizzServer.js`）によるプリレンダー・再開（resume）と、クライアントでのハイドレーション（`react-dom-bindings` の部分ハイドレーション）まわりの変更。プリレンダーがリトライ中のタスクの実行中に中断された場合に postpone の範囲を試行の開始位置に戻す変更（#37710）と、その後の replay スロットの重なりの修正（#37850）は、replay の不変条件をまとめて見直すため 2026-10-14 に revert された（#37852）。そのため、中断がシェルの一部を描画した後のタスクに当たると再開時にそのマークアップが抜けることがある挙動（#37709）が戻っており、後続の修正待ち。dehydrate 状態の Activity を隠す処理は、Activity の終端マーカーで止まり、後続の兄弟要素を隠さなくなった。

## 主な API・オプション

- Activity — dehydrate 状態の Activity を隠す・再表示する処理（`hideOrUnhideDehydratedBoundary`）が Activity の境界を正しく扱うようになった
- プリレンダー（Fizz）— 中断時の postpone 位置（`task.keyPath`・`task.childIndex`）を試行の開始位置に戻す修正は revert され、見直し中

## 変更履歴

- 2026-10-14 — #37710 と #37850 を revert（中断時の replay 復元を見直し。#37709 の退行が戻る）（[#37852](https://github.com/react/react/pull/37852)）⏳ 未リリース · [[repos/react-react/changes/2026-10-16|変更]]
- 2026-10-14 — プリレンダーの中断後に replay スロットが重なる問題を修正（[#37850](https://github.com/react/react/pull/37850)）⏳ 未リリース（#37852 で revert） · [[repos/react-react/changes/2026-10-16|変更]]
- 2026-10-14 — プリレンダーの中断時、リトライ中のタスクを開始位置から postpone するよう修正（[#37710](https://github.com/react/react/pull/37710)）⏳ 未リリース · [[repos/react-react/changes/2026-10-14|変更]]
- 2026-10-14 — dehydrate 状態の Activity を隠すと後ろの兄弟要素まで隠れる問題を修正（[#37814](https://github.com/react/react/pull/37814)）⏳ 未リリース · [[repos/react-react/changes/2026-10-14|変更]]

## 関連

- [[repos/react-react/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/react-react/topics/Reconciler|Reconciler]]
- [[repos/react-react/changes/2026-10-16|2026-10-16 の変更]]
