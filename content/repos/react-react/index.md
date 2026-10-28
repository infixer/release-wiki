---
title: react/react
updated: 2026-10-28
tags:
  - repo/react-react
---

[GitHub](https://github.com/react/react) · ブランチ: `main`

## 最新リリース

- 安定版: [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1|まとめ]]
- 同日に公開された旧リリースライン: [[repos/react-react/releases/v19.2.9|v19.2.9]]、[[repos/react-react/releases/v19.1.10|v19.1.10]]、[[repos/react-react/releases/v19.0.9|v19.0.9]]（いずれも RSC の転送プロトコルの改善）
- プレリリース: なし

## 直近の注目変更

- React Native: イベントの対象が null でも `dispatchNativeEvent` を呼ぶ（アンマウント後にタップが失われる問題）（[#38007](https://github.com/react/react/pull/38007)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Native-レンダラー|React Native レンダラー]]
- DOM: `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` で `SyntheticTransitionEvent` を使う（[#37985](https://github.com/react/react/pull/37985)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-DOM|React DOM]]
- コンパイラ: 定数伝播とコード生成で `-0` を保つ（[#37995](https://github.com/react/react/pull/37995)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- コンパイラ: `PerformanceObserver` / `ReportingObserver` のコールバックでの ref アクセスを許可（[#37996](https://github.com/react/react/pull/37996)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- コンパイラ: react-native の `PanResponder.create` に型を付け、`react-hooks/refs` の誤検知を修正（[#37970](https://github.com/react/react/pull/37970)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- コンパイラ: 既に freeze された値でも `Freeze` 効果を ref の検証に残す（`PanResponder.create` の誤検知を修正）（[#37975](https://github.com/react/react/pull/37975)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- コンパイラ: `ResizeObserver` / `MutationObserver` のコールバックでの ref アクセスを許可（[#37895](https://github.com/react/react/pull/37895)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- Rust 版コンパイラ: 非 ASCII 文字を含む行の診断の下線位置を修正（[#37898](https://github.com/react/react/pull/37898)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- 大きなツリーでも `useId` の値が一意になるように（[#37916](https://github.com/react/react/pull/37916)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- バックプレッシャー下でプリレンダーの出力が途中で切れる問題を修正（[#37901](https://github.com/react/react/pull/37901)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]

## トピック

- [[repos/react-react/topics/DevTools|DevTools]] — React DevTools のブラウザ拡張機能
- [[repos/react-react/topics/React-Compiler|React Compiler]] — 自動メモ化コンパイラ（Babel / Rust 実装）
- [[repos/react-react/topics/React-DOM|React DOM]] — `react-dom` の合成イベントなどブラウザ向けの処理
- [[repos/react-react/topics/React-Native-レンダラー|React Native レンダラー]] — Fabric レンダラーのイベント処理
- [[repos/react-react/topics/Reconciler|Reconciler]] — レンダー・コミット処理、レーン、エラー回復、Fragment Refs、フィーチャーフラグの整理
- [[repos/react-react/topics/Server-Components|Server Components]] — Flight プロトコル、Server Reference、エラーの debug info
- [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — Fizz のプリレンダー・再開と、クライアントの部分ハイドレーション（Activity）

## 取り込み

- [[repos/react-react/log|取り込み履歴]]
- 最近の変更: [[repos/react-react/changes/2026-10-28|2026-10-28]]、[[repos/react-react/changes/2026-10-26|2026-10-26]]、[[repos/react-react/changes/2026-10-23|2026-10-23]]、[[repos/react-react/changes/2026-10-21|2026-10-21]]、[[repos/react-react/changes/2026-10-16|2026-10-16]]
