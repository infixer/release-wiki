---
title: SSR・ハイドレーション
updated: 2026-10-14
tags:
  - repo/vuejs-core
  - topic
---

## 概要

`@vue/server-renderer` によるサーバー描画と、クライアントでのハイドレーション（遅延ハイドレーションの戦略を含む）。
v3.5.44 では、非同期 setup のエラーが呼び出し元に伝わるように、`innerHTML` / `textContent` / `<textarea>` の `value` の偽値（空文字・`0`・`false`）が子を上書きするように、
`ssrRenderList` が不正な範囲で空のリストを返すように、`hydrateOnVisible()` が `display: contents` のルートでは子を監視するように修正された。

## 主な API・オプション

- `renderToString` / `renderToNodeStream` / `pipeToNodeWritable`
- `ssrRenderList`
- `hydrateOnVisible()` — `display: contents` のルートでは子孫を監視

## 変更履歴

- 2026-10-14 — `hydrateOnVisible`: `display: contents` のルートでは子を監視する（[#15773](https://github.com/vuejs/core/pull/15773)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]
- 2026-10-14 — SSR: 非同期 setup のエラーを呼び出し元に伝える（[#15857](https://github.com/vuejs/core/pull/15857)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]
- 2026-10-14 — SSR: 偽値の `innerHTML` / `textContent` / `value` で子を上書きする（[#15769](https://github.com/vuejs/core/pull/15769)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]
- 2026-10-14 — 不正な `v-for` の範囲を SSR でも何も描画しない（[#15742](https://github.com/vuejs/core/pull/15742)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]

## 関連

- [[repos/vuejs-core/releases/v3.5.44|v3.5.44]]
- [[repos/vuejs-core/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/vuejs-core/topics/レンダラー|レンダラー]]
