---
title: NAPI・WASIビルド
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

NAPI パッケージ（パーサー・minify・transform・transform-react・transform-relay）に、スレッドを使わない `wasm32-wasip1` ビルドと生成ローダーが追加された。ブラウザや Cloudflare Workers ではこのスレッドレスバインディングが使われ、スレッド付き WASI・WebContainer 向けのフォールバックは維持される。CI・リリースワークフローで新ターゲットのビルド・公開も行われる。

## 変更履歴

- 2026-09-24 — スレッドレスな WASI（`wasm32-wasip1`）ビルドを追加（[#26898](https://github.com/oxc-project/oxc/pull/26898)）⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
