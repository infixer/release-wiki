---
title: Safari 26.4 リリースノート
date: 2026-03-24
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-26_4-release-notes) · 公開: 2026-03-24

## 要約

Safari 26.4 は iOS 26.4・iPadOS 26.4・visionOS 26.4・macOS 26.4、および macOS Sequoia・macOS Sonoma 向けに公開された。macOS・iPadOS では Compact タブが復活し、CSS の Grid Lanes 関連機能や name-only の `@container` クエリなどレイアウト周りの新機能が多数追加された。JavaScript の iterator sequencing、WebTransport、Keyboard Lock API、WebAuthn の PRF 拡張など Web プラットフォーム API も拡充している。Web Inspector にも Worker 内でのキャプチャ機能や Grid Lanes 関連の可視化が加わった。

## 新機能・主な変更

> [!tip] ブラウザ UI
> - macOS・iPadOS に Compact タブが復活
> - スクロール駆動アニメーションがスレッド化され、パフォーマンスが向上

> [!tip] CSS・レイアウト
> - blocks-in-inline レイアウトに対応
> - `display: grid-lanes` と、CSS Grid Lanes の `flow-tolerance` に対応
> - CSS Grid Level 3 の `grid-auto-flow` 初期値の自動判定に対応（`grid-template-rows`/`grid-template-columns` から流れの向きを決定）
> - 条件を持たない name-only の `@container` クエリの解析・評価に対応
> - スクロール可能なコンテナ内の絶対配置ボックスで、スクロール方向のアライメントオーバーフローを許可（最新の CSS 仕様に追随）
> - `math-depth`、`::marker` 疑似要素への `cursor` プロパティに対応

> [!tip] JavaScript・Web API
> - Iterator sequencing に対応
> - `ReadableStream.getIterator()` と `[@@asyncIterator]` によるストリームの反復に対応
> - Keyboard Lock API に対応
> - `fetch` のリクエスト・レスポンスボディとして readable byte stream を使えるように（同期スタートにも対応）
> - `Blob.stream()` の BYOB リーダー、`ReadableByteStream` に対応
> - `MouseEvent.button` の補助マウスボタン値に対応
> - `CustomElementRegistry.prototype.initialize` での要素アップグレード、`customelementregistry` コンテンツ属性に対応
> - `MediaDeviceInfo` インターフェースをセキュアコンテキストのみに限定（仕様準拠）
> - Resource Timing Level 3 の `finalResponseHeadersStart` / `firstInterimResponseStart` に対応（103 Early Hints などの計測向け）

> [!tip] ネットワーキング・認証
> - WebTransport に対応
> - WebAuthn の PRF 拡張（CTAP `hmac-secret` 相当）に対応し、セキュリティキーでの認証情報に紐づく暗号鍵を利用可能に
> - WebAuthn の CTAP PIN/UV Auth Protocol 2（HKDF-SHA-256）に対応し、FIPS 準拠のオーセンティケータを利用可能に

> [!tip] WebRTC・メディア
> - macOS で複数マイクからの音声キャプチャに対応（エコーキャンセレーションの管理・既存キャプチャの移行を含む）
> - iOS で WebRTC のネットワークスライシングに対応
> - macOS にキャプションスタイルプロファイルを選択・管理するポップアップメニューを追加

> [!tip] Web Inspector
> - Worker 内での `console.screenshot()`、`console.record()` / `console.recordEnd()` によるキャプチャ・録画に対応
> - Elements タブで整形済み HTML をコピーするコンテキストメニューを追加
> - 3D Layers ビューで実際に合成されたレイヤーのスナップショットを表示
> - Grid・Grid Lanes のオーバーレイに Order Number の表示切り替え、Grid Lanes のアイテム間ギャップの可視化を追加

## 破壊的変更・移行手順

> [!warning] `FontFaceSet` コンストラクタの削除
> CSS Font Loading API から不要と判断された `FontFaceSet` コンストラクタが削除された（CSSWG の決定に準拠）。`new FontFaceSet()` を直接呼び出しているコードは動作しなくなる。

## 関連

- 後の記事: [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes|Safari 27.2 Beta リリースノート]]（この記事で追加された `flow-tolerance` は `fit-tolerance` に改称された）
