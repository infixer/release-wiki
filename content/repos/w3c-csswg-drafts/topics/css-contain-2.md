---
title: css-contain-2
updated: 2026-10-19
tags:
  - repo/w3c-csswg-drafts
  - topic
---

## 概要

CSS Containment Level 2。`contain` や `content-visibility` による封じ込めを定義する仕様。2026-10-19 の取り込みで、スキップされたサブツリーでのメディア再生の挙動が、2021 年の CSSWG の決定（#6468）に沿って定められた。`content-visibility: hidden` でスキップされたメディア要素は音声を抑えたまま再生を続け、イベントはスキップの解除まで遅らせる。`content-visibility: auto` でスキップされた内容には適用されない。

## 主な API・オプション

- `content-visibility: hidden` — スキップされたメディア要素は、`muted` / `volume` を変えずに音声を抑えて再生を続ける。キューに入ったイベントはスキップが解除されるまで遅らせ、状態の問い合わせには実際の再生状態を返す。入れ子の `iframe` にも適用され、スキップされた内容の外にあるピクチャーインピクチャーの表示は対象外
- `content-visibility: auto` — 上の挙動の対象外（画面外の音声は再生され続ける）

## 変更履歴

- 2026-10-18 — スキップされたサブツリーでのメディア再生の挙動を定義（#6468）（[#14611](https://github.com/w3c/csswg-drafts/pull/14611)）⏳ 未リリース · [[repos/w3c-csswg-drafts/changes/2026-10-19|変更]]

## 関連

- [[repos/w3c-csswg-drafts/changes/2026-10-19|2026-10-19 の変更]]
