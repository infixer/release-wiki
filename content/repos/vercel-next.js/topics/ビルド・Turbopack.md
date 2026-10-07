---
title: ビルド・Turbopack
updated: 2026-10-07
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

Turbopack・webpack を使ったビルド/開発サーバーの実装と、それに関わる CLI・設定オプション・コードモッド。ビルド出力の無駄の削減（本番でレイアウトセグメントを 1 回だけチャンク化など）、モジュール解決・トレース・エクスポート判定まわりのリグレッション修正、turbo-tasks の GC の安定化が続いている。`next analyze` は正式機能になり、比較画面の URL 共有や `--snapshot-name` への改名などアナライザー UI の改善も進んでいる。`additionalRoots` はデプロイアダプターでも使えるようになり、macOS で監視がハングする問題も修正された。遅延 dynamic import は SSR でも使えるようになった。16.4 に向けて、`experimental.turbopackSharedRuntime` が既定で有効になり、`experimental.turbopackMangleExportNames` も本番ビルドで既定有効になった。turbo-persistence はコンパクションを刷新して永続キャッシュの肥大化を抑えている。`generateBuildId` を明示した場合はスキュー保護が有効でも常に使われる。アナライザーはトップがルートのサマリー画面になり、比較ツリーマップではモジュールの増減を表示する。マングリングは facade を使う方式を `experimental.turbopackMangleViaMaterializedNamespaceObject` でオプトインできる。turbo-tasks では不要な再実行や永続化データの破損を防ぐ修正が続き、trace-server の MCP はメモリ調査に使えるようになった。React Compiler の `enablePreserveExistingMemoizationGuarantees` も next.config から指定できる。一方、実験的な `customWebpack` はモノレポでの依存重複の問題から revert された。アナライザーは `next analyze --export-graph` で保存済みスナップショットのグラフを JSON Lines（スキーマは `next/analyze/graph-v1.schema.json`）として出力できるようになり、ルートごとのエントリも含む。ESM エクスポートのプロトコル変更（#98932）は remote-components との互換性のため revert された。静的エクスポートでは設定した `distDir` が保持されるようになり、turbo-tasks ではスナップショットの一貫性やタスクの片付けの順序に関する修正が続いている。

## 主な API・オプション

- `next analyze` / `next build --analyze` — バンドルアナライザー（正式機能化）。`--snapshot-name` でスナップショットに名前を付けられる（比較画面は `/compare`）
- ~~`experimental.customWebpack`~~ — 実験的に追加されたが revert された（[#99227](https://github.com/vercel/next.js/pull/99227)）
- `additionalRoots`（Turbopack の設定）— デプロイアダプター（`vc deploy` など）でも利用可能に
- `experimental.turbopackSharedRuntime` — Turbopack の共有ランタイム。既定で有効（`false` で無効化可、将来削除予定）
- `experimental.turbopackMangleExportNames` — エクスポート名のマングリング。既定は `next dev` で `false`、ビルドで `true`
- `experimental.turbopackMangleViaMaterializedNamespaceObject` — facade を使ったマングリングのオプトイン。未指定時は `turbopackMangleExportNames` を明示的に `true` にしたときだけ有効
- `reactCompiler.enablePreserveExistingMemoizationGuarantees` — React Compiler のオプション（Babel・Turbopack の Rust コンパイラの両方に渡される）
- `generateBuildId` — 明示すれば `deploymentId` 設定時も常に使われる
- `experimental.turbopack.resolveAlias` — `false` を指定してモジュールを空スタブに解決可能に
- `next analyze --export-graph` — 保存済みスナップショットのグラフを JSON Lines で標準出力へ（`--snapshot-name` / `--snapshot <id>` / `--route` / `--dist-dir`）。`next analyze --output --snapshot-name <name>` はサーバーを起動せずに保存だけ行う

## 変更履歴

- 2026-10-07 — `next analyze --export-graph` でアナライザーのグラフを JSON Lines で出力（[#99387](https://github.com/vercel/next.js/pull/99387)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — アナライザーの JSON Lines にルートの詳細（`route.entries`）を追加（[#99172](https://github.com/vercel/next.js/pull/99172)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — ESM エクスポートのプロトコル変更（#98932）を revert（[#99704](https://github.com/vercel/next.js/pull/99704)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — 静的エクスポートで設定した出力ディレクトリ（`distDir`）を保持（[#99507](https://github.com/vercel/next.js/pull/99507)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — パスの正規化のキャッシュを turbo-tasks から切り離し、最長の接頭辞から探索（[#99270](https://github.com/vercel/next.js/pull/99270)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — 関係のないファイル変更でファイルシステム待ちのログが出ないように（[#99711](https://github.com/vercel/next.js/pull/99711)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — turbo-tasks-backend: 復元中のピン留めをやめ、存在しないタスクは常に破棄（[#99645](https://github.com/vercel/next.js/pull/99645)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — turbo-tasks-backend: 実行完了を公開する前にタスクの状態を片付ける（[#99729](https://github.com/vercel/next.js/pull/99729)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — turbo-tasks: copy-on-write のスナップショットを bincode でエンコード（[#99644](https://github.com/vercel/next.js/pull/99644)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-07 — turbo-tasks: スナップショット取得中に操作を排他する実験（[#99747](https://github.com/vercel/next.js/pull/99747)）📦 v16.5.0-canary.1 · [[repos/vercel-next.js/changes/2026-10-07|変更]]
- 2026-10-05 — バンドルアナライザーにルートのサマリー画面を追加（ルート別の分析は `/analyze` へ）（[#98787](https://github.com/vercel/next.js/pull/98787)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — 比較ツリーマップでバンドルの増減を表示（[#98837](https://github.com/vercel/next.js/pull/98837), [#99607](https://github.com/vercel/next.js/pull/99607)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — facade を使ったエクスポート名マングリングをオプトインで有効にできるように（[#99309](https://github.com/vercel/next.js/pull/99309)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — React Compiler のオプション `enablePreserveExistingMemoizationGuarantees` を追加（[#98589](https://github.com/vercel/next.js/pull/98589)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — trace-server の MCP にメモリ・アロケーションの情報を追加（[#98546](https://github.com/vercel/next.js/pull/98546)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — additional roots 内の `import.meta.url` でパニックしないよう修正（[#99511](https://github.com/vercel/next.js/pull/99511)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — Turbopack のモジュールキャッシュを `Map` で保持（[#98947](https://github.com/vercel/next.js/pull/98947)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — ESM エクスポートの受け渡しプロトコルを変えて出力を縮小（[#98932](https://github.com/vercel/next.js/pull/98932)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — turbo-tasks: `outdated_collectibles` を正しく維持し、不要な再実行を防止（[#99386](https://github.com/vercel/next.js/pull/99386)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — turbo-tasks: 永続化データが空で上書きされる問題を修正（[#99581](https://github.com/vercel/next.js/pull/99581)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — turbo-tasks: ディスク読み込みで存在しないタスクの扱いを統一（[#99249](https://github.com/vercel/next.js/pull/99249)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-05 — Docker のサンプルで pnpm 11 のインストールが失敗する問題を修正（[#97352](https://github.com/vercel/next.js/pull/97352)）📦 v16.4.0-canary.60 · [[repos/vercel-next.js/changes/2026-10-05|変更]]
- 2026-10-02 — Turbopack のエクスポート名マングリングを本番ビルドで既定有効に（[#99362](https://github.com/vercel/next.js/pull/99362)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — バンドルアナライザー UI のフィルターを URL に保存（[#98780](https://github.com/vercel/next.js/pull/98780)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — `generateBuildId` を明示したときは常にそれを使うように（[#99147](https://github.com/vercel/next.js/pull/99147)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — Turbopack の共有ランタイムを既定で有効に（[#99504](https://github.com/vercel/next.js/pull/99504)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — turbo-tasks の処理中オペレーションの一時停止を廃止（[#99383](https://github.com/vercel/next.js/pull/99383)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-10-02 — Turbopack の永続キャッシュのコンパクションを刷新し、ディスク使用量を削減（[#99268](https://github.com/vercel/next.js/pull/99268), [#99333](https://github.com/vercel/next.js/pull/99333)）📦 v16.4.0-canary.56 · [[repos/vercel-next.js/changes/2026-10-02|変更]]
- 2026-09-30 — turbo-tasks-backend の leaf distance トレースのコンパイルエラーを修正（[#99443](https://github.com/vercel/next.js/pull/99443)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — Turbopack で webpack ローダーのビルド依存ディレクトリを追跡（[#98838](https://github.com/vercel/next.js/pull/98838)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — バンドルアナライザーの空表示から別の環境に切り替えられるように（[#98542](https://github.com/vercel/next.js/pull/98542)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — `additionalRoots` の監視で macOS のコンパイラーが固まる問題を修正（[#99396](https://github.com/vercel/next.js/pull/99396)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — Turbopack のツリーシェイクで空のチャンクがパート ID をずらす不具合を修正（[#95516](https://github.com/vercel/next.js/pull/95516)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — バンドルアナライザーのソース表の Δ での並べ替えを修正（[#99369](https://github.com/vercel/next.js/pull/99369)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — バンドルアナライザーのソース表を仮想化（[#98539](https://github.com/vercel/next.js/pull/98539)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — SSR でも遅延 dynamic import を使えるように（[#98836](https://github.com/vercel/next.js/pull/98836)）📦 v16.4.0-canary.53 · [[repos/vercel-next.js/changes/2026-09-30|変更]]
- 2026-09-30 — 安定版 v16.3.7 に、キャンセルされたタスクへの strongly consistent な読み取りがハングする turbo-tasks-backend の修正をバックポート（[#98931](https://github.com/vercel/next.js/pull/98931)）📦 v16.3.7 · [[repos/vercel-next.js/releases/v16.3.7|v16.3.7]]
- 2026-09-28 — エクスポート名マングリングのためだけのファサード分割をやめ、シングルトンの二重化を修正（[#99285](https://github.com/vercel/next.js/pull/99285)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — webpack ローダーが依存を読むときにファイルシステムのルートをまたげるように（[#99202](https://github.com/vercel/next.js/pull/99202)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — `next internal trace` サーバーのプロセス名を分かりやすく（[#99257](https://github.com/vercel/next.js/pull/99257)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーのスナップショット名オプションを `--snapshot-name` に改名（[#99251](https://github.com/vercel/next.js/pull/99251)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーのツリーマップが低 DPI の画面でぼやける不具合を修正（[#99197](https://github.com/vercel/next.js/pull/99197)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーの比較画面が URL で共有できるように（[#98530](https://github.com/vercel/next.js/pull/98530)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — パッケージ内のコードからプロジェクト全体がトレースされる不具合を修正（[#99238](https://github.com/vercel/next.js/pull/99238)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — 実験的な `customWebpack` サポートを revert（[#99227](https://github.com/vercel/next.js/pull/99227)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — Turbopack の `additionalRoots` がデプロイアダプターでも使えるように（[#99015](https://github.com/vercel/next.js/pull/99015)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — turbo-tasks の GC に関する不具合を修正（[#98591](https://github.com/vercel/next.js/pull/98591), [#98614](https://github.com/vercel/next.js/pull/98614), [#99145](https://github.com/vercel/next.js/pull/99145)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — 本番ビルドで各レイアウトセグメントを 1 回だけチャンク化するように（[#99100](https://github.com/vercel/next.js/pull/99100)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — バンドルアナライザーで JavaScript のソースがアセット扱いになる不具合を修正（[#98536](https://github.com/vercel/next.js/pull/98536)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — `next lint` を使っていないプロジェクトでは ESLint 移行をスキップ（[#99103](https://github.com/vercel/next.js/pull/99103)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-28 — クライアント参照プロキシと WASM ローダーのエクスポート使用判定を修正（[#99115](https://github.com/vercel/next.js/pull/99115)）📦 v16.4.0-canary.51 · [[repos/vercel-next.js/changes/2026-09-28|変更]]
- 2026-09-24 — Node 本番サーバーのチャンク分割のコスト見積もりを調整（[#99120](https://github.com/vercel/next.js/pull/99120)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack の `ModuleId not found for ident` エラーを再度修正（[#99102](https://github.com/vercel/next.js/pull/99102)）⏳ 未リリース · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — カスタム `distDir` に関する安全確認を追加（[#98997](https://github.com/vercel/next.js/pull/98997)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack の `ModuleId not found for ident` エラーを修正（[#99090](https://github.com/vercel/next.js/pull/99090)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack で webpack ローダー内の import が `Unknown module type` エラーになる不具合を修正（[#99088](https://github.com/vercel/next.js/pull/99088)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — next analyze コマンドが正式機能に（[#99074](https://github.com/vercel/next.js/pull/99074)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — webpack モードでプロジェクト側の webpack を使える `customWebpack` オプションを追加（実験的）（[#98862](https://github.com/vercel/next.js/pull/98862)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — CSS のチャンク分割で循環参照を解消する処理を高速化（約 131 倍）（[#98860](https://github.com/vercel/next.js/pull/98860)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `turbopackLazyDynamicImports` 有効時の不要な出力アセット生成を削減（[#98834](https://github.com/vercel/next.js/pull/98834)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — 遅延 dynamic import 有効時に next/dynamic の CSS 収集が壊れる不具合を修正（[#98828](https://github.com/vercel/next.js/pull/98828)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — `instant-false` コードモッドがヘルパーファイルにも誤って適用される不具合を修正（[#98880](https://github.com/vercel/next.js/pull/98880)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — turbo-persistence でディスク書き込みエラーが隠れる不具合を修正（[#98840](https://github.com/vercel/next.js/pull/98840)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack でローダーのソースコード変更を検知できていなかった不具合を修正（[#95732](https://github.com/vercel/next.js/pull/95732)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack のトレーススパンの開始時刻とシャットダウン時の配信漏れを修正（[#98426](https://github.com/vercel/next.js/pull/98426)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-24 — Turbopack の `resolveAlias` に `false` を指定してモジュールを空スタブ化できるように（[#93331](https://github.com/vercel/next.js/pull/93331)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]

## 関連

- [[repos/vercel-next.js/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/vercel-next.js/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/vercel-next.js/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/vercel-next.js/changes/2026-09-30|2026-09-30 の変更]]
- [[repos/vercel-next.js/releases/v16.3.7|v16.3.7]]
- [[repos/vercel-next.js/changes/2026-09-28|2026-09-28 の変更]]
- [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
