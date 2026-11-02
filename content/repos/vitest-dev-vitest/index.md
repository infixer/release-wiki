---
title: vitest-dev/vitest
updated: 2026-11-02
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5|まとめ]]
- v4 系: [v4.1.12](https://github.com/vitest-dev/vitest/releases/tag/v4.1.12)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v4.1.12|まとめ]]
- プレリリース: [v5.1.0-beta.1](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0-beta.1)（2026-10-19）

## 直近の注目変更

- cache: キャッシュのディレクトリに書き込めなくても失敗せず、キャッシュを無効にして警告（[#11781](https://github.com/vitest-dev/vitest/pull/11781)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- browser: テスターが接続できないときは、止まらずに実行を失敗させる（[#11802](https://github.com/vitest-dev/vitest/pull/11802)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- coverage: istanbul のカバレッジデータに入力のソースマップを保存しない（変換後のコード 26% 減）（[#11686](https://github.com/vitest-dev/vitest/pull/11686)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- `expect.soft` の `.resolves` / `.rejects` でエラーの位置を残す（[#11792](https://github.com/vitest-dev/vitest/pull/11792)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- browser: WebSocket サーバーの `allowSynchronousEvents` を無効にし、1 クライアントの大量送信で他が遅れない（[#11794](https://github.com/vitest-dev/vitest/pull/11794)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- browser: `browser.traceView` の既定を `'failure-only'` に（失敗したテストは設定なしでトレースとタイムラインを残す）（[#11766](https://github.com/vitest-dev/vitest/pull/11766)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- カバレッジのプロバイダーが fs モジュールキャッシュにデータを保存できる（[#11747](https://github.com/vitest-dev/vitest/pull/11747)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]、[[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- fs モジュールキャッシュのキーに deps optimizer を含め、`vi.mock` が効かない問題を修正（[#11775](https://github.com/vitest-dev/vitest/pull/11775)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]、[[repos/vitest-dev-vitest/topics/モック|モック]]
- 同時に起動したプロセスがキャッシュを消しても `ENOTEMPTY` で失敗しない（[#11697](https://github.com/vitest-dev/vitest/pull/11697)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- vm プール: teardown 後も Node のグローバルを残し、フェイクタイマーをファイルごとに戻す（[#11681](https://github.com/vitest-dev/vitest/pull/11681)、[#11779](https://github.com/vitest-dev/vitest/pull/11779)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・テーマ（`test.ui.theme`）・トレースビューアー（トレースのあるテストだけ開く）・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装と等価性（chai 形式・`toMatchScreenshot`・`pretty-format` を含む）
- [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]] — V8・istanbul のカバレッジ（ブラウザモードでのメモリリーク対策・`autoAttachSubprocess` の一時ディレクトリ）と `allowExternal` によるルート外のファイルの扱い
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュ（`fsModuleCache`、デフォルトで有効）、results キャッシュ（`VitestCache`）、`CACHEDIR.TAG` と一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]] — `--changed` / `--related`（`experimental.recordDependencies` を含む）や位置指定フィルタによるテストの絞り込み
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom・happy-dom などのテスト環境の統合と Node ビルトインの解決
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・カスタムコマンド・トレース・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]] — 複数のプロジェクト（`projects`）の解決と `root` の扱い
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（`maxWorkers`・vm プール・`VITEST_POOL_ID`・typecheck の `typescript` プール）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn`・`vi.resetAllMocks` などモック・スパイ、モックのインターセプター、in-source testing のモック
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`・フィクスチャ・フックのクリーンアップ・`skipIf`・キャンセル・テスト名の整形）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション（JUnit・HTML を含む）

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-11-02|2026-11-02]]、[[repos/vitest-dev-vitest/changes/2026-10-30|2026-10-30]]、[[repos/vitest-dev-vitest/changes/2026-10-28|2026-10-28]]、[[repos/vitest-dev-vitest/changes/2026-10-26|2026-10-26]]、[[repos/vitest-dev-vitest/changes/2026-10-23|2026-10-23]]
