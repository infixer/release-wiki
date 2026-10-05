---
title: XMLパーサー
updated: 2026-10-05
tags:
  - repo/whatwg-html
  - topic
---

## 概要

XML 文書（XHTML）を解析する XML パーサーがノードをどう作るかに関する仕様。2026-10-05 の取り込みで、HTML パーサーと同じように DOM のノード作成アルゴリズムを使うようになり、ノードの種類ごとに作成アルゴリズムが定められた。要素を作る create an element for a token は省略可能な prefix を受け取る。これにより、要素以外のノードの realm や、処理命令（processing instruction）の属性マップ（以前は `getAttribute()` が null を返していた）が定義された。

## 主なアルゴリズム

- create an element for a token — 省略可能な prefix を受け取る（以前は常に null）

## 変更履歴

- 2026-10-05 — XML パーサーで DOM のノード作成アルゴリズムを使うように（[#13037](https://github.com/whatwg/html/pull/13037)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-05|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-05|2026-10-05 の変更]]
