---
title: ComboBox
updated: 2026-11-06
tags:
  - repo/adobe-react-spectrum
  - topic
---

## 概要

`useComboBox`/`useComboBoxState` を `useAsyncList` と組み合わせた非同期 ComboBox（RAC の ComboBox を含む）では、クエリ結果が 0 件になったときの自動クローズと、その後結果が届いたときの再オープンの挙動が整理された。`@react-spectrum/combobox` コンポーネントは以前から `allowsEmptyCollection: true` の自動設定でこの問題を回避していたが、フックを直接使う場合や RAC の ComboBox にはこの対応がなかった。
Apple のデバイスでは、`useComboBox` がライブリージョンで読み上げるのは新しいセクションに入ったとき（セクション名と項目数）だけで、同じセクション内の項目の読み上げは VoiceOver のネイティブの読み上げ（選択状態・ロール・項目数）に任せる。
`ComboBoxInput` と `Popover` が別々の shadow root にあっても、キーボードで開いた Popover が閉じない（`virtualBlur` の `relatedTarget` の付け替えへの対処。未リリース）。`isReadOnly` の ComboBox は blur で値を確定せず、制御された値がコレクションに無くても `onChange` / `onSelectionChange` を発火しない（未リリース）。
Popover が開いているときの Escape は Popover を閉じたうえで既定動作も止める（Safari のフルスクリーンが解除されない。未リリース）。

## 変更履歴

- 2026-11-04 — Popover を閉じる Escape では既定動作を止める（Safari のフルスクリーンが解除される問題）（#10784）（[#10883](https://github.com/adobe/react-spectrum/pull/10883)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-06|変更]]
- 2026-11-03 — `isReadOnly` のときは blur で値を確定しない（#10846）（[#10869](https://github.com/adobe/react-spectrum/pull/10869)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-04|変更]]
- 2026-11-03 — 入力欄と Popover が別の shadow root にあってもキーボードで開けるように（[#10631](https://github.com/adobe/react-spectrum/pull/10631)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-11-04|変更]]
- 2026-10-12 — Apple のデバイスで VoiceOver への手動の読み上げを、新しいセクションに入ったときだけに（[#10503](https://github.com/adobe/react-spectrum/pull/10503)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-10-14|変更]]
- 2026-09-24 — 空応答の後に非同期アイテムが届いたときにメニューを再度開くよう修正。blur・Escape・確定などユーザー操作によるクローズ時は再オープンしない（[#9823](https://github.com/adobe/react-spectrum/pull/9823)）⏳ 未リリース · [[repos/adobe-react-spectrum/changes/2026-09-24|変更]]

## 関連

- [[repos/adobe-react-spectrum/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-11-04|2026-11-04 の変更]]
- [[repos/adobe-react-spectrum/changes/2026-11-06|2026-11-06 の変更]]
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
