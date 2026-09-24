---
title: Safari 27 リリースノート
date: 2026-09-14
tags:
  - blog/safari
  - post
---

[元の記事](https://developer.apple.com/documentation/safari-release-notes/safari-27-release-notes) · 公開: 2026-09-14

## 要約

Safari 27 は iOS 27・iPadOS 27・visionOS 27・macOS 27、および macOS 26・macOS Sequoia 向けの大型アップデート。CSS の `:host:has()`・`revert-rule`・複数色の `color-mix()` など多数の新セレクタ・関数が加わったほか、カスタマイズ可能な `<select>` 要素、BigInt Math、`import defer`、WebAssembly JSPI、Safari MCP 経由のエージェント連携など、プラットフォーム全体で新機能が追加された。一方で MathML の `href` 属性や SVG の非標準インターフェースなど、古い API のいくつかが非推奨・削除されている。

## 新機能・主な変更

> [!tip] CSS セレクタ・カスケード
> - `:host:has()` 複合セレクタ、`:heading` 疑似クラス、属性セレクタの大文字小文字を区別する `s` 修飾子に対応
> - カスケードを「このスタイルルールが存在しなかった」状態まで巻き戻す `revert-rule` キーワードに対応
> - `contain: style` を CSS の quote counter にも適用可能に（CSS Containment Level 2）

> [!tip] CSS 色・レイアウト
> - `color-mix()` で 3 色以上の混色、`alpha()` 相対色関数に対応
> - 類似色空間間で補間する際、欠けている色成分を forward できるように
> - box sizing プロパティの `stretch` キーワード、`position-anchor` の `normal`/`none`、transform を考慮したアンカー配置に対応
> - `<image>` 値型の `image(<color>)`、`light-dark()` での `<image>` 値に対応
> - `text-autospace` の `insert` キーワード、CSS `progress()` 関数の `no-clamp` オプションに対応

> [!tip] フォーム
> - カスタマイズ可能な `<select>` 要素に対応。`appearance: base-select` によるスタイル変更と、`<selectedcontent>` 要素によるカスタムコンテンツ表示が可能に

> [!tip] JavaScript
> - TC39 の BigInt Math 提案に対応し、`BigInt.pow`・`BigInt.sqrt` など `Math` 相当のメソッドを `BigInt` に公開
> - 静的な `import defer` のセマンティクスに対応

> [!tip] WebAssembly・開発者ツール
> - WebAssembly JavaScript Promise Integration（JSPI）に対応
> - Safari MCP サーバー経由でエージェントが Safari に接続し、開発・デバッグできるように
> - WebDriver が Digital Credentials API に対応（ウォレットのペイロードのシミュレーション、無期限待機、ユーザー拒否のコマンドを含む）

> [!tip] Web API・拡張機能
> - `ReadableStream` の `for await...of` による非同期反復、`ReadableStream.from()`、`postMessage()` 経由の transfer に対応
> - Service Worker の static routing API に対応
> - `PredefinedColorSpace` に `srgb-linear` / `display-p3-linear` を追加
> - Web Extension で `chrome.windows.create()` の `tabId` キー、`runtime.getDocumentId()`、スクリプトの未捕捉例外・未処理の Promise rejection の報告に対応
> - Web Extension のユーザージェスチャーを `sendMessage()` / `connect()` / `postMessage()` / `executeScript()` 経由で伝播できるように（メディア再生などジェスチャーが必要な操作を拡張機能から実行可能に）

> [!tip] アクセシビリティ・アニメーション・レンダリング
> - 画面読み上げの通知をプログラムから行える `ariaNotify` API に対応
> - `AnimationEvent` / `TransitionEvent` に `animation` プロパティを追加
> - サブピクセル単位のインラインレイアウトに対応し、テキストやインライン要素の位置決めがより精密に
> - スクロールアンカリングを有効化し、ビューポート上方でのコンテンツ挿入・削除時のスクロール位置のジャンプを防止

> [!tip] Spatial Web（visionOS）
> - `<model>` 要素が iOS・iPadOS・macOS でも利用可能に。`dynamic-range-limit` やトーンマッピングにも対応
> - visionOS でイマーシブな Web サイト環境に対応
> - WebXR Layers でテクスチャ配列投影レイヤーに対応

## 破壊的変更・移行手順

> [!warning] MathML の `href` 属性を非推奨化
> `<a>` を除くすべての MathML 要素で `href` 属性が非推奨になった。

> [!warning] SVG の非標準インターフェース・プロパティを削除
> SVG2 仕様に合わせて `SVGLocatable` / `SVGTransformable` インターフェース、`SVGGraphicsElement` の非標準プロパティ `nearestViewportElement` / `farthestViewportElement`、`SVGViewSpec.viewTarget`、非標準の `glyph-orientation-horizontal` プロパティが削除された。これらに依存しているコードは動作しなくなる。

> [!warning] Spatial Backdrop の開発者プレビューを廃止
> Immersive API に一本化されるため、Spatial Backdrop の開発者プレビューが削除された。

## 関連

- 前の記事: [[blogs/safari/posts/2026-07-27-safari-26_6-release-notes|Safari 26.6 リリースノート]]
- 後の記事: [[blogs/safari/posts/2026-09-16-safari-27_2-release-notes|Safari 27.2 Beta リリースノート]]
