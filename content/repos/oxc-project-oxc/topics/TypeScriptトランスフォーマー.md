---
title: TypeScriptトランスフォーマー
updated: 2026-10-12
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

TypeScript の `enum` を変換するトランスフォーマーについて、メンバーの値が「逆マッピング（reverse mapping）」を持つべきかどうかの判定を、tsc の `isSyntacticallyString` と同じ構文的な判定に合わせる修正が行われた。これまでは定数評価器が畳み込めるかどうかに依存した判定になっており、文字列値のメンバーが誤って逆マッピングを持ち、他のメンバーを上書きすることがあった。また、`oxc_semantic` の enum の定数評価が文字列への単項演算（`+"2"` など）を誤って畳み込み、誤った enum を出力していた問題が直り、tsc と同じく計算されたメンバーとしてそのまま出力するようになった。`ReplaceGlobalDefines`（`oxc_transformer_plugins`）も、非 null アサーション越しのオプショナルチェーン（`c?.a!.b`）を保つよう修正された（Rolldown 向け。いずれも未リリース）。

## 変更履歴

- 2026-10-12 — `ReplaceGlobalDefines` が非 null アサーション越しのオプショナルチェーンを保つ（[#27526](https://github.com/oxc-project/oxc/pull/27526)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-12|変更]]
- 2026-10-12 — enum の初期化子で文字列への単項演算を評価しない（[#27447](https://github.com/oxc-project/oxc/pull/27447)） ⏳ 未リリース · [[repos/oxc-project-oxc/changes/2026-10-12|変更]]
- 2026-09-24 — enum の文字列初期化子に対する逆マッピング判定を tsc と同じ構文的な判定に修正（[#26724](https://github.com/oxc-project/oxc/pull/26724)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/crates_v0.151.0|crates_v0.151.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
