---
title: oxc-project/oxc oxfmt_v0.75.0
date: 2026-10-28
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.75.0) · 公開: 2026-10-27

## 要点

- かっこ: インスタンス化式の結合の弱いオペランド・結合の強い親を通した末尾のインスタンス化式（[#28025](https://github.com/oxc-project/oxc/pull/28025)、[#28168](https://github.com/oxc-project/oxc/pull/28168)）、プライベートの `in` 式（[#28096](https://github.com/oxc-project/oxc/pull/28096)）のかっこを保つ
- コメント: `[` の後にコメントがある配列の fill レイアウト・詰めた配列のコメント判定を位置ベースに（[#28170](https://github.com/oxc-project/oxc/pull/28170)、[#28169](https://github.com/oxc-project/oxc/pull/28169)）、JSX のスプレッドの子の `}` の前のコメント（[#28103](https://github.com/oxc-project/oxc/pull/28103)）、閉じの HTML コメントを行頭に保つ（[#28064](https://github.com/oxc-project/oxc/pull/28064)）
- `in` / `instanceof` という名前のクラスメンバーの前の `;` を保つ（[#28166](https://github.com/oxc-project/oxc/pull/28166)）
- 幅の計算: 幅のヒューリスティック・短いキーの判定を表示幅で測る（[#28098](https://github.com/oxc-project/oxc/pull/28098)、[#28026](https://github.com/oxc-project/oxc/pull/28026)）、行幅ちょうどのアローのシグネチャを保つ（[#27989](https://github.com/oxc-project/oxc/pull/27989)）、`fits` で平坦な `line` の空白を後ろにテキストがあるときだけ数える（[#27987](https://github.com/oxc-project/oxc/pull/27987)）
- Markdown: ディレクティブの中でも範囲 ignore を有効に（[#28164](https://github.com/oxc-project/oxc/pull/28164)）
- 性能: `FormatElement` を 16 バイトに縮小（[#28012](https://github.com/oxc-project/oxc/pull/28012)）、`AstNode` をスタックに置く（[#27963](https://github.com/oxc-project/oxc/pull/27963)）、短い文字列のコピー（[#27953](https://github.com/oxc-project/oxc/pull/27953)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-26|2026-10-26 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-23|2026-10-23 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
