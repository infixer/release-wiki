---
title: nuxt/nuxt
updated: 2026-10-28
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.3](https://github.com/nuxt/nuxt/releases/tag/v4.6.3)（2026-10-27）→ [[repos/nuxt-nuxt/releases/v4.6.3|まとめ]]（セキュリティ修正 5 件を含むパッチリリース。前は [[repos/nuxt-nuxt/releases/v4.6.2|v4.6.2]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- テンプレートの auto-import コンポーネントを Vue のテンプレートコンパイラーで解決（pug でも遅延ハイドレーションの props が使える）（[#36763](https://github.com/nuxt/nuxt/pull/36763)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]
- ビルド時のテンプレート診断 `experimental.templateDiagnostics`（一致しない `<NuxtLink to>` などを警告、デフォルト有効）（[#36754](https://github.com/nuxt/nuxt/pull/36754)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]
- 初期チャンクに V8 のコンパイルヒントを出力する実験的機能（ハイドレーション 477ms → 311ms の例）（[#36758](https://github.com/nuxt/nuxt/pull/36758)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- NuxtLink の SSR を高速化（不要な `router.resolve` を省き、SSR のバッファへ直接描画）（[#36759](https://github.com/nuxt/nuxt/pull/36759)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- `onNuxtReady` に `timeout` と `signal` オプション（[#36743](https://github.com/nuxt/nuxt/pull/36743)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]]
- kit: `tsBuildInfoFile` を `buildDir` に保存し、インクリメンタルな型チェックを可能に（[#36746](https://github.com/nuxt/nuxt/pull/36746)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `router.options.sensitive` は `nuxt.config` からだけ読む（破壊的変更）、大文字・小文字に依存するルートルールの拒否とワイルドカードの末尾の保持（[#36732](https://github.com/nuxt/nuxt/pull/36732)、[#36733](https://github.com/nuxt/nuxt/pull/36733)、[#36761](https://github.com/nuxt/nuxt/pull/36761)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- `definePageMeta` に setup 専用の値を渡すとアプリ全体が 500 になる問題を修正（[#36751](https://github.com/nuxt/nuxt/pull/36751)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- インライン化したコンポーネントの style をスタイルシートの link の後に出力（ハイドレーション時の見た目の変化の修正）（[#36714](https://github.com/nuxt/nuxt/pull/36714)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- `useCookie` の `refresh: true` で Cookie を書き直し続ける問題を修正（4.6.0 からの退行）（[#36673](https://github.com/nuxt/nuxt/pull/36673)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出、`onNuxtReady`・`useCookie`
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]] — auto-import コンポーネントの解決・遅延ハイドレーション・`<ClientOnly>`、テンプレートの診断（`experimental.templateDiagnostics`）
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL、SSR の高速化（ESM の Vue・キャッシュの共有・NuxtLink・HTML のエンコード）、インライン style の順序
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能、自動生成キー
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー、`<NuxtLink>` のプリフェッチのフック
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー、ビルドキャッシュ・tree-shake・ビルドの高速化、V8 のコンパイルヒント、dev の CSS
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール（カバー判定・メソッド付きのキー・`sensitive`）、`navigateTo`・`definePageMeta`

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-10-28|2026-10-28]]、[[repos/nuxt-nuxt/changes/2026-10-26|2026-10-26]]、[[repos/nuxt-nuxt/changes/2026-10-23|2026-10-23]]、[[repos/nuxt-nuxt/changes/2026-10-21|2026-10-21]]、[[repos/nuxt-nuxt/changes/2026-10-19|2026-10-19]]
