---
title: vitest-dev/vitest
updated: 2026-09-30
tags:
  - repo/vitest-dev-vitest
---

[GitHub](https://github.com/vitest-dev/vitest) · ブランチ: `main`

## 最新リリース

- 安定版: [v5.0.2](https://github.com/vitest-dev/vitest/releases/tag/v5.0.2)（2026-09-25）→ [[repos/vitest-dev-vitest/releases/v5.0.2|まとめ]]
- プレリリース: なし

## 直近の注目変更

- キャッシュ済みモジュールの import を再検証し、解決先が変われば変換し直す（[#11381](https://github.com/vitest-dev/vitest/pull/11381)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- キャッシュキーの生成をプロジェクトごとに分離（[#11301](https://github.com/vitest-dev/vitest/pull/11301)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]]
- `test.fails` が期待どおり失敗したときはリトライしないように（[#11219](https://github.com/vitest-dev/vitest/pull/11219)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- `repeats` の各回で結果を分離（[#11218](https://github.com/vitest-dev/vitest/pull/11218)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]]
- browser: `consumer: 'client'` のカスタム環境の設定を保持（[#11378](https://github.com/vitest-dev/vitest/pull/11378)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- browser: リトライしたテストで `toMatchScreenshot` が誤った参照画像を使う不具合を修正（[#11393](https://github.com/vitest-dev/vitest/pull/11393)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]]
- browser: モックのパスの境界を確認（[#11362](https://github.com/vitest-dev/vitest/pull/11362)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/モック|モック]]
- vm プールで `index.html` の依存を事前バンドルしないように（[#11360](https://github.com/vitest-dev/vitest/pull/11360)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]
- `sequence.groupOrder` 設定時の `VITEST_POOL_ID` の重複を修正（[#11392](https://github.com/vitest-dev/vitest/pull/11392)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/プール|プール]]
- jsdom 30.1 の `Blob` に対応（[#11379](https://github.com/vitest-dev/vitest/pull/11379)）⏳ 未リリース · トピック: [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]]

## トピック

- [[repos/vitest-dev-vitest/topics/UI|UI]] — Vitest UI のレイアウト・認証
- [[repos/vitest-dev-vitest/topics/アサーション|アサーション]] — `expect` の matcher 実装（`toMatchScreenshot` を含む）
- [[repos/vitest-dev-vitest/topics/キャッシュ|キャッシュ]] — モジュール変換結果のキャッシュと一時ディレクトリ
- [[repos/vitest-dev-vitest/topics/テスト環境|テスト環境]] — jsdom などのテスト環境の統合
- [[repos/vitest-dev-vitest/topics/ブラウザモード|ブラウザモード]] — ブラウザモードのサーバー・環境設定・Playwright 連携
- [[repos/vitest-dev-vitest/topics/プール|プール]] — ワーカーのプール（vm プール・`VITEST_POOL_ID`）
- [[repos/vitest-dev-vitest/topics/モック|モック]] — `vi.spyOn` などモック・スパイ、モックのインターセプター
- [[repos/vitest-dev-vitest/topics/ランタイム|ランタイム]] — テストを動かすランタイム（`process` の扱い・非同期リーク検出・`repeats` / `retry`）
- [[repos/vitest-dev-vitest/topics/レポーター|レポーター]] — レポーター実装とオプション

## 取り込み

- [[repos/vitest-dev-vitest/log|取り込み履歴]]
- 最近の変更: [[repos/vitest-dev-vitest/changes/2026-09-30|2026-09-30]]、[[repos/vitest-dev-vitest/changes/2026-09-28|2026-09-28]]、[[repos/vitest-dev-vitest/changes/2026-09-24|2026-09-24]]
