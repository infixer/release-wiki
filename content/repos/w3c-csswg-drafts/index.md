---
title: w3c/csswg-drafts
updated: 2026-10-16
tags:
  - repo/w3c-csswg-drafts
---

[GitHub](https://github.com/w3c/csswg-drafts) · ブランチ: `main`

## 最新リリース

- 安定版: なし
- プレリリース: なし

## 直近の注目変更

- 2026-10-16 — mixin の本体の中の `@layer` を無効に（[#14491](https://github.com/w3c/csswg-drafts/pull/14491)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-mixins-1|css-mixins-1]]
- 2026-10-16 — 'interest' まわりの定義をさらに CSS 側へ取り込む（[`247bc6b`](https://github.com/w3c/csswg-drafts/commit/247bc6b2f2fb8098aa27654316e2a2e968ee74bb)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-pseudo-4|css-pseudo-4]]
- 2026-10-16 — clamp された行はベースラインに影響しないと明確化（[#14609](https://github.com/w3c/csswg-drafts/pull/14609)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-overflow-4|css-overflow-4]]
- 2026-10-16 — `corner-shape || border-radius` の順序を #11623 の決定に合わせる（[#14607](https://github.com/w3c/csswg-drafts/pull/14607)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-borders-4|css-borders-4]]
- 2026-10-14 — 新しい仕様 `css-overscroll-2` の最初の草案（`overscrollcontainer`・`overscrollareas`）（[#14532](https://github.com/w3c/csswg-drafts/pull/14532)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-overscroll-2|css-overscroll-2]]
- 2026-10-14 — `::interest-invoker` 疑似要素の最初の草案を追加（[`9f78c40`](https://github.com/w3c/csswg-drafts/commit/9f78c40e1fa3afb1990224f1c7ab3946965a285b)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-pseudo-4|css-pseudo-4]]
- 2026-10-14 — 「parse a block's contents」を削除し「parse a list of declarations」に戻す（[`fbd84ec`](https://github.com/w3c/csswg-drafts/commit/fbd84ec61ae093787ced21cd48d3a7536e04b50a)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-syntax-3|css-syntax-3]]
- 2026-10-14 — 「serialize an identifier」を ident の新しいパース規則に合わせる（[`a8a0b41`](https://github.com/w3c/csswg-drafts/commit/a8a0b410feda59f8bb9ed2df246de385ee9161fb)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/cssom-1|cssom-1]]
- 2026-10-12 — `timeline-trigger-range` 一括指定プロパティを追加、`timeline-trigger` の範囲を省略可能に（[#14524](https://github.com/w3c/csswg-drafts/pull/14524)）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/animation-triggers-1|animation-triggers-1]]
- 2026-10-12 — EdgeSeeker 色域マッピングの疑似コードを追加・修正（[#14426](https://github.com/w3c/csswg-drafts/pull/14426)、[`778ad60`](https://github.com/w3c/csswg-drafts/commit/778ad60bae76b750fdc96551f0410d72fcb3f9b9) ほか）⏳ 未リリース · トピック: [[repos/w3c-csswg-drafts/topics/css-color-4|css-color-4]]

## トピック

- [[repos/w3c-csswg-drafts/topics/animation-triggers-1|animation-triggers-1]] — アニメーションのトリガー（`timeline-trigger`・`<event-function>` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-borders-4|css-borders-4]] — ボーダーと角の形（`border-radius`・`corner-shape`）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-color-4|css-color-4]] — 色空間（LCH・Oklch など）と色の変換・シリアライズを定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-content-3|css-content-3]] — 生成コンテンツ（`content`・`match-parent`）とカウンタースタイルの仕様
- [[repos/w3c-csswg-drafts/topics/css-forms-1|css-forms-1]] — フォームコントロールの見た目（appearance）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-grid-3|css-grid-3]] — CSS Grid Layout Level 3（`fit-tolerance` など）の仕様
- [[repos/w3c-csswg-drafts/topics/css-highlight-api-1|css-highlight-api-1]] — CSS Custom Highlight API（`::highlight()`）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-images-4|css-images-4]] — `image()` など画像関連の値・関数を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-mixins-1|css-mixins-1]] — CSS の mixin を定義する仕様（mixin 本体での `@layer` の扱いなど）
- [[repos/w3c-csswg-drafts/topics/css-overflow-4|css-overflow-4]] — あふれた内容の扱い（`line-clamp`・`block-ellipsis` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-overscroll-2|css-overscroll-2]] — オーバースクロール（`overscrollcontainer`・`overscrollareas`）を説明する新しい仕様
- [[repos/w3c-csswg-drafts/topics/css-pseudo-4|css-pseudo-4]] — 疑似要素（`::interest-invoker` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-scroll-snap-1|css-scroll-snap-1]] — スクロールスナップ（`scroll-snap-type` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/css-sizing-4|css-sizing-4]] — サイズ指定の拡張（`stretch()`・`fit-content()`）の仕様
- [[repos/w3c-csswg-drafts/topics/css-syntax-3|css-syntax-3]] — CSS のトークン化・パース（`style` 属性のパースなど）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/cssom-1|cssom-1]] — CSSOM（シリアライズ「serialize an identifier」など）の仕様
- [[repos/w3c-csswg-drafts/topics/cssom-view-1|cssom-view-1]] — CSSOM View（スクロールの Promise と `ScrollResult` など）の仕様
- [[repos/w3c-csswg-drafts/topics/filter-effects-1|filter-effects-1]] — CSS フィルターを定義する仕様
- [[repos/w3c-csswg-drafts/topics/scroll-animations-1|scroll-animations-1]] — スクロール駆動アニメーション（`ViewTimelineOptions` など）を定義する仕様
- [[repos/w3c-csswg-drafts/topics/web-animations-1|web-animations-1]] — Web Animations の基盤となる仕様

## 取り込み

- [[repos/w3c-csswg-drafts/log|取り込み履歴]]
- 最近の変更: [[repos/w3c-csswg-drafts/changes/2026-10-16|2026-10-16]]、[[repos/w3c-csswg-drafts/changes/2026-10-14|2026-10-14]]、[[repos/w3c-csswg-drafts/changes/2026-10-12|2026-10-12]]、[[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09]]、[[repos/w3c-csswg-drafts/changes/2026-10-05|2026-10-05]]
