---
title: nuxt/nuxt
updated: 2026-10-09
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.6.0](https://github.com/nuxt/nuxt/releases/tag/v4.6.0)（2026-10-05）→ [[repos/nuxt-nuxt/releases/v4.6.0|まとめ]]（Nuxt CLI v4 を同時リリース）
- プレリリース: なし

## 直近の注目変更

- `setPageLayout` の型で `false` を許可（[#36506](https://github.com/nuxt/nuxt/pull/36506)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]]
- `Serialize` のオブジェクト型を JSON に揃え、インデックスシグネチャ付きの型でも名前付きのキーを保つ（[#36503](https://github.com/nuxt/nuxt/pull/36503)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]
- vite: パッケージ内の解決できない `#` import で依存関係スキャンを止めない（i18n の事前バンドル）（[#36477](https://github.com/nuxt/nuxt/pull/36477)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- kit: 見つからないサブパスは属するパッケージ名でインストール（[#36507](https://github.com/nuxt/nuxt/pull/36507)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- vite-server: SSR 無効時に設定された `outDir` を public ディレクトリに（[#36501](https://github.com/nuxt/nuxt/pull/36501)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- kit・nitro: v2 形式の dev ハンドラーが 1 回の登録で両 Nitro メジャーの同じパスに一致（[#36515](https://github.com/nuxt/nuxt/pull/36515)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]]
- `onServerPrefetch` の登録をクライアントでも残し、`useId` のハイドレーション不一致を修正（[#36430](https://github.com/nuxt/nuxt/pull/36430)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/データ取得|データ取得]]
- `nuxt.request` の tracing channel を追加（[#36483](https://github.com/nuxt/nuxt/pull/36483)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]]
- vite-server: cloudflare などデプロイ先のプラグインと組み合わせても開発サーバーが動くよう修正（[#36491](https://github.com/nuxt/nuxt/pull/36491)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- perf: `@nuxt/devtools-onboard`（50kb）を devtools の代わりに使い、`@nuxt/devtools`（約 50MB）を任意に（[#36470](https://github.com/nuxt/nuxt/pull/36470)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示、エラーオーバーレイ、vite-server のエラーレポート
- [[repos/nuxt-nuxt/topics/サーバー互換性|サーバー互換性]] — Nitro v2 形式のサーバーコード・dev ハンドラーとの互換対応と `nuxt/server` への移行支援（サーバー非依存の Nuxt へ）
- [[repos/nuxt-nuxt/topics/サーバーセッション|サーバーセッション]] — `nuxt/server` のセッションユーティリティ
- [[repos/nuxt-nuxt/topics/サーバーレンダリング|サーバーレンダリング]] — サーバー側レンダラー、エラーページのインライン描画とエラーレスポンスの形式、ペイロード URL
- [[repos/nuxt-nuxt/topics/設定・スキーマ|設定・スキーマ]] — `nuxt.config` のオプション（`prerender`・`nitro.*` の非推奨・無視するディレクトリ）と kit の設定・互換性 API
- [[repos/nuxt-nuxt/topics/データ取得|データ取得]] — `useFetch`・`useAsyncData` とアドオン機能
- [[repos/nuxt-nuxt/topics/トレーシング|トレーシング]] — フック・バンドラー・ミドルウェア・リクエスト（`nuxt.request`）の tracing channel
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro のモジュール解決・外部化、レイヤー、型生成、vite-server・Nitro の開発サーバー
- [[repos/nuxt-nuxt/topics/ルーティング・レイアウト|ルーティング・レイアウト]] — クライアント側ルーター（リンクの解決）、レイアウト遷移・`setPageLayout`、ルートルール

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-10-09|2026-10-09]]、[[repos/nuxt-nuxt/changes/2026-10-07|2026-10-07]]、[[repos/nuxt-nuxt/changes/2026-10-05|2026-10-05]]、[[repos/nuxt-nuxt/changes/2026-10-02|2026-10-02]]、[[repos/nuxt-nuxt/changes/2026-09-30|2026-09-30]]
