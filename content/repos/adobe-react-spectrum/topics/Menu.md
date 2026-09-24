---
title: Menu
updated: 2026-09-24
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

S2（`@react-spectrum/s2`）の Menu は、セクション区切りやローディング表示（ComboBox・Picker の非同期メニューなど）を扱う。S2 では常にローディング用ノードをレンダーするため、セパレーター（区切り線）の表示判定を専用の `separator-utils.ts` で行うようになり、次のノードがローダーや null のときはセパレーターを隠すようになった。

## 変更履歴

- 2026-09-24 — 次のノードがローダー/null のときにセパレーターを隠すよう修正。非同期ローディングの Menu の docs サンプルにも幅を固定（[#10609](https://github.com/adobe/react-spectrum/pull/10609)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-24|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-24|2026-09-24 の変更]]
