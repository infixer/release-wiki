---
title: SSR・ハイドレーション
updated: 2026-11-13
tags:
  - repo/vuejs-core
  - topic
---

## 概要

`@vue/server-renderer` によるサーバー描画と、クライアントでのハイドレーション（遅延ハイドレーションの戦略を含む）。
v3.5.44 では、非同期 setup のエラーが呼び出し元に伝わるように、`innerHTML` / `textContent` / `<textarea>` の `value` の偽値（空文字・`0`・`false`）が子を上書きするように、
`ssrRenderList` が不正な範囲で空のリストを返すように、`hydrateOnVisible()` が `display: contents` のルートでは子を監視するように修正された。
未リリースの変更として、SSR で素の要素の静的な `style` 属性をコンパイル時に描画するようになり（作者の計測で -95〜98%）、入れ子のノードの不一致でコンポーネントの `el` がずれる問題と、非同期 setup が reject したコンポーネントのプレースホルダーのマークアップが修正された。
`<style>` の `v-bind()`（CSS 変数）は、SSR でもルートのループ・フラグメント・`<KeepAlive>`・`<Teleport>` の中身に注入され、ハイドレーションでもそのスタイルを保つ（誤った不一致の警告を出さない）。オブジェクトから継承したプロパティと同じ名前の属性も正しく描画される（いずれも未リリース）。

## 主な API・オプション

- `renderToString` / `renderToNodeStream` / `pipeToNodeWritable`
- `ssrRenderList`
- `hydrateOnVisible()` — `display: contents` のルートでは子孫を監視

## 変更履歴

- 2026-11-13 — compiler-ssr: KeepAlive・Teleport の中身に CSS 変数を注入する（[#16245](https://github.com/vuejs/core/pull/16245)）⏳ 未リリース · [[repos/vuejs-core/changes/2026-11-13|変更]]
- 2026-11-12 — SSR: ルートのループ・フラグメントにも CSS 変数を注入する（[#16244](https://github.com/vuejs/core/pull/16244)）⏳ 未リリース · [[repos/vuejs-core/changes/2026-11-13|変更]]
- 2026-11-11 — SSR: オブジェクトから継承したプロパティ名の属性を正しく描画する（[#16225](https://github.com/vuejs/core/pull/16225)）⏳ 未リリース · [[repos/vuejs-core/changes/2026-11-13|変更]]
- 2026-11-04 — 非同期 setup が reject したコンポーネントは何も描画しない（SSR・ハイドレーションでもプレースホルダー）（[#16111](https://github.com/vuejs/core/pull/16111)）⏳ 未リリース · [[repos/vuejs-core/changes/2026-11-04|変更]]
- 2026-11-04 — SSR: 静的な `style` 属性をコンパイル時に描画（[#16010](https://github.com/vuejs/core/pull/16010)）⏳ 未リリース · [[repos/vuejs-core/changes/2026-11-04|変更]]
- 2026-11-04 — ハイドレーション: ホストのノードを置き換えるときだけコンポーネントの `el` を更新（[#16001](https://github.com/vuejs/core/pull/16001)）⏳ 未リリース · [[repos/vuejs-core/changes/2026-11-04|変更]]
- 2026-10-14 — `hydrateOnVisible`: `display: contents` のルートでは子を監視する（[#15773](https://github.com/vuejs/core/pull/15773)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]
- 2026-10-14 — SSR: 非同期 setup のエラーを呼び出し元に伝える（[#15857](https://github.com/vuejs/core/pull/15857)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]
- 2026-10-14 — SSR: 偽値の `innerHTML` / `textContent` / `value` で子を上書きする（[#15769](https://github.com/vuejs/core/pull/15769)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]
- 2026-10-14 — 不正な `v-for` の範囲を SSR でも何も描画しない（[#15742](https://github.com/vuejs/core/pull/15742)）📦 v3.5.44 · [[repos/vuejs-core/changes/2026-10-14|変更]]

## 関連

- [[repos/vuejs-core/releases/v3.5.44|v3.5.44]]
- [[repos/vuejs-core/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/vuejs-core/topics/レンダラー|レンダラー]]
- [[repos/vuejs-core/changes/2026-11-04|2026-11-04 の変更]]
- [[repos/vuejs-core/changes/2026-11-13|2026-11-13 の変更]]
