---
title: canvas要素
updated: 2026-11-13
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`canvas` 要素と 2D の描画コンテキストに関する仕様。2026-11-13 の取り込み（#11734）で、トーンマッピングが加わった。`CanvasRenderingContext2DSettings` の `toneMapping` で HDR の内容の扱い（`"standard"` / `"extended"`）を指定でき、`getContextAttributes()` に反映される。canvas を出力デバイスに描画するときは、色空間の変換の前に、`dynamic-range-limit` で制限されたデバイスの HDR headroom に合わせてトーンマッピングされる。これらの型は WebGPU の `GPUCanvasToneMapping`・`GPUCanvasToneMappingMode` を置き換え、WebGPU からも HTML の定義を参照する。

## 主な API・オプション

- `CanvasRenderingContext2DSettings.toneMapping` — `CanvasToneMapping` 辞書。`getContextAttributes()` で読み返せる
- `CanvasToneMappingMode` — `"standard"` / `"extended"`

## 変更履歴

- 2026-11-11 — canvas にトーンマッピング（`CanvasToneMapping`・`CanvasToneMappingMode`・`toneMapping`）を追加（[#11734](https://github.com/whatwg/html/pull/11734)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-11-13|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-11-13|2026-11-13 の変更]]
