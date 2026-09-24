---
title: nuxt/nuxt
updated: 2026-09-24
tags:
  - repo/nuxt-nuxt
---

[GitHub](https://github.com/nuxt/nuxt) · ブランチ: `main`

## 最新リリース

- 安定版: [v4.5.2](https://github.com/nuxt/nuxt/releases/tag/v4.5.2)（2026-08-05）
- プレリリース: なし

## 直近の注目変更

- nitro・vite-server 間でエラー処理を共通化（[#36398](https://github.com/nuxt/nuxt/pull/36398)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]]
- 開発者が設定した `appSecret` を上書きしないよう修正（[#36397](https://github.com/nuxt/nuxt/pull/36397)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]]
- ルートチャンク・ペイロード等のプリフェッチを1つのスケジューラーに統一（[#36391](https://github.com/nuxt/nuxt/pull/36391)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]]
- 開発時のエラーレポートをリモート peer 向けにスコープ可能に（[#36389](https://github.com/nuxt/nuxt/pull/36389)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]]
- 開発時の SSR スタックトレースをソースへ正しくマッピング（[#36258](https://github.com/nuxt/nuxt/pull/36258)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]]
- vite の dev 環境で `nuxt` 自体が外部化されてしまう不具合を修正（[#36370](https://github.com/nuxt/nuxt/pull/36370)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- ローディング画面を WebGPU パーティクルの山脈アニメーションに変更（[#36178](https://github.com/nuxt/nuxt/pull/36178)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]]
- vite-server で public ファイルのインデックスを1度だけ行うよう変更（[#36373](https://github.com/nuxt/nuxt/pull/36373)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]]
- `ssrFixStacktrace` を `await` するよう修正（クラッシュ対策）（[#36372](https://github.com/nuxt/nuxt/pull/36372)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]]
- クライアント環境から `unctx` を除去（perf）（[#36371](https://github.com/nuxt/nuxt/pull/36371)）⏳ 未リリース · トピック: [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]]

## トピック

- [[repos/nuxt-nuxt/topics/UIテンプレート・ローディング画面|UIテンプレート・ローディング画面]] — WebGPU パーティクルによるローディング画面
- [[repos/nuxt-nuxt/topics/アプリコンテキスト・ランタイム|アプリコンテキスト・ランタイム]] — `nuxt/app` 内部のコンテキスト・型・クライアント初期化
- [[repos/nuxt-nuxt/topics/アプリシークレット|アプリシークレット]] — `appSecret`（`NUXT_APP_SECRET`）の扱い
- [[repos/nuxt-nuxt/topics/開発時エラー表示|開発時エラー表示]] — 開発サーバーでの SSR エラー・スタックトレース表示
- [[repos/nuxt-nuxt/topics/プリフェッチ・ナビゲーション|プリフェッチ・ナビゲーション]] — クライアント側のプリフェッチ/プリロードスケジューラー
- [[repos/nuxt-nuxt/topics/モジュール解決・ビルド|モジュール解決・ビルド]] — Vite/Nitro のモジュール解決・外部化

## 取り込み

- [[repos/nuxt-nuxt/log|取り込み履歴]]
- 最近の変更: [[repos/nuxt-nuxt/changes/2026-09-24|2026-09-24]]
