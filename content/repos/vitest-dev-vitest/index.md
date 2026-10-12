---
title: vitest-dev/vitest
updated: 2026-10-12
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.3](https://github.com/vitest-dev/vitest/releases/tag/v5.0.3)（2026-09-30）→ [[repos/vitest-dev-vitest/releases/v5.0.3|まとめ]]
- プレリリース: なし

## 直近の注目変更

- ブラウザモードでブラウザのインスタンスをワーカーとして扱い、同時に開く数を `maxWorkers` までに（16 プロジェクトでピークメモリ 17.4 GB → 5.6 GB）（[#11525](https://github.com/vitest-dev/vitest/pull/11525)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/プール|プール]]
- ブラウザモードで `vi.unmock` がルートを消さない・登録待ちのモックが次のファイルに漏れる問題を修正（[#11537](https://github.com/vitest-dev/vitest/pull/11537)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/モック|モック]]
- 空白を含むディレクトリでモックを解決できるように（[#11539](https://github.com/vitest-dev/vitest/pull/11539)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- coverage: 角かっこを含むファイル名・istanbul のウォームアップ時のカバレッジの誤りを修正（[#11531](https://github.com/vitest-dev/vitest/pull/11531)、[#11529](https://github.com/vitest-dev/vitest/pull/11529)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- `experimental.recordDependencies` を追加（`--changed` / `related` の依存関係をキャッシュから求める）（[#11515](https://github.com/vitest-dev/vitest/pull/11515)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]、[[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- ブラウザモードでセットアップファイルの `vi.mock` が効かない Vitest 5 の退行を修正（[#11520](https://github.com/vitest-dev/vitest/pull/11520)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/モック|モック]]
- coverage: `allowExternal` でカバーされていないファイルが含まれない問題とルート外のグロブを修正（[#11513](https://github.com/vitest-dev/vitest/pull/11513)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/カバレッジ|カバレッジ]]
- プロジェクトで `root` を尊重するように（[#11521](https://github.com/vitest-dev/vitest/pull/11521)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プロジェクト|プロジェクト]]
- UI: `index.html` のハンドラーを UI のベースパスにマウント（[#11517](https://github.com/vitest-dev/vitest/pull/11517)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/UI|UI]]
- `vi.resetAllMocks()` が呼ばれた・設定し直されたモックだけをリセット（大規模スイートで 189 秒 → 26 秒）（[#11197](https://github.com/vitest-dev/vitest/pull/11197)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]

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
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`・フィクスチャ・テスト名の整形）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション（JUnit・HTML を含む）

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-12|2026-10-12]]、[[repos/vitest-dev-vitest/changes/2026-10-09|2026-10-09]]、[[repos/vitest-dev-vitest/changes/2026-10-07|2026-10-07]]、[[repos/vitest-dev-vitest/changes/2026-10-05|2026-10-05]]、[[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02]]
