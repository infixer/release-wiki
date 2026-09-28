---
title: vitest-dev/vitest
updated: 2026-09-28
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.2](https://github.com/vitest-dev/vitest/releases/tag/v5.0.2)（2026-09-25）→ [[repos/vitest-dev-vitest/releases/v5.0.2|まとめ]]
- プレリリース: なし

## 直近の注目変更

- browser: テストの実行が始まるまでサーバーの `listen` を遅らせる（[#11366](https://github.com/vitest-dev/vitest/pull/11366)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- グローバルの `process` が上書きされても動くよう `process` を束縛（[#11343](https://github.com/vitest-dev/vitest/pull/11343)）📦 v5.0.2 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- detect-async-leaks: `process.stdio` のハンドルを無視するように（[#11333](https://github.com/vitest-dev/vitest/pull/11333)）📦 v5.0.2 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `hanging-process` レポーターのエントリーポイントを ESM に変更（[#11316](https://github.com/vitest-dev/vitest/pull/11316)）📦 v5.0.2 · トピック: [[repos/vitest-dev-vitest/topics/レポーター|レポーター]]
- `Set.prototype.add` へのスパイでスタックオーバーフローが起きる不具合を修正（[#11299](https://github.com/vitest-dev/vitest/pull/11299)）📦 v5.0.2 · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- `toMatchObject` と非対称マッチャーの組み合わせを修正（[#11100](https://github.com/vitest-dev/vitest/pull/11100)）📦 v5.0.2 · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- `agent` レポーターが `--silent` を尊重するよう修正（[#11271](https://github.com/vitest-dev/vitest/pull/11271)）📦 v5.0.2 · トピック: [[repos/vitest-dev-vitest/topics/レポーター|レポーター]]

## トピック

- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・ローダー
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn` などモック・スパイ
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-09-28|2026-09-28]]、[[repos/vitest-dev-vitest/changes/2026-09-24|2026-09-24]]
