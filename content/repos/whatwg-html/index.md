---
title: whatwg/html
updated: 2026-10-23
tags:
  - repo/whatwg-html
---

[GitHub](https://github.com/whatwg/html) · ブランチ: `main`

## 最新リリース

- 安定版: なし
- プレリリース: なし

## 直近の注目変更

- CORP のチェックを HTTP(S) のナビゲーションのレスポンスだけで行うように（COEP の下で about:blank・data:・blob: をブロックしない）（[#13087](https://github.com/whatwg/html/pull/13087)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]]
- ポップアップとトップレベルの data: 文書のセキュアコンテキスト判定を作成元に合わせる（[#13103](https://github.com/whatwg/html/pull/13103)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/セキュアコンテキスト|セキュアコンテキスト]]
- Fragment のスクリプティングモードで `force async` を false にしない（[#13080](https://github.com/whatwg/html/pull/13080)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/script要素|script要素]]
- `input` 要素の廃止された `hspace`・`vspace` 属性を追加（[#13095](https://github.com/whatwg/html/pull/13095)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/廃止された機能|廃止された機能]]
- 複製した Document のベース URL を考慮するように（`baseURI`・base URL override）（[#12674](https://github.com/whatwg/html/pull/12674)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/ベースURL|ベースURL]]
- シリアライズと転送を同じ agent cluster に制限できるように（`[SameAgentCluster]`、`VideoFrame` などの向け）（[#13055](https://github.com/whatwg/html/pull/13055)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/シリアライズと転送|シリアライズと転送]]
- 位置を指定して HTML を挿入する `appendHTML()`・`prependHTML()`・`beforeHTML()`・`afterHTML()`・`replaceWithHTML()`（と `*Unsafe()` 版）を追加（[#12753](https://github.com/whatwg/html/pull/12753)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/サニタイザー|サニタイザー]]
- パースしながらサニタイズするように（独立した「sanitize」アルゴリズムを廃止）（[#12756](https://github.com/whatwg/html/pull/12756)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/サニタイザー|サニタイザー]]
- 文字列を渡したタイマーの CSP チェックを同期的に（ブロック時は `0` を返す）（[#13023](https://github.com/whatwg/html/pull/13023)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/タイマー|タイマー]]
- 取り除かれたメディアの `source` 候補に `error` を発火しないように（[#13043](https://github.com/whatwg/html/pull/13043)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/メディア要素|メディア要素]]

## トピック

- [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]] — COOP・COEP のヘッダーの型とその違反レポート（`report-to` など）、COEP の下での CORP のチェック
- [[repos/whatwg-html/topics/javascript-URL|javascript-URL]] — javascript: URL へのナビゲーションと評価
- [[repos/whatwg-html/topics/MessagePort|MessagePort]] — `MessagePort` の GC の扱い（`close` イベントの削除）
- [[repos/whatwg-html/topics/Navigation-API|Navigation-API]] — Navigation API のスクロール処理と ongoing API method tracker
- [[repos/whatwg-html/topics/popover|popover]] — popover の表示・非表示（取り除かれた・別文書に移された popover の扱い）
- [[repos/whatwg-html/topics/script要素|script要素]] — `script` 要素の `type` 属性の判定、Trusted Types 向け IDL、Fragment モードの `force async`
- [[repos/whatwg-html/topics/select要素|select要素]] — `select`・`option` と `selectedcontent` の更新・選択状態
- [[repos/whatwg-html/topics/style要素|style要素]] — `style` 要素を置ける場所（`body` 内での `@scope` 付き `style`）
- [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]] — XML パーサーのノード作成アルゴリズム
- [[repos/whatwg-html/topics/イベントハンドラ|イベントハンドラ]] — イベントハンドラのコンパイルと呼び出し（scripting is disabled の扱い）
- [[repos/whatwg-html/topics/エンコーディング判定|エンコーディング判定]] — text/html 文書の文字エンコーディング推測（XML 宣言のスニッフィング含む）
- [[repos/whatwg-html/topics/画像|画像]] — `img` のソース選択（`sizes="auto"` の描画幅の保持など）と relevant mutation
- [[repos/whatwg-html/topics/サニタイザー|サニタイザー]] — パース中のサニタイズ、位置指定の HTML 挿入メソッド（`appendHTML()` など）、fragment parser mode と Trusted Types の `createParserOptions`
- [[repos/whatwg-html/topics/シリアライズと転送|シリアライズと転送]] — シリアライズ・転送と agent cluster への制限（`[SameAgentCluster]`）
- [[repos/whatwg-html/topics/セキュアコンテキスト|セキュアコンテキスト]] — 文書がセキュアコンテキストかどうかの判定（ポップアップ・data: 文書）
- [[repos/whatwg-html/topics/タイマー|タイマー]] — `setTimeout()`・`setInterval()` の初期化手順（文字列の Trusted Types・CSP チェック）
- [[repos/whatwg-html/topics/廃止された機能|廃止された機能]] — 仕様の廃止された機能（obsolete）の節（`input` の `hspace`・`vspace` など）
- [[repos/whatwg-html/topics/フォーカス|フォーカス]] — フォーカス移動時の `focus` イベント発火
- [[repos/whatwg-html/topics/フレームとナビゲーブル|フレームとナビゲーブル]] — frame/iframe の子ナビゲーブル作成とナビゲート時の initialInsertion
- [[repos/whatwg-html/topics/ベースURL|ベースURL]] — Document のベース URL（`baseURI`、複製時の base URL override）
- [[repos/whatwg-html/topics/メディア要素|メディア要素]] — メディア要素の `loading` 属性とリソース選択（`source` 候補の扱い）
- [[repos/whatwg-html/topics/ワークレット|ワークレット]] — worklet の環境設定（cross-origin isolated capability・time origin）

## 取り込み

- [[repos/whatwg-html/log|取り込み履歴]]
- 最近の変更: [[repos/whatwg-html/changes/2026-10-23|2026-10-23]]、[[repos/whatwg-html/changes/2026-10-21|2026-10-21]]、[[repos/whatwg-html/changes/2026-10-19|2026-10-19]]、[[repos/whatwg-html/changes/2026-10-16|2026-10-16]]、[[repos/whatwg-html/changes/2026-10-14|2026-10-14]]
