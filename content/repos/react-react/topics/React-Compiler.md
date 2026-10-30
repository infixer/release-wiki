---
title: React Compiler
updated: 2026-10-30
tags:
  - repo/react-react
  - topic
---

## 概要

React Compiler は JSX とフックの使用パターンを解析し、自動でメモ化を行うコンパイラ。Babel プラグインと Rust（SWC 系）実装が並行して開発されている。`arguments` オブジェクトの使用や、副作用内で `await` の後に呼ばれる `setState` など、静的解析が難しいパターンについて、誤検知・誤コンパイルを避けるための特別扱いが順次追加されている。`react-hooks/refs` のバリデーション（`ValidateNoRefAccessInRender`）では、ref を読む関数を `===` / `!==` で比較しても ref アクセスとして扱わなくなった（直接の `ref.current` の比較は引き続きエラー）。グローバルの `IntersectionObserver` に ref を使うコールバックを渡しても誤検知しなくなり、`new` 式も通常の呼び出しと同じ ref の検証を受ける（未知のコンストラクタに ref を渡すとエラー）。
実験的な Rust の Babel アダプターは、診断の下線の位置を UTF-16 のコードユニットで数え、非 ASCII 文字を含む行でも Babel と同じ位置に出す（未リリース）。
`ResizeObserver` / `MutationObserver` のコールバックでの ref アクセスも許可され、`useMemo` した設定を `PanResponder.create` に渡す場合のように既に freeze された値でも、宣言された `Freeze` 効果を ref の検証が参照できるようになった（未リリース）。
ref の検証では、`react-native` の `PanResponder.create` に実際のコードでもシグネチャが付き、`PerformanceObserver` / `ReportingObserver` のコールバックでの ref アクセスも許可された。定数伝播とコード生成では `0` と `-0` を区別して保つようになった（いずれも未リリース）。
Rust 版のコンパイラでは、`한글Ref` のようにマルチバイト文字で始まる `*Ref` の名前で `is_ref_like_name` が panic しないように直された（TS 版と同じく ref らしい名前とは見なさない。未リリース）。

## 変更履歴

- 2026-10-28 — Rust 版: 非 ASCII の名前で `is_ref_like_name` が panic する問題を修正（[#38025](https://github.com/react/react/pull/38025)）⏳ 未リリース · [[repos/react-react/changes/2026-10-30|変更]]
- 2026-10-26 — 定数伝播とコード生成で `-0` を保つ（[#37995](https://github.com/react/react/pull/37995)）⏳ 未リリース · [[repos/react-react/changes/2026-10-28|変更]]
- 2026-10-26 — `PerformanceObserver` / `ReportingObserver` のコールバックでの ref アクセスを許可（[#37996](https://github.com/react/react/pull/37996)）⏳ 未リリース · [[repos/react-react/changes/2026-10-28|変更]]
- 2026-10-26 — react-native の `PanResponder.create` に型を付け、`react-hooks/refs` の誤検知を修正（[#37970](https://github.com/react/react/pull/37970)）⏳ 未リリース · [[repos/react-react/changes/2026-10-28|変更]]
- 2026-10-23 — 既に freeze された値でも宣言された `Freeze` 効果を ref の検証のために残す（`PanResponder.create` の誤検知を修正）（[#37975](https://github.com/react/react/pull/37975)）⏳ 未リリース · [[repos/react-react/changes/2026-10-26|変更]]
- 2026-10-23 — `ResizeObserver` / `MutationObserver` のコールバックでの ref アクセスを許可（[#37895](https://github.com/react/react/pull/37895)）⏳ 未リリース · [[repos/react-react/changes/2026-10-26|変更]]
- 2026-10-21 — Rust 版の Babel アダプターで、非 ASCII 文字の後ろの診断の下線のずれと複数行の下線の長さを修正（[#37898](https://github.com/react/react/pull/37898)）⏳ 未リリース · [[repos/react-react/changes/2026-10-23|変更]]
- 2026-10-14 — `IntersectionObserver` のコールバックでの ref の誤検知を修正（Babel 版・Rust 版）（[#37764](https://github.com/react/react/pull/37764)）⏳ 未リリース · [[repos/react-react/changes/2026-10-16|変更]]
- 2026-10-14 — ref を読む関数の比較を `react-hooks/refs` が ref アクセスとして誤検知しないよう修正（Babel 版・Rust 版）（[#37688](https://github.com/react/react/pull/37688)）⏳ 未リリース · [[repos/react-react/changes/2026-10-14|変更]]
- 2026-09-24 — エフェクト内で `await` の後に呼ばれる setState を、パスに沿った到達可能性解析で誤検知しないよう修正（[#36734](https://github.com/react/react/pull/36734)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — Rust 版コンパイラで shorthand・computed property の判定を修正（[#37674](https://github.com/react/react/pull/37674)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]
- 2026-09-24 — `arguments` オブジェクトの使用を検出したら誤ってメモ化せず bail out するよう修正（[#37645](https://github.com/react/react/pull/37645)）⏳ 未リリース · [[repos/react-react/changes/2026-09-24|変更]]

## 関連

- [[repos/react-react/changes/2026-10-26|2026-10-26 の変更]]
- [[repos/react-react/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/react-react/changes/2026-09-24|2026-09-24 の変更]]
- [[repos/react-react/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/react-react/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/react-react/changes/2026-10-28|2026-10-28 の変更]]
