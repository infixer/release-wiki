---
title: vitest-dev/vitest
updated: 2026-10-19
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5|まとめ]]
- v4 系: [v4.1.12](https://github.com/vitest-dev/vitest/releases/tag/v4.1.12)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v4.1.12|まとめ]]
- プレリリース: なし

## 直近の注目変更

- coverage: v8 の `autoAttachSubprocess` で `.tmp` ディレクトリを使う（[#11632](https://github.com/vitest-dev/vitest/pull/11632)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- 並行する import にも同じモックを返す（automock・スパイの完了も待つ）（[#11623](https://github.com/vitest-dev/vitest/pull/11623)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- `--changed` の絞り込み後にセットアップファイルを再実行、静的な収集でも fs のモジュールキャッシュを使う（[#11621](https://github.com/vitest-dev/vitest/pull/11621)、[#11622](https://github.com/vitest-dev/vitest/pull/11622)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]、[[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- browser: トレースの位置は最初のフレームだけソースマップで解決（Firefox で 5674ms → 326ms の例）（[#11613](https://github.com/vitest-dev/vitest/pull/11613)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- 終了処理中に保留中の console のログで失敗しないように（[#11619](https://github.com/vitest-dev/vitest/pull/11619)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `Chai` を使うすべての d.ts のチャンクで chai の型を参照（[#11618](https://github.com/vitest-dev/vitest/pull/11618)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- ルート・プロジェクトのサーバーで Vite の既定の `fs.deny`（`.env`・`*.pem`・`.git`）と API トークンのファイルを拒否（[#11578](https://github.com/vitest-dev/vitest/pull/11578)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]]
- `beforeAll` / `beforeEach` のクリーンアップを後のフックが失敗しても実行（[#11605](https://github.com/vitest-dev/vitest/pull/11605)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `--bail` / `cancelCurrentRun` で並行実行中のテストをすべて中断（[#11606](https://github.com/vitest-dev/vitest/pull/11606)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `isolate: false` で終わったファイルのモックファクトリーを解放（[#11607](https://github.com/vitest-dev/vitest/pull/11607)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・テーマ（`test.ui.theme`）・トレースビューアー・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
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
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-19|2026-10-19]]、[[repos/vitest-dev-vitest/changes/2026-10-16|2026-10-16]]、[[repos/vitest-dev-vitest/changes/2026-10-14|2026-10-14]]、[[repos/vitest-dev-vitest/changes/2026-10-12|2026-10-12]]、[[repos/vitest-dev-vitest/changes/2026-10-09|2026-10-09]]
