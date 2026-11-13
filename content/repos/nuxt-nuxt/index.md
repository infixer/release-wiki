---
title: nuxt/nuxt
updated: 2026-11-13
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4|まとめ]]（Nuxt の 8 件・Nitro の 3 件のアドバイザリを修正するセキュリティリリース。前は [[repos/nuxt-nuxt/releases/v4.6.3|v4.6.3]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- `<NuxtErrorBoundary>` がサーバー側のエラーも捕捉（`experimental.ssrErrorBoundary`、`<NuxtClientFallback>` は非推奨）（[#36990](https://github.com/nuxt/nuxt/pull/36990)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]、[[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- `vue`・`vue-router` を `nuxt` の peer dependency に（破壊的変更）（[#36979](https://github.com/nuxt/nuxt/pull/36979)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- 完成した HTML 文書を受け取る `render:document` フック（[#36989](https://github.com/nuxt/nuxt/pull/36989)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]、[[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- サーバーのミドルウェアのリダイレクトの `Location` のクエリを 4.5 と同じエンコードに戻す（[#37002](https://github.com/nuxt/nuxt/pull/37002)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- ペイロードのキーをソートして決定的にシリアライズ（ISR・CDN のキャッシュヒット向上）（[#36982](https://github.com/nuxt/nuxt/pull/36982)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- バンドルする Vue の import をすべて 1 つのコピーに解決（[#36978](https://github.com/nuxt/nuxt/pull/36978)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- vite-server: サーバービルドにデプロイ先（`target`）を記録（[#36964](https://github.com/nuxt/nuxt/pull/36964)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- ページのルート名の重複を `NUXT_B4028` で警告（[#36922](https://github.com/nuxt/nuxt/pull/36922)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- `nuxt/server` から `defineHandler` を提供し、`defineEventHandler` を別名に（[#36929](https://github.com/nuxt/nuxt/pull/36929)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- サーバーに依存しないレンダラープラグイン（`addRendererPlugin`）を追加（[#36601](https://github.com/nuxt/nuxt/pull/36601)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]、[[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`（SPA ローディングテンプレートの解決は kit で共通化）
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出、`onNuxtReady`・`useCookie`
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポートと dev リクエストの失敗の扱い（500・`NUXT_B7037`）
- [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]] — auto-import コンポーネントの解決・遅延ハイドレーション（操作の再生）・`<ClientOnly>`・island の props の型、テンプレートの診断（`experimental.templateDiagnostics`）、SFC の `<script>` ブロックの検出、SSR のエラーも捕捉する `<NuxtErrorBoundary>`（`experimental.ssrErrorBoundary`）
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）、Nitro 3 RC への移行、Nuxt v5 への移行向けの診断（`NUXT_B9009` など）・h3 v1 のシム、`nuxt/server` の `defineHandler`、`addRendererPlugin`、`render:document` フック
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL、SSR の高速化（ESM の Vue・キャッシュの共有・NuxtLink・HTML のエンコード）、インライン style の順序、レンダラープラグイン（`addRendererPlugin`）、island の head、`render:document` フック、ペイロードの決定的なシリアライズ
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`・`devServer.allowedHosts`・`typescript.typeCheck`）、Standard Schema による `runtimeConfig` の検証と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能、自動生成キー、`useRequestFetch` のサブリクエストのヘッダー、`watch` による再取得・中断時の決着
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー、`<NuxtLink>` のプリフェッチのフック、SSR のプリフェッチのヒントの遅延、別のビルドのペイロードの検出（`buildId`）
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー、ビルドキャッシュ・tree-shake・ビルドの高速化、V8 のコンパイルヒント、dev の CSS、Rsbuild・rspack のビルダー、初期チャンクのまとめ方、vite-server とデプロイ先のプラグイン（Cloudflare の Vite プラグイン v2 など）・相対パスの `$fetch`、kit のビルダーのヘルパー（`build: false`）、`vue`・`vue-router` の peer dependency 化と Vue の重複の解消
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール（カバー判定・メソッド付きのキー・`sensitive`）、`navigateTo`・`definePageMeta`、`experimental.staticRoutes`、ルート名の重複の警告（`NUXT_B4028`）・リロード時のスクロール位置、ルーターと同じクエリの解析（`parseQuery`・`stringifyQuery`）・`ssrRoutes` のパターン

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-11-13|2026-11-13]]、[[repos/nuxt-nuxt/changes/2026-11-11|2026-11-11]]、[[repos/nuxt-nuxt/changes/2026-11-09|2026-11-09]]、[[repos/nuxt-nuxt/changes/2026-11-06|2026-11-06]]、[[repos/nuxt-nuxt/changes/2026-11-04|2026-11-04]]
