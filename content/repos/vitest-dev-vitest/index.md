---
title: vitest-dev/vitest
updated: 2026-10-02
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.3](https://github.com/vitest-dev/vitest/releases/tag/v5.0.3)（2026-09-30）→ [[repos/vitest-dev-vitest/releases/v5.0.3|まとめ]]
- プレリリース: なし

## 直近の注目変更

- `--changed` の実行時に、影響を受けたテストの数と総数を表示（experimental）（[#11424](https://github.com/vitest-dev/vitest/pull/11424)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- browser: `toHaveTextContent` を引数なしで使えるように（[#11425](https://github.com/vitest-dev/vitest/pull/11425)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]、[[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- `fsModuleCache` をデフォルトで有効に（[#11435](https://github.com/vitest-dev/vitest/pull/11435)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- git のエラーと位置指定フィルタのエラーで実行を失敗（終了コード 1）させる（[#11430](https://github.com/vitest-dev/vitest/pull/11430)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]]
- browser: モックのルートのインターセプトの競合を解消（Chromium でモックがランダムに効かない問題）（[#11083](https://github.com/vitest-dev/vitest/pull/11083)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]、[[repos/vitest-dev-vitest/topics/モック|モック]]
- API トークンをアトミックに公開（空トークンで接続タイムアウトする問題を修正）（[#11323](https://github.com/vitest-dev/vitest/pull/11323)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- `vitest --ui` でタブが 2 つ開く不具合を修正（[#11358](https://github.com/vitest-dev/vitest/pull/11358)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/UI|UI]]
- vm プールで Vite の環境をまたいでスクリプトを再利用しないように（[#11395](https://github.com/vitest-dev/vitest/pull/11395)）📦 v5.0.3 · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]
- `expect.extend` の非対称マッチャーにも現在の等価性テスターを渡す（[#11401](https://github.com/vitest-dev/vitest/pull/11401)）📦 v5.0.3 · トピック: [[repos/vitest-dev-vitest/topics/アサーション|アサーション]]
- `why-is-node-running` を `3.2.1` に固定し `ERR_PNPM_TRUST_DOWNGRADE` を回避（[#11403](https://github.com/vitest-dev/vitest/pull/11403)）📦 v5.0.3 · トピック: [[repos/vitest-dev-vitest/topics/レポーター|レポーター]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・認証
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装（`toMatchScreenshot` を含む）
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュ（`fsModuleCache`、デフォルトで有効）と一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テストの絞り込み|テストの絞り込み]] — `--changed` / `--related` や位置指定フィルタによるテストの絞り込み
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom などのテスト環境の統合
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（vm プール・`VITEST_POOL_ID`）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn` などモック・スパイ、モックのインターセプター
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-10-02|2026-10-02]]、[[repos/vitest-dev-vitest/changes/2026-09-30|2026-09-30]]、[[repos/vitest-dev-vitest/changes/2026-09-28|2026-09-28]]、[[repos/vitest-dev-vitest/changes/2026-09-24|2026-09-24]]
