---
title: nuxt/nuxt
updated: 2026-09-30
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.5.2](https://github.com/nuxt/nuxt/releases/tag/v4.5.2)（2026-08-05）
- プレリリース: なし

## 直近の注目変更

- `@nuxt/kit` のパッケージインストールに `package-manager-detector` を使用（[#36434](https://github.com/nuxt/nuxt/pull/36434)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `hook`・`bundler`・`middleware` の tracing channel を追加（[#36423](https://github.com/nuxt/nuxt/pull/36423)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]]
- `createUseFetch`・`createUseAsyncData` にアドオン機能（`addons`）を追加（[#35797](https://github.com/nuxt/nuxt/pull/35797)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]
- コンポーネントの名前変更後に import を更新するよう修正（[#36165](https://github.com/nuxt/nuxt/pull/36165)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- 一致しない public ファイルへのリンクをハードリロードで表示（[#36169](https://github.com/nuxt/nuxt/pull/36169)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- error を持たないブラウザ通知でエラーオーバーレイを開かないよう修正（[#36415](https://github.com/nuxt/nuxt/pull/36415)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]]
- トップレベルと重複する `nitro.*` オプションを非推奨に（[#36416](https://github.com/nuxt/nuxt/pull/36416)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- トップレベルの `prerender` オプションを追加（`nitro.prerender` の別名）（[#32356](https://github.com/nuxt/nuxt/pull/32356)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]]
- `node_modules` にインストールしたレイヤーの依存関係を事前バンドル（[#36208](https://github.com/nuxt/nuxt/pull/36208)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- シンボリックリンク経由のレイヤーディレクトリを実パスに解決（[#36402](https://github.com/nuxt/nuxt/pull/36402)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示とエラーオーバーレイ
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画、ペイロード URL
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨）と kit の設定 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェアの tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro のモジュール解決・外部化、レイヤー、型生成
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター、レイアウト遷移、ルートルール

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-09-30|2026-09-30]]、[[repos/nuxt-nuxt/changes/2026-09-28|2026-09-28]]、[[repos/nuxt-nuxt/changes/2026-09-24|2026-09-24]]
