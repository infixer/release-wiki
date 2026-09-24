---
title: ComboBox
updated: 2026-09-24
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

`useComboBox`/`useComboBoxState` を `useAsyncList` と組み合わせた非同期 ComboBox（RAC の ComboBox を含む）では、クエリ結果が 0 件になったときの自動クローズと、その後結果が届いたときの再オープンの挙動が整理された。`@react-spectrum/combobox` コンポーネントは以前から `allowsEmptyCollection: true` の自動設定でこの問題を回避していたが、フックを直接使う場合や RAC の ComboBox にはこの対応がなかった。

## 変更履歴

- 2026-09-24 — 空応答の後に非同期アイテムが届いたときにメニューを再度開くよう修正。blur・Escape・確定などユーザー操作によるクローズ時は再オープンしない（[#9823](https://github.com/adobe/react-spectrum/pull/9823)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-24|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-24|2026-09-24 の変更]]
