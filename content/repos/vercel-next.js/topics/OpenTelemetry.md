---
title: OpenTelemetry
updated: 2026-10-26
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

`instrumentation.ts` で設定する OpenTelemetry（OTel）のトレースまわりの実装。middleware / `proxy.ts` を通るリクエストを 1 つのトレースにまとめる変更（[#100136](https://github.com/vercel/next.js/pull/100136)）は一度マージされたが、2026-10-16 に取り消された（[#100302](https://github.com/vercel/next.js/pull/100302)、v16.5.0-canary.17）。fetch のスパンは、ステータスが 400 以上のレスポンスをエラーとして記録する（未リリース）。CLI の匿名テレメトリは [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] を参照。直接のエントリポイント（Vercel・アダプター・standalone）では、リクエストのスパンがルートモジュールの準備より前に始まり、16.4 から出ていた親の無い `prepare route module` のトレースが無くなった。middleware / proxy の直接のエントリでアダプターが例外を投げても、`instrumentation.ts` の登録のスパンは失われない（いずれも v16.5.0-canary.24）。

## 主な API・オプション

- `instrumentation.ts` — OTel の設定を置くファイル

## 変更履歴

- 2026-10-22 — アダプターが例外を投げても middleware の instrumentation のスパンを残す（[#100552](https://github.com/vercel/next.js/pull/100552)）📦 v16.5.0-canary.24 · [[repos/vercel-next.js/changes/2026-10-23|変更]]
- 2026-10-21 — リクエストのスパンをルートモジュールの準備より前に開始（親の無い `prepare route module` のトレースを解消）（[#100349](https://github.com/vercel/next.js/pull/100349)）📦 v16.5.0-canary.24 · [[repos/vercel-next.js/changes/2026-10-23|変更]]
- 2026-10-16 — 「middleware を通るリクエストを 1 つのトレースに」（#100136）を取り消し（[#100302](https://github.com/vercel/next.js/pull/100302)）📦 v16.5.0-canary.17 · [[repos/vercel-next.js/changes/2026-10-19|変更]]
- 2026-10-15 — middleware を通るリクエストを 1 つのトレースにまとめる（16.3 からのトレースの重複を含めて修正）（[#100136](https://github.com/vercel/next.js/pull/100136)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-16|変更]]
- 2026-10-14 — fetch のスパンで HTTP の失敗（400 以上）をエラーとして記録（[#99877](https://github.com/vercel/next.js/pull/99877)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-16|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/vercel-next.js/changes/2026-10-19|2026-10-19 の変更]]
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]]
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]（OTel のトレーサーのバージョン設定）
- [[repos/vercel-next.js/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/vercel-next.js/releases/v16.4.3|v16.4.3]]
