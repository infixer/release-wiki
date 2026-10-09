---
title: react/react
updated: 2026-10-09
tags:
  - repo/react-react
---

[GitHub](https://github.com/react/react) · ブランチ: `main`

## 最新リリース

- 安定版: [v19.3.0](https://github.com/react/react/releases/tag/v19.3.0)（2026-09-09）
- プレリリース: なし

## 直近の注目変更

- DevTools 拡張機能が同一ドキュメント内のナビゲーションで再マウントしないように（[#37780](https://github.com/react/react/pull/37780)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- フィーチャーフラグ `enableParallelTransitions` を削除し、有効時の挙動に一本化（[#37771](https://github.com/react/react/pull/37771)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- Fragment Refs のフィーチャーフラグ 2 つを削除し、有効時の挙動に一本化（[#37732](https://github.com/react/react/pull/37732)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- スタックフレームの無いエラーを debug info から復元できない問題を修正（[#37730](https://github.com/react/react/pull/37730)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- `useDeferredValue` とエラー回復の組み合わせで起きる無限ループを修正（[#37739](https://github.com/react/react/pull/37739)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- Server Reference が任意のオブジェクトを参照できるように（実験的）（[#37636](https://github.com/react/react/pull/37636)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- エフェクト内で `await` 後の setState を誤検知しないよう修正（[#36734](https://github.com/react/react/pull/36734)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- Rust 版コンパイラで shorthand・computed property の判定を修正（[#37674](https://github.com/react/react/pull/37674)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- `arguments` オブジェクトの使用でコンパイラが誤ってメモ化しないよう修正（[#37645](https://github.com/react/react/pull/37645)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- Flight クライアントが `U+FEFF` を保持するよう修正（[#37625](https://github.com/react/react/pull/37625)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]

## トピック

- [[repos/react-react/topics/DevTools|DevTools]] — React DevTools のブラウザ拡張機能
- [[repos/react-react/topics/React-Compiler|React Compiler]] — 自動メモ化コンパイラ（Babel / Rust 実装）
- [[repos/react-react/topics/Reconciler|Reconciler]] — レンダー・コミット処理、レーン、エラー回復、Fragment Refs、フィーチャーフラグの整理
- [[repos/react-react/topics/Server-Components|Server Components]] — Flight プロトコル、Server Reference、エラーの debug info

## 取り込み

- [[repos/react-react/log|取り込み履歴]]
- 最近の変更: [[repos/react-react/changes/2026-10-09|2026-10-09]]、[[repos/react-react/changes/2026-10-07|2026-10-07]]、[[repos/react-react/changes/2026-10-05|2026-10-05]]、[[repos/react-react/changes/2026-09-30|2026-09-30]]、[[repos/react-react/changes/2026-09-24|2026-09-24]]
