---
title: TokenField
updated: 2026-10-02
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

React Aria の `useTokenField` と React Aria Components の `TokenField` まわり。Enter でトークンを作ったときや、トークンの後ろのテキストを Backspace で消したときに、コンテナの位置を保ったままキャレットが見えるようになった。選択範囲は IME 入力のためにトークンのラッパーの外に置かれる。

## 主な API・オプション

- `useTokenField`（`react-aria`）
- `TokenField`（`react-aria-components`）— ストーリーに `ScrollableTagField` がある

## 変更履歴

- 2026-10-01 — トークン編集後にスクロールが飛ぶ問題を修正（[#10676](https://github.com/adobe/react-spectrum/pull/10676)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-02|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-10-02|2026-10-02 の変更]]
