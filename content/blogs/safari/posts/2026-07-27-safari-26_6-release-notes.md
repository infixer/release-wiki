---
title: Safari 26.6 リリースノート
date: 2026-07-27
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-26_6-release-notes) · 公開: 2026-07-27

## 要約

Safari 26.6 は iOS 26.6・iPadOS 26.6・visionOS 26.6・macOS 26.6、および macOS Sequoia 向けの小規模なアップデート。新機能は WebAssembly の JS String Builtins 対応のみで、残りは CSS のズーム関連、Service Worker の後始末、Web Extension のパフォーマンス低下など不具合修正。

## 新機能・主な変更

> [!tip] WebAssembly
> - `WebAssembly.compileStreaming` / `WebAssembly.instantiateStreaming` に `compileOptions` 引数を追加し、JS String Builtins に対応

> [!tip] 主な修正
> - `ic` 単位がページズーム時に `1em` と一致しなくなる（仕様通りに動かない）不具合を修正
> - デスクトップ用サイト表示時に iPad で CSS の `zoom` と `font-size`・`font-weight`・`font-variant`・`font-style` が誤って干渉する不具合を修正
> - メインスクリプトやインポートスクリプトが欠落した Service Worker 登録が自動的に解除されず、ページが新しい Service Worker を登録し直せない不具合を修正
> - Web Extension の Service Worker 登録データベースファイルが Safari 起動のたびに蓄積し、パフォーマンスが低下する不具合を修正
> - `WKHTTPCookieStore` でパーティション化された Cookie を削除できない不具合を修正
> - `iceTransportPolicy: "relay"` を設定した `RTCPeerConnection` が macOS Sequoia で ICE candidate を全く収集できない不具合を修正

## 破壊的変更・移行手順

なし

## 関連

- 前の記事: [[blogs/safari/posts/2026-05-11-safari-26_5-release-notes|Safari 26.5 リリースノート]]
