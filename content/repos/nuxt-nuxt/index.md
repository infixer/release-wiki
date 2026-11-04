---
title: nuxt/nuxt
updated: 2026-11-04
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)（2026-11-02）→ [[repos/nuxt-nuxt/releases/v4.6.4|まとめ]]（Nuxt の 8 件・Nitro の 3 件のアドバイザリを修正するセキュリティリリース。前は [[repos/nuxt-nuxt/releases/v4.6.3|v4.6.3]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- v4.6.4: セキュリティ修正（本番のエラーの詳細を `createError` のものだけに、webpack・rspack の dev サーバーで `Host` を確認し `devServer.allowedHosts` を追加、ルートルールがエンコードされたスラッシュに一致など）（[v4.6.4](https://github.com/nuxt/nuxt/releases/tag/v4.6.4)）📦 v4.6.4 · [[repos/nuxt-nuxt/releases/v4.6.4|まとめ]] · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]、[[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]、[[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- SSR のプリフェッチのヒントをハイドレーション後に遅らせる（LCP 1153ms → 1071ms の例）（[#36794](https://github.com/nuxt/nuxt/pull/36794)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]]
- `nuxt:render-list` で AST を作らずに import を読む（サーバーのフック時間が約半分に）（[#36787](https://github.com/nuxt/nuxt/pull/36787)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- Nitro 3 RC へ移行（破壊的変更）（[#36671](https://github.com/nuxt/nuxt/pull/36671)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- `nuxt dev` で Nitro の WebSocket のアップグレードが動くように（[#36387](https://github.com/nuxt/nuxt/pull/36387)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `typescript.typeCheck` の型チェッカーのワーカーのリークを修正（[#36774](https://github.com/nuxt/nuxt/pull/36774)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- サーバーで遅延ルートコンポーネントの import をメモ化（[#36773](https://github.com/nuxt/nuxt/pull/36773)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]]
- テンプレートの auto-import コンポーネントを Vue のテンプレートコンパイラーで解決（pug でも遅延ハイドレーションの props が使える）（[#36763](https://github.com/nuxt/nuxt/pull/36763)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]
- ビルド時のテンプレート診断 `experimental.templateDiagnostics`（一致しない `<NuxtLink to>` などを警告、デフォルト有効）（[#36754](https://github.com/nuxt/nuxt/pull/36754)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]]
- 初期チャンクに V8 のコンパイルヒントを出力する実験的機能（ハイドレーション 477ms → 311ms の例）（[#36758](https://github.com/nuxt/nuxt/pull/36758)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出、`onNuxtReady`・`useCookie`
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/コンポーネント・テンプレート|コンポーネント・テンプレート]] — auto-import コンポーネントの解決・遅延ハイドレーション・`<ClientOnly>`、テンプレートの診断（`experimental.templateDiagnostics`）
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）、Nitro 3 RC への移行
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL、SSR の高速化（ESM の Vue・キャッシュの共有・NuxtLink・HTML のエンコード）、インライン style の順序
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`・`devServer.allowedHosts`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能、自動生成キー
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー、`<NuxtLink>` のプリフェッチのフック、SSR のプリフェッチのヒントの遅延
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー、ビルドキャッシュ・tree-shake・ビルドの高速化、V8 のコンパイルヒント、dev の CSS
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール（カバー判定・メソッド付きのキー・`sensitive`）、`navigateTo`・`definePageMeta`

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-11-04|2026-11-04]]、[[repos/nuxt-nuxt/changes/2026-11-02|2026-11-02]]、[[repos/nuxt-nuxt/changes/2026-10-30|2026-10-30]]、[[repos/nuxt-nuxt/changes/2026-10-28|2026-10-28]]、[[repos/nuxt-nuxt/changes/2026-10-26|2026-10-26]]
