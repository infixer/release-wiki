---
title: nuxt/nuxt
updated: 2026-10-21
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.2](https://github.com/nuxt/nuxt/releases/tag/v4.6.2)（2026-10-16）→ [[repos/nuxt-nuxt/releases/v4.6.2|まとめ]]（パッチリリース。前は [[repos/nuxt-nuxt/releases/v4.6.1|v4.6.1]]、前のマイナーは [[repos/nuxt-nuxt/releases/v4.6.0|v4.6.0]]）
- プレリリース: なし

## 直近の注目変更

- `nitroLegacy.imports` で入れ子の `server/utils` をスキャン、v5 で入れ子の自動 import を使うと警告（[#36641](https://github.com/nuxt/nuxt/pull/36641)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- Nitro v2 互換のスキャンでアプリ専用のモジュールコードを対象にしない（[#36638](https://github.com/nuxt/nuxt/pull/36638)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- `nuxt/schema` を `@nuxt/schema` と同じモジュールとして扱い、モジュールの `nuxt/schema` の拡張が無視される問題を修正（[#36633](https://github.com/nuxt/nuxt/pull/36633)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- 5.x の nightly で、Nuxt のビルド外でも `nuxt/server` を import できるように（`nuxt` → `nuxt-nightly` のエイリアス）（[#36632](https://github.com/nuxt/nuxt/pull/36632)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- nitro: `nitroViteEnvironment` 有効時、`nitro:build:public-assets` で書いたファイル（`@vite-pwa/nuxt` の `sw.js` など）が本番で配信されない問題を修正（[#36631](https://github.com/nuxt/nuxt/pull/36631)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- vite-plus の `vite.config` ファイルでは警告しない（[#36628](https://github.com/nuxt/nuxt/pull/36628)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- kit: 生成した宣言を tsconfig の `include` の先頭に保つ（[#36627](https://github.com/nuxt/nuxt/pull/36627)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- rspack・webpack: vue-loader のプラグインを設定ごとに 1 回だけ登録（[#36622](https://github.com/nuxt/nuxt/pull/36622)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- ルート相対のパスを URL パーサーで判定（`/\t/example.com` の誤判定、#36459 からの退行の修正）（[#36617](https://github.com/nuxt/nuxt/pull/36617)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- `shared/` から `nuxt/app` に届いたときのサーバールートの型エラー（`defineEventHandler` が見つからない）を修正（[#36576](https://github.com/nuxt/nuxt/pull/36576)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面、SPA ローディングテンプレート、`<NuxtLoadingIndicator>`
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化、vapor のスロット検出
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式・ヘッダー、ペイロード URL、ビルドごとのアセット URL
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ・`sourcemap` の `'nosource'`）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro/webpack のモジュール解決・外部化、レイヤー、型生成・tsconfig、vite-server・Nitro の開発サーバー
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決・スクロール）、レイアウト遷移・`setPageLayout`、ルートルール

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-10-21|2026-10-21]]、[[repos/nuxt-nuxt/changes/2026-10-19|2026-10-19]]、[[repos/nuxt-nuxt/changes/2026-10-16|2026-10-16]]、[[repos/nuxt-nuxt/changes/2026-10-14|2026-10-14]]、[[repos/nuxt-nuxt/changes/2026-10-12|2026-10-12]]
