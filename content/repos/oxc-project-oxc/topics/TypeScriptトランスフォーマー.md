---
title: TypeScriptトランスフォーマー
updated: 2026-09-24
tags:
  - repo/oxc-project-oxc
  - topic
---

## 概要

TypeScript の `enum` を変換するトランスフォーマーについて、メンバーの値が「逆マッピング（reverse mapping）」を持つべきかどうかの判定を、tsc の `isSyntacticallyString` と同じ構文的な判定に合わせる修正が行われた。これまでは定数評価器が畳み込めるかどうかに依存した判定になっており、文字列値のメンバーが誤って逆マッピングを持ち、他のメンバーを上書きすることがあった。

## 変更履歴

- 2026-09-24 — enum の文字列初期化子に対する逆マッピング判定を tsc と同じ構文的な判定に修正（[#26724](https://github.com/oxc-project/oxc/pull/26724)）📦 oxlint_v1.85.0 · [[repos/oxc-project-oxc/changes/2026-09-24|変更]]

## 関連

- [[repos/oxc-project-oxc/releases/crates_v0.151.0|crates_v0.151.0]]
- [[repos/oxc-project-oxc/changes/2026-09-24|2026-09-24 の変更]]
