---
title: nuxt/nuxt
updated: 2026-10-12
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.1](https://github.com/nuxt/nuxt/releases/tag/v4.6.1)（2026-10-09）→ [[repos/nuxt-nuxt/releases/v4.6.1|まとめ]]（パッチリリース。前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- sourcemap に `'nosource'` オプション（`sourcesContent` を含めないソースマップ）を追加（[#36534](https://github.com/nuxt/nuxt/pull/36534)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- 離れるページが無いときはページ遷移を始めず、スクロール・head の破棄が止まる問題を修正（[#36535](https://github.com/nuxt/nuxt/pull/36535)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- 中断・キャンセルされたナビゲーションでエラー状態を保つ（[#36546](https://github.com/nuxt/nuxt/pull/36546)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- vite・nitro: dev で NUL バイトを含む仮想 CSS を `/@id/` 経由でリンク（`@unocss/nuxt` のスタイル重複）（[#36549](https://github.com/nuxt/nuxt/pull/36549)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- kit: モジュールの依存モジュールを宣言したモジュールの場所から解決（[#36542](https://github.com/nuxt/nuxt/pull/36542)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `serverFetch` をサーバールートに対して型付け（[#36543](https://github.com/nuxt/nuxt/pull/36543)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]
- nitro・vite: 宣言していない依存関係にアクセスせず、pnpm のグローバル仮想ストアに対応（[#36541](https://github.com/nuxt/nuxt/pull/36541)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `<NuxtLoadingIndicator>` に `finishColor` プロップを追加（[#36533](https://github.com/nuxt/nuxt/pull/36533)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]]
- vite-server: `spaLoadingTemplateLocation: 'within'` で SPA ローディングテンプレートを `#__nuxt` の中に描画（[#36536](https://github.com/nuxt/nuxt/pull/36536)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]]
- 応答の型を指定した fetch でも任意の `baseURL` を受け付ける（4.6.0 からの退行の修正。v4.6.1 の本文にも掲載）（[#36523](https://github.com/nuxt/nuxt/pull/36523)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式、ペイロード URL
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro のモジュール解決・外部化、レイヤー、型生成、vite-server・Nitro の開発サーバー
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決）、レイアウト遷移・`setPageLayout`、ルートルール

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-10-12|2026-10-12]]、[[repos/nuxt-nuxt/changes/2026-10-09|2026-10-09]]、[[repos/nuxt-nuxt/changes/2026-10-07|2026-10-07]]、[[repos/nuxt-nuxt/changes/2026-10-05|2026-10-05]]、[[repos/nuxt-nuxt/changes/2026-10-02|2026-10-02]]
