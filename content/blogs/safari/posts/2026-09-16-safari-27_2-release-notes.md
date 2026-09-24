---
title: Safari 27.2 Beta リリースノート
date: 2026-09-16
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-27_2-release-notes) · 公開: 2026-09-16

## 要約

Safari 27.2 Beta は iOS 27.2・iPadOS 27.2・visionOS 27.2・macOS 27.2 の各 Beta 版、および macOS 26・macOS Sequoia 向け。新機能は overflow alignment の `safe`/`unsafe` 拡張が中心で、`display: grid-lanes` の `flow-tolerance` プロパティは `fit-tolerance` に改称された（`flow-tolerance` は非推奨のエイリアスとして残る）。Safari MCP まわりの不具合修正も含まれる。

## 新機能・主な変更

> [!tip] CSS Overflow Alignment
> - `normal` との組み合わせでの `safe` / `unsafe` オーバーフローアライメントと、固定配置ボックスへの `safe` アライメントに対応。オーバーフローしても表示範囲内に留まるようになる
> - `::picker(select)` に `safe` アライメントを適用し、base appearance の `<select>` ピッカーが常に表示範囲内に収まるように
> - `appearance: base-select` の既定スタイルを更新（中央揃え、パディングに `lh` 単位を使用、`::picker-icon` と `::checkmark` のフォントプロパティをリセット）

> [!tip] 主な修正
> - Safari MCP の制御下でタブを作成したりスクリーンショットを撮影したりする際に、Safari が他アプリからキーボードフォーカスを奪ってしまう不具合を修正
> - `readystatechange` ハンドラーが新しいロードを開始すると、ウィンドウの `load` イベントが発火しない不具合を修正
> - コールドローンチ時に Web Extension のコンテンツ注入が大幅に遅延する不具合を修正
> - CNAME で別のドメインに向けられたホストで、トップレベルナビゲーション自身のレスポンスが設定した Cookie の有効期限が 7 日に制限されてしまう不具合を修正

## 破壊的変更・移行手順

> [!warning] `flow-tolerance` を `fit-tolerance` に名称変更
> `display: grid-lanes` 向けの `flow-tolerance` プロパティが `fit-tolerance` に改称された。`flow-tolerance` は非推奨のエイリアスとして引き続き使えるが、Web Inspector が非推奨として警告するようになった。[[blogs/safari/posts/2026-03-24-safari-26_4-release-notes|Safari 26.4]] で追加されたプロパティ名からの変更のため、`flow-tolerance` を使っているコードは `fit-tolerance` への置き換えを検討する。

## 関連

- 前の記事: [[blogs/safari/posts/2026-09-14-safari-27-release-notes|Safari 27 リリースノート]]
- 関連: [[blogs/safari/posts/2026-03-24-safari-26_4-release-notes|Safari 26.4 リリースノート]](`flow-tolerance` の追加元)
