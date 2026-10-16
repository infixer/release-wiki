---
title: TokenField
updated: 2026-10-16
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

React Aria の `useTokenField` と React Aria Components の `TokenField` まわり。Enter でトークンを作ったときや、トークンの後ろのテキストを Backspace で消したときに、コンテナの位置を保ったままキャレットが見えるようになった。選択範囲は IME 入力のためにトークンのラッパーの外に置かれる。ユーザーのキャレット移動は毎回 `onChange` で通知され、`value.selectedRange` が DOM の選択と一致する（以前は 2 回に 1 回だった。未リリース）。WebKit で Shift+ArrowLeft でトークンをまたぐときの挙動は別の不具合として残っている。

## 主な API・オプション

- `useTokenField`（`react-aria`）
- `TokenField`（`react-aria-components`）— ストーリーに `ScrollableTagField` がある

## 変更履歴

- 2026-10-15 — ユーザーのキャレット移動を毎回 `onChange` で通知（[#10766](https://github.com/adobe/react-spectrum/pull/10766)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-16|変更]]
- 2026-10-01 — トークン編集後にスクロールが飛ぶ問題を修正（[#10676](https://github.com/adobe/react-spectrum/pull/10676)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-02|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-10-16|2026-10-16 の変更]]
