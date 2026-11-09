---
title: oxc-project/oxc oxfmt_v0.77.0
date: 2026-11-09
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.77.0) · 公開: 2026-11-06

## 要点

- **破壊的変更**: `parser:vue` のファイル（`.vue`）を Prettier ではなく `oxc_formatter_htmlish` で整形（[#28848](https://github.com/oxc-project/oxc/pull/28848)）
- Vue テンプレートの整形（[#28847](https://github.com/oxc-project/oxc/pull/28847)）、テンプレートの式とハンドラーを `JsRoot` として整形（[#28846](https://github.com/oxc-project/oxc/pull/28846)）
- Vite+ の設定の `root` を設定ファイルのディレクトリから解決（oxlint と共通）（[#28801](https://github.com/oxc-project/oxc/pull/28801)）
- `sortTailwindcss` の修正: メンバーチェーンとして出力される Tailwind の呼び出しの並べ替え（[#28800](https://github.com/oxc-project/oxc/pull/28800)）、1 クラスとして出力されるキーのクォート（[#28798](https://github.com/oxc-project/oxc/pull/28798)）、入れ子の非 Tailwind 呼び出しのテンプレートを並べ替えない（[#28794](https://github.com/oxc-project/oxc/pull/28794)）、空白を詰めた後の形でレイアウトを決める（[#28744](https://github.com/oxc-project/oxc/pull/28744)、[#28745](https://github.com/oxc-project/oxc/pull/28745)、[#28791](https://github.com/oxc-project/oxc/pull/28791)）
- その他の修正: 埋め込みの `doctype` の大文字・小文字を保つ（[#28797](https://github.com/oxc-project/oxc/pull/28797)）、JSDoc の `@tag` が行頭に移らない（[#28835](https://github.com/oxc-project/oxc/pull/28835)）、CSS の `style` 属性内のコメント（[#28832](https://github.com/oxc-project/oxc/pull/28832)）と `:deep`・`:slotted`・`:local` 内のセレクターの正規化（[#28805](https://github.com/oxc-project/oxc/pull/28805)）、rest 引数のデコレーターの出力（[#28731](https://github.com/oxc-project/oxc/pull/28731)）
- 性能: Prettier のワーカーを必要になったときに起動（[#28789](https://github.com/oxc-project/oxc/pull/28789)）、tinypool で再び `worker_threads` を使う（[#28787](https://github.com/oxc-project/oxc/pull/28787)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/HTMLフォーマッタ|HTMLフォーマッタ]]、[[repos/oxc-project-oxc/topics/Oxfmt|Oxfmt]]、[[repos/oxc-project-oxc/topics/Vite+連携|Vite+連携]]
