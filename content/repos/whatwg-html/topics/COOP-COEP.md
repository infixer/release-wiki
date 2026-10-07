---
title: COOP-COEP
updated: 2026-10-07
tags:
  - repo/whatwg-html
  - topic
---

## 概要

Cross-Origin-Opener-Policy（COOP）と Cross-Origin-Embedder-Policy（COEP）、およびその違反レポートに関する仕様。`report-to` パラメータは URL ではなく、`Reporting-Endpoints` ヘッダーで送られるエンドポイント名を取る（Reporting API に合わせた）。2026-10-05 の取り込みでは、COOP のアルゴリズムの引数の順序や未定義の変数などの編集上の修正もまとめて入った。ヘッダー（Report-Only 版を含む）の値は structured field の token、`report-to` パラメータは string でなければならない（Chromium と WebKit の実装に合わせた。エンドポイント名は token であり、`Permissions-Policy` などとは異なる）。

## 主な API・オプション

- `Cross-Origin-Opener-Policy` / `Cross-Origin-Embedder-Policy`（と Report-Only 版）— 値は token
- `report-to` パラメータ — string（`Reporting-Endpoints` ヘッダーで送られるエンドポイント名）

## 変更履歴

- 2026-10-07 — COOP・COEP のヘッダーの値は token、`report-to` は string と、structured field の型を要求（[#13032](https://github.com/whatwg/html/pull/13032)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-07|変更]]
- 2026-10-05 — COEP/COOP の `report-to` が URL ではなくエンドポイント名を取ると修正（#11365 を修正）（[#11366](https://github.com/whatwg/html/pull/11366)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-05|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/whatwg-html/changes/2026-10-05|2026-10-05 の変更]]（Editorial の修正 [#13026](https://github.com/whatwg/html/pull/13026)・[#13030](https://github.com/whatwg/html/pull/13030) も同じ回）
