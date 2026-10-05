---
title: UI
updated: 2026-10-05
tags:
  - repo/vitest-dev-vitest
  - topic
---

## 概要

Vitest UI（`packages/ui`）。エクスプローラーのツリーの絞り込みは単純なパイプラインに作り直され、検索が suite に一致したときはその下のツリー全体を表示する。HTML レポートのモジュールグラフはプロジェクト・環境ごとに 1 回だけ保存される。ブラウザモードのテストを表示する iframe と分割ペインのハンドルが重ならないよう、レイアウトが修正された。v5.0.2 では認証 cookie をブラウザのセッション終了後も保持するようになっている。`vitest --ui` でブラウザのタブが 2 つ開く不具合も修正された（Vite の `server.open` だけで開く）。

## 変更履歴

- 2026-10-05 — HTML レポートのモジュールグラフを環境ごとに 1 回だけ保存（大規模プロジェクトでのクラッシュを解消）（[#11421](https://github.com/vitest-dev/vitest/pull/11421)） ⏳ 未リリース · [[repos/vitest-dev-vitest/changes/2026-10-05|変更]]
- 2026-10-05 — エクスプローラーの絞り込みを整理し、検索が suite に一致したときの入れ子のテストを表示（[#11262](https://github.com/vitest-dev/vitest/pull/11262)） ⏳ 未リリース · [[repos/vitest-dev-vitest/changes/2026-10-05|変更]]
- 2026-10-02 — `vitest --ui` でブラウザのタブが 2 つ開く不具合を修正（[#11358](https://github.com/vitest-dev/vitest/pull/11358)）⏳ 未リリース · [[repos/vitest-dev-vitest/changes/2026-10-02|変更]]
- 2026-09-30 — 分割ペインのハンドルが iframe と重なる不具合を修正（[#11221](https://github.com/vitest-dev/vitest/pull/11221)）⏳ 未リリース · [[repos/vitest-dev-vitest/changes/2026-09-30|変更]]

## 関連

- [[repos/vitest-dev-vitest/releases/v5.0.2|v5.0.2]]
- [[repos/vitest-dev-vitest/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/vitest-dev-vitest/changes/2026-10-05|2026-10-05 の変更]]
