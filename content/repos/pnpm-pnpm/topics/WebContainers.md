---
title: WebContainers
updated: 2026-10-05
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

StackBlitz WebContainers（ブラウザ内の Node 環境）で pnpm v12 を動かすための WebAssembly 版。共有の Rust CLI を WebAssembly にコンパイルしたものと、ファイルシステム・ネットワーク・プロセス・端末の操作を受け持つ Node のホスト（`pnpm/wasm/`）で構成される。v12.9.0 では `pnpm`・`@pnpm/exe` に同梱し、WebContainer のランタイムの目印を見て自動で WASM を選んでいたが、ネイティブのインストールでもパッケージが約 55 MB に膨らんだため、v12.9.1 で別パッケージ `@pnpm/wasm` に分けられ、ラッパーはネイティブ専用（約 4 MB）に戻った。未リリースの修正として、`@emnapi/wasi-threads` 2.1 でも WASI ホストが終了時に止まったりクラッシュしたりしないようになった。

## 主な API・オプション

- `@pnpm/wasm` — WebContainer 向けのパッケージ。`pnpm`・`pn`・`pnpx`・`pnx` の bin を持つ。npm でインストールして使う（v12.9.1）
- `pnpm` / `@pnpm/exe` — ネイティブ専用。WebContainer の中で実行すると `@pnpm/wasm` を入れるよう案内して終了する（v12.9.1）

## 変更履歴

- 2026-10-05 — wasi-threads 2.1 で WASI ホストが止まらないように（[#16571](https://github.com/pnpm/pnpm/pull/16571)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-05|変更]]
- 2026-10-05 — WebContainer のランタイムを `@pnpm/wasm` として別に公開（[#16544](https://github.com/pnpm/pnpm/pull/16544)）📦 v12.9.1 · [[repos/pnpm-pnpm/changes/2026-10-05|変更]]
- 2026-10-05 — StackBlitz WebContainers で pnpm が動くように（[#16499](https://github.com/pnpm/pnpm/pull/16499)）📦 v12.9.1 · [[repos/pnpm-pnpm/changes/2026-10-05|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/pnpm-pnpm/releases/v12.9.0|v12.9.0]]
- [[repos/pnpm-pnpm/releases/v12.9.1|v12.9.1]]
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
