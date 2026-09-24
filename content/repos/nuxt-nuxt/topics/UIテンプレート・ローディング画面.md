---
title: UIテンプレート・ローディング画面
updated: 2026-09-24
tags:
  - repo/nuxt-nuxt
  - topic
---

## 概要

`packages/ui-templates` のローディング画面。WebGPU を使い、パーティクルによる山脈アニメーションをシェーダー1つ・描画コール1つで描画する。WebGPU が使えない環境では canvas を出さずロゴのみになり、`prefers-reduced-motion` ではアニメーションを止める。進捗表示は `window.__NUXT_LOADING_STATE__` または `nuxt:loading-state` イベントを読み取る。

## 主な API・オプション

- `window.__NUXT_LOADING_STATE__` / `nuxt:loading-state` イベント — 進捗バーへの状態通知

## 変更履歴

- 2026-09-21 — ローディング画面を WebGPU パーティクルによる山脈アニメーションに置き換え（[#36178](https://github.com/nuxt/nuxt/pull/36178)）⏳ 未リリース · [[repos/nuxt-nuxt/changes/2026-09-24|変更]]

## 関連

- [[repos/nuxt-nuxt/changes/2026-09-24|2026-09-24 の変更]]
