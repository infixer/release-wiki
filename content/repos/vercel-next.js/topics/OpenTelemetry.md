---
title: OpenTelemetry
updated: 2026-10-16
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

`instrumentation.ts` で設定する OpenTelemetry（OTel）のトレースまわりの実装。middleware / `proxy.ts` を通るリクエストは、レンダリングが middleware のスパンの中に入れ子になり、どの構成でも 1 つのトレースにまとまるようになった（それまでは 2〜3 個に分かれ、16.3 ではさらに増えていた）。fetch のスパンは、ステータスが 400 以上のレスポンスをエラーとして記録する（いずれも未リリース）。CLI の匿名テレメトリは [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]] を参照。

## 主な API・オプション

- `instrumentation.ts` — OTel の設定を置くファイル

## 変更履歴

- 2026-10-15 — middleware を通るリクエストを 1 つのトレースにまとめる（16.3 からのトレースの重複を含めて修正）（[#100136](https://github.com/vercel/next.js/pull/100136)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-16|変更]]
- 2026-10-14 — fetch のスパンで HTTP の失敗（400 以上）をエラーとして記録（[#99877](https://github.com/vercel/next.js/pull/99877)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-10-16|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/vercel-next.js/topics/テレメトリ|テレメトリ]]
- [[repos/vercel-next.js/topics/レンダリング・DevTools|レンダリング・DevTools]]（OTel のトレーサーのバージョン設定）
