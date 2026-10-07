---
title: loaded リンカー
updated: 2026-10-07
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm v12 の実験的なインストール方式 `nodeLinker: { type: loaded }`。互換性のある依存は `node_modules` に展開せず、自動で登録される Node.js のローダーを通じて、検証済みのコンテンツアドレス可能ストア（CAS）から直接読み込まれる。`nodeLinker.excluded` で選んだパッケージとその依存ツリーは、通常のグローバル仮想ストア（GVS）にインストールされる。v12.10.0 で実験的機能として公開された。Node.js 26.10.0 以上が必要で、モードを切り替えるときは既存の `node_modules` を削除する必要がある。v12.10.1 では生成ファイル（ストアのマニフェスト・ローダー・bin シム）が `node_modules` の中に置かれるようになり、独自の `node_modules` を同梱するパッケージの読み込み、`devEngines.runtime` で入れた Node.js の実行、プロセスの起動時間（13,000 ファイルのプロジェクトで 67 ms → 18 ms）が改善された。

## 主な API・オプション

- `nodeLinker: { type: loaded }`（`pnpm-workspace.yaml`）— loaded リンカーを有効にする（実験的、オプトイン）
- `nodeLinker.excluded` — 挙げたパッケージとその依存ツリー全体を GVS にインストールする
- 生成ファイル（v12.10.1 以降）— `node_modules/.pnpm/.store-manifest.json`・`node_modules/.pnpm/.store-loader.mjs`、bin シムは `node_modules/.bin`。それ以前はプロジェクトのルートの `.pnpm-store.json`・`.pnpm-store-loader.mjs` と、ルート・各ワークスペースパッケージの `.pnpm` ディレクトリに書いており、再インストール後に削除する
- `frozenStore: true` — loaded のインストールではプロジェクトの登録の書き込みを省く
- パッチを当てたパッケージは自動で実体化する。ビルドが必要なパッケージは明示的に選ぶ（ビルドの承認は通常どおり）

## 変更履歴

- 2026-10-07 — v12.10.1: 生成ファイルを `node_modules` に置く、同梱の `node_modules` を持つパッケージをストアから読み込む、`devEngines.runtime` の Node.js をスクリプトから実行できる、起動の高速化（リリースノートより。関連 PR: [#16644](https://github.com/pnpm/pnpm/pull/16644)、[#16643](https://github.com/pnpm/pnpm/pull/16643)、[#16651](https://github.com/pnpm/pnpm/pull/16651)、[#16661](https://github.com/pnpm/pnpm/pull/16661)、[#16673](https://github.com/pnpm/pnpm/pull/16673)、[#16602](https://github.com/pnpm/pnpm/pull/16602)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-07|変更]]
- 2026-10-07 — 凍結ストアでのインストールと使われない GVS エントリの削除を修正（[#16600](https://github.com/pnpm/pnpm/pull/16600)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-07|変更]]
- 2026-10-07 — 実験的な `loaded` リンカーを追加（[#16482](https://github.com/pnpm/pnpm/pull/16482)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-07|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-07|2026-10-07 の変更]]
- [[repos/pnpm-pnpm/releases/v12.10.0|v12.10.0]]
- [[repos/pnpm-pnpm/releases/v12.10.1|v12.10.1]]
- [[repos/pnpm-pnpm/topics/インストール|インストール]]
- [[repos/pnpm-pnpm/topics/ストア|ストア]]
