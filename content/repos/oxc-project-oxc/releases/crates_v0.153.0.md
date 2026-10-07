---
title: oxc-project/oxc crates_v0.153.0
date: 2026-10-07
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.153.0) · 公開: 2026-10-05

## 要点

- Minifier の新しい最適化: 同じモジュールからの import 文、import + export の統合（[#25534](https://github.com/oxc-project/oxc/pull/25534)、[#25533](https://github.com/oxc-project/oxc/pull/25533)）
- Minifier: ビット演算の二項式の簡約、抜ける `if` ブロックの後続文の統合、同じ内容の隣接 `if` 文の統合、委譲しない `yield` の `undefined` 引数の畳み込み（[#27107](https://github.com/oxc-project/oxc/pull/27107)、[#26667](https://github.com/oxc-project/oxc/pull/26667)、[#26445](https://github.com/oxc-project/oxc/pull/26445)、[#27324](https://github.com/oxc-project/oxc/pull/27324)）
- AST: `debug_name` の戻り値のライフタイムを元の AST ノードに結び付け（[#27295](https://github.com/oxc-project/oxc/pull/27295)）
- パーサー: JavaScript で TypeScript 専用のクラス修飾子を拒否、スクリプトでのモジュール構文を拒否、TypeScript の型メンバーの区切りを検証、型依存のタプル rest の診断を削除（[#27312](https://github.com/oxc-project/oxc/pull/27312)、[#27220](https://github.com/oxc-project/oxc/pull/27220)、[#27222](https://github.com/oxc-project/oxc/pull/27222)、[#27234](https://github.com/oxc-project/oxc/pull/27234)）
- パーサーの診断を tsc に揃える: TS1243（abstract な async メソッド）・TS1242（`abstract` 付きの interface）の報告、abstract な private フィールドのエラー位置、オーバーロードの診断範囲、インデックスシグネチャの修飾子の診断の重複解消（[#27192](https://github.com/oxc-project/oxc/pull/27192)、[#27191](https://github.com/oxc-project/oxc/pull/27191)、[#27314](https://github.com/oxc-project/oxc/pull/27314)、[#27313](https://github.com/oxc-project/oxc/pull/27313)、[#27190](https://github.com/oxc-project/oxc/pull/27190)）
- 正規表現: エスケープされたキャプチャグループ名をデコード（[#27156](https://github.com/oxc-project/oxc/pull/27156)）
- Minifier の修正: 入れ子のシーケンスの冪等性、長いシーケンスを含む条件式の畳み込み、`arguments` コピーの書き換えで兄弟の宣言を保持（[#27273](https://github.com/oxc-project/oxc/pull/27273)、[#27083](https://github.com/oxc-project/oxc/pull/27083)、[#27140](https://github.com/oxc-project/oxc/pull/27140)）
- Isolated Declarations（`keyof` の引数型への `undefined` 追加、readonly の引数型）と Explicit Resource Management（古典的な for ループ、catch・finally の中の `using`）の修正（[#27173](https://github.com/oxc-project/oxc/pull/27173)、[#27009](https://github.com/oxc-project/oxc/pull/27009)、[#27148](https://github.com/oxc-project/oxc/pull/27148)、[#27142](https://github.com/oxc-project/oxc/pull/27142)）
- 性能改善: Minifier の import 統合・その場での書き換えなど、codegen のソースマップビルダーのベクタ事前確保（[#27238](https://github.com/oxc-project/oxc/pull/27238)、[#27230](https://github.com/oxc-project/oxc/pull/27230) ほか）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-05|2026-10-05 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-02|2026-10-02 の変更]]、[[repos/oxc-project-oxc/changes/2026-09-30|2026-09-30 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Minifier|Minifier]]、[[repos/oxc-project-oxc/topics/パーサー|パーサー]]、[[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]]、[[repos/oxc-project-oxc/topics/Explicit-Resource-Management|Explicit-Resource-Management]]
