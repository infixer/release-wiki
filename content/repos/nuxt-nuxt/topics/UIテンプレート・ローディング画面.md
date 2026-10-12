---
title: UIテンプレート・ローディング画面
updated: 2026-10-12
tags:
  - repo/nuxt-nuxt
  - topic
---

## 概要

ローディング表示まわり（`packages/ui-templates` のローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`）。`packages/ui-templates` のローディング画面は、WebGPU を使い、パーティクルによる山脈アニメーションをシェーダー1つ・描画コール1つで描画する。WebGPU が使えない環境では canvas を出さずロゴのみになり、`prefers-reduced-motion` ではアニメーションを止める。進捗表示は `window.__NUXT_LOADING_STATE__` または `nuxt:loading-state` イベントを読み取る。SPA ローディングテンプレートは、`experimental.spaLoadingTemplateLocation: 'within'` のとき実験的な Vite サーバービルダー（`@nuxt/vite-server`）でも `#__nuxt` の中に描画され、マウント時に Vue が置き換える（Nitro のレンダラーと同じ挙動）。`<NuxtLoadingIndicator>` には、進捗が 100% に達したときの色を指定する `finishColor` プロップが加わった（エラー時は `errorColor` が優先、未指定なら `color`）（いずれも未リリース）。

## 主な API・オプション

- `window.__NUXT_LOADING_STATE__` / `nuxt:loading-state` イベント — 進捗バーへの状態通知
- `experimental.spaLoadingTemplateLocation` — `'within'`（`#__nuxt` の中）または `body`
- `<NuxtLoadingIndicator>` の `finishColor` — 読み込み完了時のバーの色（`errorColor` が優先、未指定なら `color`）

## 変更履歴

- 2026-10-10 — `<NuxtLoadingIndicator>` に `finishColor` プロップを追加（[#36533](https://github.com/nuxt/nuxt/pull/36533)）⏳ 未リリース · [[repos/nuxt-nuxt/changes/2026-10-12|変更]]
- 2026-10-10 — vite-server: `spaLoadingTemplateLocation: 'within'` で SPA ローディングテンプレートを `#__nuxt` の中に描画（[#36536](https://github.com/nuxt/nuxt/pull/36536)）⏳ 未リリース · [[repos/nuxt-nuxt/changes/2026-10-12|変更]]
- 2026-09-21 — ローディング画面を WebGPU パーティクルによる山脈アニメーションに置き換え（[#36178](https://github.com/nuxt/nuxt/pull/36178)）⏳ 未リリース · [[repos/nuxt-nuxt/changes/2026-09-24|変更]]

## 関連

- [[repos/nuxt-nuxt/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/nuxt-nuxt/changes/2026-10-12|2026-10-12 の変更]]
