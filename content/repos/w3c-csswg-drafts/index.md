---
title: w3c/csswg-drafts
updated: 2026-11-06
tags:
  - repo/w3c-csswg-drafts
---

[GitHub](https://github.com/w3c/csswg-drafts) · ブランチ: `main`

## 最新リリース

- 安定版: なし
- プレリリース: なし

## 直近の注目変更

- 2026-11-05 — 「determine the device pixel ratio」に `Document` の引数を追加（HTML の画像の候補の選択から使う）（[#14724](https://github.com/w3c/csswg-drafts/pull/14724)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/cssom-view-1|cssom-view-1]]
- 2026-11-04 — メディア特性 `prefers-bold-text`（`no-preference` / `bold`）を追加（#14477）（[#14725](https://github.com/w3c/csswg-drafts/pull/14725)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/mediaqueries-5|mediaqueries-5]]
- 2026-11-04 — 横書き・縦書きのカーニングのアルゴリズムを明示（#6723）（[`0a718ce`](https://github.com/w3c/csswg-drafts/commit/0a718ceea22e91739dc309b8a2548ee4804110cf)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-fonts-4|css-fonts-4]]
- 2026-11-04 — 空の引数を許して取り除き、最後の末尾カンマを JS と同じ扱いに（#14370）（[`909869d`](https://github.com/w3c/csswg-drafts/commit/909869d6b501d19e4bf632e458848f3c81af425f)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-mixins-1|css-mixins-1]]
- 2026-11-03 — `@private` の中に `@property` を置けるように（#14442）（[`5df2d97`](https://github.com/w3c/csswg-drafts/commit/5df2d97275eb118fb96be4f8444a5bddd509e2ab)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-mixins-1|css-mixins-1]]
- 2026-11-03 — `param()` の名前と値の間を `:` に（#14275）、`color` / `accent-color` を `env()` として渡す（#14447）（[`636a76a`](https://github.com/w3c/csswg-drafts/commit/636a76a25e992170038bbdcc032cc8f24519e991)、[`f6a994b`](https://github.com/w3c/csswg-drafts/commit/f6a994be84d4df01b0c9cb77225ca11f1b131dde)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-link-params-1|css-link-params-1]]、[[repos/w3c-csswg-drafts/topics/css-env-1|css-env-1]]
- 2026-11-02 — グラデーションの色域外の色を CSS の色域マッピングにかけることを必須に（#14545）（[`12ab907`](https://github.com/w3c/csswg-drafts/commit/12ab9071206ce8c70860808cec8a7af1f4ee0297)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-images-4|css-images-4]]
- 2026-11-02 — named feature の綴りを `gamut mapping` から `gamut-mapping` に（#14545）（[`f9abe9e`](https://github.com/w3c/csswg-drafts/commit/f9abe9e14e72e6fc3f3a0253817670520bf61278)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-conditional-5|css-conditional-5]]
- 2026-11-02 — フォントの feature value のシリアライズを定義（#14658）（[#14677](https://github.com/w3c/csswg-drafts/pull/14677)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-fonts-4|css-fonts-4]]
- 2026-11-01 — css-color-4 のレイトレーシングのアルゴリズムをエッジケースに対応（黒に近い領域で純粋な赤になる問題）（[#14698](https://github.com/w3c/csswg-drafts/pull/14698)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-color-4|css-color-4]]

## トピック

- [[repos/w3c-csswg-drafts/topics/animation-triggers-1|animation-triggers-1]] — アニメーションのトリガー（`timeline-trigger`・`<event-function>` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-align-3|css-align-3]] — ボックスの整列（`<self-position>`・`<content-position>`、`flow-start`・`flow-end`）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-borders-4|css-borders-4]] — ボーダーと角の形（`border-radius`・`corner-shape`）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-color-4|css-color-4]] — 色空間（LCH・Oklch など）と色の変換・シリアライズを定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-color-5|css-color-5]] — 色の関数（`alpha()` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-color-hdr-1|css-color-hdr-1]] — HDR の色（Jzazbz・PQ）を扱う仕様とそのサンプルコード
- [[repos/w3c-csswg-drafts/topics/css-conditional-5|css-conditional-5]] — 条件付きルール（コンテナクエリの `matchContainer()`・`ContainerQueryList`、named feature `gamut-mapping` など）の仕様
- [[repos/w3c-csswg-drafts/topics/css-contain-2|css-contain-2]] — 封じ込め（`content-visibility` でスキップされた内容のメディア再生など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-content-3|css-content-3]] — 生成コンテンツ（`content`・`match-parent`）とカウンタースタイル（`nko-ordinal` など）の仕様
- [[repos/w3c-csswg-drafts/topics/css-env-1|css-env-1]] — `env()` と環境変数（`color` / `accent-color` を `env()` で渡すなど）の仕様
- [[repos/w3c-csswg-drafts/topics/css-font-loading-3|css-font-loading-3]] — フォントの読み込みの API（IDL）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-fonts-4|css-fonts-4]] — フォントの選択とフォントの機能（カーニングと `palt`、feature value のシリアライズなど）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-forms-1|css-forms-1]] — フォームコントロールの見た目（appearance）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-grid-3|css-grid-3]] — CSS Grid Layout Level 3（`fit-tolerance`・Grid Lanes の整列など）の仕様
- [[repos/w3c-csswg-drafts/topics/css-highlight-api-1|css-highlight-api-1]] — CSS Custom Highlight API（`::highlight()`）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-images-4|css-images-4]] — `image()` やグラデーション（色域外の色の色域マッピング）など画像関連の値・関数を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-link-params-1|css-link-params-1]] — link params（`param()` の名前と値を `:` で区切るなど）の仕様
- [[repos/w3c-csswg-drafts/topics/css-masking-1|css-masking-1]] — クリッピングとマスキング（断片化への応じ方など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-mixins-1|css-mixins-1]] — CSS の mixin を定義する仕様（mixin 本体での `@layer` の扱い、`@private` 内の `@property` など）
- [[repos/w3c-csswg-drafts/topics/css-overflow-4|css-overflow-4]] — あふれた内容の扱い（`line-clamp`・`block-ellipsis` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-overflow-5|css-overflow-5]] — `scroll-axis-lock` などを定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-overscroll-2|css-overscroll-2]] — オーバースクロール（`overscrollcontainer`・`overscrollareas`）を説明する新しい仕様
- [[repos/w3c-csswg-drafts/topics/css-pseudo-4|css-pseudo-4]] — 疑似要素（`::interest-invoker` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-scroll-snap-1|css-scroll-snap-1]] — スクロールスナップ（`scroll-snap-type` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-sizing-4|css-sizing-4]] — サイズ指定の拡張（`stretch()`・`fit-content()`・`calc-size()`・`interpolate-size`）の仕様
- [[repos/w3c-csswg-drafts/topics/css-syntax-3|css-syntax-3]] — CSS のトークン化・パース（`style` 属性のパースなど）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-text-4|css-text-4]] — テキスト処理（`text-spacing`・`text-spacing-trim`）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/cssom-1|cssom-1]] — CSSOM（シリアライズ「serialize an identifier」など）の仕様
- [[repos/w3c-csswg-drafts/topics/cssom-view-1|cssom-view-1]] — CSSOM View（スクロールの Promise と `ScrollResult`、device pixel ratio の決定など）の仕様
- [[repos/w3c-csswg-drafts/topics/filter-effects-1|filter-effects-1]] — CSS フィルターを定義する仕様
- [[repos/w3c-csswg-drafts/topics/mediaqueries-5|mediaqueries-5]] — メディアクエリとメディア特性（`display-mode: application`・`prefers-bold-text` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/scroll-animations-1|scroll-animations-1]] — スクロール駆動アニメーション（`ViewTimelineOptions` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/selectors-5|selectors-5]] — セレクター（クラス接頭辞セレクターなど）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/web-animations-1|web-animations-1]] — Web Animations の基盤となる仕様

## 取り込み

- [[repos/w3c-csswg-drafts/log|取り込み履歴]]
- 最近の変更: [[repos/w3c-csswg-drafts/changes/2026-11-06|2026-11-06]]、[[repos/w3c-csswg-drafts/changes/2026-11-04|2026-11-04]]、[[repos/w3c-csswg-drafts/changes/2026-11-02|2026-11-02]]、[[repos/w3c-csswg-drafts/changes/2026-10-30|2026-10-30]]、[[repos/w3c-csswg-drafts/changes/2026-10-28|2026-10-28]]
