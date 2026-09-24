---
title: next/og
updated: 2026-09-24
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

`next/og` の `ImageResponse`（動的 OG 画像生成）まわりの実装。2026-09-22 に、SVG のシリアライズに起因するリモートコード実行の脆弱性（[GHSA-vcvr-r3jv-pc5j](https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j)）が安定版で修正されている。next/og を使っているアプリは、対象バージョン以降へのアップデートを推奨。

## 変更履歴

- 2026-09-24 — next/og の SVG シリアライズをセキュリティ強化（[#99061](https://github.com/vercel/next.js/pull/99061)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/vercel-next.js/releases/v16.3.6|v16.3.6]]
- [[repos/vercel-next.js/releases/v15.5.26|v15.5.26]]
