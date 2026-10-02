---
title: UI
updated: 2026-10-02
tags:
  - repo/vitest-dev-vitest
  - topic
---

## 概要

Vitest UI（`packages/ui`）。ブラウザモードのテストを表示する iframe と分割ペインのハンドルが重ならないよう、レイアウトが修正された。v5.0.2 では認証 cookie をブラウザのセッション終了後も保持するようになっている。`vitest --ui` でブラウザのタブが 2 つ開く不具合も修正された（Vite の `server.open` だけで開く）。

## 変更履歴

- 2026-10-02 — `vitest --ui` でブラウザのタブが 2 つ開く不具合を修正（[#11358](https://github.com/vitest-dev/vitest/pull/11358)）⏳ 未リリース · [[repos/vitest-dev-vitest/changes/2026-10-02|変更]]
- 2026-09-30 — 分割ペインのハンドルが iframe と重なる不具合を修正（[#11221](https://github.com/vitest-dev/vitest/pull/11221)）⏳ 未リリース · [[repos/vitest-dev-vitest/changes/2026-09-30|変更]]

## 関連

- [[repos/vitest-dev-vitest/releases/v5.0.2|v5.0.2]]
- [[repos/vitest-dev-vitest/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02 の変更]]
