---
title: pnpr
updated: 2026-10-05
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm リポジトリで開発されているレジストリサーバー pnpr（`pnpr/` 配下、プレリリース `pnpr@0.1.0-alpha.*` として公開）。upstream のレジストリから packument を取得してキャッシュし、pnpm クライアントにメタデータと tarball を配る。upstream の packument に `dist.integrity` が無いバージョンについては、tarball をダウンロードして SHA-512 の integrity を計算し、正規化した packument を保存するようになった（未リリース）。pnpm v12 は pnpr へレジストリの宣言を送るが、クライアント側だけの設定（`registries` の `networkConcurrency`）は送らない。OCI のコンテナイメージの upstream では、`https://quay.io` の CDN へのリダイレクトも許可するようになった（それまではレイヤー取得が 502）。

## 主な API・オプション

- upstream の integrity 計算 — キャッシュする upstream のみ。1 回の取得で最大 64 個。`dist.shasum` があれば照合してから固定。失敗したバージョンは upstream のメタデータのまま、tarball のルートは拒否し、次の更新で再試行
- OCI の upstream のリダイレクト許可リスト — Docker Hub・GHCR の CDN に加え、`https://quay.io` に対して `cdn.quay.io`・`cdn01`〜`cdn06.quay.io`。認証情報はレジストリのオリジンにだけ送る

## 変更履歴

- 2026-10-05 — Quay の CDN（`cdn.quay.io`、`cdn01`〜`cdn06.quay.io`）への OCI レイヤーのリダイレクトを許可（[#16550](https://github.com/pnpm/pnpm/pull/16550)）📦 v12.9.1 · [[repos/pnpm-pnpm/changes/2026-10-05|変更]]
- 2026-10-02 — upstream の欠けた tarball の integrity を計算（[#16358](https://github.com/pnpm/pnpm/pull/16358)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-02|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/pnpm-pnpm/releases/v12.9.1|v12.9.1]]
- [[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/pnpm-pnpm/topics/インストール|インストール]]（`registries` の `networkConcurrency`）
