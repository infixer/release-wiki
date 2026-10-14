---
title: React Compiler
updated: 2026-10-14
tags:
  - repo/react-react
  - topic
---

## 概要

React Compiler は JSX とフックの使用パターンを解析し、自動でメモ化を行うコンパイラ。Babel プラグインと Rust（SWC 系）実装が並行して開発されている。`arguments` オブジェクトの使用や、副作用内で `await` の後に呼ばれる `setState` など、静的解析が難しいパターンについて、誤検知・誤コンパイルを避けるための特別扱いが順次追加されている。`react-hooks/refs` のバリデーション（`ValidateNoRefAccessInRender`）では、ref を読む関数を `===` / `!==` で比較しても ref アクセスとして扱わなくなった（直接の `ref.current` の比較は引き続きエラー）。

## 変更履歴

- 2026-10-14 — ref を読む関数の比較を `react-hooks/refs` が ref アクセスとして誤検知しないよう修正（Babel 版・Rust 版）（[#37688](https://github.com/react/react/pull/37688)）⏳ 未リリース · [[repos/react-react/changes/2026-10-14|変更]]
- 2026-09-24 — エフェクト内で `await` の後に呼ばれる setState を、パスに沿った到達可能性解析で誤検知しないよう修正（[#36734](https://github.com/react/react/pull/36734)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — Rust 版コンパイラで shorthand・computed property の判定を修正（[#37674](https://github.com/react/react/pull/37674)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — `arguments` オブジェクトの使用を検出したら誤ってメモ化せず bail out するよう修正（[#37645](https://github.com/react/react/pull/37645)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]

## 関連

- [[repos/react-react/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/react-react/changes/2026-09-24|2026-09-24 の変更]]
