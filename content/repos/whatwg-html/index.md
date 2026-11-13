---
title: whatwg/html
updated: 2026-11-13
tags:
  - repo/whatwg-html
---

[GitHub](https://github.com/whatwg/html) · ブランチ: `main`

## 最新リリース

- 安定版: なし
- プレリリース: なし

## 直近の注目変更

- canvas にトーンマッピング（`CanvasRenderingContext2DSettings` の `toneMapping`、`"standard"` / `"extended"`）を追加し、出力時にデバイスの HDR headroom に合わせてトーンマッピング（[#11734](https://github.com/whatwg/html/pull/11734)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/canvas要素|canvas要素]]
- パーサーが要素の子のパースを終えたときの「finish parsing the children」を定義（[#13228](https://github.com/whatwg/html/pull/13228)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/HTMLパーサー|HTMLパーサー]]
- `selectedcontent` 要素を更新するタイミングを精密化（更新の不足・二重の更新を解消）（[#13005](https://github.com/whatwg/html/pull/13005)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/select要素|select要素]]
- `window.close()` で incumbent の文書の sandboxing flag を確認（[#12960](https://github.com/whatwg/html/pull/12960)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/Windowオブジェクト|Windowオブジェクト]]
- `SharedWorker()` の文字列の第 2 引数でも `SharedWorkerOptions`（`extendedLifetime: false`）を使う（[#13248](https://github.com/whatwg/html/pull/13248)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/ワーカー|ワーカー]]
- `NavigateEvent` の中止手順で API method tracker を束縛（[#13247](https://github.com/whatwg/html/pull/13247)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/Navigation-API|Navigation-API]]
- `selectedcontent` に複製するときに `script`・`iframe`・`embed`・`object` などの要素を取り除く（[#13201](https://github.com/whatwg/html/pull/13201)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/select要素|select要素]]
- 要素のアップグレード時にカスタム要素レジストリが null（別の文書に adopt された）の場合を扱う（[#13216](https://github.com/whatwg/html/pull/13216)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/カスタム要素|カスタム要素]]
- `picture` の `source` の `width`・`height` による `img` の寸法を同期的に決めるように（ブラウザの既存の挙動に合わせた）（[#13057](https://github.com/whatwg/html/pull/13057)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/画像|画像]]
- ストリーミングで HTML をパース・挿入するメソッド（`streamHTML()`・`streamAppendHTML()`・`streamBeforeHTML()` など、`WritableStream` を返す）を追加（[#12758](https://github.com/whatwg/html/pull/12758)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/サニタイザー|サニタイザー]]

## トピック

- [[repos/whatwg-html/topics/canvas要素|canvas要素]] — `canvas` 要素と 2D コンテキスト（トーンマッピング `toneMapping`）
- [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]] — COOP・COEP のヘッダーの型とその違反レポート（`report-to` など）、COEP の下での CORP のチェック
- [[repos/whatwg-html/topics/HTMLパーサー|HTMLパーサー]] — HTML パーサーの tree construction（「finish parsing the children」と children parsed steps）
- [[repos/whatwg-html/topics/javascript-URL|javascript-URL]] — javascript: URL へのナビゲーションと評価
- [[repos/whatwg-html/topics/MessagePort|MessagePort]] — `MessagePort` の GC の扱い（`close` イベントの削除）
- [[repos/whatwg-html/topics/Navigation-API|Navigation-API]] — Navigation API のスクロール処理と ongoing API method tracker（`NavigateEvent` の中止手順）
- [[repos/whatwg-html/topics/popover|popover]] — popover の表示・非表示（取り除かれた・別文書に移された popover の扱い）
- [[repos/whatwg-html/topics/script要素|script要素]] — `script` 要素の `type` 属性の判定、Trusted Types 向け IDL、Fragment モードの `force async`
- [[repos/whatwg-html/topics/select要素|select要素]] — `select`・`option` と `selectedcontent` の更新（タイミングの精密化）・選択状態・複製時に取り除く要素
- [[repos/whatwg-html/topics/style要素|style要素]] — `style` 要素を置ける場所（`body` 内での `@scope` 付き `style`）と子のパース終了時の処理
- [[repos/whatwg-html/topics/Windowオブジェクト|Windowオブジェクト]] — `Window` の API（`window.close()` の sandboxing flag の確認）
- [[repos/whatwg-html/topics/XMLパーサー|XMLパーサー]] — XML パーサーのノード作成アルゴリズム
- [[repos/whatwg-html/topics/イベントハンドラ|イベントハンドラ]] — イベントハンドラのコンパイルと呼び出し（scripting is disabled の扱い）
- [[repos/whatwg-html/topics/エンコーディング判定|エンコーディング判定]] — text/html 文書の文字エンコーディング推測（XML 宣言のスニッフィング含む）
- [[repos/whatwg-html/topics/カスタム要素|カスタム要素]] — カスタム要素のアップグレードとカスタム要素レジストリ（adopt でレジストリが null になる場合）
- [[repos/whatwg-html/topics/画像|画像]] — `img` のソース選択（`srcset` の候補選択の規範化、`sizes="auto"` の描画幅の保持など）と relevant mutation、`picture` の `source` による寸法
- [[repos/whatwg-html/topics/サニタイザー|サニタイザー]] — パース中のサニタイズ、位置指定の HTML 挿入メソッド（`appendHTML()` など）とストリーミング版（`streamHTML()` など）、fragment parser mode と Trusted Types の `createParserOptions`
- [[repos/whatwg-html/topics/シリアライズと転送|シリアライズと転送]] — シリアライズ・転送と agent cluster への制限（`[SameAgentCluster]`）
- [[repos/whatwg-html/topics/セキュアコンテキスト|セキュアコンテキスト]] — 文書がセキュアコンテキストかどうかの判定（ポップアップ・data: 文書）
- [[repos/whatwg-html/topics/タイマー|タイマー]] — `setTimeout()`・`setInterval()` の初期化手順（文字列の Trusted Types・CSP チェック）
- [[repos/whatwg-html/topics/廃止された機能|廃止された機能]] — 仕様の廃止された機能（obsolete）の節（`input`・`embed` の `hspace`・`vspace` など）
- [[repos/whatwg-html/topics/フォーカス|フォーカス]] — フォーカス移動時の `focus` イベント発火と「has focus steps」
- [[repos/whatwg-html/topics/フォーム|フォーム]] — フォームコントロールの挿入手順とフォームオーナーのリセット
- [[repos/whatwg-html/topics/フレームとナビゲーブル|フレームとナビゲーブル]] — frame/iframe の子ナビゲーブル作成とナビゲート時の initialInsertion
- [[repos/whatwg-html/topics/ベースURL|ベースURL]] — Document のベース URL（`baseURI`、複製時の base URL override）
- [[repos/whatwg-html/topics/メディア要素|メディア要素]] — メディア要素の `loading` 属性とリソース選択（`source` 候補の扱い）
- [[repos/whatwg-html/topics/ワーカー|ワーカー]] — Web Worker（`SharedWorker()` のオプションと `extendedLifetime`）
- [[repos/whatwg-html/topics/ワークレット|ワークレット]] — worklet の環境設定（cross-origin isolated capability・time origin）

## 取り込み

- [[repos/whatwg-html/log|取り込み履歴]]
- 最近の変更: [[repos/whatwg-html/changes/2026-11-13|2026-11-13]]、[[repos/whatwg-html/changes/2026-11-11|2026-11-11]]、[[repos/whatwg-html/changes/2026-11-09|2026-11-09]]、[[repos/whatwg-html/changes/2026-11-06|2026-11-06]]、[[repos/whatwg-html/changes/2026-11-04|2026-11-04]]
