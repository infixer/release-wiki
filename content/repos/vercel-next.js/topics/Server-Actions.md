---
title: Server Actions
updated: 2026-09-28
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

App Router の Server Actions（サーバー上で実行される関数をクライアントから呼び出す仕組み）の実装。別のルートが持つアクションを呼んだときは、そのルートへリクエストを転送する処理がある。PPR ページへ遷移した後に遷移元ルートのアクションを呼ぶと、Vercel 上でこの転送がハングする不具合が修正された。

## 変更履歴

- 2026-09-28 — PPR ページへ遷移した後に Server Action がハングする不具合を修正（[#99252](https://github.com/vercel/next.js/pull/99252)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/topics/キャッシュ・プリレンダリング|キャッシュ・プリレンダリング]]
