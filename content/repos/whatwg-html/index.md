---
title: whatwg/html
updated: 2026-10-05
tags:
  - repo/whatwg-html
---

[GitHub](https://github.com/whatwg/html) · ブランチ: `main`

## 最新リリース

今回の取り込み期間（2026-10-01〜2026-10-04）に Release の記録なし。

## 直近の注目変更

- XML パーサーで DOM のノード作成アルゴリズムを使うように（[#13037](https://github.com/whatwg/html/pull/13037)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]]
- COEP/COOP の `report-to` は URL ではなくエンドポイント名を取ると修正（[#11366](https://github.com/whatwg/html/pull/11366)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]]
- ongoing API method tracker の null チェックを追加（[#13024](https://github.com/whatwg/html/pull/13024)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/Navigation-API|Navigation-API]]
- 「reload」ではスクロール位置を復元しないように（[#12993](https://github.com/whatwg/html/pull/12993)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/Navigation-API|Navigation-API]]
- イベントハンドラの「scripting is disabled」チェックを条件ごとに分割（[#13009](https://github.com/whatwg/html/pull/13009)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/イベントハンドラ|イベントハンドラ]]
- `MessagePort` の `close` イベントを削除（[#13016](https://github.com/whatwg/html/pull/13016)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/MessagePort|MessagePort]]
- 文字列を渡したタイマーの Trusted Types チェックを同期的に例外送出するように（[#13010](https://github.com/whatwg/html/pull/13010)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/タイマー|タイマー]]
- `sizes="auto"` の画像が描画されなくなっても最後の描画サイズを保持（[#13004](https://github.com/whatwg/html/pull/13004)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/画像|画像]]
- lazy-loading のメディアで `source` 挿入時に load イベントを遅延させないよう修正（[#12972](https://github.com/whatwg/html/pull/12972)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/メディア要素|メディア要素]]
- `select` の子孫にあるすべての `selectedcontent` 要素を最新に保つように（[#12263](https://github.com/whatwg/html/pull/12263)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/select要素|select要素]]

## トピック

- [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]] — COOP・COEP とその違反レポート（`report-to` など）
- [[repos/whatwg-html/topics/javascript-URL|javascript-URL]] — javascript: URL へのナビゲーションと評価
- [[repos/whatwg-html/topics/MessagePort|MessagePort]] — `MessagePort` の GC の扱い（`close` イベントの削除）
- [[repos/whatwg-html/topics/Navigation-API|Navigation-API]] — Navigation API のスクロール処理と ongoing API method tracker
- [[repos/whatwg-html/topics/select要素|select要素]] — `select`・`option` と `selectedcontent` の更新・選択状態
- [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]] — XML パーサーのノード作成アルゴリズム
- [[repos/whatwg-html/topics/イベントハンドラ|イベントハンドラ]] — イベントハンドラのコンパイルと呼び出し（scripting is disabled の扱い）
- [[repos/whatwg-html/topics/エンコーディング判定|エンコーディング判定]] — text/html 文書の文字エンコーディング推測（XML 宣言のスニッフィング含む）
- [[repos/whatwg-html/topics/画像|画像]] — `img` のソース選択（`sizes="auto"` の描画幅の保持など）
- [[repos/whatwg-html/topics/タイマー|タイマー]] — `setTimeout()`・`setInterval()` の初期化手順（文字列の Trusted Types チェック）
- [[repos/whatwg-html/topics/フォーカス|フォーカス]] — フォーカス移動時の `focus` イベント発火
- [[repos/whatwg-html/topics/フレームとナビゲーブル|フレームとナビゲーブル]] — frame/iframe の子ナビゲーブル作成とナビゲート時の initialInsertion
- [[repos/whatwg-html/topics/メディア要素|メディア要素]] — メディア要素の `loading` 属性とリソース選択

## 取り込み

- [[repos/whatwg-html/log|取り込み履歴]]
- 最近の変更: [[repos/whatwg-html/changes/2026-10-05|2026-10-05]]、[[repos/whatwg-html/changes/2026-10-02|2026-10-02]]、[[repos/whatwg-html/changes/2026-09-30|2026-09-30]]、[[repos/whatwg-html/changes/2026-09-28|2026-09-28]]、[[repos/whatwg-html/changes/2026-09-24|2026-09-24]]
