---
title: vitest-dev/vitest
updated: 2026-11-13
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.1.0](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0)（2026-11-02）→ [[repos/vitest-dev-vitest/releases/v5.1.0|まとめ]]
- v4 系: [v4.1.12](https://github.com/vitest-dev/vitest/releases/tag/v4.1.12)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v4.1.12|まとめ]]
- プレリリース: なし

## 直近の注目変更

- pool: 取り残された forks のワーカーを watchdog プロセスで `SIGKILL` する（#11915 を修正）（[#11939](https://github.com/vitest-dev/vitest/pull/11939)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]
- 性能: CLI のファイルフィルタを 1 回だけ解決（作者の例で 23.9 秒 → 0.69 秒）（[#11935](https://github.com/vitest-dev/vitest/pull/11935)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- `testTimeout` を無効にしていても、切断された forks のワーカーを終了する（[#11924](https://github.com/vitest-dev/vitest/pull/11924)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]
- ソースマップを base64 のコメントではなく文字列でワーカーに送る（キャッシュのバージョンも更新）（[#11750](https://github.com/vitest-dev/vitest/pull/11750)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- `configureServer` の中でも fs モジュールキャッシュにヒットできるように（[#11927](https://github.com/vitest-dev/vitest/pull/11927)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- シードを使ったシャッフルの前にテストファイルを並べ替え、順序を再現可能に（同じシードでも以前と順序が変わる）（[#11926](https://github.com/vitest-dev/vitest/pull/11926)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `import.meta.env` への代入ができるように（[#11841](https://github.com/vitest-dev/vitest/pull/11841)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- cache: 削除されたキャッシュファイルをキャッシュミスとして扱う（[#11861](https://github.com/vitest-dev/vitest/pull/11861)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- fs モジュールキャッシュの環境変数 `VITEST_FS_MODULE_CACHE` / `VITEST_FS_MODULE_CACHE_PATH` を追加（[#11859](https://github.com/vitest-dev/vitest/pull/11859)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- cache: ルート外のキャッシュ済みファイルも `--watch` で監視（[#11860](https://github.com/vitest-dev/vitest/pull/11860)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・テーマ（`test.ui.theme`）・トレースビューアー（トレースのあるテストだけ開く）・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装と等価性（chai 形式・`toMatchScreenshot`・`pretty-format` を含む）
- [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]] — V8・istanbul のカバレッジ（ブラウザモードでのメモリリーク対策・`autoAttachSubprocess` の一時ディレクトリ）と `allowExternal` によるルート外のファイルの扱い
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュ（`fsModuleCache`、デフォルトで有効。環境変数でも設定でき、マニフェストで変換後のコードを確認できる）、results キャッシュ（`VitestCache`）、`CACHEDIR.TAG` と一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]] — `--changed` / `--related`（`experimental.recordDependencies` を含む）や位置指定フィルタによるテストの絞り込み、`--shard`、静的な収集
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom・happy-dom などのテスト環境の統合と Node ビルトインの解決
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・カスタムコマンド・トレース・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]] — 複数のプロジェクト（`projects`）の解決と `root` の扱い
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（`maxWorkers`・vm プール・`VITEST_POOL_ID`・typecheck の `typescript` プール・forks のワーカーを終了する watchdog）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn`・`vi.resetAllMocks` などモック・スパイ、モックのインターセプター、in-source testing のモック
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`・フィクスチャ・フックのクリーンアップ・`skipIf`・キャンセル・テスト名の整形）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション（JUnit・HTML・Node のトレースのタイムラインを含む）

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-11-13|2026-11-13]]、[[repos/vitest-dev-vitest/changes/2026-11-11|2026-11-11]]、[[repos/vitest-dev-vitest/changes/2026-11-09|2026-11-09]]、[[repos/vitest-dev-vitest/changes/2026-11-06|2026-11-06]]、[[repos/vitest-dev-vitest/changes/2026-11-04|2026-11-04]]
