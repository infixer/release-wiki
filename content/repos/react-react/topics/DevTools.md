---
title: DevTools
updated: 2026-11-11
tags:
  - repo/react-react
  - topic
---

## 概要

React DevTools のブラウザ拡張機能（`packages/react-devtools-extensions`）まわり。拡張機能は、調べているページに注入したバックエンドと、DevTools のパネル（Components・Profiler）をつないで動く。Chrome 153 以降は同一ドキュメント内のナビゲーションでも `chrome.devtools.network.onNavigated` が発火するため、拡張機能はドキュメントが置き換わったときだけパネルを再マウントし、クライアント側のルート遷移では選択や Profiler の記録を保つようになった。
DevTools のバックエンド（`react-devtools-shared`）と facade（`react-devtools-facade`）の修正も入っている。エラー・警告のメッセージキーを作る `formatConsoleArgumentsToSingleString` は、引数の無い・エスケープされた書式指定子をそのまま残す。facade の `getComponentByUid()` は BigInt を `n` 付きの文字列に正規化して返し（`JSON.stringify()` で throw しない）、`getComponentByHostInstance` は Resource でない `<title>`・`<meta>`・`<link>` も React の管理下として見つける（いずれも未リリース）。
React Native DevTools 向けには、`react-devtools-fusebox` に Suspense タブを個別のパネルとして描画する `initializeSuspense` が加わり、Hermes でスタックフレームのファイル名が空になって「View source」が開けない問題も修正された（`getScriptNameOrSourceURL()` が無いときは `getFileName()` を使う。いずれも未リリース）。

## 主な API・オプション

- `initializeSuspense` — `react-devtools-fusebox` で Suspense タブを描画する入口（`initializeComponents`・`initializeProfiler` と同じ形）

## 変更履歴

- 2026-11-11 — `react-devtools-fusebox` に Suspense タブの入口 `initializeSuspense` を追加（[#38167](https://github.com/react/react/pull/38167)）⏳ 未リリース · [[repos/react-react/changes/2026-11-11|変更]]
- 2026-11-11 — Hermes でスタックフレームのファイル名が空になる問題を修正（[#38168](https://github.com/react/react/pull/38168)）⏳ 未リリース · [[repos/react-react/changes/2026-11-11|変更]]
- 2026-10-31 — facade で Resource でない hoistable（`<title>`・`<meta>` など）のインスタンスを見つけられるように（[#38067](https://github.com/react/react/pull/38067)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-31 — facade のインスペクション結果で BigInt を `n` 付きの文字列に正規化（[#38068](https://github.com/react/react/pull/38068)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-31 — `formatConsoleArgumentsToSingleString` で、対応する引数の無い・エスケープされた書式指定子をそのまま残す（[#38069](https://github.com/react/react/pull/38069)）⏳ 未リリース · [[repos/react-react/changes/2026-11-02|変更]]
- 2026-10-09 — 同一ドキュメント内のナビゲーションで拡張機能を再マウントしないように（[#37780](https://github.com/react/react/pull/37780)）⏳ 未リリース · [[repos/react-react/changes/2026-10-09|変更]]

## 関連

- [[repos/react-react/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/react-react/changes/2026-11-02|2026-11-02 の変更]]
- [[repos/react-react/changes/2026-11-11|2026-11-11 の変更]]
