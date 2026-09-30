---
title: Menu
updated: 2026-09-30
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

S2（`@react-spectrum/s2`）の Menu は、セクション区切りやローディング表示（ComboBox・Picker の非同期メニューなど）を扱う。S2 では常にローディング用ノードをレンダーするため、セパレーター（区切り線）の表示判定を専用の `separator-utils.ts` で行い、次のノードがローダーや null のときはセパレーターを隠す。2026-09-30 には仮想化（virtualized）に対応し（`PromptField` の補完メニューで使用）、仮想化時の区切り線の高さ、チェックボックス付き項目に合わせたサブメニュートリガーのインデント、サイズ別の推定高さが整えられた。

## 変更履歴

- 2026-09-30 — 仮想化 Menu の区切り線の高さとサブメニュートリガーのインデントを修正、推定高さをサイズ別に（[#10673](https://github.com/adobe/react-spectrum/pull/10673)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]
- 2026-09-30 — S2 の Menu が仮想化に対応（[#10614](https://github.com/adobe/react-spectrum/pull/10614)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-30|変更]]
- 2026-09-24 — 次のノードがローダー/null のときにセパレーターを隠すよう修正。非同期ローディングの Menu の docs サンプルにも幅を固定（[#10609](https://github.com/adobe/react-spectrum/pull/10609)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-24|変更]]

## 関連

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]]
- [[repos/adobe-react-spectrum/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-09-24|2026-09-24 の変更]]
