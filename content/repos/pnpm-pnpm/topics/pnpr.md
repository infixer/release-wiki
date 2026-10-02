---
title: pnpr
updated: 2026-10-02
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm リポジトリで開発されているレジストリサーバー pnpr（`pnpr/` 配下、プレリリース `pnpr@0.1.0-alpha.*` として公開）。upstream のレジストリから packument を取得してキャッシュし、pnpm クライアントにメタデータと tarball を配る。upstream の packument に `dist.integrity` が無いバージョンについては、tarball をダウンロードして SHA-512 の integrity を計算し、正規化した packument を保存するようになった（未リリース）。pnpm v12 は pnpr へレジストリの宣言を送るが、クライアント側だけの設定（`registries` の `networkConcurrency`）は送らない。

## 主な API・オプション

- upstream の integrity 計算 — キャッシュする upstream のみ。1 回の取得で最大 64 個。`dist.shasum` があれば照合してから固定。失敗したバージョンは upstream のメタデータのまま、tarball のルートは拒否し、次の更新で再試行

## 変更履歴

- 2026-10-02 — upstream の欠けた tarball の integrity を計算（[#16358](https://github.com/pnpm/pnpm/pull/16358)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-02|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/pnpm-pnpm/topics/インストール|インストール]]（`registries` の `networkConcurrency`）
