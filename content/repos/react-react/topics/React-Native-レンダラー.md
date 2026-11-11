---
title: React Native レンダラー
updated: 2026-11-11
tags:
  - repo/react-react
  - topic
---

## 概要

`packages/react-native-renderer`（Fabric レンダラー）の、React Native 向けのイベント処理など。`enableNativeEventTargetEventDispatching` が有効なとき、タッチしたビューがアンマウント済みでも null の対象で `dispatchNativeEvent` を呼ぶようになり、タッチの終了が失われて次のタップが効かない問題が修正された（React Native 側の対応が前提。未リリース）。
React Native リポジトリ側の新しいイベントパイプラインがすべての環境で既定になったため、こちらに残っていた旧イベントディスパッチのパイプライン（`ReactNativeBridgeEventPlugin` など）と `ReactNativeFeatureFlags.js` は削除された（未リリース）。

## 主な API・オプション

- `enableNativeEventTargetEventDispatching` — Fabric レンダラーのフィーチャーフラグ。有効なとき、アンマウント済みのビューへのイベントでも null の対象で `dispatchNativeEvent` を呼ぶ

## 変更履歴

- 2026-11-11 — 使われていない旧イベントディスパッチのパイプラインを削除（[#38172](https://github.com/react/react/pull/38172)）⏳ 未リリース · [[repos/react-react/changes/2026-11-11|変更]]
- 2026-10-28 — イベントの対象が null でも `dispatchNativeEvent` を呼ぶ（[#38007](https://github.com/react/react/pull/38007)）⏳ 未リリース · [[repos/react-react/changes/2026-10-28|変更]]

## 関連

- [[repos/react-react/changes/2026-10-28|2026-10-28 の変更]]
- [[repos/react-react/changes/2026-11-11|2026-11-11 の変更]]
- リポジトリ: [[repos/react-react/index|react/react]]
