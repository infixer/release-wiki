---
title: javascript-URL
updated: 2026-09-24
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`javascript:` URL へのナビゲーション時の評価処理。Trusted Types のデフォルトポリシーによる URL の書き換えとの関係、CSP チェック、合成リクエスト（synthetic request）まわりの仕様を含む。

## 主なアルゴリズム

- `evaluate a javascript: URL` — `javascript:` URL のナビゲーション時にスクリプトを評価する手順。Trusted Types によって書き換えられた URL を評価する。navigation ID を受け取る。

## 変更履歴

- 2026-09-24 — javascript: URL ナビゲーションの追加修正（CSP チェックによる URL 書き換えの明記、合成リクエストへの client 設定、load イベント手順のスキップ、navigation ID の受け渡し）（[#12978](https://github.com/whatwg/html/pull/12978)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-09-24|変更]]
- 2026-09-24 — Trusted Types で書き換えられた javascript: URL を評価するよう修正（[#12959](https://github.com/whatwg/html/pull/12959)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-09-24|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-09-24|2026-09-24 の変更]]
