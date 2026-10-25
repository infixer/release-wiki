---
title: vitest-dev/vitest
updated: 2026-10-26
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.5](https://github.com/vitest-dev/vitest/releases/tag/v5.0.5)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v5.0.5|まとめ]]
- v4 系: [v4.1.12](https://github.com/vitest-dev/vitest/releases/tag/v4.1.12)（2026-10-15）→ [[repos/vitest-dev-vitest/releases/v4.1.12|まとめ]]
- プレリリース: [v5.1.0-beta.1](https://github.com/vitest-dev/vitest/releases/tag/v5.1.0-beta.1)（2026-10-19）

## 直近の注目変更

- browser: 失敗時のスクリーンショット・トレースのタイムラインを試行ごとに保存・表示（`<test>-<repeat>-<retry>.png`）（[#11694](https://github.com/vitest-dev/vitest/pull/11694)、[#11695](https://github.com/vitest-dev/vitest/pull/11695)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/レポーター|レポーター]]
- browser: CLI のフィルターに一致するファイルの無いプロジェクトはブラウザを事前起動しない（[#11706](https://github.com/vitest-dev/vitest/pull/11706)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- HTML レポーターが `--bail` で落ちる問題と、コードフレームのシンタックスハイライトが消える退行を修正（[#11693](https://github.com/vitest-dev/vitest/pull/11693)、[#11705](https://github.com/vitest-dev/vitest/pull/11705)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/レポーター|レポーター]]、[[repos/vitest-dev-vitest/topics/UI|UI]]
- キャッシュしたサーバーのモジュールを UTF-8 で読み、スタックの整形で元のエラーを保つ（[#11709](https://github.com/vitest-dev/vitest/pull/11709)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- coverage: v8 プロバイダーで `coverage.ignoreNode` に対応（AST のノードでカバレッジから除外）（[#11688](https://github.com/vitest-dev/vitest/pull/11688)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- browser: 失敗時にターミナルへトレースのステップのタイムラインを表示（[#11594](https://github.com/vitest-dev/vitest/pull/11594)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/レポーター|レポーター]]
- coverage: istanbul の計装を `magic-string` + `rolldown` にして 5〜10 倍高速化（[#11648](https://github.com/vitest-dev/vitest/pull/11648)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- 後から生じるモックファクトリーの循環を検出してタイムアウトを防ぐ（[#11642](https://github.com/vitest-dev/vitest/pull/11642)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- `expect`: 型付き配列の比較を高速化（2 MiB で約 1.5 s → 約 125 ms）（[#11658](https://github.com/vitest-dev/vitest/pull/11658)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- browser: import map でモジュールをモック（`browser.importMapMocks`。mock の多いスイートで約 2 倍速い例）（[#11534](https://github.com/vitest-dev/vitest/pull/11534)）📦 v5.1.0-beta.1 · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/モック|モック]]

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
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-26|2026-10-26]]、[[repos/vitest-dev-vitest/changes/2026-10-23|2026-10-23]]、[[repos/vitest-dev-vitest/changes/2026-10-21|2026-10-21]]、[[repos/vitest-dev-vitest/changes/2026-10-19|2026-10-19]]、[[repos/vitest-dev-vitest/changes/2026-10-16|2026-10-16]]
