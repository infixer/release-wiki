---
title: レンダリング・DevTools
updated: 2026-10-28
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

メタデータのレンダリング経路、オンデマンド生成時のエラーハンドリング、開発オーバーレイ（dev overlay）の表示まわりの実装。ストリーミングとブロッキングでメタデータの扱いを揃える変更に続き、Edge SSR でも Node SSR と同じユーザーエージェントベースのメタデータ方針（HTML 制限ボットにはブロッキング）が使われるようになった。`error.tsx` が正しく使われるようにする修正、開発オーバーレイのハイドレーションエラー表示・レイアウトの改善も含まれる。クライアントコンポーネントの読み込み時間のテレメトリは、HTML を生成するレンダーごとに計測するようになった（非同期モジュールの評価時間も含む）。App Router の開発インジケーターは出力完了時に分類を確定するようになり、OpenTelemetry のトレーサーには正しい Next.js のバージョンが設定される。Instant Navigation の検証では、`prefetch()` / `navigation()` による待ちを URL データと区別し、ブロッキングにならない指摘をアンバーの「Instant Insights」として表示するようになった。完全に静的なルートのエラーには、クライアント側での修正方法が加わり、オーバーレイ・ビルドメッセージ・エラーページの説明が揃えられた。サーバーのエラー表示（`patch-error-inspect.ts`）は、複数行のメッセージをスタックフレームと誤って解釈しなくなった（v16.5.0-canary.8）。`next dev` のコードフレームはターミナルのサイズ変更に追従し、マルチバイト文字（CJK など）を含むソースでの `next-code-frame` の panic も修正された。Client Component 経由で `next/headers` を使ったときのエラーは、Pages Router と誤って表示されなくなった（いずれも v16.5.0-canary.10）。安定版 v16.4.2 には `next-code-frame` のマルチバイト文字での修正がバックポートされた。エラーオーバーレイの「Open in editor」ボタンは共通のコンポーネントになり、Code Wrap アイコンで見つけやすくなった（未リリース）。開発時の HMR では、ルーターの初期化前に届いた更新が失われたり（App Router）警告になったり（Pages Router の ISR マニフェスト）する問題が修正され、DevTools インジケーターは問題とコンパイル中の状態を同時に表示する（いずれも v16.5.0-canary.21）。ボットの判定は 1KB を超える User-Agent を対象外にし（`htmlLimitedBots` を含む正規表現の処理量を抑える DoS 対策）、サーバーの起動時には描画の検証や fetch の重複排除のために React を読み込まなくなった（いずれも v16.5.0-canary.24）。開発時の Chrome DevTools のワークスペースの UUID は、キャッシュディレクトリが無いときも作成してから保存され、Docker 環境でも永続化されるようになった（いずれも v16.5.0-canary.29）。

## 変更履歴

- 2026-10-27 — Chrome DevTools のワークスペースの UUID を書く前にキャッシュディレクトリを作る（[#100802](https://github.com/vercel/next.js/pull/100802)）📦 v16.5.0-canary.29 · [[repos/vercel-next.js/changes/2026-10-28|変更]]
- 2026-10-27 — Docker 環境でも Chrome DevTools のワークスペース ID などを `.next/cache` に永続化（[#100790](https://github.com/vercel/next.js/pull/100790)）📦 v16.5.0-canary.29 · [[repos/vercel-next.js/changes/2026-10-28|変更]]
- 2026-10-24 — インラインの Flight スクリプト（`__next_f`）を React の文字列から直接組み立て、Buffer への再エンコードをやめる（[#100142](https://github.com/vercel/next.js/pull/100142)）📦 v16.5.0-canary.27 · [[repos/vercel-next.js/changes/2026-10-26|変更]]
- 2026-10-22 — ボットの User-Agent 判定を 1KB までに制限（超えたものはボットとして扱わない）（[#100604](https://github.com/vercel/next.js/pull/100604)）📦 v16.5.0-canary.24 · [[repos/vercel-next.js/changes/2026-10-23|変更]]
- 2026-10-22 — fetch の重複排除で、React の読み込みをヘルパーの生成時まで遅らせる（[#100401](https://github.com/vercel/next.js/pull/100401)）📦 v16.5.0-canary.24 · [[repos/vercel-next.js/changes/2026-10-23|変更]]
- 2026-10-22 — 描画の検証を分離し、サーバーの起動時に単体の React を読み込まないように（[#100467](https://github.com/vercel/next.js/pull/100467)）📦 v16.5.0-canary.24 · [[repos/vercel-next.js/changes/2026-10-23|変更]]
- 2026-10-20 — App Router: 初期化前に届いた HMR の更新を保留し、ルーターのマウント後に実行（[#100113](https://github.com/vercel/next.js/pull/100113)）📦 v16.5.0-canary.21 · [[repos/vercel-next.js/changes/2026-10-21|変更]]
- 2026-10-19 — DevTools インジケーターで、問題の表示中もコンパイル中の状態を表示（[#100178](https://github.com/vercel/next.js/pull/100178)）📦 v16.5.0-canary.21 · [[repos/vercel-next.js/changes/2026-10-21|変更]]
- 2026-10-19 — Pages Router: ルーターより先に ISR マニフェストが届くと HMR で警告が出る問題を修正（[#100095](https://github.com/vercel/next.js/pull/100095)）📦 v16.5.0-canary.21 · [[repos/vercel-next.js/changes/2026-10-21|変更]]
- 2026-10-15 — エラーオーバーレイの「Open in editor」ボタンを見つけやすく（小さい画面では文字を隠す）（[#100206](https://github.com/vercel/next.js/pull/100206)、[#100266](https://github.com/vercel/next.js/pull/100266)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-16|変更]]
- 2026-10-13 — Client Component 経由の `next/headers` のエラーで Pages Router と誤表示しない（[#100087](https://github.com/vercel/next.js/pull/100087)）📦 v16.5.0-canary.10 · [[repos/vercel-next.js/changes/2026-10-14|変更]]
- 2026-10-13 — next-code-frame: マルチバイト文字を含むソースでの panic を修正（[#92646](https://github.com/vercel/next.js/pull/92646)）📦 v16.5.0-canary.10 · [[repos/vercel-next.js/changes/2026-10-14|変更]]
- 2026-10-12 — ターミナルのサイズ変更後もコードフレームを幅に合わせる（[#99916](https://github.com/vercel/next.js/pull/99916)）📦 v16.5.0-canary.10 · [[repos/vercel-next.js/changes/2026-10-14|変更]]
- 2026-10-10 — サーバーのエラー表示でメッセージの行をスタックフレームとして解釈しない（[#99888](https://github.com/vercel/next.js/pull/99888)）📦 v16.5.0-canary.8 · [[repos/vercel-next.js/changes/2026-10-12|変更]]
- 2026-10-07 — `prefetch()` / `navigation()` の Instant Insights を追加（[#97801](https://github.com/vercel/next.js/pull/97801)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — 完全に静的なルートのエラーにクライアント側での修正方法を追加（[#99659](https://github.com/vercel/next.js/pull/99659)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — 静的ルートのエラーの説明を改善（ルート本体・`generateMetadata()`・`generateViewport()`）（[#99724](https://github.com/vercel/next.js/pull/99724)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-02 — OpenTelemetry のトレーサーに正しい Next.js のバージョンを設定（[#98262](https://github.com/vercel/next.js/pull/98262)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — App Router の開発インジケーターを出力完了時に確定（[#99384](https://github.com/vercel/next.js/pull/99384)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-09-30 — クライアントコンポーネントの読み込み計測を HTML レンダーごとに（[#99322](https://github.com/vercel/next.js/pull/99322), [#99426](https://github.com/vercel/next.js/pull/99426), [#99427](https://github.com/vercel/next.js/pull/99427)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — 開発オーバーレイの Security Insight のアップグレード案内を見やすく（[#99354](https://github.com/vercel/next.js/pull/99354)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-28 — Edge SSR でメタデータのストリーミング方針が守られない不具合を修正（[#99128](https://github.com/vercel/next.js/pull/99128)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-24 — オンデマンド生成の失敗時に `error.tsx` が表示されない不具合を修正（[#99037](https://github.com/vercel/next.js/pull/99037)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 開発オーバーレイのヘッダーが狭い画面で崩れる不具合を修正（[#99049](https://github.com/vercel/next.js/pull/99049)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 開発オーバーレイのハイドレーションエラー表示を統一（[#99008](https://github.com/vercel/next.js/pull/99008)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — ストリーミングとブロッキングでメタデータのレンダリング経路を統一（[#97440](https://github.com/vercel/next.js/pull/97440)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/vercel-next.js/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/vercel-next.js/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/vercel-next.js/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/vercel-next.js/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/vercel-next.js/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/vercel-next.js/releases/v16.4.2|v16.4.2]]
- [[repos/vercel-next.js/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/vercel-next.js/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/vercel-next.js/changes/2026-10-26|2026-10-26 の変更]]
- [[repos/vercel-next.js/releases/v16.4.3|v16.4.3]]
- [[repos/vercel-next.js/changes/2026-10-28|2026-10-28 の変更]]
