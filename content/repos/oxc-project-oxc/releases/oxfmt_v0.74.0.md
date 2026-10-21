---
title: oxc-project/oxc oxfmt_v0.74.0
date: 2026-10-21
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.74.0) · 公開: 2026-10-19

## 要点

- コメントの位置: 穴のある配列・for の先頭の空きでのコメントを保つ（[#27730](https://github.com/oxc-project/oxc/pull/27730)、[#27729](https://github.com/oxc-project/oxc/pull/27729)、[#27737](https://github.com/oxc-project/oxc/pull/27737)）、コメントだけの JSX 式コンテナ・Vue のバインディングの扱い（[#27666](https://github.com/oxc-project/oxc/pull/27666)、[#27820](https://github.com/oxc-project/oxc/pull/27820)）
- かっこ: `TSInstantiationExpression`・同じ演算子の二項式とアローの連鎖の型キャストのかっこを保つ（[#27811](https://github.com/oxc-project/oxc/pull/27811)、[#27812](https://github.com/oxc-project/oxc/pull/27812)）
- `sortImports`: コメントを import 元として使わない、最後の import の後のコメントを保つ（[#27819](https://github.com/oxc-project/oxc/pull/27819)、[#27822](https://github.com/oxc-project/oxc/pull/27822)）
- JSDoc: 説明文をそのまま書いてコメントを閉じないようにする、埋め込みスニペットを LF で出力、引用符の後のコードスパン（[#27823](https://github.com/oxc-project/oxc/pull/27823)、[#27821](https://github.com/oxc-project/oxc/pull/27821)、[#27955](https://github.com/oxc-project/oxc/pull/27955)）
- JSON・YAML・TOML・Markdown: 不正な JSON を落とさず拒否（[#27785](https://github.com/oxc-project/oxc/pull/27785)、[#27728](https://github.com/oxc-project/oxc/pull/27728)、[#27727](https://github.com/oxc-project/oxc/pull/27727)）、YAML の行頭の文書マーカー・BOM（[#27818](https://github.com/oxc-project/oxc/pull/27818)、[#27947](https://github.com/oxc-project/oxc/pull/27947)）、TOML の BOM（[#27775](https://github.com/oxc-project/oxc/pull/27775)）、Markdown のリンク先と脚注参照（[#27948](https://github.com/oxc-project/oxc/pull/27948)）、front matter をそのまま保つ（[#27946](https://github.com/oxc-project/oxc/pull/27946)）
- BOM・CRLF のソースでの解析エラー位置、BOM 付きの設定 JSON、`.editorconfig` の検証、`--list-different` の末尾の改行（[#27776](https://github.com/oxc-project/oxc/pull/27776)、[#27777](https://github.com/oxc-project/oxc/pull/27777)、[#27774](https://github.com/oxc-project/oxc/pull/27774)、[#27778](https://github.com/oxc-project/oxc/pull/27778)、[#27773](https://github.com/oxc-project/oxc/pull/27773)）
- 空文だけの静的ブロックでの panic を修正（[#27945](https://github.com/oxc-project/oxc/pull/27945)）、css-in-js のくっついたプレースホルダーを保つ（[#27814](https://github.com/oxc-project/oxc/pull/27814)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]、[[repos/oxc-project-oxc/topics/設定ファイル|設定ファイル]]
