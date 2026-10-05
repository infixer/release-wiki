---
title: Navigation-API
updated: 2026-10-05
tags:
  - repo/whatwg-html
  - topic
---

## 概要

Navigation API（`navigation` オブジェクトによるナビゲーションの操作・監視）に関する仕様。scroll behavior の処理（`#process-scroll-behavior`）では、「reload」のナビゲーションのときにスクロール位置を復元しない。また、Navigation API 以外から始まったナビゲーションでは ongoing API method tracker が存在しないため、使う前に null チェックを行う。

## 主なアルゴリズム

- process scroll behavior — 「reload」ではスクロール位置を復元しない
- ongoing API method tracker — Navigation API 以外のナビゲーションでは null になりうるので、使う前に確認する

## 変更履歴

- 2026-10-05 — ongoing API method tracker の null チェックを追加（#13014 を修正）（[#13024](https://github.com/whatwg/html/pull/13024)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-05|変更]]
- 2026-10-05 — `#process-scroll-behavior` で「reload」のときはスクロール位置を復元しないように（[#12993](https://github.com/whatwg/html/pull/12993)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-05|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-05|2026-10-05 の変更]]
