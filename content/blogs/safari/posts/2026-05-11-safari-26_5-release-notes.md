---
title: Safari 26.5 リリースノート
date: 2026-05-11
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-26_5-release-notes) · 公開: 2026-05-11

## 要約

Safari 26.5 は iOS 26.5・iPadOS 26.5・visionOS 26.5・macOS 26.5、および macOS Sequoia・macOS Sonoma 向けに公開された。新機能は少なく、`<dialog>` などの `:open` 疑似クラスや `random()` のスコープ挙動の変更、SVG グラデーションの色空間指定など CSS 中心の追加にとどまる。残りはスクロール駆動アニメーション・CSS Grid Lanes・アンカー配置まわりの不具合修正が中心。

## 新機能・主な変更

> [!tip] CSS
> - `<details>`・`<dialog>`・`<select>`・`<input>` 要素向けに `:open` 疑似クラスに対応
> - `random()` に `element-scoped` キーワードを追加。`random(--foo)` のようなカスタムプロパティ識別子は要素単位ではなく文書全体でグローバルにマッチするようキャッシュ挙動を変更（仕様変更に追随）。非標準の `element-shared` は削除

> [!tip] SVG・Web API
> - SVG グラデーションの `color-interpolation` 属性に対応し、`linearRGB` 色空間での補間が可能に
> - `ToggleEvent` に `source` プロパティを追加。popover の起動ボタンなど、トグルの引き金になった要素を識別できるように
> - Origin API に対応し、オリジン情報を構造化された `Origin` オブジェクトとして取得可能に

> [!tip] 主な修正
> - スクロール駆動アニメーションで `animation-play-state` を `paused` に切り替えても一時停止されない不具合を修正
> - 3 つ以上連鎖したアンカー配置要素が正しく解決されない不具合を修正
> - バックフォワードキャッシュから復帰した際、アニメーションタイムラインが正しく復元されないことがある不具合を修正
> - ダウンロードしたファイルの拡張子が URL のパスではなく HTTP `Content-Type` ヘッダーから決まるよう修正

## 破壊的変更・移行手順

なし

## 関連

- 前の記事: [[blogs/safari/posts/2026-03-24-safari-26_4-release-notes|Safari 26.4 リリースノート]]
