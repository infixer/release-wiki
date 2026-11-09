---
title: Reconciler
updated: 2026-11-09
tags:
  - repo/react-react
  - topic
---

## 概要

`packages/react-reconciler` のレンダー・コミット処理（ワークループ、レーン、エラー回復、Suspense）まわりの変更。エラーが起きたときに保留中のレーンを同期的にリトライしてデータ競合による一時的なエラーからの回復を試みる「エラー回復」の仕組みがあり、リトライが完了しなかった場合の扱いが修正されている。Fragment Refs のインスタンスハンドルとテキストノードの扱いは完全にロールアウトされ、フィーチャーフラグ（`enableFragmentRefsInstanceHandles`・`enableFragmentRefsTextNodes`）が削除されて有効時の挙動に一本化された。並列トランジション（`enableParallelTransitions`）はすべての環境で有効になり、フラグは削除された。DEV で `use()` に渡された thenable に非同期の debug info（`_debugInfo`）を付ける処理は、拡張不可の thenable ではスキップされる。
`useId` は、ツリー位置の ID が 30 ビットを超える大きなツリーでも一意になる（オーバーフロー部分の先頭の 0 を保持。未リリース）。
スロットルされたリトライのコミットが新しいレンダーに取り消された場合、`prepareFreshStack` がそのレーンを ping し、境界がフォールバックのまま残らないようになった。hidden の Activity（Offscreen ファイバー）が削除された後にサスペンドしていたデータが解決しても、リトライ処理がクラッシュしなくなった（いずれも未リリース）。
更新を持たないレンダー（ハイドレーション・Suspense のリトライ）で初期値付きの `useDeferredValue` がサスペンドしたとき、サスペンドしたレーンに更新レーンが無ければ deferred レーンを作らず、再試行がループしなくなった（未リリース）。

## 主な API・オプション

- `use()` — DEV で拡張不可の thenable を渡すとクラッシュする問題が修正された（debug info は付かず、値は通常どおり取り出す）
- `useDeferredValue` — 初期値がシェルでサスペンドし最終値が throw するケースで、エラー回復との組み合わせによる無限ループが修正された。サスペンドしたハイドレーション・リトライでのループも修正（#38132）
- Fragment Refs — インスタンスハンドル・テキストノードの扱いがフラグなしで常に有効に（`enableFragmentRefsInstanceHandles`・`enableFragmentRefsTextNodes` は削除）
- ~~`enableParallelTransitions`~~ — すべての環境で有効になったため、フィーチャーフラグは削除

## 変更履歴

- 2026-11-06 — 初期値付きの `useDeferredValue` とサスペンドしたハイドレーション・リトライによる無限ループを修正（更新レーンの無いときは deferred レーンを作らない）（[#38132](https://github.com/react/react/pull/38132)）⏳ 未リリース · [[repos/react-react/changes/2026-11-09|変更]]
- 2026-10-31 — 削除された hidden の Activity でサスペンドしていたデータが解決するとクラッシュする問題を修正（`_retryCache` の `TypeError`）（[#37965](https://github.com/react/react/pull/37965)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-31 — 新しいレンダーがタイムアウトを取り消したとき、スロットルされたリトライのレーンを ping する（#38029 を修正、#38030 を置き換え）（[#38061](https://github.com/react/react/pull/38061)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-20 — 大きなツリー（位置 ID が 30 ビット超）でも `useId` の値が一意になるよう、オーバーフロー部分を 0 埋め（クライアント・Fizz とも）（[#37916](https://github.com/react/react/pull/37916)）⏳ 未リリース · [[repos/react-react/changes/2026-10-21|変更]]
- 2026-10-14 — 拡張不可の thenable を `use()` に渡すと DEV でクラッシュする問題を修正（[#37796](https://github.com/react/react/pull/37796)）⏳ 未リリース · [[repos/react-react/changes/2026-10-14|変更]]
- 2026-10-09 — フィーチャーフラグ `enableParallelTransitions` を削除し、有効時の挙動に一本化（[#37771](https://github.com/react/react/pull/37771)）⏳ 未リリース · [[repos/react-react/changes/2026-10-09|変更]]
- 2026-10-07 — Fragment Refs のフィーチャーフラグ `enableFragmentRefsInstanceHandles`・`enableFragmentRefsTextNodes` を削除し、有効時の挙動に一本化（[#37732](https://github.com/react/react/pull/37732)）⏳ 未リリース · [[repos/react-react/changes/2026-10-07|変更]]
- 2026-10-05 — `useDeferredValue` とエラー回復の組み合わせで起きる無限ループを修正（[#37739](https://github.com/react/react/pull/37739)）⏳ 未リリース · [[repos/react-react/changes/2026-10-05|変更]]

## 関連

- [[repos/react-react/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/react-react/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/react-react/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/react-react/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/react-react/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/react-react/changes/2026-11-02|2026-11-02 の変更]]
- [[repos/react-react/changes/2026-11-09|2026-11-09 の変更]]
