---
title: react/react
updated: 2026-10-14
tags:
  - repo/react-react
---

[GitHub](https://github.com/react/react) · ブランチ: `main`

## 最新リリース

- 安定版: [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09）
- プレリリース: なし

## 直近の注目変更

- 拡張不可の thenable を `use()` に渡すと DEV でクラッシュする問題を修正（[#37796](https://github.com/react/react/pull/37796)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- ref を読む関数の比較を `react-hooks/refs` が誤検知しないよう修正（[#37688](https://github.com/react/react/pull/37688)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- dehydrate 状態の Activity を隠すと後ろの兄弟要素まで隠れる問題を修正（[#37814](https://github.com/react/react/pull/37814)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- プリレンダーの中断時、リトライ中のタスクを開始位置から postpone するよう修正（[#37710](https://github.com/react/react/pull/37710)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- DevTools 拡張機能が同一ドキュメント内のナビゲーションで再マウントしないように（[#37780](https://github.com/react/react/pull/37780)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- フィーチャーフラグ `enableParallelTransitions` を削除し、有効時の挙動に一本化（[#37771](https://github.com/react/react/pull/37771)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- Fragment Refs のフィーチャーフラグ 2 つを削除し、有効時の挙動に一本化（[#37732](https://github.com/react/react/pull/37732)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- スタックフレームの無いエラーを debug info から復元できない問題を修正（[#37730](https://github.com/react/react/pull/37730)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- `useDeferredValue` とエラー回復の組み合わせで起きる無限ループを修正（[#37739](https://github.com/react/react/pull/37739)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- Server Reference が任意のオブジェクトを参照できるように（実験的）（[#37636](https://github.com/react/react/pull/37636)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]

## トピック

- [[repos/react-react/topics/DevTools|DevTools]] — React DevTools のブラウザ拡張機能
- [[repos/react-react/topics/React-Compiler|React Compiler]] — 自動メモ化コンパイラ（Babel / Rust 実装）
- [[repos/react-react/topics/Reconciler|Reconciler]] — レンダー・コミット処理、レーン、エラー回復、Fragment Refs、フィーチャーフラグの整理
- [[repos/react-react/topics/Server-Components|Server Components]] — Flight プロトコル、Server Reference、エラーの debug info
- [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — Fizz のプリレンダー・再開と、クライアントの部分ハイドレーション（Activity）

## 取り込み

- [[repos/react-react/log|取り込み履歴]]
- 最近の変更: [[repos/react-react/changes/2026-10-14|2026-10-14]]、[[repos/react-react/changes/2026-10-09|2026-10-09]]、[[repos/react-react/changes/2026-10-07|2026-10-07]]、[[repos/react-react/changes/2026-10-05|2026-10-05]]、[[repos/react-react/changes/2026-09-30|2026-09-30]]
