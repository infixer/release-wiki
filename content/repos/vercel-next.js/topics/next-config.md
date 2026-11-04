---
title: next.config
updated: 2026-11-04
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

`next.config` の読み込み（`loadConfig`）と正規化の実装。`loadConfig` は入れ子の設定（`images.localPatterns`、`basePath` 付きの `images.path`、`experimental.staleTimes` など）をその場で正規化するが、既定値や呼び出し側のオブジェクトを参照のまま使っていたため、同じプロセスで複数の設定を読むと値が混ざる問題があった。[#99942](https://github.com/vercel/next.js/pull/99942) で、書き込むオブジェクトはすべて自前のコピーにするようになった（未リリース）。

## 主な API・オプション

- `next({ conf })` — カスタム設定を渡してサーバーを作る。渡したオブジェクトは書き換えられなくなった
- `modifyConfig`（デプロイアダプター）— 戻り値は複製してから正規化される

## 変更履歴

- 2026-11-04 — 読み込んだ設定が既定値や呼び出し側とオブジェクトを共有しないように（`cloneObject` で複製）（[#99942](https://github.com/vercel/next.js/pull/99942)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-11-04|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-11-04|2026-11-04 の変更]]
- [[repos/vercel-next.js/topics/画像最適化|画像最適化]]
