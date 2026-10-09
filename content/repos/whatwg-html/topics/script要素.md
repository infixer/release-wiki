---
title: script要素
updated: 2026-10-09
tags:
  - repo/whatwg-html
  - topic
---

## 概要

`script` 要素の処理（`scripting`）に関する仕様。`type` 属性の値から先頭と末尾の ASCII 空白を取り除くのは JavaScript MIME type の判定のときだけで、`type=" module "` のように空白を含む値はモジュールスクリプトにならない（WebKit・Chromium の挙動に合わせた）。Trusted Types 向けの IDL も HTML 本体で定義され、`src` は `TrustedScriptURL`、`text`・`innerText`・`textContent` は `TrustedScript` を受け取る。

## 主な API・オプション

- `type` 属性 — 前後の ASCII 空白を除くのは JavaScript MIME type の判定のときだけ（`type=" module "` はモジュールスクリプトにならない）
- `src` — `TrustedScriptURL` を受け取る
- `text`・`innerText`・`textContent` — `TrustedScript` を受け取る（`innerText`・`textContent` は `HTMLScriptElement` で shadow）

## 変更履歴

- 2026-10-09 — `HTMLScriptElement` の Trusted Types 向け IDL を Trusted Types 仕様の monkey patch から HTML 本体に取り込む（挙動の変更なし）（[#12195](https://github.com/whatwg/html/pull/12195)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-09|変更]]
- 2026-10-07 — classic 以外の script の `type` から空白を取り除かないように（`type=" module "` はモジュールスクリプトにならない）（#13012）（[#13031](https://github.com/whatwg/html/pull/13031)）⏳ 未リリース · [[repos/whatwg-html/changes/2026-10-07|変更]]

## 関連

- [[repos/whatwg-html/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/whatwg-html/changes/2026-10-07|2026-10-07 の変更]]
