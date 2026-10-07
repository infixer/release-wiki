---
title: whatwg/html
updated: 2026-10-07
tags:
  - repo/whatwg-html
---

[GitHub](https://github.com/whatwg/html) · ブランチ: `main`

## 最新リリース

今回の取り込み期間（2026-10-04〜2026-10-06）に Release の記録なし。

## 直近の注目変更

- `img` の relevant mutation から `width` を外す（[#13033](https://github.com/whatwg/html/pull/13033)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/画像|画像]]
- COOP・COEP のヘッダーに structured field の型（値は token、`report-to` は string）を要求（[#13032](https://github.com/whatwg/html/pull/13032)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]]
- classic 以外の script の `type` から空白を取り除かない（`type=" module "` はモジュールにならない）（[#13031](https://github.com/whatwg/html/pull/13031)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/script要素|script要素]]
- サニタイズのアルゴリズムで MathML の `<a>` を扱うように（[#12592](https://github.com/whatwg/html/pull/12592)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/サニタイザー|サニタイザー]]
- XML パーサーで DOM のノード作成アルゴリズムを使うように（[#13037](https://github.com/whatwg/html/pull/13037)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]]
- COEP/COOP の `report-to` は URL ではなくエンドポイント名を取ると修正（[#11366](https://github.com/whatwg/html/pull/11366)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]]
- ongoing API method tracker の null チェックを追加（[#13024](https://github.com/whatwg/html/pull/13024)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/Navigation-API|Navigation-API]]
- 「reload」ではスクロール位置を復元しないように（[#12993](https://github.com/whatwg/html/pull/12993)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/Navigation-API|Navigation-API]]
- イベントハンドラの「scripting is disabled」チェックを条件ごとに分割（[#13009](https://github.com/whatwg/html/pull/13009)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/イベントハンドラ|イベントハンドラ]]
- `MessagePort` の `close` イベントを削除（[#13016](https://github.com/whatwg/html/pull/13016)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/MessagePort|MessagePort]]

## トピック

- [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]] — COOP・COEP のヘッダーの型とその違反レポート（`report-to` など）
- [[repos/whatwg-html/topics/javascript-URL|javascript-URL]] — javascript: URL へのナビゲーションと評価
- [[repos/whatwg-html/topics/MessagePort|MessagePort]] — `MessagePort` の GC の扱い（`close` イベントの削除）
- [[repos/whatwg-html/topics/Navigation-API|Navigation-API]] — Navigation API のスクロール処理と ongoing API method tracker
- [[repos/whatwg-html/topics/script要素|script要素]] — `script` 要素の `type` 属性の判定（前後の空白の扱い）
- [[repos/whatwg-html/topics/select要素|select要素]] — `select`・`option` と `selectedcontent` の更新・選択状態
- [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]] — XML パーサーのノード作成アルゴリズム
- [[repos/whatwg-html/topics/イベントハンドラ|イベントハンドラ]] — イベントハンドラのコンパイルと呼び出し（scripting is disabled の扱い）
- [[repos/whatwg-html/topics/エンコーディング判定|エンコーディング判定]] — text/html 文書の文字エンコーディング推測（XML 宣言のスニッフィング含む）
- [[repos/whatwg-html/topics/画像|画像]] — `img` のソース選択（`sizes="auto"` の描画幅の保持など）と relevant mutation
- [[repos/whatwg-html/topics/サニタイザー|サニタイザー]] — サニタイズのアルゴリズムと安全な既定の設定（MathML の `a` など）
- [[repos/whatwg-html/topics/タイマー|タイマー]] — `setTimeout()`・`setInterval()` の初期化手順（文字列の Trusted Types チェック）
- [[repos/whatwg-html/topics/フォーカス|フォーカス]] — フォーカス移動時の `focus` イベント発火
- [[repos/whatwg-html/topics/フレームとナビゲーブル|フレームとナビゲーブル]] — frame/iframe の子ナビゲーブル作成とナビゲート時の initialInsertion
- [[repos/whatwg-html/topics/メディア要素|メディア要素]] — メディア要素の `loading` 属性とリソース選択

## 取り込み

- [[repos/whatwg-html/log|取り込み履歴]]
- 最近の変更: [[repos/whatwg-html/changes/2026-10-07|2026-10-07]]、[[repos/whatwg-html/changes/2026-10-05|2026-10-05]]、[[repos/whatwg-html/changes/2026-10-02|2026-10-02]]、[[repos/whatwg-html/changes/2026-09-30|2026-09-30]]、[[repos/whatwg-html/changes/2026-09-28|2026-09-28]]
