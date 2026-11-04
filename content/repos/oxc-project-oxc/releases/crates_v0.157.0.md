---
title: oxc-project/oxc crates_v0.157.0
date: 2026-11-04
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.157.0) · 公開: 2026-11-02

## 要点

- transform-react: TypeScript の変換オプションを公開
- パーサー: 重複した import 属性のキーに分かりやすいエラー（[#28262](https://github.com/oxc-project/oxc/pull/28262)）
- パーサーの修正: sloppy モードの `let` 式とラベルを解析（[#28438](https://github.com/oxc-project/oxc/pull/28438)）、JavaScript でのオプショナルなクラスメンバー・TypeScript の default export を拒否（[#28439](https://github.com/oxc-project/oxc/pull/28439)、[#28440](https://github.com/oxc-project/oxc/pull/28440)）、再エクスポートでデフォルト import の名前を保持（[#28442](https://github.com/oxc-project/oxc/pull/28442)）、かっこで囲んだ private-in 式を許可（[#28284](https://github.com/oxc-project/oxc/pull/28284)）、先頭が 0 の数値の指数を扱う（[#28295](https://github.com/oxc-project/oxc/pull/28295)）
- 正規表現の修正: 不完全な Unicode のアトムエスケープを拒否（[#28448](https://github.com/oxc-project/oxc/pull/28448)）、大きすぎるレガシーの量指定子を許可（[#28449](https://github.com/oxc-project/oxc/pull/28449)）、コンストラクターのパターンとフラグのデコードを揃える（[#28298](https://github.com/oxc-project/oxc/pull/28298)）ほか
- semantic: strict モードの `eval`・`arguments` への書き込みを参照フラグで確認（[#28445](https://github.com/oxc-project/oxc/pull/28445)）、`let` 束縛の走査をアロー関数で止める（[#28444](https://github.com/oxc-project/oxc/pull/28444)）
- ecmascript: オペランドが文字列の可能性があるときは数値の `+` の畳み込みをしない（[#28544](https://github.com/oxc-project/oxc/pull/28544)）
- AST・ESTree: TS の `Program` の範囲にコメントを含める（[#28326](https://github.com/oxc-project/oxc/pull/28326)）、IDE で AST 型のフィールドがグレー表示されないように（[#28335](https://github.com/oxc-project/oxc/pull/28335)）
- 性能: 正規表現・semantic・パーサーの多数の高速化（[#28514](https://github.com/oxc-project/oxc/pull/28514)、[#28510](https://github.com/oxc-project/oxc/pull/28510)、[#28489](https://github.com/oxc-project/oxc/pull/28489) など）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-02|2026-11-02 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-30|2026-10-30 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-28|2026-10-28 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]、[[repos/oxc-project-oxc/topics/Minifier|Minifier]]
