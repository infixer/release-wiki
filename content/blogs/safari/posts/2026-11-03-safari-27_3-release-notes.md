---
title: Safari 27.3 Beta リリースノート
date: 2026-11-03
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-27_3-release-notes) · 公開: 2026-11-03（Beta）

## 要約

Safari 27.3 Beta は iOS 27.3 beta・iPadOS 27.3 beta・visionOS 27.3 beta・macOS 27.3 beta、および macOS 26・macOS Sequoia 向け。CSS の新機能が非常に多く、`if()`・`@function`・`attr()`・`random-item()`・`calc-mix()`・`corner-shape`・`object-view-box` などに対応した。JavaScript では `Temporal`、Explicit Resource Management、`import defer`、テキストモジュールの import、イテレーターの新メソッド群が入った。ブラウザーには縦型タブ（Vertical Tabs）と、ダークモード非対応のページを自動で暗くする Adaptive Dark Mode が加わり、Web Inspector・WebAssembly・Web API・SVG なども拡充された。多くの領域で不具合が修正されている（本文では修正項目の詳細は件数のみ）。

## 新機能・主な変更

> [!tip] ブラウザー・レンダリング
> - **Vertical Tabs**: タブを縦に並べて操作・管理する新しいレイアウト。省スペースな設計でページの表示領域を最大化する
> - **Adaptive Dark Mode**: ダークモードにネイティブ対応していない明るいページを自動で調整し、夜間や暗い環境での閲覧を最適化する
> - XML ドキュメントビューアーがダークモードに対応

> [!tip] CSS
> - 関数: `if()`、`@function`（カスタム関数のルール）、`attr()`、`random-item()`、`calc-mix()`、`ident()`、`inherit()`。`random()` に `property-scoped` / `property-index-scoped` のキャッシュのキーワードを追加し、カスタムプロパティの中でも使えるように
> - プロパティ: `object-view-box`、`corner-shape`、`text-decoration-inset`、`white-space-trim`、`wrap-inside`、`hyphenate-limit-chars`、接頭辞なしの `user-select`、接頭辞なしの `hyphenate-limit-lines`（補間にも対応。`-webkit-hyphenate-limit-lines` は別名として残る）、`outline-offset: inset`、ブロックレベルのボックスでの `justify-self`
> - `text-overflow` に任意の `<string>` を指定でき、`clip` / `ellipsis` 以外の文字列で切り詰められる
> - `shape-outside` で `path()` と `shape()` を使える
> - 条件付きルール: `@supports at-rule(...)`・`@supports named-feature()`、`@container` のカンマ区切りの条件リスト、コンテナクエリの条件内での `sibling-index()` / `sibling-count()`、CSSOM の `CSSContainerRule.conditions`・`CSSConditionRule.supports`・`CSSMediaRule.matches`
> - `::marker` の `content` プロパティ、`::highlight` ですべてのカスタムハイライトをまとめてスタイル、`HighlightRegistry.highlightsFromPoint()`
> - 東アジアのカウンタースタイル（longhand）で拡張された数値範囲に対応

> [!tip] HTML
> - `Origin-Agent-Cluster` ヘッダーに対応（`document.domain` は既定で使えたままで、ヘッダーで無効にできる）
> - `headingoffset`・`headingreset` 属性、`popover=hint`
> - viewport の `<meta>` の `interactive-widget` キー（`resizes-visual`・`resizes-content`・`overlays-content`）で、画面キーボード表示時のページの応じ方を制御できる

> [!tip] JavaScript
> - `Temporal`（日付と時刻を扱うモダンな API）
> - Explicit Resource Management（`Symbol.dispose` など）
> - `import defer` による遅延モジュール評価、import 属性 `type: text` によるテキストモジュールの import
> - イテレーター: `Iterator.prototype.includes()`・`Iterator.prototype.join()`・`Iterator.prototype.chunks()`・`Iterator.prototype.windows()`・`Iterator.zip()`・`Iterator.zipKeyed()`
> - `Intl.PluralRules.prototype.select` / `selectRange` で `BigInt` を扱える

> [!tip] アニメーション
> 時間ベースの高速化アニメーションを remote layer tree で実行するようになった（Safari 26.3 からの高速化スクロール駆動アニメーションと同じ方式）。対象は `transform` と個別の transform プロパティ、`opacity`、`filter`、`backdrop-filter`。`offset` プロパティを対象にするもの、合成されたアニメーション、`playbackRate` が 1 以外のもの、`linear()` / `steps()` のイージングを使うものも高速化されるようになった。

> [!tip] Web API・ネットワーク・Navigation API・メディア
> - `fetch()` の `body` に `ReadableStream` を渡してリクエスト本体をストリーミングできる
> - `dialog` 要素の close watcher と `closedby` 属性
> - Digital Credentials API で OpenID4VP の資格情報を要求できる
> - IndexedDB の `getAllRecords()` と `IDBGetAllOptions`、`FileSystemHandle` のシリアライズと保存
> - `QuotaExceededError` を `DOMException` のサブクラスとして `window` とワーカーで公開、`DOMException` に `stack` プロパティ
> - shared worker から dedicated worker を作成できる、WebGPU の subgroups
> - Navigation API: `NavigationTransition` の `to` プロパティ、precommit handler によるナビゲーションのインターセプト
> - `HTMLMediaElement.removeTextTrack()`

> [!tip] SVG
> - `text-overflow` を SVG の表示属性として使える
> - 外部の SVG 文書のペイントサーバーを `fill` / `stroke` で参照でき、フィルター・マスク・グラデーションなど外部文書の SVG リソースを `url()` で参照できる
> - `<textPath>` の SVG 2 の `path` 属性（別の `<path>` 要素を `href` で参照せずにインラインのパスに沿わせる）

> [!tip] WebAssembly・WebCodecs・WebGPU・WebRTC
> - WebAssembly の relaxed SIMD と Memory64
> - WebCodecs の `ImageDecoder` API
> - `GPUVertexFormat` の `snorm10-10-10-2`
> - WebRTC の AV1 ソフトウェアフォールバック

> [!tip] Web Inspector
> - 検査中のページのネットワーク速度のスロットリング
> - ソースマップの range mappings proposal に対応
> - 要素ごとの `Layout Invalidated` イベント（レイアウトの無効化の影響を受けた要素数）
> - Canvas タブで WebGPU シェーダーの編集・レンダーパイプラインのハイライト、WebGL / WebGPU キャンバスの推定メモリーに GPU リソースを含める
> - Canvas の記録で、オブジェクトの引数と戻り値の表示、`GPUBufferUsage.COPY_DST` などのフラグ名の表示、アクションの構文ハイライト
> - ページで有効なサイト固有の quirk をコンソールに記録

> [!tip] その他
> - **セキュリティ**: ページの 2-QWAC 証明書情報を表示できる
> - **Spatial Web**: visionOS で Spatial CSS Portals と Connected Volumetric Scenes をプレビュー（設定で Spatial CSS Portals 機能を有効にする）
> - **Web Extensions**: `local` / `sync` ストレージの `setAccessLevel()`、`offscreen` API、`scripting.ExecutionWorld`

> [!info] 修正項目
> 多くの領域で不具合が修正されている。本文に載っている件数は、CSS 91 件、Rendering 60 件、JavaScript 34 件、Web API 22 件、Media 20 件、Web Inspector 20 件、Animations・Forms・HTML 各 16 件、Networking 14 件、Accessibility・SVG 各 13 件、WebGPU 11 件など（取り込んだ本文では各項目の詳細は省略されている）。

## 破壊的変更・移行手順

> [!warning] 削除・非推奨
> - `-webkit-line-clamp` の非標準の `percentage` 値を削除
> - グリッドコンテナでの `margin-trim` 対応を削除（CSSWG の決議で、ブロックコンテナとマルチカラムコンテナに限定されたため）
> - `dominant-baseline` の `use-script`・`no-change`・`reset-size` の値を削除（SVG 2 に合わせる）
> - 非標準の `DataTransferItemList.prototype.item()` を削除（HTML 仕様に合わせる）。代わりに `items[0]` のようなインデックスアクセスを使う
> - 文書が XML の外部実体を宣言しているとコンソールに警告を出す

## 関連

- 前の記事: [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes|Safari 27.2 リリースノート]]、[[blogs/safari/posts/2026-10-23-safari-27_1-release-notes|Safari 27.1 リリースノート]]、[[blogs/safari/posts/2026-09-14-safari-27-release-notes|Safari 27 リリースノート]]
