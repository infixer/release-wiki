---
title: oxc-project/oxc oxfmt_v0.78.0
date: 2026-11-11
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.78.0) · 公開: 2026-11-09

## 要点

- Less: `%` セレクターを出力（[#29088](https://github.com/oxc-project/oxc/pull/29088)）、`~` のエスケープを一貫して出力（[#29089](https://github.com/oxc-project/oxc/pull/29089)）
- Astro の中の TypeScript を TSX として整形（[#29080](https://github.com/oxc-project/oxc/pull/29080)）
- JSDoc: すべての行終端子を改行として扱う（[#28902](https://github.com/oxc-project/oxc/pull/28902)）、複数行の JSDoc の型（[#28909](https://github.com/oxc-project/oxc/pull/28909)）・複数行のデフォルト値の `*` 接頭辞の除去（[#28910](https://github.com/oxc-project/oxc/pull/28910)）
- TOML: 空白だけの文書を空に整形（[#28899](https://github.com/oxc-project/oxc/pull/28899)）。GraphQL: 空の文書を許可（[#28898](https://github.com/oxc-project/oxc/pull/28898)）
- Tailwind: `preserveWhitespace` のテンプレートで CR を正規化（[#28896](https://github.com/oxc-project/oxc/pull/28896)）
- 性能: 名前 1 つの埋め込み式を解析せずに整形（[#29077](https://github.com/oxc-project/oxc/pull/29077)）、`</script` のエスケープを可能なら省く（[#29078](https://github.com/oxc-project/oxc/pull/29078)）、Tailwind のオプションに `Arc`（[#29079](https://github.com/oxc-project/oxc/pull/29079)）
- ドキュメント: `DIVERGENCES.md` の補間要素にブロック要素（[#28901](https://github.com/oxc-project/oxc/pull/28901)）、Tailwind の並べ替えがエスケープした空白を分ける件（[#28900](https://github.com/oxc-project/oxc/pull/28900)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-11|2026-11-11 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]
- 前のリリース: [[repos/oxc-project-oxc/releases/oxfmt_v0.77.0|oxfmt_v0.77.0]]
