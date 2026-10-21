---
title: react/react
updated: 2026-10-21
tags:
  - repo/react-react
---

[GitHub](https://github.com/react/react) · ブランチ: `main`

## 最新リリース

- 安定版: [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1|まとめ]]
- 同日に公開された旧リリースライン: [[repos/react-react/releases/v19.2.9|v19.2.9]]、[[repos/react-react/releases/v19.1.10|v19.1.10]]、[[repos/react-react/releases/v19.0.9|v19.0.9]]（いずれも RSC の転送プロトコルの改善）
- プレリリース: なし

## 直近の注目変更

- 大きなツリーでも `useId` の値が一意になるように（[#37916](https://github.com/react/react/pull/37916)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- バックプレッシャー下でプリレンダーの出力が途中で切れる問題を修正（[#37901](https://github.com/react/react/pull/37901)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- `resumeAndPrerender` で出力済みの境界を再び postpone できるように（[#37876](https://github.com/react/react/pull/37876)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- 同期的なプリレンダーの中断でレンダー済みのシェルを残す（[#37853](https://github.com/react/react/pull/37853)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Flight: I/O の名前の `<anonymous>.` 接頭辞を正しく除去（[#37856](https://github.com/react/react/pull/37856)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- プリレンダーの中断時の replay 復元（#37710・#37850）を revert し、見直しへ（#37709 の退行が戻る）（[#37852](https://github.com/react/react/pull/37852)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Flight の転送プロトコルを改善（バックポートは v19.0.9〜v19.3.1 に収録）（[#37846](https://github.com/react/react/pull/37846)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- `IntersectionObserver` のコールバックでの ref の誤検知を修正（[#37764](https://github.com/react/react/pull/37764)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- 拡張不可の thenable を `use()` に渡すと DEV でクラッシュする問題を修正（[#37796](https://github.com/react/react/pull/37796)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- ref を読む関数の比較を `react-hooks/refs` が誤検知しないよう修正（[#37688](https://github.com/react/react/pull/37688)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]

## トピック

- [[repos/react-react/topics/DevTools|DevTools]] — React DevTools のブラウザ拡張機能
- [[repos/react-react/topics/React-Compiler|React Compiler]] — 自動メモ化コンパイラ（Babel / Rust 実装）
- [[repos/react-react/topics/Reconciler|Reconciler]] — レンダー・コミット処理、レーン、エラー回復、Fragment Refs、フィーチャーフラグの整理
- [[repos/react-react/topics/Server-Components|Server Components]] — Flight プロトコル、Server Reference、エラーの debug info
- [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — Fizz のプリレンダー・再開と、クライアントの部分ハイドレーション（Activity）

## 取り込み

- [[repos/react-react/log|取り込み履歴]]
- 最近の変更: [[repos/react-react/changes/2026-10-21|2026-10-21]]、[[repos/react-react/changes/2026-10-16|2026-10-16]]、[[repos/react-react/changes/2026-10-14|2026-10-14]]、[[repos/react-react/changes/2026-10-09|2026-10-09]]、[[repos/react-react/changes/2026-10-07|2026-10-07]]
