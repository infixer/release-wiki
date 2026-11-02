---
title: react/react
updated: 2026-11-02
tags:
  - repo/react-react
---

[GitHub](https://github.com/react/react) · ブランチ: `main`

## 最新リリース

- 安定版: [v19.3.1](https://github.com/react/react/releases/tag/v19.3.1)（2026-10-14）→ [[repos/react-react/releases/v19.3.1|まとめ]]
- 同日に公開された旧リリースライン: [[repos/react-react/releases/v19.2.9|v19.2.9]]、[[repos/react-react/releases/v19.1.10|v19.1.10]]、[[repos/react-react/releases/v19.0.9|v19.0.9]]（いずれも RSC の転送プロトコルの改善）
- プレリリース: なし

## 直近の注目変更

- Reconciler: 削除された hidden の Activity でサスペンドしていたデータが解決するとクラッシュする問題を修正（[#37965](https://github.com/react/react/pull/37965)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- Reconciler: 新しいレンダーに取り消されたスロットルされたリトライを ping し、境界がフォールバックのまま残る問題を修正（[#38061](https://github.com/react/react/pull/38061)）⏳ 未リリース · トピック: [[repos/react-react/topics/Reconciler|Reconciler]]
- Fizz: 再開時に外部ランタイムの設定を保ち、完了した Suspense の中身が隠れたままになる問題を修正（[#38059](https://github.com/react/react/pull/38059)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- Fizz: 外部ランタイムのスクリプトに `crossOrigin` を渡す（[#38071](https://github.com/react/react/pull/38071)）⏳ 未リリース · トピック: [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]]
- FB 向け Flight バンドラーで未対応の Server Reference のデコードを無効化（[#36865](https://github.com/react/react/pull/36865)）⏳ 未リリース · トピック: [[repos/react-react/topics/Server-Components|Server Components]]
- DevTools facade: BigInt の正規化と、Resource でない hoistable の検出を修正（[#38068](https://github.com/react/react/pull/38068)、[#38067](https://github.com/react/react/pull/38067)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- DevTools: 対応する引数の無い書式指定子をそのまま残す（[#38069](https://github.com/react/react/pull/38069)）⏳ 未リリース · トピック: [[repos/react-react/topics/DevTools|DevTools]]
- React Compiler: AST を作り直すときに元のソースのオフセットと宣言子の範囲を保つ（[#36921](https://github.com/react/react/pull/36921)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]
- View Transitions: Chrome 153 のエラーメッセージに合わせて抑えるエラーの分類を更新（[#38034](https://github.com/react/react/pull/38034)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-DOM|React DOM]]
- React Compiler（Rust 版）: 非 ASCII の `*Ref` 名での panic を修正（[#38025](https://github.com/react/react/pull/38025)）⏳ 未リリース · トピック: [[repos/react-react/topics/React-Compiler|React Compiler]]

## トピック

- [[repos/react-react/topics/DevTools|DevTools]] — React DevTools のブラウザ拡張機能・バックエンド・facade
- [[repos/react-react/topics/React-Compiler|React Compiler]] — 自動メモ化コンパイラ（Babel / Rust 実装）
- [[repos/react-react/topics/React-DOM|React DOM]] — `react-dom` の合成イベントなどブラウザ向けの処理
- [[repos/react-react/topics/React-Native-レンダラー|React Native レンダラー]] — Fabric レンダラーのイベント処理
- [[repos/react-react/topics/Reconciler|Reconciler]] — レンダー・コミット処理、レーン、エラー回復、Fragment Refs、フィーチャーフラグの整理
- [[repos/react-react/topics/Server-Components|Server Components]] — Flight プロトコル、Server Reference、エラーの debug info
- [[repos/react-react/topics/SSR-ハイドレーション|SSR・ハイドレーション]] — Fizz のプリレンダー・再開と、クライアントの部分ハイドレーション（Activity）

## 取り込み

- [[repos/react-react/log|取り込み履歴]]
- 最近の変更: [[repos/react-react/changes/2026-11-02|2026-11-02]]、[[repos/react-react/changes/2026-10-30|2026-10-30]]、[[repos/react-react/changes/2026-10-28|2026-10-28]]、[[repos/react-react/changes/2026-10-26|2026-10-26]]、[[repos/react-react/changes/2026-10-23|2026-10-23]]
