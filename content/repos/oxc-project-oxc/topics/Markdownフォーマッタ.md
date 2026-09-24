---
title: Markdownフォーマッタ
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

新しいクレート `oxc_formatter_markdown`（`publish = false`）として、Markdown 用フォーマッタの開発が進んでいる。基本構文・GFM などの拡張構文・ディレクティブコンテナ（`::: foo`）に対応し、`oxc_markdown_parser` を公開してこれを利用する形になっている。frontmatter はそのまま保持される。実運用のリポジトリ（ecosystem-ci）に対して実行し、Prettier との出力差異（コードスパンのフェンス判定・先頭 `---` 段落・オートリンクと CJK 文字の間隔・ネストした要素内の改行形状・参照リンクの折り返しなど）を随時発見・修正している段階。埋め込みコードフェンスと Oxfmt 本体との統合は後続 PR で対応予定。

## 主な API・オプション

- 特になし（`oxc_formatter_markdown` クレートとして提供。`oxfmt` からの利用・CLI オプションは今後の対応）

## 変更履歴

- 2026-09-24 — 実運用の Markdown ファイルでの出力差異（ミスマッチ）8 点を修正（コードスパンのフェンス判定・先頭 `---` 段落のエスケープ・オートリンクと CJK の間隔など）（[#26785](https://github.com/oxc-project/oxc/pull/26785)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — Markdown ファイル先頭の frontmatter をそのまま保持するように（[#26779](https://github.com/oxc-project/oxc/pull/26779)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]
- 2026-09-24 — 新しい Markdown フォーマッタ `oxc_formatter_markdown` を実装（[#26434](https://github.com/oxc-project/oxc/pull/26434)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/oxlint_v1.85.0|oxlint_v1.85.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
