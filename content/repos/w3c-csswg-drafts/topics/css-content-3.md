---
title: css-content-3
updated: 2026-10-28
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

生成コンテンツ（`content` プロパティなど）を定義する仕様と、関係する `css-counter-styles-3`（カウンタースタイル）の変更をまとめるトピック。`match-parent` が定義し直され（#5478）、代替テキスト中のカウンターは at-risk になった（#10387）。無効な画像の扱いは issue として記載された（#2832・#218）。定義済みの記号カウンタースタイルの生成規則は `css-counter-styles-3` に移り、UA が描く記号の例外は `content` と両立する形に書き直された。
2026-10-28 の取り込みで、`css-counter-styles-3` の定義済みカウンタースタイル名から `-informal` の接尾辞（と `korean-hangul-formal` の `-formal`）が外れ、古い名前は別名として残った（#12312）。`nko-ordinal` も追加された（#8988）。

## 主な API・オプション

- `content` — 生成コンテンツのプロパティ（2026-10-09 に定義を整理）
- `match-parent` — 2026-10-09 の取り込みで定義し直し（#5478）
- 代替テキスト中のカウンター — at-risk（#10387）
- `nko-ordinal` — 2026-10-27 に追加されたカウンタースタイル（#8988）
- `-informal` 付きのカウンタースタイル名 — 接尾辞なしの名前の別名に（#12312）

## 変更履歴

- 2026-10-27 — カウンタースタイル `nko-ordinal` を追加（#8988）（[`674d876`](https://github.com/w3c/csswg-drafts/commit/674d876257873dddad2648315e32b2e5bcc789ac)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]
- 2026-10-27 — カウンタースタイル名の `-informal`（と `korean-hangul` の `-formal`）を削除し、古い名前を別名に（#12312）（[`10ae270`](https://github.com/w3c/csswg-drafts/commit/10ae270718401a8daf9dc02def5a8e065744d2ad)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-28|変更]]
- 2026-10-09 — `css-counter-styles-3` の UA が描く記号の例外を `content` と両立するように（[`d8fdab8`](https://github.com/w3c/csswg-drafts/commit/d8fdab81ac7ca1cdcaf431b434d3e2901a5ba81a)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — `match-parent` を定義し直す（#5478）（[`c8459c5`](https://github.com/w3c/csswg-drafts/commit/c8459c50d2c5ae258c8d238b6f3f648ddc2e41e5)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]
- 2026-10-09 — 代替テキスト中のカウンターを at-risk に（#10387）（[`0a43919`](https://github.com/w3c/csswg-drafts/commit/0a43919320f69bb6f7cc224120103f63a502df51)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-09|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/w3c-csswg-drafts/changes/2026-10-28|2026-10-28 の変更]]
