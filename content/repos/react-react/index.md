---
title: react/react
updated: 2026-11-13
tags:
  - repo/react-react
---

[GitHub](https://github.com/react/react) · ブランチ: `main`

## 最新リリース

- 安定版: [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1|まとめ]]
- 同日に公開された旧リリースライン: [[repos/react-react/releases/v19.2.9|v19.2.9]]、[[repos/react-react/releases/v19.1.10|v19.1.10]]、[[repos/react-react/releases/v19.0.9|v19.0.9]]（いずれも RSC の転送プロトコルの改善）
- プレリリース: なし

## 直近の注目変更

- Flight: ストリームの終了後に欠けた owner・スタックのデータを無視し、`Connection closed.` で落ちないように（[#38233](https://github.com/react/react/pull/38233)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- DevTools: `react-devtools-core` の `ws` を 7.5.13 に更新（GHSA-96hv-2xvq-fx4p）（[#38202](https://github.com/react/react/pull/38202)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- DevTools: スタンドアロン版で「View source」からエディターが開かない問題を修正（[#38228](https://github.com/react/react/pull/38228)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- Flight: 同期的な abort の後にストリームが閉じない問題を修正（vercel/next.js#101356 の原因）（[#38186](https://github.com/react/react/pull/38186)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- DevTools: `react-devtools-fusebox` に Suspense タブの入口 `initializeSuspense` を追加（React Native DevTools 向け）（[#38167](https://github.com/react/react/pull/38167)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- DevTools: Hermes でスタックフレームのファイル名が空になり「View source」が開けない問題を修正（[#38168](https://github.com/react/react/pull/38168)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- React Native: 使われていない旧イベントディスパッチのパイプラインを削除（[#38172](https://github.com/react/react/pull/38172)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Native-レンダラー|React Native レンダラー]]
- Reconciler: 初期値付きの `useDeferredValue` とサスペンドしたハイドレーション・リトライによる無限ループを修正（Next.js App Router で発生）（[#38132](https://github.com/react/react/pull/38132)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]、[[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Flight: ストリームで描画される Server Components の中で `useId` などの hooks が throw する問題を修正（[#38128](https://github.com/react/react/pull/38128)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- Reconciler: 削除された hidden の Activity でサスペンドしていたデータが解決するとクラッシュする問題を修正（[#37965](https://github.com/react/react/pull/37965)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]

## トピック

- [[repos/react-react/topics/DevTools|DevTools]] — React DevTools のブラウザ拡張機能・バックエンド・facade・スタンドアロン版・React Native DevTools 向けの fusebox
- [[repos/react-react/topics/React-Compiler|React Compiler]] — 自動メモ化コンパイラ（Babel / Rust 実装）
- [[repos/react-react/topics/React-DOM|React DOM]] — `react-dom` の合成イベントなどブラウザ向けの処理
- [[repos/react-react/topics/React-Native-レンダラー|React Native レンダラー]] — Fabric レンダラーのイベント処理（旧イベントパイプラインは削除）
- [[repos/react-react/topics/Reconciler|Reconciler]] — レンダー・コミット処理、レーン、エラー回復、Fragment Refs、フィーチャーフラグの整理
- [[repos/react-react/topics/Server-Components|Server Components]] — Flight プロトコル、Server Reference、エラーの debug info
- [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — Fizz のプリレンダー・再開と、クライアントの部分ハイドレーション（Activity）

## 取り込み

- [[repos/react-react/log|取り込み履歴]]
- 最近の変更: [[repos/react-react/changes/2026-11-13|2026-11-13]]、[[repos/react-react/changes/2026-11-11|2026-11-11]]、[[repos/react-react/changes/2026-11-09|2026-11-09]]、[[repos/react-react/changes/2026-11-06|2026-11-06]]、[[repos/react-react/changes/2026-11-02|2026-11-02]]
