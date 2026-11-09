---
title: whatwg/html
updated: 2026-11-09
tags:
  - repo/whatwg-html
---

[GitHub](https://github.com/whatwg/html) · ブランチ: `main`

## 最新リリース

- 安定版: なし
- プレリリース: なし

## 直近の注目変更

- `picture` の `source` の `width`・`height` による `img` の寸法を同期的に決めるように（ブラウザの既存の挙動に合わせた）（[#13057](https://github.com/whatwg/html/pull/13057)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/画像|画像]]
- ストリーミングで HTML をパース・挿入するメソッド（`streamHTML()`・`streamAppendHTML()`・`streamBeforeHTML()` など、`WritableStream` を返す）を追加（[#12758](https://github.com/whatwg/html/pull/12758)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/サニタイザー|サニタイザー]]
- レスポンシブ画像のソースの選択を規範的に定義（device pixel ratio 以上の最初の候補を選ぶ）（[#13183](https://github.com/whatwg/html/pull/13183)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/画像|画像]]
- `embed` 要素に廃止された IDL 属性 `hspace`・`vspace` を追加（[#13114](https://github.com/whatwg/html/pull/13114)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/廃止された機能|廃止された機能]]
- パーサーが挿入したフォームコントロールでも挿入手順の残り（内部リソースのリンクの処理など）を実行するように（[#13182](https://github.com/whatwg/html/pull/13182)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/フォーム|フォーム]]
- node navigable が null の文書（`createHTMLDocument()` など）で「has focus steps」が false を返すように（[#13163](https://github.com/whatwg/html/pull/13163)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/フォーカス|フォーカス]]
- CORP のチェックを HTTP(S) のナビゲーションのレスポンスだけで行うように（COEP の下で about:blank・data:・blob: をブロックしない）（[#13087](https://github.com/whatwg/html/pull/13087)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/COOP-COEP|COOP-COEP]]
- ポップアップとトップレベルの data: 文書のセキュアコンテキスト判定を作成元に合わせる（[#13103](https://github.com/whatwg/html/pull/13103)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/セキュアコンテキスト|セキュアコンテキスト]]
- Fragment のスクリプティングモードで `force async` を false にしない（[#13080](https://github.com/whatwg/html/pull/13080)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/script要素|script要素]]
- `input` 要素の廃止された `hspace`・`vspace` 属性を追加（[#13095](https://github.com/whatwg/html/pull/13095)）⏳ 未リリース · トピック: [[repos/whatwg-html/topics/廃止された機能|廃止された機能]]

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
- [[repos/whatwg-html/topics/ワークレット|ワークレット]] — worklet の環境設定（cross-origin isolated capability・time origin）

## 取り込み

- [[repos/whatwg-html/log|取り込み履歴]]
- 最近の変更: [[repos/whatwg-html/changes/2026-11-09|2026-11-09]]、[[repos/whatwg-html/changes/2026-11-06|2026-11-06]]、[[repos/whatwg-html/changes/2026-11-04|2026-11-04]]、[[repos/whatwg-html/changes/2026-11-02|2026-11-02]]、[[repos/whatwg-html/changes/2026-10-28|2026-10-28]]
