---
title: oxc-project/oxc crates_v0.158.0
date: 2026-11-11
tags:
  - repo/oxc-project-oxc
  - release
---

[Release ページ](https://github.com/oxc-project/oxc/releases/tag/crates_v0.158.0) · 公開: 2026-11-09

## 要点

- Release の本文はバグ修正と性能改善のみ（新機能・破壊的変更の項目は無い。本文は途中まで取得）
- isolated-declarations: オブジェクトのアクセサーの可変性（[#29039](https://github.com/oxc-project/oxc/pull/29039)）、auto-accessor の初期化子からの型推論（[#29038](https://github.com/oxc-project/oxc/pull/29038)）、enum のテンプレートリテラルの初期化子の評価（[#28997](https://github.com/oxc-project/oxc/pull/28997)）、ambient な enum の計算メンバー（[#29040](https://github.com/oxc-project/oxc/pull/29040)）
- transformer: namespace のブロックをまたぐ export した enum のマージ（[#28999](https://github.com/oxc-project/oxc/pull/28999)）、シャドーされたクラス名での静的プライベートのブランド（[#28894](https://github.com/oxc-project/oxc/pull/28894)）、クラスのプライベートのアクセサー・メソッド・静的プライベートフィールドへの代入の修正（[#28790](https://github.com/oxc-project/oxc/pull/28790)、[#28788](https://github.com/oxc-project/oxc/pull/28788)、[#28606](https://github.com/oxc-project/oxc/pull/28606)、[#28716](https://github.com/oxc-project/oxc/pull/28716)）
- minifier: 例外を投げうる `ArrayBuffer`・URI の呼び出しを残す（[#29012](https://github.com/oxc-project/oxc/pull/29012)）、`instanceof` の左辺の副作用を保つ（[#29011](https://github.com/oxc-project/oxc/pull/29011)）、空の検索の `replaceAll` の畳み込みで UTF-16 の境界を保つ（[#28807](https://github.com/oxc-project/oxc/pull/28807)）、配列の `concat` チェーンの読み取り（[#28261](https://github.com/oxc-project/oxc/pull/28261)）
- cfg: ラベルのジャンプの修正（[#29016](https://github.com/oxc-project/oxc/pull/29016)、[#29001](https://github.com/oxc-project/oxc/pull/29001)）。ecmascript: 非 10 進の接頭辞の後の符号を拒否・非 10 進の文字列を一度だけ丸める（[#29034](https://github.com/oxc-project/oxc/pull/29034)、[#29026](https://github.com/oxc-project/oxc/pull/29026)）
- codegen: 生成位置ごとにソースマップの対応を 1 つに（[#28844](https://github.com/oxc-project/oxc/pull/28844)）、無限大の数値リテラルを `Infinity` ではなく `1e400` で出力（[#28812](https://github.com/oxc-project/oxc/pull/28812)）、重複したソースマップの対応で名前を保つ（[#26051](https://github.com/oxc-project/oxc/pull/26051)）
- parser・semantic・jsdoc: エスケープした文脈キーワードを修飾子ではなく名前として扱う（[#28748](https://github.com/oxc-project/oxc/pull/28748)）、ブロックの型の束縛を巻き上げた `var` と分ける（[#28601](https://github.com/oxc-project/oxc/pull/28601)）、JSDoc の行終端子・`/` を含む `@word`・`@param` の修正（[#28902](https://github.com/oxc-project/oxc/pull/28902)、[#28834](https://github.com/oxc-project/oxc/pull/28834)、[#28923](https://github.com/oxc-project/oxc/pull/28923)）
- 性能: codegen の SWAR の走査（[#28939](https://github.com/oxc-project/oxc/pull/28939)）、mangler（[#28881](https://github.com/oxc-project/oxc/pull/28881)）、parser（[#28965](https://github.com/oxc-project/oxc/pull/28965)、[#28960](https://github.com/oxc-project/oxc/pull/28960)、[#28940](https://github.com/oxc-project/oxc/pull/28940) など）、正規表現（[#29083](https://github.com/oxc-project/oxc/pull/29083)）

## 関連

- 取り込み済みの PR: [[repos/oxc-project-oxc/changes/2026-11-11|2026-11-11 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-09|2026-11-09 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-06|2026-11-06 の変更]]、[[repos/oxc-project-oxc/changes/2026-11-04|2026-11-04 の変更]]
- トピック: [[repos/oxc-project-oxc/topics/Isolated-Declarations|Isolated-Declarations]]、[[repos/oxc-project-oxc/topics/TypeScriptトランスフォーマー|TypeScriptトランスフォーマー]]、[[repos/oxc-project-oxc/topics/ES2022クラス変換|ES2022クラス変換]]、[[repos/oxc-project-oxc/topics/Minifier|Minifier]]、[[repos/oxc-project-oxc/topics/パーサー|パーサー]]
- 前のリリース: [[repos/oxc-project-oxc/releases/crates_v0.157.0|crates_v0.157.0]]
