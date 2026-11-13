---
title: Windowオブジェクト
updated: 2026-11-13
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`Window` オブジェクトの API（`window.close()` など）に関する仕様。`window.close()` では、incumbent の文書の sandboxing flag を確認する。ナビゲーションの書き直し（0a97a81da）でこの点が後退していたが、2026-11-13 の取り込み（#12960）で意図どおりに戻され、Chromium・WebKit・Firefox の実装と一致した。

## 主な API・オプション

- `window.close()` — incumbent の文書の sandboxing flag を確認する

## 変更履歴

- 2026-11-11 — `window.close()` で incumbent の文書の sandboxing flag を確認するように（[#12960](https://github.com/whatwg/html/pull/12960)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-11-13|変更]]

## 関連

- [[repos/whatwg-html/topics/フレームとナビゲーブル|フレームとナビゲーブル]]
- [[repos/whatwg-html/changes/2026-11-13|2026-11-13 の変更]]
