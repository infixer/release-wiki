---
title: vitest-dev/vitest
updated: 2026-10-07
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.3](https://github.com/vitest-dev/vitest/releases/tag/v5.0.3)（2026-09-30）→ [[repos/vitest-dev-vitest/releases/v5.0.3|まとめ]]
- プレリリース: なし

## 直近の注目変更

- `vi.resetAllMocks()` が呼ばれた・設定し直されたモックだけをリセット（大規模スイートで 189 秒 → 26 秒）（[#11197](https://github.com/vitest-dev/vitest/pull/11197)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- `test.ui.theme` オプションを追加（experimental）（[#11499](https://github.com/vitest-dev/vitest/pull/11499)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/UI|UI]]
- トレースビューアーにフィット・ズームの操作を追加（[#11490](https://github.com/vitest-dev/vitest/pull/11490)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/UI|UI]]
- トレースビューで、複数の要素に一致したセレクターをすべてハイライト（[#11489](https://github.com/vitest-dev/vitest/pull/11489)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- キャッシュディレクトリに `CACHEDIR.TAG` を書き込む（[#11461](https://github.com/vitest-dev/vitest/pull/11461)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- chai 形式の `to.have.returned(value)` が値を確認するよう修正（[#11500](https://github.com/vitest-dev/vitest/pull/11500)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- クライアント環境（jsdom・happy-dom）で Node のビルトインを解決し、`vi.mock('os')` も動くように（[#11417](https://github.com/vitest-dev/vitest/pull/11417)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]]
- coverage: ブラウザでの V8 カバレッジのメモリリークを修正（[#11466](https://github.com/vitest-dev/vitest/pull/11466)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- in-source testing でもモジュールのモックをラップ（[#11505](https://github.com/vitest-dev/vitest/pull/11505)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- `--changed` がセットアップファイル・設定の依存・`__mocks__` なども追跡（[#11432](https://github.com/vitest-dev/vitest/pull/11432)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・テーマ（`test.ui.theme`）・トレースビューアー・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装と等価性（chai 形式・`toMatchScreenshot`・`pretty-format` を含む）
- [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]] — V8 カバレッジ（ブラウザモードでのメモリリーク対策）
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュ（`fsModuleCache`、デフォルトで有効）、results キャッシュ（`VitestCache`）、`CACHEDIR.TAG` と一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]] — `--changed` / `--related` や位置指定フィルタによるテストの絞り込み
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom・happy-dom などのテスト環境の統合と Node ビルトインの解決
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・カスタムコマンド・トレース・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（vm プール・`VITEST_POOL_ID`・typecheck の `typescript` プール）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn`・`vi.resetAllMocks` などモック・スパイ、モックのインターセプター、in-source testing のモック
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`・フィクスチャ・テスト名の整形）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション（JUnit・HTML を含む）

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-07|2026-10-07]]、[[repos/vitest-dev-vitest/changes/2026-10-05|2026-10-05]]、[[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02]]、[[repos/vitest-dev-vitest/changes/2026-09-30|2026-09-30]]、[[repos/vitest-dev-vitest/changes/2026-09-28|2026-09-28]]
