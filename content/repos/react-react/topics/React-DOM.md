---
title: React DOM
updated: 2026-10-30
tags:
  - repo/react-react
  - topic
---

## 概要

`react-dom` のブラウザ向けの処理（合成イベント `SyntheticEvent` など）。CSS トランジションのイベントでは、`onTransitionEnd` に加えて `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` も `SyntheticTransitionEvent` を作るようになり、`propertyName`・`elapsedTime`・`pseudoElement` が取れるようになった（未リリース）。
View Transitions では、Chrome 153 で変わった `InvalidStateError` のメッセージのうち対処しようのないもの（`Document hidden`・`Viewport size changed`・理由無し）と Firefox の同様のメッセージだけを抑え、それ以外は `onRecoverableError` に出す。重複した `view-transition-name` が原因の失敗には `__DEV__` で分かりやすいメッセージを出す（未リリース）。

## 主な API・オプション

- `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` / `onTransitionEnd` — CSS トランジションのイベント。`SyntheticTransitionEvent` を受け取る

## 変更履歴

- 2026-10-29 — View Transitions: Chrome 153・Firefox のエラーメッセージに合わせて抑えるエラーの分類を更新（[#38034](https://github.com/react/react/pull/38034)）⏳ 未リリース · [[repos/react-react/changes/2026-10-30|変更]]
- 2026-10-27 — `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` で `SyntheticTransitionEvent` を使う（[#37985](https://github.com/react/react/pull/37985)）⏳ 未リリース · [[repos/react-react/changes/2026-10-28|変更]]

## 関連

- [[repos/react-react/changes/2026-10-28|2026-10-28 の変更]]
- リポジトリ: [[repos/react-react/index|react/react]]
