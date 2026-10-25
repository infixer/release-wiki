---
title: nuxt/nuxt
updated: 2026-10-26
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.2](https://github.com/nuxt/nuxt/releases/tag/v4.6.2)（2026-10-16）→ [[repos/nuxt-nuxt/releases/v4.6.2|まとめ]]（パッチリリース。前は [[repos/nuxt-nuxt/releases/v4.6.1|v4.6.1]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- サーバービルドで通常の style ブロックをコンパイルしない（SSR のモジュール数・出力ファイル数を削減）（[#36711](https://github.com/nuxt/nuxt/pull/36711)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `navigateTo` がリダイレクトを返すのはミドルウェアの実行中だけに（保留中のナビゲーション中に遷移が失われる問題の修正。カスタムの `beforeResolve` 内では新しいナビゲーションを始める）（[#36650](https://github.com/nuxt/nuxt/pull/36650)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- ESM の Vue をバンドルし、props・emits のキャッシュをリクエスト間で再利用（Nuxt UI のページで描画が約 20〜24% 高速化）（[#36710](https://github.com/nuxt/nuxt/pull/36710)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- 破棄した `useAsyncData` のエントリを `nuxtApp._asyncData` から削除（メモリリークの修正）（[#36709](https://github.com/nuxt/nuxt/pull/36709)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]
- `navigateTo` の公開の戻り値の型から `RouteLocationRaw` を外す（`typedPages` での TS2590 の修正）（[#36691](https://github.com/nuxt/nuxt/pull/36691)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- `ssr: false` のサーバーバンドルに `serverEntry` だけを入れる（ビルド全体が 30.6 秒 → 15.1 秒の例）（[#36699](https://github.com/nuxt/nuxt/pull/36699)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- 自動 import した `#app` のコンポーザブル（`definePageMeta` など）を tree-shake（[#36696](https://github.com/nuxt/nuxt/pull/36696)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- ビルドキャッシュ: ヒット時にクライアントビルドの状態を復元、`shared/` もハッシュに含める（[#36692](https://github.com/nuxt/nuxt/pull/36692)、[#36704](https://github.com/nuxt/nuxt/pull/36704)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- keyed function の自動キーを `rootDir` からの相対パスでハッシュ（ビルド場所でキーが変わる問題の修正）（[#36697](https://github.com/nuxt/nuxt/pull/36697)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]
- ルートルール: メソッド付きのキー（`'GET /admin/**'`）と `sensitive: false` に対応（[#36686](https://github.com/nuxt/nuxt/pull/36686)、[#36693](https://github.com/nuxt/nuxt/pull/36693)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL、SSR の高速化（ESM の Vue・キャッシュの共有）
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能、自動生成キー
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー、ビルドキャッシュ・tree-shake・ビルドの高速化
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール（カバー判定・メソッド付きのキー）、`navigateTo`

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-10-26|2026-10-26]]、[[repos/nuxt-nuxt/changes/2026-10-23|2026-10-23]]、[[repos/nuxt-nuxt/changes/2026-10-21|2026-10-21]]、[[repos/nuxt-nuxt/changes/2026-10-19|2026-10-19]]、[[repos/nuxt-nuxt/changes/2026-10-16|2026-10-16]]
