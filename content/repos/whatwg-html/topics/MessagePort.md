---
title: MessagePort
updated: 2026-10-05
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`MessagePort`（チャネルメッセージングのポート）に関する仕様。2026-10-05 の取り込みで `close` イベントが削除され、それを追加したコミット（cc2634f）以前の GC の扱いに戻った。ポートは簡単には GC されず、相手側の所有者の文書が破棄されても明示的には切り離されず（disentangle されず）、相手側が生きているかはポーリングで確認する。PR では、どのブラウザも `close` イベントを出荷していないこと、GC の扱いがブラウザごとに異なることが挙げられている。

## 変更履歴

- 2026-10-05 — `close` イベントを削除し、以前の GC の扱いに戻した（#10201・#12797 を close）（[#13016](https://github.com/whatwg/html/pull/13016)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-05|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-05|2026-10-05 の変更]]
