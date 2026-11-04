---
title: HTMLフォーマッタ
updated: 2026-11-04
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

新しいクレート `oxc_formatter_htmlish` として、HTML-ish フォーマッタ（まず `Html` バリアント）が実装された（#28263）。Oxfmt は `parser:html` のファイル（`.html`）と、JS・Markdown などに埋め込まれた HTML（html-in-js など）を、Prettier ではなくこのクレートでネイティブに整形するようになり、JS を動かすオーバーヘッドが無くなった（破壊的変更）。Prettier のバグや一貫しない挙動も直しており、違いは `apps/oxfmt/DIVERGENCES.md` に記録される。開始タグを省略した `html`・`head`・`body` の終了タグの整形、`htm` の `<//>` や `</${For}>` のような動的なタグ名の閉じタグへの対応、`<script>` 本体の HTML の埋め込みとしての整形、`xml:space="preserve"` の SVG テキストの保持なども入った（いずれも未リリース）。`class` と `srcset` は `embeddedLanguageFormatting: off` のときに整形される。XHTML の方言にも対応した。ここまでの HTML フォーマッタの変更は oxfmt_v0.76.0（2026-11-03）で公開された。

## 主な API・オプション

- `oxc_formatter_htmlish` — HTML-ish フォーマッタのクレート（`Html` バリアント）
- Oxfmt から `parser:html` のファイルと埋め込み HTML の整形に使われる

## 変更履歴

- 2026-11-04 — XHTML に対応（[#28703](https://github.com/oxc-project/oxc/pull/28703)） 📦 oxlint_v1.91.0 · [[repos/oxc-project-oxc/changes/2026-11-04|変更]]
- 2026-11-02 — 動的なタグ名を閉じる html-in-js テンプレートに対応（[#28389](https://github.com/oxc-project/oxc/pull/28389)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-11-02|変更]]
- 2026-11-02 — 開始タグを省略した `html`・`head`・`body` の終了タグを整形（[#28388](https://github.com/oxc-project/oxc/pull/28388)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-11-02|変更]]
- 2026-11-02 — Oxfmt が `parser:html` のファイルを `oxc_formatter_htmlish` で整形（破壊的変更）（[#28273](https://github.com/oxc-project/oxc/pull/28273)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-11-02|変更]]
- 2026-11-02 — `oxc_formatter_htmlish` を追加し `Html` バリアントを実装（[#28272](https://github.com/oxc-project/oxc/pull/28272)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-11-02|変更]]

## 関連

- [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]
- [[repos/oxc-project-oxc/topics/Markdownフォーマッタ|Markdownフォーマッタ]]
- [[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02 の変更]]
- [[repos/oxc-project-oxc/releases/oxfmt_v0.76.0|oxfmt_v0.76.0]]
- [[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04 の変更]]
