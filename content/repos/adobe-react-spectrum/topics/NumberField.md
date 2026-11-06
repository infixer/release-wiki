---
title: NumberField
updated: 2026-11-06
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

数値入力の `NumberField`（React Aria Components）と、その入力をパースする `@internationalized/number` の `NumberParser`。
区切り文字だけの入力では数字の体系（numbering system）を切り替えず、パーセントの `NumberField` が blur でアラビア数字に変わる問題が直った（未リリース）。
`NumberField` は親の `Form` の `validationBehavior` を引き継ぐ（[[repos/adobe-react-spectrum/topics/フォーム|フォーム]]）。

## 主な API・オプション

- `NumberField`（`react-aria-components`）
- `NumberParser`（`@internationalized/number`）— `getNumberingSystem` は数字か小数点の区切りを含まない入力では設定されたデフォルトを使う

## 変更履歴

- 2026-11-05 — 区切り文字だけの入力で数字の体系を変えない（#10875）（[#10876](https://github.com/adobe/react-spectrum/pull/10876)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-06|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-11-06|2026-11-06 の変更]]
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
