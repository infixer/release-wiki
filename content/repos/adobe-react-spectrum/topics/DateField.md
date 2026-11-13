---
title: DateField
updated: 2026-11-13
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

React Aria の日付入力（`useDateSegment` など）と React Aria Components の `DateField` まわり。ブラウザの CLDR データの更新でクラッシュすることがあり、`useDateSegment` にフォールバックを入れて対処した。`useDateField`・`useDatePicker`・`useDateRangePicker` ではユーザーのキーボードハンドラーを `useKeyboard` 経由で扱う（2026-10-13 に再適用）。
S2 の時刻付き `DatePicker` / `DateRangePicker` は、`Form` の中でもカレンダーのポップアップの時刻欄がつぶれない（ポップアップの中では `FormContext` がクリアされ、時刻欄はフォームの `validationBehavior` を引き継がない。未リリース）。
`fr-CM` のように 12 時間制でも午前・午後の表記が無いロケールで、`DateField`・`TimeField`・`DatePicker` が描画中にクラッシュしていた問題が直った。`dayPeriod` が無いときは空文字として扱い、午前・午後の入力はできない（未リリース）。

## 主な API・オプション

- `useDateSegment`（`react-aria`）
- `DateField`（`react-aria-components`）

## 変更履歴

- 2026-11-12 — 午前・午後の表記が無い 12 時間制のロケール（`fr-CM`）でクラッシュしないように（#10833）（[#10842](https://github.com/adobe/react-spectrum/pull/10842)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-13|変更]]
- 2026-11-04 — S2 の DatePicker / DateRangePicker で、`Form` の中でもポップアップの時刻欄がつぶれないように（#10899）（[#10915](https://github.com/adobe/react-spectrum/pull/10915)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-06|変更]]
- 2026-10-13 — 日付ピッカー（`useDatePickerGroup`）で抜けていた `preventDefault` を修正（[#10728](https://github.com/adobe/react-spectrum/pull/10728)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-10-13 — `useDateField`・`useDatePicker`・`useDateRangePicker` でユーザーのキーボードハンドラーを `useKeyboard` 経由にする変更を再適用（[#10745](https://github.com/adobe/react-spectrum/pull/10745)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-10-08 — `useDateField`・`useDatePicker`・`useDateRangePicker` でユーザーのキーボードハンドラーを `useKeyboard` 経由に（[#10651](https://github.com/adobe/react-spectrum/pull/10651)）。同日に revert（[#10744](https://github.com/adobe/react-spectrum/pull/10744)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-09|変更]]
- 2026-10-02 — 新しい CLDR で DateField がクラッシュする問題を修正（[#10698](https://github.com/adobe/react-spectrum/pull/10698)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-05|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- [[repos/adobe-react-spectrum/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-11-06|2026-11-06 の変更]]
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
- [[repos/adobe-react-spectrum/changes/2026-11-13|2026-11-13 の変更]]
