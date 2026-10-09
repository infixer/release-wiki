---
title: css-content-3
updated: 2026-10-09
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

生成コンテンツ（`content` プロパティなど）を定義する仕様と、関係する `css-counter-styles-3`（カウンタースタイル）の変更をまとめるトピック。`match-parent` が定義し直され（#5478）、代替テキスト中のカウンターは at-risk になった（#10387）。無効な画像の扱いは issue として記載された（#2832・#218）。定義済みの記号カウンタースタイルの生成規則は `css-counter-styles-3` に移り、UA が描く記号の例外は `content` と両立する形に書き直された。

## 主な API・オプション

- `content` — 生成コンテンツのプロパティ（2026-10-09 に定義を整理）
- `match-parent` — 2026-10-09 の取り込みで定義し直し（#5478）
- 代替テキスト中のカウンター — at-risk（#10387）

## 変更履歴

- 2026-10-09 — `css-counter-styles-3` の UA が描く記号の例外を `content` と両立するように（[`d8fdab8`](https://github.com/w3c/csswg-drafts/commit/d8fdab81ac7ca1cdcaf431b434d3e2901a5ba81a)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — `match-parent` を定義し直す（#5478）（[`c8459c5`](https://github.com/w3c/csswg-drafts/commit/c8459c50d2c5ae258c8d238b6f3f648ddc2e41e5)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — 代替テキスト中のカウンターを at-risk に（#10387）（[`0a43919`](https://github.com/w3c/csswg-drafts/commit/0a43919320f69bb6f7cc224120103f63a502df51)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
