---
title: nuxt/nuxt
updated: 2026-11-06
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4|まとめ]]（Nuxt の 8 件・Nitro の 3 件のアドバイザリを修正するセキュリティリリース。前は [[repos/nuxt-nuxt/releases/v4.6.3|v4.6.3]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- サーバーでルーターのマッチャーを使い回す `experimental.staticRoutes`（`/` で 1324 → 2700 req/s の例）（[#36867](https://github.com/nuxt/nuxt/pull/36867)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- 別のビルドの `_payload.json` へ移動したらリロード（`buildId` を照合）（[#36863](https://github.com/nuxt/nuxt/pull/36863)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]]
- `$initial` のモジュールをエントリのチャンクに入れ、単一レイアウトの依存を 1 チャンクに（`experimental.layoutChunk`）（[#36862](https://github.com/nuxt/nuxt/pull/36862)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- Nuxt v5 への移行向けの診断を追加（h3 v1 の直接依存 `NUXT_B9009`・Nitro v2 の深い import・発火しないフックなど）（[#36857](https://github.com/nuxt/nuxt/pull/36857)、[#36858](https://github.com/nuxt/nuxt/pull/36858)、[#36870](https://github.com/nuxt/nuxt/pull/36870)、[#36871](https://github.com/nuxt/nuxt/pull/36871)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- Rsbuild ビルダー `builder: 'rsbuild'`（`@nuxt/rsbuild-builder`）を追加、`@nuxt/rspack-builder` は非推奨（[#36499](https://github.com/nuxt/nuxt/pull/36499)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- Nitro の rspack ビルダー（`nitro: { builder: 'rspack' }`）に対応（[#36841](https://github.com/nuxt/nuxt/pull/36841)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- ビルドキャッシュのヒット時に SSR ビルドを使い回す（約 4.4 秒の再ビルドを省く）（[#36810](https://github.com/nuxt/nuxt/pull/36810)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `hydrate-on-interaction` できっかけの操作を再生（最初のクリックが失われない）（[#36838](https://github.com/nuxt/nuxt/pull/36838)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]
- island コンポーネントの props を JSON にできる型に限定（[#36814](https://github.com/nuxt/nuxt/pull/36814)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]
- v4.6.4: セキュリティ修正（本番のエラーの詳細を `createError` のものだけに、webpack・rspack の dev サーバーで `Host` を確認し `devServer.allowedHosts` を追加など）（[v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)）📦 v4.6.4 · [[repos/nuxt-nuxt/releases/v4.6.4|まとめ]] · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]、[[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]、[[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出、`onNuxtReady`・`useCookie`
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]] — auto-import コンポーネントの解決・遅延ハイドレーション（操作の再生）・`<ClientOnly>`・island の props の型、テンプレートの診断（`experimental.templateDiagnostics`）
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）、Nitro 3 RC への移行、Nuxt v5 への移行向けの診断（`NUXT_B9009` など）・h3 v1 のシム
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL、SSR の高速化（ESM の Vue・キャッシュの共有・NuxtLink・HTML のエンコード）、インライン style の順序
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`・`devServer.allowedHosts`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能、自動生成キー
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー、`<NuxtLink>` のプリフェッチのフック、SSR のプリフェッチのヒントの遅延、別のビルドのペイロードの検出（`buildId`）
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー、ビルドキャッシュ・tree-shake・ビルドの高速化、V8 のコンパイルヒント、dev の CSS、Rsbuild・rspack のビルダー、初期チャンクのまとめ方
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール（カバー判定・メソッド付きのキー・`sensitive`）、`navigateTo`・`definePageMeta`、`experimental.staticRoutes`

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-11-06|2026-11-06]]、[[repos/nuxt-nuxt/changes/2026-11-04|2026-11-04]]、[[repos/nuxt-nuxt/changes/2026-11-02|2026-11-02]]、[[repos/nuxt-nuxt/changes/2026-10-30|2026-10-30]]、[[repos/nuxt-nuxt/changes/2026-10-28|2026-10-28]]
