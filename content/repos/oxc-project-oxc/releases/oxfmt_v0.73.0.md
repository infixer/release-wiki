---
title: oxc-project/oxc oxfmt_v0.73.0
date: 2026-10-14
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.73.0) · 公開: 2026-10-13

## 要点

- **破壊的変更**: `--migrate prettier` を改善（[#27444](https://github.com/oxc-project/oxc/pull/27444)）。`oxc-toml` をラップする `oxc_formatter_toml` クレートを追加（[#27365](https://github.com/oxc-project/oxc/pull/27365)）
- `associations` 設定でファイルパスごとに言語を指定可能に（[#27437](https://github.com/oxc-project/oxc/pull/27437)）。`--migrate prettier` が `overrides[].parser` を `associations[].language` に移行（[#27475](https://github.com/oxc-project/oxc/pull/27475)）
- `prettier-plugin-astro@1.x` 経由で Astro に対応し、`--migrate prettier`・LSP も Astro に対応（[#27386](https://github.com/oxc-project/oxc/pull/27386)、[#27387](https://github.com/oxc-project/oxc/pull/27387)、[#27388](https://github.com/oxc-project/oxc/pull/27388)）
- LSP: ルートの設定のエラーをクライアントに表示し、設定の解決エラーでエラーを返す（[#26014](https://github.com/oxc-project/oxc/pull/26014)、[#26003](https://github.com/oxc-project/oxc/pull/26003)）
- フォーマッタの修正: css-in-js のプレースホルダー（プロパティ名・条件・メディアタイプ）と補間を含むコメントでのクラッシュ、`export default class|function` のかっこ、`TSInstantiationExpression` のかっこ（[#27640](https://github.com/oxc-project/oxc/pull/27640)、[#27639](https://github.com/oxc-project/oxc/pull/27639)、[#27638](https://github.com/oxc-project/oxc/pull/27638)、[#27628](https://github.com/oxc-project/oxc/pull/27628)、[#27626](https://github.com/oxc-project/oxc/pull/27626)）
- そのほかの修正: JSDoc の `@description` の段落の保持、シンボリックリンクの設定ファイルをたどる探索、svelte-in-mdx-in-md で svelte プラグインを読み込む、stderr をブロッキングに、空の frontmatter をそのまま残す（[#27439](https://github.com/oxc-project/oxc/pull/27439)、[#27389](https://github.com/oxc-project/oxc/pull/27389)、[#27369](https://github.com/oxc-project/oxc/pull/27369)、[#27363](https://github.com/oxc-project/oxc/pull/27363)、[#27359](https://github.com/oxc-project/oxc/pull/27359)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-12|2026-10-12 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/LSP|LSP]]
