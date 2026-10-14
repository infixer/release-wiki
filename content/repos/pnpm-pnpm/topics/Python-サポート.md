---
title: Python サポート
updated: 2026-10-14
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm を npm 専用のパッケージマネージャーから、Python（PyPI）も扱えるマルチエコシステムなツールにするための実装群。`python-installer` クレートが中心で、wheel の共有・ソース配布物（sdist）からのビルド・ワークスペースでの環境共有・環境の保存場所・インタプリタ確保のポリシーなどを担う。多くは pnpm/pnpm#14945 の Python 対応調査 issue の各項目に沿って実装されている。v12.13.0 では依存解決が速くなった（PEP 658 のメタデータファイルを読み、索引ページとメタデータを先読みする）。ビルドバックエンドの実行中はビルド環境のスクリプトを `PATH` に置き、`uv_build` のプロジェクトもインストールできる。

## 主な API・オプション

- `python.linkMode` — `copy` / `hardlink` / `reflink`（既定 `reflink`）。wheel を環境間でどう共有するか
- `[tool.pnpm.python] shared-environment = true` — `[tool.uv.workspace]` を持つワークスペースで、メンバー間で1つの環境・1つの `pylock.toml` を共有
- `runtimeOnFail` — `requires-python` を満たすインタプリタが無い場合の動作（`download` / `error` / `warn` / `ignore`）。Node.js/Deno/Bun と共通の設定に統合され、専用の `python.downloads` は廃止
- ソース配布物（sdist）からのインストール — 使える wheel が無いリリースは `.tar.gz`/`.zip` の sdist を HTTP(S) 経由でビルドして導入（wheel より優先度は低い）
- 環境の実体は `<store>/python-envs/<project>/` に置かれ、プロジェクトには `.venv` という絶対パスリンクだけが残る
- PEP 658 のメタデータファイル — 索引ページの SHA-256 で確かめて読み、`python-metadata-v1` にキャッシュ。無い場合は wheel から読む（v12.13.0 に記載）
- ビルドバックエンドのフック（`build`・`build_requires`・`metadata`）— ビルド環境の `bin`/`Scripts` を `PATH` の先頭に置いて実行（空のエントリは除く）

## 変更履歴

- 2026-10-14 — 先読みでのページのエラーが配布物を隠さないように（[#16885](https://github.com/pnpm/pnpm/pull/16885)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-14|変更]]
- 2026-10-14 — PEP 658 のメタデータファイルを読み、依存解決で先読み（[#16881](https://github.com/pnpm/pnpm/pull/16881)）⏳ 未リリース（v12.13.0 に記載） · [[repos/pnpm-pnpm/changes/2026-10-14|変更]]
- 2026-10-14 — バックエンドのフックの `PATH` から空のエントリを除く（[#16867](https://github.com/pnpm/pnpm/pull/16867)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-14|変更]]
- 2026-10-14 — ビルド環境のスクリプトを `PATH` に置き `uv_build` に対応（[#16865](https://github.com/pnpm/pnpm/pull/16865)）⏳ 未リリース（v12.13.0 に記載） · [[repos/pnpm-pnpm/changes/2026-10-14|変更]]
- 2026-09-24 — Python インタプリタのインストール可否を `runtimeOnFail` に統合（[#15036](https://github.com/pnpm/pnpm/pull/15036)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — Python 環境の実体をプロジェクトではなくストアに置くように（[#15026](https://github.com/pnpm/pnpm/pull/15026)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — ワークスペースの複数プロジェクトで1つの Python 環境を共有できるように（[#15019](https://github.com/pnpm/pnpm/pull/15019)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — wheel が無い Python パッケージをソース配布物（sdist）からインストール可能に（[#15009](https://github.com/pnpm/pnpm/pull/15009)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]
- 2026-09-24 — Python 環境間で wheel ファイルを共有できるように（[#15006](https://github.com/pnpm/pnpm/pull/15006)）📦 v12.6.0 · [[repos/pnpm-pnpm/changes/2026-09-24|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-14|2026-10-14 の変更]]
- [[repos/pnpm-pnpm/releases/v12.13.0|v12.13.0]]
- [[repos/pnpm-pnpm/releases/v12.6.0|v12.6.0]]
- [[repos/pnpm-pnpm/topics/マルチエコシステム設定|マルチエコシステム設定]]
- [[repos/pnpm-pnpm/changes/2026-09-24|2026-09-24 の変更]]
