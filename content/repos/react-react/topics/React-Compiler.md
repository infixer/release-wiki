---
title: React Compiler
updated: 2026-09-24
tags:
  - repo/react-react
  - topic
---

## 概要

React Compiler は JSX とフックの使用パターンを解析し、自動でメモ化を行うコンパイラ。Babel プラグインと Rust（SWC 系）実装が並行して開発されている。`arguments` オブジェクトの使用や、副作用内で `await` の後に呼ばれる `setState` など、静的解析が難しいパターンについて、誤検知・誤コンパイルを避けるための特別扱いが順次追加されている。

## 変更履歴

- 2026-09-24 — エフェクト内で `await` の後に呼ばれる setState を、パスに沿った到達可能性解析で誤検知しないよう修正（[#36734](https://github.com/react/react/pull/36734)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — Rust 版コンパイラで shorthand・computed property の判定を修正（[#37674](https://github.com/react/react/pull/37674)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — `arguments` オブジェクトの使用を検出したら誤ってメモ化せず bail out するよう修正（[#37645](https://github.com/react/react/pull/37645)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]

## 関連

- [[repos/react-react/changes/2026-09-24|2026-09-24 の変更]]
