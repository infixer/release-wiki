---
title: React DOM
updated: 2026-10-28
tags:
  - repo/react-react
  - topic
---

## 概要

`react-dom` のブラウザ向けの処理（合成イベント `SyntheticEvent` など）。CSS トランジションのイベントでは、`onTransitionEnd` に加えて `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` も `SyntheticTransitionEvent` を作るようになり、`propertyName`・`elapsedTime`・`pseudoElement` が取れるようになった（未リリース）。

## 主な API・オプション

- `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` / `onTransitionEnd` — CSS トランジションのイベント。`SyntheticTransitionEvent` を受け取る

## 変更履歴

- 2026-10-27 — `onTransitionRun` / `onTransitionStart` / `onTransitionCancel` で `SyntheticTransitionEvent` を使う（[#37985](https://github.com/react/react/pull/37985)）⏳ 未リリース · [[repos/react-react/changes/2026-10-28|変更]]

## 関連

- [[repos/react-react/changes/2026-10-28|2026-10-28 の変更]]
- リポジトリ: [[repos/react-react/index|react/react]]
