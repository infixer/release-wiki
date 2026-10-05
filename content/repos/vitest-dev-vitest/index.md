---
title: vitest-dev/vitest
updated: 2026-10-05
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.3](https://github.com/vitest-dev/vitest/releases/tag/v5.0.3)（2026-09-30）→ [[repos/vitest-dev-vitest/releases/v5.0.3|まとめ]]
- プレリリース: なし

## 直近の注目変更

- `--changed` がセットアップファイル・設定の依存・`__mocks__` なども追跡（[#11432](https://github.com/vitest-dev/vitest/pull/11432)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- キャッシュの実装を整理し、プロジェクト名の `:` に対応・`results` キャッシュの形を変更（[#11453](https://github.com/vitest-dev/vitest/pull/11453)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- 一部のマッチャーで `Map`・`Set` の深い比較が効いていなかったのを修正（[#11402](https://github.com/vitest-dev/vitest/pull/11402)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- HTML レポートのモジュールグラフを環境ごとに 1 回だけ保存（レポートの肥大・クラッシュを解消）（[#11421](https://github.com/vitest-dev/vitest/pull/11421)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/UI|UI]]、[[repos/vitest-dev-vitest/topics/レポーター|レポーター]]
- セットアップに失敗したフィクスチャをキャッシュしないよう修正（[#11238](https://github.com/vitest-dev/vitest/pull/11238)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `toTestSpecification` で typecheck のモジュールに `typescript` プールを使うよう修正（[#11451](https://github.com/vitest-dev/vitest/pull/11451)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]
- UI: エクスプローラーの絞り込みを整理し、suite に一致したときの入れ子のテストを修正（[#11262](https://github.com/vitest-dev/vitest/pull/11262)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/UI|UI]]
- JUnit レポーターが XML の属性値からも ANSI シーケンスを除去（[#11407](https://github.com/vitest-dev/vitest/pull/11407)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/レポーター|レポーター]]
- `pretty-format` で boxed symbol を表示できるよう修正（[#11446](https://github.com/vitest-dev/vitest/pull/11446)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- `--changed` の実行時に、影響を受けたテストの数と総数を表示（experimental）（[#11424](https://github.com/vitest-dev/vitest/pull/11424)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・認証・エクスプローラーの絞り込み・HTML レポートのモジュールグラフ
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装と等価性（`toMatchScreenshot`・`pretty-format` を含む）
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュ（`fsModuleCache`、デフォルトで有効）、results キャッシュ（`VitestCache`）と一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]] — `--changed` / `--related` や位置指定フィルタによるテストの絞り込み
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom などのテスト環境の統合
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（vm プール・`VITEST_POOL_ID`・typecheck の `typescript` プール）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn` などモック・スパイ、モックのインターセプター
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`・フィクスチャ）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション（JUnit・HTML を含む）

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-05|2026-10-05]]、[[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02]]、[[repos/vitest-dev-vitest/changes/2026-09-30|2026-09-30]]、[[repos/vitest-dev-vitest/changes/2026-09-28|2026-09-28]]、[[repos/vitest-dev-vitest/changes/2026-09-24|2026-09-24]]
