---
title: Rust ツールチェーン
updated: 2026-10-14
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm v12 を Rust ツールチェーンのインストーラーとして使えるようにする一連の変更（v12.11.0 でリリース）。ツールチェーンはランタイムではないので、rustup のツールチェーンファイル（`rust-toolchain.toml`、または古い形式の `rust-toolchain`）を正とし、`rust@runtime:` の指定や `devEngines.runtime` のエントリは使わない。`cargo.enabled` のとき `pnpm install` がファイルに書かれたツールチェーンをインストールし、`pnpm shim add rust` で入れたシムによりシェルの `cargo`・`rustc` などもプロジェクトごとのツールチェーンで動く。`pnpm add rust@<channel>` はプロジェクトの `rust-toolchain.toml` の `channel` を書き換え、`pnpm add -g rust@stable` はツールチェーンが固定されていない場所で使うツールチェーンとシムを入れる。チャンネルのマニフェストは埋め込みの Rust のリリース署名鍵で検証し、コンポーネントは署名済みマニフェストの SHA-256 と照合する。v12.11.1 では `pnx --package=rust@<channel> <tool>` で、1 回のコマンドだけ別の Rust リリース（nightly など）のツールを使えるようになった（rustup の `cargo +<toolchain>` の代わり）。v12.13.0 では、Windows の MinGW 向けの pnpm（MSYS2 のパッケージなど）が MSVC ではなく MinGW のツールチェーンを入れるようになった。

## 主な API・オプション

- `cargo.enabled` — 有効なら `pnpm install` が各 Cargo のマニフェストから上へ最も近いツールチェーンファイル（チェックアウトより上は見ない）のツールチェーンをインストール
- チャンネル — `1.95.0`・`1.95`・`stable`・`beta`・`nightly`・日付付きのチャンネル。`profile`（`minimal`/`default`）・`components`・`targets` に従う。`path` の指定・チャンネルなし・リンクしたツールチェーン・`complete` などの profile は rustup に任せる
- `tools.rust.mirror` — 取得元のミラー。グローバル設定からだけ受け付ける
- `pnpm shim add rust` — `cargo`・`cargo-clippy`・`cargo-fmt`・`clippy-driver`・`rustc`・`rustdoc`・`rustfmt` のシム（`globalShims` の `rust` キー）。作業ディレクトリから最も近いツールチェーンファイルに従い、初回に自動インストール。`bin` を `PATH` の先頭にし `RUSTUP_TOOLCHAIN` を設定して実行
- `pnpm add rust[@<channel>]` — 支配する `rust-toolchain.toml` の `channel` を設定（無ければ作る）。`package.json` には書かない。`cargo.enabled` なら `.pnpm/rust` にリンク。`-r`/`--filter` では使えない
- `pnpm add -g rust[@<channel>]` — シム用のストアにインストールし、シムを書き、チャンネルをグローバルの bin ディレクトリに記録。プロジェクトの `rust-toolchain.toml` が優先
- `pnx --package=rust@<channel> <tool>` — そのリリースをストアに入れ、`bin` を `PATH` の先頭・`RUSTUP_TOOLCHAIN` を設定して実行。ツールチェーンファイルの profile・components・targets と `--target` のターゲットを入れる。`rust` だけなら `stable`（v12.11.1）
- Windows のホスト — ツールチェーンの ABI は pnpm 自身のビルドのターゲットに従う（`*-pc-windows-gnu`・`*-pc-windows-gnullvm`、それ以外は `*-pc-windows-msvc`）（v12.13.0）

## 変更履歴

- 2026-10-14 — MinGW 向けの pnpm は MinGW のツールチェーンを入れる（[#16868](https://github.com/pnpm/pnpm/pull/16868)）⏳ 未リリース（v12.13.0 に記載） · [[repos/pnpm-pnpm/changes/2026-10-14|変更]]
- 2026-10-12 — `pnx --package=rust@<channel>` で特定の Rust リリースのツールを実行（[#16784](https://github.com/pnpm/pnpm/pull/16784)）📦 v12.11.2 · [[repos/pnpm-pnpm/changes/2026-10-12|変更]]
- 2026-10-09 — `pnpm add rust`・`pnpm add -g rust` で Rust ツールチェーンを入れる（[#16756](https://github.com/pnpm/pnpm/pull/16756)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — `cargo`・`rustc` のシムがプロジェクトのツールチェーンで動く（[#16748](https://github.com/pnpm/pnpm/pull/16748)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — `rust-toolchain.toml` が指定する Rust ツールチェーンをインストール（[#16741](https://github.com/pnpm/pnpm/pull/16741)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/pnpm-pnpm/releases/v12.13.0|v12.13.0]]
- [[repos/pnpm-pnpm/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/pnpm-pnpm/releases/v12.11.0|v12.11.0]]
- [[repos/pnpm-pnpm/releases/v12.11.1|v12.11.1]]
- [[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]（Cargo 連携）
- [[repos/pnpm-pnpm/topics/ランタイム管理|ランタイム管理]]
- [[repos/pnpm-pnpm/topics/Python-サポート|Python サポート]]（インタプリタの用意と同じ考え方）
