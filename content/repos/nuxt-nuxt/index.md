---
title: nuxt/nuxt
updated: 2026-10-16
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.1](https://github.com/nuxt/nuxt/releases/tag/v4.6.1)（2026-10-09）→ [[repos/nuxt-nuxt/releases/v4.6.1|まとめ]]（パッチリリース。前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- nitro: v2 の `render:response` のリスナーに実際に送るレスポンス（ステータス・ヘッダー）を渡す（[#36596](https://github.com/nuxt/nuxt/pull/36596)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- vite-server: アセット URL のヘルパーをビルドごとに分け、1 プロセスに複数アプリを載せたときの URL の取り違えを修正（[#36591](https://github.com/nuxt/nuxt/pull/36591)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- nitro・vite: `nitro: { static: true }` で `dist` を常に静的出力へリンク（[#36592](https://github.com/nuxt/nuxt/pull/36592)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- nuxt・nitro: 失敗したレンダリングのヘッダーを投げられたエラーに書き込まない（共有エラーでのヘッダー漏れの修正、`event.context.nuxt['~response-headers']` に記録）（[#36586](https://github.com/nuxt/nuxt/pull/36586)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- nitro: miniflare の dev ランナーで `workerd` の SSR の conditions を保つ（`cloudflare_module` の dev で 500 になる問題）（[#36556](https://github.com/nuxt/nuxt/pull/36556)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- vite: dev でインライン化した `vue` をバンドラー向けのビルドに解決（[#36569](https://github.com/nuxt/nuxt/pull/36569)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- kit: nitro v2 ではファイル名から決めるハンドラーのメソッドを小文字に（[#36567](https://github.com/nuxt/nuxt/pull/36567)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- 文字列・配列の `appMiddleware` のルートルールをオブジェクト形式に正規化（[#36565](https://github.com/nuxt/nuxt/pull/36565)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- sourcemap に `'nosource'` オプション（`sourcesContent` を含めないソースマップ）を追加（[#36534](https://github.com/nuxt/nuxt/pull/36534)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- 離れるページが無いときはページ遷移を始めず、スクロール・head の破棄が止まる問題を修正（[#36535](https://github.com/nuxt/nuxt/pull/36535)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro のモジュール解決・外部化、レイヤー、型生成、vite-server・Nitro の開発サーバー
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決）、レイアウト遷移・`setPageLayout`、ルートルール

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-10-16|2026-10-16]]、[[repos/nuxt-nuxt/changes/2026-10-14|2026-10-14]]、[[repos/nuxt-nuxt/changes/2026-10-12|2026-10-12]]、[[repos/nuxt-nuxt/changes/2026-10-09|2026-10-09]]、[[repos/nuxt-nuxt/changes/2026-10-07|2026-10-07]]
