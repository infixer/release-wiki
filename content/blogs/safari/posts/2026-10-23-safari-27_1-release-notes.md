---
title: Safari 27.1 リリースノート
date: 2026-10-23
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-27_1-release-notes) · 公開: 2026-10-23

## 要約

Safari 27.1 は iOS 27.1 向け。折りたたみ端末への対応が中心で、本のように半分折った姿勢で PDF を見開き 2 ページで表示する機能と、フィーチャーフラグの裏で Device Posture API と Viewport Segments API が入った。

## 新機能・主な変更

> [!tip] PDF の見開き表示（折りたたみ端末）
> 折りたたみ端末を本のような姿勢に半分折ると、PDF を 2 ページ並べて自動で表示し、開くと 1 ページ表示に戻る。

> [!tip] Device Posture API（フィーチャーフラグ）
> 端末が折りたたまれたときにサイトが反応できる。
> - `navigator.devicePosture.type` は `continuous` か `folded` を返す（document が無いときの既定は `continuous`）
> - 姿勢が変わると `navigator.devicePosture` で `change` イベントが発火する
> - メディアクエリ `device-posture` が `continuous` / `folded` に一致する

> [!tip] Viewport Segments API（フィーチャーフラグ）
> 画面の折り目で分かれた領域に合わせてコンテンツを配置できる。
> - メディアクエリ `horizontal-viewport-segments` / `vertical-viewport-segments` がセグメントの数に一致する
> - `env()` の `viewport-segment-width`・`viewport-segment-height`・`viewport-segment-top`・`viewport-segment-right`・`viewport-segment-bottom`・`viewport-segment-left` に横・縦のインデックスを渡すと、各セグメントの大きさと位置が返る

## 破壊的変更・移行手順

なし

## 関連

- 前の記事: [[blogs/safari/posts/2026-09-14-safari-27-release-notes|Safari 27 リリースノート]]
- 次の記事: [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes|Safari 27.2 リリースノート]]
