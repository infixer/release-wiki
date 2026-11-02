---
title: DevTools
updated: 2026-11-02
tags:
  - repo/react-react
  - topic
---

## 概要

React DevTools のブラウザ拡張機能（`packages/react-devtools-extensions`）まわり。拡張機能は、調べているページに注入したバックエンドと、DevTools のパネル（Components・Profiler）をつないで動く。Chrome 153 以降は同一ドキュメント内のナビゲーションでも `chrome.devtools.network.onNavigated` が発火するため、拡張機能はドキュメントが置き換わったときだけパネルを再マウントし、クライアント側のルート遷移では選択や Profiler の記録を保つようになった。
DevTools のバックエンド（`react-devtools-shared`）と facade（`react-devtools-facade`）の修正も入っている。エラー・警告のメッセージキーを作る `formatConsoleArgumentsToSingleString` は、引数の無い・エスケープされた書式指定子をそのまま残す。facade の `getComponentByUid()` は BigInt を `n` 付きの文字列に正規化して返し（`JSON.stringify()` で throw しない）、`getComponentByHostInstance` は Resource でない `<title>`・`<meta>`・`<link>` も React の管理下として見つける（いずれも未リリース）。

## 変更履歴

- 2026-10-31 — facade で Resource でない hoistable（`<title>`・`<meta>` など）のインスタンスを見つけられるように（[#38067](https://github.com/react/react/pull/38067)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-31 — facade のインスペクション結果で BigInt を `n` 付きの文字列に正規化（[#38068](https://github.com/react/react/pull/38068)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-31 — `formatConsoleArgumentsToSingleString` で、対応する引数の無い・エスケープされた書式指定子をそのまま残す（[#38069](https://github.com/react/react/pull/38069)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-09 — 同一ドキュメント内のナビゲーションで拡張機能を再マウントしないように（[#37780](https://github.com/react/react/pull/37780)）⏳ 未リリース · [[repos/react-react/changes/2026-10-09|変更]]

## 関連

- [[repos/react-react/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/react-react/changes/2026-11-02|2026-11-02 の変更]]
