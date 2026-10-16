---
title: vitest-dev/vitest
updated: 2026-10-16
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5|まとめ]]
- v4 系: [v4.1.12](https://github.com/vitest-dev/vitest/releases/tag/v4.1.12)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v4.1.12|まとめ]]
- プレリリース: なし

## 直近の注目変更

- ルート・プロジェクトのサーバーで Vite の既定の `fs.deny`（`.env`・`*.pem`・`.git`）と API トークンのファイルを拒否（[#11578](https://github.com/vitest-dev/vitest/pull/11578)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]]
- `beforeAll` / `beforeEach` のクリーンアップを後のフックが失敗しても実行（[#11605](https://github.com/vitest-dev/vitest/pull/11605)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `--bail` / `cancelCurrentRun` で並行実行中のテストをすべて中断（[#11606](https://github.com/vitest-dev/vitest/pull/11606)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `isolate: false` で終わったファイルのモックファクトリーを解放（[#11607](https://github.com/vitest-dev/vitest/pull/11607)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- `browser.instances` の `globalSetup` を 1 回だけ実行（[#11596](https://github.com/vitest-dev/vitest/pull/11596)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]]
- `skipIf(false)` がタグの `skip` を上書きし、`undefined` のオプションは無視（[#11591](https://github.com/vitest-dev/vitest/pull/11591)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- ブラウザモードでプラグインの `buildStart` を先に実行し、`--changed` で CSS を import するテストがすべて選ばれる問題を修正（[#11593](https://github.com/vitest-dev/vitest/pull/11593)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- `--changed` で引用符付き（非 ASCII 文字など）のファイル名を扱う（[#11583](https://github.com/vitest-dev/vitest/pull/11583)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- Node 26.12 対応: 非同期リーク検出の誤検知とネイティブローダーのエラーの import 位置を修正（[#11598](https://github.com/vitest-dev/vitest/pull/11598)、[#11599](https://github.com/vitest-dev/vitest/pull/11599)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]、[[repos/vitest-dev-vitest/topics/モック|モック]]
- `import.meta.hot` のスタブに `data` を追加し、jsdom・happy-dom で CSS の import が throw しないように（[#11590](https://github.com/vitest-dev/vitest/pull/11590)）📦 v5.0.5 · トピック: [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・テーマ（`test.ui.theme`）・トレースビューアー・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装と等価性（chai 形式・`toMatchScreenshot`・`pretty-format` を含む）
- [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]] — V8・istanbul のカバレッジ（ブラウザモードでのメモリリーク対策）と `allowExternal` によるルート外のファイルの扱い
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
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-16|2026-10-16]]、[[repos/vitest-dev-vitest/changes/2026-10-14|2026-10-14]]、[[repos/vitest-dev-vitest/changes/2026-10-12|2026-10-12]]、[[repos/vitest-dev-vitest/changes/2026-10-09|2026-10-09]]、[[repos/vitest-dev-vitest/changes/2026-10-07|2026-10-07]]
