---
title: next/font
updated: 2026-10-07
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

`next/font`（特に `next/font/google`）によるフォントの取得・最適化まわりの実装。Turbopack では、Google Fonts のフォントファイルの取得に失敗したとき、原因の分かりにくい `Module not found` ではなく、スタイルシートの取得と同じく `next build` ではエラー、`next dev` では警告として報告するようになった（未リリース）。開発環境では失敗したファイルを空で返し、フォントスタックの次のフォントにフォールバックする。Google Fonts のメタデータ（`packages/font/src/google/font-data.json`）も更新された（未リリース）。

## 主な API・オプション

- `next/font/google` — Google Fonts の読み込み。プリロード可能なサブセットが無いフォントでは、自動的にプリロードが無効になる

## 変更履歴

- 2026-10-07 — Turbopack: `next/font/google` のフォントファイル取得の失敗をそのまま報告（[#99574](https://github.com/vercel/next.js/pull/99574)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — Google Fonts のデータを更新し、テスト用フィクスチャを修正（[#99753](https://github.com/vercel/next.js/pull/99753)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-07|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-07|2026-10-07 の変更]]
