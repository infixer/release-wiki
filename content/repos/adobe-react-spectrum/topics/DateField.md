---
title: DateField
updated: 2026-10-14
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

React Aria の日付入力（`useDateSegment` など）と React Aria Components の `DateField` まわり。ブラウザの CLDR データの更新でクラッシュすることがあり、`useDateSegment` にフォールバックを入れて対処した。`useDateField`・`useDatePicker`・`useDateRangePicker` ではユーザーのキーボードハンドラーを `useKeyboard` 経由で扱う（2026-10-13 に再適用）。

## 主な API・オプション

- `useDateSegment`（`react-aria`）
- `DateField`（`react-aria-components`）

## 変更履歴

- 2026-10-13 — 日付ピッカー（`useDatePickerGroup`）で抜けていた `preventDefault` を修正（[#10728](https://github.com/adobe/react-spectrum/pull/10728)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-10-13 — `useDateField`・`useDatePicker`・`useDateRangePicker` でユーザーのキーボードハンドラーを `useKeyboard` 経由にする変更を再適用（[#10745](https://github.com/adobe/react-spectrum/pull/10745)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-10-08 — `useDateField`・`useDatePicker`・`useDateRangePicker` でユーザーのキーボードハンドラーを `useKeyboard` 経由に（[#10651](https://github.com/adobe/react-spectrum/pull/10651)）。同日に revert（[#10744](https://github.com/adobe/react-spectrum/pull/10744)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-09|変更]]
- 2026-10-02 — 新しい CLDR で DateField がクラッシュする問題を修正（[#10698](https://github.com/adobe/react-spectrum/pull/10698)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-05|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- [[repos/adobe-react-spectrum/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-10-14|2026-10-14 の変更]]
