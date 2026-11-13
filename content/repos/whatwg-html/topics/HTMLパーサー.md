---
title: HTMLパーサー
updated: 2026-11-13
tags:
  - repo/whatwg-html
  - topic
---

## 概要

HTML パーサー（tree construction）の仕様。2026-11-13 の取り込み（#13228）で、要素が stack of open elements から外れるときに走る「finish parsing the children」が定義された。要素が pop されたとき、current node でないまま取り除かれたとき（`form` の終了タグ、head element pointer、adoption agency algorithm）、adoption agency algorithm でエントリーが置き換えられたときに走り、要素のローカル名ごとの「HTML element children parsed steps」を実行する。これは挿入・接続後・削除・移動の手順と並ぶ仕組みで、`style`・`audio`/`video`・`option`・`textarea` の処理がここに移された（`object` 要素の条件は従来の書き方のまま）。current node でないまま取り除かれたときにも走らせるのは WebKit・Chromium の挙動で、Gecko は pop されたときだけ走らせる。

## 主なアルゴリズム

- finish parsing the children — 要素が stack of open elements から外れるときに走る
- HTML element children parsed steps — ローカル名ごとの処理（`style`・`audio`/`video`・`option`・`textarea`）

## 変更履歴

- 2026-11-12 — 「finish parsing the children」と「HTML element children parsed steps」を定義し、要素が pop されたときの散らばった記述を置き換え（issue #11781 を閉じる）（[#13228](https://github.com/whatwg/html/pull/13228)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-11-13|変更]]

## 関連

- [[repos/whatwg-html/topics/style要素|style要素]]
- [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]]
- [[repos/whatwg-html/changes/2026-11-13|2026-11-13 の変更]]
