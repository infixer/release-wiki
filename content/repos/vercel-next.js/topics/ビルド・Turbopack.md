---
title: ビルド・Turbopack
updated: 2026-09-24
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

Turbopack・webpack を使ったビルド/開発サーバーの実装と、それに関わる CLI・設定オプション。この期間はビルド出力の無駄の削減や、ローダー変更の検知漏れ、モジュール解決まわりのリグレッション修正が中心。`next analyze` の正式化、`customWebpack`・`resolveAlias: false` など、設定・CLI 面での新機能も追加された。

## 主な API・オプション

- `next analyze` / `next build --analyze` — バンドルアナライザー（正式機能化）
- `experimental.customWebpack`（実験的）— webpack モードでプロジェクト側の webpack バージョンを使用
- `experimental.turbopack.resolveAlias` — `false` を指定してモジュールを空スタブに解決可能に

## 変更履歴

- 2026-09-24 — Node 本番サーバーのチャンク分割のコスト見積もりを調整（[#99120](https://github.com/vercel/next.js/pull/99120)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack の `ModuleId not found for ident` エラーを再度修正（[#99102](https://github.com/vercel/next.js/pull/99102)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — カスタム `distDir` に関する安全確認を追加（[#98997](https://github.com/vercel/next.js/pull/98997)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack の `ModuleId not found for ident` エラーを修正（[#99090](https://github.com/vercel/next.js/pull/99090)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack で webpack ローダー内の import が `Unknown module type` エラーになる不具合を修正（[#99088](https://github.com/vercel/next.js/pull/99088)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — next analyze コマンドが正式機能に（[#99074](https://github.com/vercel/next.js/pull/99074)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — webpack モードでプロジェクト側の webpack を使える `customWebpack` オプションを追加（実験的）（[#98862](https://github.com/vercel/next.js/pull/98862)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — CSS のチャンク分割で循環参照を解消する処理を高速化（約 131 倍）（[#98860](https://github.com/vercel/next.js/pull/98860)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `turbopackLazyDynamicImports` 有効時の不要な出力アセット生成を削減（[#98834](https://github.com/vercel/next.js/pull/98834)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 遅延 dynamic import 有効時に next/dynamic の CSS 収集が壊れる不具合を修正（[#98828](https://github.com/vercel/next.js/pull/98828)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `instant-false` コードモッドがヘルパーファイルにも誤って適用される不具合を修正（[#98880](https://github.com/vercel/next.js/pull/98880)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — turbo-persistence でディスク書き込みエラーが隠れる不具合を修正（[#98840](https://github.com/vercel/next.js/pull/98840)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack でローダーのソースコード変更を検知できていなかった不具合を修正（[#95732](https://github.com/vercel/next.js/pull/95732)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack のトレーススパンの開始時刻とシャットダウン時の配信漏れを修正（[#98426](https://github.com/vercel/next.js/pull/98426)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack の `resolveAlias` に `false` を指定してモジュールを空スタブ化できるように（[#93331](https://github.com/vercel/next.js/pull/93331)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
