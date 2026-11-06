---
title: vitest-dev/vitest
updated: 2026-11-06
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.1.0](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0)（2026-11-02）→ [[repos/vitest-dev-vitest/releases/v5.1.0|まとめ]]
- v4 系: [v4.1.12](https://github.com/vitest-dev/vitest/releases/tag/v4.1.12)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v4.1.12|まとめ]]
- プレリリース: なし

## 直近の注目変更

- CLI の `--bail` を正しくパースする（[#11896](https://github.com/vitest-dev/vitest/pull/11896)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- coverage: v8 でサブプロセスのスクリプトのカバレッジを別に扱う（[#11890](https://github.com/vitest-dev/vitest/pull/11890)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- coverage: テストされていないファイルを正しいプロジェクトで変換する（[#11870](https://github.com/vitest-dev/vitest/pull/11870)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- fs モジュールキャッシュにマニフェストを追加（`server.debug.dump` / `load` は非推奨）（[#11858](https://github.com/vitest-dev/vitest/pull/11858)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- フィクスチャの teardown のエラーを 1 回だけ報告し、残りの teardown も実行（[#11857](https://github.com/vitest-dev/vitest/pull/11857)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- 非対称 matcher（`objectContaining` / `arrayContaining`）の diff を改善（[#11855](https://github.com/vitest-dev/vitest/pull/11855)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- 静的な収集で名前の引数がある呼び出しだけを収集（[#11853](https://github.com/vitest-dev/vitest/pull/11853)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- `--shard` をテストの実行開始前に適用（レポーター・カバレッジにも自分のシャードだけ）（[#11846](https://github.com/vitest-dev/vitest/pull/11846)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- `isolate: false` でコンテキストの `expect` がメモリを保持し続けるリークを修正（[#11845](https://github.com/vitest-dev/vitest/pull/11845)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- spy: primordials を使い、ビルトインにもスパイできるように（[#11837](https://github.com/vitest-dev/vitest/pull/11837)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・テーマ（`test.ui.theme`）・トレースビューアー（トレースのあるテストだけ開く）・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装と等価性（chai 形式・`toMatchScreenshot`・`pretty-format` を含む）
- [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]] — V8・istanbul のカバレッジ（ブラウザモードでのメモリリーク対策・`autoAttachSubprocess` の一時ディレクトリ）と `allowExternal` によるルート外のファイルの扱い
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュ（`fsModuleCache`、デフォルトで有効。マニフェストで変換後のコードを確認できる）、results キャッシュ（`VitestCache`）、`CACHEDIR.TAG` と一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]] — `--changed` / `--related`（`experimental.recordDependencies` を含む）や位置指定フィルタによるテストの絞り込み、`--shard`、静的な収集
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom・happy-dom などのテスト環境の統合と Node ビルトインの解決
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・カスタムコマンド・トレース・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]] — 複数のプロジェクト（`projects`）の解決と `root` の扱い
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（`maxWorkers`・vm プール・`VITEST_POOL_ID`・typecheck の `typescript` プール）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn`・`vi.resetAllMocks` などモック・スパイ、モックのインターセプター、in-source testing のモック
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`・フィクスチャ・フックのクリーンアップ・`skipIf`・キャンセル・テスト名の整形）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション（JUnit・HTML・Node のトレースのタイムラインを含む）

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-11-06|2026-11-06]]、[[repos/vitest-dev-vitest/changes/2026-11-04|2026-11-04]]、[[repos/vitest-dev-vitest/changes/2026-11-02|2026-11-02]]、[[repos/vitest-dev-vitest/changes/2026-10-30|2026-10-30]]、[[repos/vitest-dev-vitest/changes/2026-10-28|2026-10-28]]
