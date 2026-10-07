---
title: Reconciler
updated: 2026-10-07
tags:
  - repo/react-react
  - topic
---

## 概要

`packages/react-reconciler` のレンダー・コミット処理（ワークループ、レーン、エラー回復、Suspense）まわりの変更。エラーが起きたときに保留中のレーンを同期的にリトライしてデータ競合による一時的なエラーからの回復を試みる「エラー回復」の仕組みがあり、リトライが完了しなかった場合の扱いが修正されている。Fragment Refs のインスタンスハンドルとテキストノードの扱いは完全にロールアウトされ、フィーチャーフラグ（`enableFragmentRefsInstanceHandles`・`enableFragmentRefsTextNodes`）が削除されて有効時の挙動に一本化された。

## 主な API・オプション

- `useDeferredValue` — 初期値がシェルでサスペンドし最終値が throw するケースで、エラー回復との組み合わせによる無限ループが修正された
- Fragment Refs — インスタンスハンドル・テキストノードの扱いがフラグなしで常に有効に（`enableFragmentRefsInstanceHandles`・`enableFragmentRefsTextNodes` は削除）

## 変更履歴

- 2026-10-07 — Fragment Refs のフィーチャーフラグ `enableFragmentRefsInstanceHandles`・`enableFragmentRefsTextNodes` を削除し、有効時の挙動に一本化（[#37732](https://github.com/react/react/pull/37732)）⏳ 未リリース · [[repos/react-react/changes/2026-10-07|変更]]
- 2026-10-05 — `useDeferredValue` とエラー回復の組み合わせで起きる無限ループを修正（[#37739](https://github.com/react/react/pull/37739)）⏳ 未リリース · [[repos/react-react/changes/2026-10-05|変更]]

## 関連

- [[repos/react-react/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/react-react/changes/2026-10-05|2026-10-05 の変更]]
