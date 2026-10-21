---
title: oxc-project/oxc crates_v0.155.0
date: 2026-10-21
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.155.0) · 公開: 2026-10-19

## 要点

- **破壊的変更**: JSX の文字参照を孤立サロゲートとしてデコード（[#26712](https://github.com/oxc-project/oxc/pull/26712)）、静的なプロパティ名・メンバー名で孤立サロゲートを保つ（[#27095](https://github.com/oxc-project/oxc/pull/27095)、[#26677](https://github.com/oxc-project/oxc/pull/26677)）
- Minifier: 配列の `join` の畳み込み（[#27905](https://github.com/oxc-project/oxc/pull/27905)）、void の式へのド・モルガンの最適化（[#27375](https://github.com/oxc-project/oxc/pull/27375)）
- AST: enum のノード ID のセッター `set_node_id` を生成（[#27500](https://github.com/oxc-project/oxc/pull/27500)）
- Minifier・定数評価の修正: 文字列の添字を UTF-16 コード単位で畳み込む（[#27096](https://github.com/oxc-project/oxc/pull/27096)）、`to_primitive` でシーケンス式を見る（[#27837](https://github.com/oxc-project/oxc/pull/27837)）、`parseFloat`・`Number.isInteger` / `isSafeInteger`・BigInt の `==`・`Math.cbrt` の誤った畳み込み（[#27695](https://github.com/oxc-project/oxc/pull/27695)、[#27622](https://github.com/oxc-project/oxc/pull/27622)、[#27656](https://github.com/oxc-project/oxc/pull/27656)、[#27621](https://github.com/oxc-project/oxc/pull/27621)）、括弧の無い本体の `debugger` の除去（[#27867](https://github.com/oxc-project/oxc/pull/27867)）、実行されない `for` の `let` / `const` の初期化子と `(0, x)` の間接アクセスを保つ（[#27676](https://github.com/oxc-project/oxc/pull/27676)、[#27082](https://github.com/oxc-project/oxc/pull/27082)）
- Linter: 孤立サロゲートを含むモジュール指定子・文字列値のチェック（[#26717](https://github.com/oxc-project/oxc/pull/26717)、[#26716](https://github.com/oxc-project/oxc/pull/26716)）、JSDoc の引用符の後のコードスパンの解析（[#27955](https://github.com/oxc-project/oxc/pull/27955)）
- 性能: codegen の分岐・ハッシュマップ参照・コピーの削減（[#27840](https://github.com/oxc-project/oxc/pull/27840)、[#27845](https://github.com/oxc-project/oxc/pull/27845)、[#27843](https://github.com/oxc-project/oxc/pull/27843) ほか）、診断の範囲検索の高速化（[#27770](https://github.com/oxc-project/oxc/pull/27770)）

> [!warning] 0.155.0 で入った誤り
> #27096 により `delete "😀"[0]` が `!0` に畳み込まれる問題が 0.155.0 で生じた。修正は [#27990](https://github.com/oxc-project/oxc/pull/27990)（未リリース）。

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-21|2026-10-21 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-19|2026-10-19 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-16|2026-10-16 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]、[[repos/oxc-project-oxc/topics/oxc_str|oxc_str]]、[[repos/oxc-project-oxc/topics/パーサー|パーサー]]
