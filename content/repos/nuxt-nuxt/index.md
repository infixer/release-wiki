---
title: nuxt/nuxt
updated: 2026-11-09
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4|まとめ]]（Nuxt の 8 件・Nitro の 3 件のアドバイザリを修正するセキュリティリリース。前は [[repos/nuxt-nuxt/releases/v4.6.3|v4.6.3]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- `runtimeConfig` を Standard Schema で検証・型変換（既定値の型で環境変数を変換、`z.string()` で必須など）（[#36905](https://github.com/nuxt/nuxt/pull/36905)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- `typescript.typeCheck: 'dev'` で `nuxt dev` でだけ型チェック（[#36164](https://github.com/nuxt/nuxt/pull/36164)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- 本番のクライアントで `<NuxtLink>` をコンポーネントのインスタンスなしで描画（[#36904](https://github.com/nuxt/nuxt/pull/36904)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]]
- SSR の高速化（リクエストごとのオーバーヘッド削減・`<NuxtLink>` の `route` の遅延解決・ICU での UTF-8 変換）（[#36890](https://github.com/nuxt/nuxt/pull/36890)、[#36891](https://github.com/nuxt/nuxt/pull/36891)、[#36892](https://github.com/nuxt/nuxt/pull/36892)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- vite-server: Cloudflare の Vite プラグイン v2 に対応（[#36879](https://github.com/nuxt/nuxt/pull/36879)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- vite-server: dev のリクエストで例外が起きてもプロセスを落とさず 500 を返し、`NUXT_B7037` で報告（[#36883](https://github.com/nuxt/nuxt/pull/36883)、[#36889](https://github.com/nuxt/nuxt/pull/36889)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]]
- 遅延したプリフェッチのヒントをアイドル時間に分けて有効にする（TBT の退行の修正）（[#36878](https://github.com/nuxt/nuxt/pull/36878)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]]
- サーバーでルーターのマッチャーを使い回す `experimental.staticRoutes`（`/` で 1324 → 2700 req/s の例）（[#36867](https://github.com/nuxt/nuxt/pull/36867)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- 別のビルドの `_payload.json` へ移動したらリロード（`buildId` を照合）（[#36863](https://github.com/nuxt/nuxt/pull/36863)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]]
- `$initial` のモジュールをエントリのチャンクに入れ、単一レイアウトの依存を 1 チャンクに（`experimental.layoutChunk`）（[#36862](https://github.com/nuxt/nuxt/pull/36862)） ⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出、`onNuxtReady`・`useCookie`
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポートと dev リクエストの失敗の扱い（500・`NUXT_B7037`）
- [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]] — auto-import コンポーネントの解決・遅延ハイドレーション（操作の再生）・`<ClientOnly>`・island の props の型、テンプレートの診断（`experimental.templateDiagnostics`）
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）、Nitro 3 RC への移行、Nuxt v5 への移行向けの診断（`NUXT_B9009` など）・h3 v1 のシム
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL、SSR の高速化（ESM の Vue・キャッシュの共有・NuxtLink・HTML のエンコード）、インライン style の順序
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`・`devServer.allowedHosts`・`typescript.typeCheck`）、Standard Schema による `runtimeConfig` の検証と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能、自動生成キー
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー、`<NuxtLink>` のプリフェッチのフック、SSR のプリフェッチのヒントの遅延、別のビルドのペイロードの検出（`buildId`）
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー、ビルドキャッシュ・tree-shake・ビルドの高速化、V8 のコンパイルヒント、dev の CSS、Rsbuild・rspack のビルダー、初期チャンクのまとめ方、vite-server とデプロイ先のプラグイン（Cloudflare の Vite プラグイン v2 など）
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール（カバー判定・メソッド付きのキー・`sensitive`）、`navigateTo`・`definePageMeta`、`experimental.staticRoutes`

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-11-09|2026-11-09]]、[[repos/nuxt-nuxt/changes/2026-11-06|2026-11-06]]、[[repos/nuxt-nuxt/changes/2026-11-04|2026-11-04]]、[[repos/nuxt-nuxt/changes/2026-11-02|2026-11-02]]、[[repos/nuxt-nuxt/changes/2026-10-30|2026-10-30]]
