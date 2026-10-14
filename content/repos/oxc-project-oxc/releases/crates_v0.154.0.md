---
title: oxc-project/oxc crates_v0.154.0
date: 2026-10-14
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.154.0) · 公開: 2026-10-13

## 要点

- **破壊的変更**: AST にコメントの付属先（attachment）の保持を追加し、その保持方法をリファクタ（[#27393](https://github.com/oxc-project/oxc/pull/27393)、[#27512](https://github.com/oxc-project/oxc/pull/27512)）。パーサーが解析中にノード ID を割り当てる（[#27411](https://github.com/oxc-project/oxc/pull/27411)）
- Minifier: `delete` 式の畳み込みを追加（[#27522](https://github.com/oxc-project/oxc/pull/27522)）。非有限数への畳み込みで `delete` の意味を保つ（[#27466](https://github.com/oxc-project/oxc/pull/27466)）、定数の引数で呼ばれる未使用の IIFE を除去（[#27434](https://github.com/oxc-project/oxc/pull/27434)）
- Minifier・semantic の `arguments` まわりの修正: mapped arguments を通した引数への書き込みを保つ（[#27494](https://github.com/oxc-project/oxc/pull/27494)）、通常の関数で `arguments` の解決を止める（[#26929](https://github.com/oxc-project/oxc/pull/26929)）
- codegen の修正: `ArrayPattern` の `RestElement` の前の余分な空白（[#27613](https://github.com/oxc-project/oxc/pull/27613)）、`-` の後の負の `BigIntLiteral`（[#27378](https://github.com/oxc-project/oxc/pull/27378)、[#27377](https://github.com/oxc-project/oxc/pull/27377)）、空の `do-while` の本体の前の余分なインデント（[#27407](https://github.com/oxc-project/oxc/pull/27407)）。JS の codegen が `V8IntrinsicExpression` に対応（[#27597](https://github.com/oxc-project/oxc/pull/27597)）
- 変換: 非 null アサーション越しのオプショナルチェーンを保つ（[#27526](https://github.com/oxc-project/oxc/pull/27526)）、静的ブロックで合成のプライベートフィールドを使わない（[#27300](https://github.com/oxc-project/oxc/pull/27300)）、enum の初期化子で文字列への単項演算を評価しない（[#27447](https://github.com/oxc-project/oxc/pull/27447)）
- パーサー・semantic: `export` の後の no-side-effects 注釈を反映（[#27504](https://github.com/oxc-project/oxc/pull/27504)）、オプショナルなメンバーの `delete` を `MemberWriteTarget` に（[#27430](https://github.com/oxc-project/oxc/pull/27430)）、`TSMethodSignature` の計算キーを外側のスコープで訪問（[#27357](https://github.com/oxc-project/oxc/pull/27357)）
- 性能改善: JS の codegen（`packages/codegen`）の megamorphic な `type` 読み取りの削減、`printSpaceBeforeIdentifier` 呼び出しの削除など（[#27620](https://github.com/oxc-project/oxc/pull/27620)、[#27599](https://github.com/oxc-project/oxc/pull/27599) ほか）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-10-14|2026-10-14 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-12|2026-10-12 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-09|2026-10-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-10-07|2026-10-07 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/パーサー|パーサー]]、[[repos/oxc-project-oxc/topics/Minifier|Minifier]]、[[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]、[[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]
