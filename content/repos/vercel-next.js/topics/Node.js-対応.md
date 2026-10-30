---
title: Node.js 対応
updated: 2026-10-30
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

Next.js が動く Node.js のバージョンとの互換性に関わる変更。Node.js 26 では `SlowBuffer` が削除されたため、それを使う同梱の `jsonwebtoken` を `fast-jwt` に置き換えた（v16.5.0-canary.32）。テストのネイティブアドオンのコンパイルも Node.js 26 向けに修正され、デプロイテストのデプロイは Node.js 22.x に固定された。

## 変更履歴

- 2026-10-28 — Node.js 26 対応のため、同梱の `jsonwebtoken` を `fast-jwt` に置き換え（[#100818](https://github.com/vercel/next.js/pull/100818)）📦 v16.5.0-canary.32 · [[repos/vercel-next.js/changes/2026-10-30|変更]]

## 関連

- [[repos/vercel-next.js/topics/リリース・CD|リリース・CD]]
