---
title: Rust ツールチェーン
updated: 2026-10-09
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm v12 を Rust ツールチェーンのインストーラーとして使えるようにする一連の変更（いずれも未リリース）。ツールチェーンはランタイムではないので、rustup のツールチェーンファイル（`rust-toolchain.toml`、または古い形式の `rust-toolchain`）を正とし、`rust@runtime:` の指定や `devEngines.runtime` のエントリは使わない。`cargo.enabled` のとき `pnpm install` がファイルに書かれたツールチェーンをインストールし、`pnpm shim add rust` で入れたシムによりシェルの `cargo`・`rustc` などもプロジェクトごとのツールチェーンで動く。`pnpm add rust@<channel>` はプロジェクトの `rust-toolchain.toml` の `channel` を書き換え、`pnpm add -g rust@stable` はツールチェーンが固定されていない場所で使うツールチェーンとシムを入れる。チャンネルのマニフェストは埋め込みの Rust のリリース署名鍵で検証し、コンポーネントは署名済みマニフェストの SHA-256 と照合する。

## 主な API・オプション

- `cargo.enabled` — 有効なら `pnpm install` が各 Cargo のマニフェストから上へ最も近いツールチェーンファイル（チェックアウトより上は見ない）のツールチェーンをインストール
- チャンネル — `1.95.0`・`1.95`・`stable`・`beta`・`nightly`・日付付きのチャンネル。`profile`（`minimal`/`default`）・`components`・`targets` に従う。`path` の指定・チャンネルなし・リンクしたツールチェーン・`complete` などの profile は rustup に任せる
- `tools.rust.mirror` — 取得元のミラー。グローバル設定からだけ受け付ける
- `pnpm shim add rust` — `cargo`・`cargo-clippy`・`cargo-fmt`・`clippy-driver`・`rustc`・`rustdoc`・`rustfmt` のシム（`globalShims` の `rust` キー）。作業ディレクトリから最も近いツールチェーンファイルに従い、初回に自動インストール。`bin` を `PATH` の先頭にし `RUSTUP_TOOLCHAIN` を設定して実行
- `pnpm add rust[@<channel>]` — 支配する `rust-toolchain.toml` の `channel` を設定（無ければ作る）。`package.json` には書かない。`cargo.enabled` なら `.pnpm/rust` にリンク。`-r`/`--filter` では使えない
- `pnpm add -g rust[@<channel>]` — シム用のストアにインストールし、シムを書き、チャンネルをグローバルの bin ディレクトリに記録。プロジェクトの `rust-toolchain.toml` が優先

## 変更履歴

- 2026-10-09 — `pnpm add rust`・`pnpm add -g rust` で Rust ツールチェーンを入れる（[#16756](https://github.com/pnpm/pnpm/pull/16756)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — `cargo`・`rustc` のシムがプロジェクトのツールチェーンで動く（[#16748](https://github.com/pnpm/pnpm/pull/16748)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — `rust-toolchain.toml` が指定する Rust ツールチェーンをインストール（[#16741](https://github.com/pnpm/pnpm/pull/16741)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]（Cargo 連携）
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]]（インタプリタの用意と同じ考え方）
