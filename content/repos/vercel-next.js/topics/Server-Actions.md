---
title: Server Actions
updated: 2026-10-28
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

App Router の Server Actions（サーバー上で実行される関数をクライアントから呼び出す仕組み）の実装。別のルートが持つアクションを呼んだときは、そのルートへリクエストを転送する処理がある。PPR ページへ遷移した後に遷移元ルートのアクションを呼ぶと、Vercel 上でこの転送がハングする不具合が修正された。安定版 v16.4.1 / v15.5.28 では、Server Actions を使う App Router でのサービス拒否（High）のセキュリティ修正が公開された。`generateStaticParams` の中から Server Action を呼ぶと `__next_require__ is not a function` になる問題も修正された（v16.5.0-canary.24）。Cache Components のページへの MPA のフォーム送信では、プリレンダーの RDC を保ったまま完全な HTML ドキュメントを描画するようになり、Docker 環境でも RSC / Server Actions の暗号化キーが `.next/cache` に永続化されるようになった（いずれも v16.5.0-canary.29）。

## 変更履歴

- 2026-10-27 — Docker 環境でも暗号化キーなどのストレージキャッシュを永続化（[#100790](https://github.com/vercel/next.js/pull/100790)）📦 v16.5.0-canary.29 · [[repos/vercel-next.js/changes/2026-10-28|変更]]
- 2026-10-26 — MPA の Server Actions の後に完全な HTML ドキュメントを描画し、`useActionState` の値も表示（[#100740](https://github.com/vercel/next.js/pull/100740)）📦 v16.5.0-canary.29 · [[repos/vercel-next.js/changes/2026-10-28|変更]]
- 2026-10-23 — `encryptActionBoundArgs` が RDC にヒットしたとき `CacheSignal` の読み取りを終えず、`partialPrefetching` のページのレスポンスが終わらない問題を修正（[#100622](https://github.com/vercel/next.js/pull/100622)）📦 v16.5.0-canary.27 · [[repos/vercel-next.js/changes/2026-10-26|変更]]
- 2026-10-21 — `generateStaticParams` から Server Action を呼ぶと `__next_require__ is not a function` になる問題を修正（[#99912](https://github.com/vercel/next.js/pull/99912)）📦 v16.5.0-canary.24 · [[repos/vercel-next.js/changes/2026-10-23|変更]]
- 2026-09-28 — PPR ページへ遷移した後に Server Action がハングする不具合を修正（[#99252](https://github.com/vercel/next.js/pull/99252)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
- [[repos/vercel-next.js/releases/v16.4.1|v16.4.1]]
- [[repos/vercel-next.js/releases/v15.5.28|v15.5.28]]
- [[repos/vercel-next.js/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/vercel-next.js/changes/2026-10-26|2026-10-26 の変更]]
- [[repos/vercel-next.js/changes/2026-10-28|2026-10-28 の変更]]
