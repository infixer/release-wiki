---
title: oxc-project/oxc oxfmt_v0.76.0
date: 2026-11-04
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.76.0) · 公開: 2026-11-03

## 要点

- **破壊的変更**: `parser:html` のファイル（`.html`）と埋め込み HTML を Prettier ではなく `oxc_formatter_htmlish` で整形（[#28273](https://github.com/oxc-project/oxc/pull/28273)）
- HTML フォーマッタ: `Html` バリアントの実装（[#28272](https://github.com/oxc-project/oxc/pull/28272)）、開始タグを省略した `html`・`head`・`body` の終了タグ（[#28388](https://github.com/oxc-project/oxc/pull/28388)）、動的なタグ名を閉じる html-in-js テンプレート（[#28389](https://github.com/oxc-project/oxc/pull/28389)）、XHTML（[#28703](https://github.com/oxc-project/oxc/pull/28703)）に対応
- HTML 関連の修正: `<script>` 本体の HTML を埋め込みとして整形（[#28379](https://github.com/oxc-project/oxc/pull/28379)）、イベントハンドラーで追加したキーをシングルクォートに（[#28380](https://github.com/oxc-project/oxc/pull/28380)）、コメントの後の html-in-js のプレースホルダーのかっこを保つ（[#28381](https://github.com/oxc-project/oxc/pull/28381)）、`xml:space="preserve"` の SVG テキストを保つ（[#28382](https://github.com/oxc-project/oxc/pull/28382)）
- フォーマッタの修正: 先頭が `function` / `class` のアローの条件式の本体のかっこ（[#28710](https://github.com/oxc-project/oxc/pull/28710)）、型アサーションの中のジェネリックな関数型のかっこ（[#28173](https://github.com/oxc-project/oxc/pull/28173)）、`this.b`・`super.b`・`x.#b` を `foo.b` と同じに（[#28200](https://github.com/oxc-project/oxc/pull/28200)、[#28193](https://github.com/oxc-project/oxc/pull/28193)）、`(a + b)[c]` の改行（[#28199](https://github.com/oxc-project/oxc/pull/28199)）、プライベートフィールドのかっこ（[#28188](https://github.com/oxc-project/oxc/pull/28188)）
- ファイル読み込みのデバッグ用スパンを追加（[#28204](https://github.com/oxc-project/oxc/pull/28204)）
- 性能: HTML・CSS・YAML・GraphQL・Markdown フォーマッタの高速化（[#28697](https://github.com/oxc-project/oxc/pull/28697)〜[#28713](https://github.com/oxc-project/oxc/pull/28713)）、数値の文字列化を `zmij_ecma` に（[#28282](https://github.com/oxc-project/oxc/pull/28282)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]、[[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
