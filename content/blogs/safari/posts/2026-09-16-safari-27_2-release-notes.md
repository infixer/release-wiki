---
title: Safari 27.2 Beta リリースノート
date: 2026-09-16
updated: 2026-10-14
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-27_2-release-notes) · 公開: 2026-09-16

> [!info] 更新: 2026-10-14
> リリースノートが更新された。前回から増えた・変わった点:
> - Forms に `<select>` の `::field-content` 疑似要素と、`appearance: base-select` のボタンの配置・`text-overflow` 継承・`flex: 1` によるレイアウトの調整を追加
> - アクセシビリティ（`aria-labelledby` / `aria-describedby` の名前計算、`aria-live` の読み上げ重複、iOS の日付・時刻・色入力）、アニメーション（`zoom` 適用時の `animation-range-*`）、CSS（モーダル `<dialog>` 内のアンカー配置）、JavaScript（`for await...of`）、メディア（`decodeAudioData()`、`ManagedMediaSource`、WebCodecs `VideoEncoder` など 5 件）、SVG（`<foreignObject>`）、Web API（一時的なユーザーアクティベーション）、WebGPU（`executeBundles()`）、WebRTC（`getUserMedia()`）の修正を追加
> - `::picker-icon` の既定 `content` を、負のマージンなしで揃うグリフに変更

## 要約

Safari 27.2 Beta は iOS 27.2・iPadOS 27.2・visionOS 27.2・macOS 27.2 の各 Beta 版、および macOS 26・macOS Sequoia 向け。新機能はフォームまわりが中心で、overflow alignment の `safe`/`unsafe` 拡張と、`<select>` の `::field-content` 疑似要素・`appearance: base-select` の調整が入った。`display: grid-lanes` の `flow-tolerance` プロパティは `fit-tolerance` に改称された（`flow-tolerance` は非推奨のエイリアスとして残る）。アクセシビリティ・メディア・WebGPU・WebRTC・Safari MCP など多くの領域で不具合が修正されている。

## 新機能・主な変更

> [!tip] Overflow Alignment の拡張
> `safe` / `unsafe` キーワードを `normal` アライメントと組み合わせられるようになった。絶対配置・固定配置ボックスの `safe` は、ボックスを元の包含ブロック（ビューポート）内に留める挙動に変わった。base appearance の `<select>` の大きなピッカーがビューポート外に描画される問題は、この `safe` アライメントを適用して修正された。

> [!tip] `<select>` の `::field-content` と base-select の調整
> - `<selectedcontent>` が無いときに選択中の option のテキストをスタイルできる `::field-content` を `<select>` に追加
> - `appearance: base-select` の `<select>` ボタンの中身をより確実に垂直方向の中央に揃える
> - `<select>` の `text-overflow` を選択中の option のテキストに継承する
> - 余白の管理を `::picker-icon { margin-inline-start: auto; }` から `flex: 1` に変え、`<selectedcontent>` が無くてもピッカーアイコンが常に表示されるようにした
> - `::picker-icon` の既定 `content` を、負のマージンなしで正しく揃うグリフに変更

> [!tip] 主な修正
> - **アクセシビリティ**: `aria-labelledby` / `aria-describedby` で参照された要素の中のリスト・表・ツリー・canvas の内容が名前や説明から抜ける問題、`aria-live` 領域を追記ではなく再描画するページで VoiceOver が読み上げ済みのテキストを繰り返す問題、iOS で `<input type="date">`・`time`・`color` をポップアップボタンとして識別しない問題を修正
> - **アニメーション・CSS**: `zoom` を適用したとき（別の zoom の要素から値を継承する場合を含む）に `animation-range-start` / `animation-range-end` が正しく解決されない問題、モーダル `<dialog>` 内のアンカー配置要素がスクロール時に画面外に配置されて見えなくなる問題を修正
> - **HTML・JavaScript**: `readystatechange` ハンドラーが新しいロードを始めるとウィンドウの `load` イベントが発火しない問題、`for await...of` で async generator を回すときに `PromiseResolve` に必要な `Promise.prototype.constructor` の参照を飛ばしていた問題を修正
> - **メディア**: 正しい AAC/M4A で `AudioContext.decodeAudioData()` が `EncodingError` になる問題、デコーダーの無効化後に音声だけ流れて映像が黒くなる問題、未バッファの位置にシークしたとき `ManagedMediaSource` が `startstreaming` を発火しない問題、暗号化されていない `SourceBuffer` で `play()` の Promise が解決されない問題、WebCodecs の `VideoEncoder` が H.264 Main / High プロファイルで止まる問題を修正
> - **ネットワーク**: CNAME で別の登録可能ドメインに向けられたホストで、トップレベルナビゲーション自身のレスポンスが設定した Cookie の有効期限が 7 日に制限される問題を修正
> - **SVG・Web API**: `<foreignObject>` の `x` / `y` を動的に変えても反映されない問題、一時的なユーザーアクティベーションが誤って破棄され、Clipboard API などが初回に失敗する問題を修正
> - **WebGPU・WebRTC**: `drawIndirect()` / `drawIndexedIndirect()` を含むレンダーバンドルで `executeBundles()` を呼ぶとフレームレートが大きく落ちる問題、システムのオーディオサービスがリセットされた後に音声の `getUserMedia()` が `NotAllowedError` で失敗し続ける問題を修正
> - **Safari MCP・Web Extensions**: Safari MCP の制御下でタブ作成やスクリーンショット撮影のときに他アプリからキーボードフォーカスを奪う問題、コールドローンチ時に Web Extension のコンテンツ注入が大きく遅れる問題を修正

## 破壊的変更・移行手順

> [!warning] `flow-tolerance` を `fit-tolerance` に名称変更
> `display: grid-lanes` 向けの `flow-tolerance` プロパティが `fit-tolerance` に改称された。`flow-tolerance` は非推奨のエイリアスとして引き続き使えるが、Web Inspector が非推奨として警告する。[[blogs/safari/posts/2026-03-24-safari-26_4-release-notes|Safari 26.4]] で追加されたプロパティ名からの変更のため、`flow-tolerance` を使っているコードは `fit-tolerance` への置き換えを検討する。

## 関連

- 前の記事: [[blogs/safari/posts/2026-09-14-safari-27-release-notes|Safari 27 リリースノート]]
- 関連: [[blogs/safari/posts/2026-03-24-safari-26_4-release-notes|Safari 26.4 リリースノート]]（`flow-tolerance` の追加元）
