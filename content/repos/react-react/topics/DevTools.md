---
title: DevTools
updated: 2026-10-09
tags:
  - repo/react-react
  - topic
---

## 概要

React DevTools のブラウザ拡張機能（`packages/react-devtools-extensions`）まわり。拡張機能は、調べているページに注入したバックエンドと、DevTools のパネル（Components・Profiler）をつないで動く。Chrome 153 以降は同一ドキュメント内のナビゲーションでも `chrome.devtools.network.onNavigated` が発火するため、拡張機能はドキュメントが置き換わったときだけパネルを再マウントし、クライアント側のルート遷移では選択や Profiler の記録を保つようになった。

## 変更履歴

- 2026-10-09 — 同一ドキュメント内のナビゲーションで拡張機能を再マウントしないように（[#37780](https://github.com/react/react/pull/37780)）⏳ 未リリース · [[repos/react-react/changes/2026-10-09|変更]]

## 関連

- [[repos/react-react/changes/2026-10-09|2026-10-09 の変更]]
