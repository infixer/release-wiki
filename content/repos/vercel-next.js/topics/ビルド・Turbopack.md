---
title: ビルド・Turbopack
updated: 2026-09-28
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

Turbopack・webpack を使ったビルド/開発サーバーの実装と、それに関わる CLI・設定オプション・コードモッド。ビルド出力の無駄の削減（本番でレイアウトセグメントを 1 回だけチャンク化など）、モジュール解決・トレース・エクスポート判定まわりのリグレッション修正、turbo-tasks の GC の安定化が続いている。`next analyze` は正式機能になり、比較画面の URL 共有や `--snapshot-name` への改名などアナライザー UI の改善も進んでいる。`additionalRoots` はデプロイアダプターでも使えるようになった。一方、実験的な `customWebpack` はモノレポでの依存重複の問題から revert された。

## 主な API・オプション

- `next analyze` / `next build --analyze` — バンドルアナライザー（正式機能化）。`--snapshot-name` でスナップショットに名前を付けられる（比較画面は `/compare`）
- ~~`experimental.customWebpack`~~ — 実験的に追加されたが revert された（[#99227](https://github.com/vercel/next.js/pull/99227)）
- `additionalRoots`（Turbopack の設定）— デプロイアダプター（`vc deploy` など）でも利用可能に
- `experimental.turbopack.resolveAlias` — `false` を指定してモジュールを空スタブに解決可能に

## 変更履歴

- 2026-09-28 — エクスポート名マングリングのためだけのファサード分割をやめ、シングルトンの二重化を修正（[#99285](https://github.com/vercel/next.js/pull/99285)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — webpack ローダーが依存を読むときにファイルシステムのルートをまたげるように（[#99202](https://github.com/vercel/next.js/pull/99202)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — `next internal trace` サーバーのプロセス名を分かりやすく（[#99257](https://github.com/vercel/next.js/pull/99257)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーのスナップショット名オプションを `--snapshot-name` に改名（[#99251](https://github.com/vercel/next.js/pull/99251)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーのツリーマップが低 DPI の画面でぼやける不具合を修正（[#99197](https://github.com/vercel/next.js/pull/99197)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーの比較画面が URL で共有できるように（[#98530](https://github.com/vercel/next.js/pull/98530)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — パッケージ内のコードからプロジェクト全体がトレースされる不具合を修正（[#99238](https://github.com/vercel/next.js/pull/99238)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — 実験的な `customWebpack` サポートを revert（[#99227](https://github.com/vercel/next.js/pull/99227)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — Turbopack の `additionalRoots` がデプロイアダプターでも使えるように（[#99015](https://github.com/vercel/next.js/pull/99015)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — turbo-tasks の GC に関する不具合を修正（[#98591](https://github.com/vercel/next.js/pull/98591), [#98614](https://github.com/vercel/next.js/pull/98614), [#99145](https://github.com/vercel/next.js/pull/99145)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — 本番ビルドで各レイアウトセグメントを 1 回だけチャンク化するように（[#99100](https://github.com/vercel/next.js/pull/99100)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーで JavaScript のソースがアセット扱いになる不具合を修正（[#98536](https://github.com/vercel/next.js/pull/98536)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — `next lint` を使っていないプロジェクトでは ESLint 移行をスキップ（[#99103](https://github.com/vercel/next.js/pull/99103)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — クライアント参照プロキシと WASM ローダーのエクスポート使用判定を修正（[#99115](https://github.com/vercel/next.js/pull/99115)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
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

- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
