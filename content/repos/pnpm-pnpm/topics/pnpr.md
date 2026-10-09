---
title: pnpr
updated: 2026-10-09
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm リポジトリで開発されているレジストリサーバー pnpr（`pnpr/` 配下、プレリリース `pnpr@0.1.0-alpha.*` として公開）。upstream のレジストリから packument を取得してキャッシュし、pnpm クライアントにメタデータと tarball を配る。upstream の packument に `dist.integrity` が無いバージョンについては、tarball をダウンロードして SHA-512 の integrity を計算し、正規化した packument を保存するようになった（未リリース）。pnpm v12 は pnpr へレジストリの宣言を送るが、クライアント側だけの設定（`registries` の `networkConcurrency`）は送らない。OCI のコンテナイメージの upstream では、`https://quay.io` の CDN へのリダイレクトも許可するようになった（それまではレイヤー取得が 502）。2026-10-09 の回では、実行時の管理（pnpm/tasks#111）が一通り入った（いずれも未リリース）。管理者ロール `auth.admins` を設け、`teamsManagedBy: api` のレジストリでは npm の team API（`pnpm team create/destroy/add/rm`）でチームを、`/-/pnpr/v0/admin/users` でアカウントを管理できる。`rulesManagedBy: api` のレジストリでは `/-/pnpr/v0/admin/rules/{ecosystem}/{name}` でパッケージルールを設定のデプロイなしに変えられ（`If-Match` による条件付き更新に対応）、`npm access grant`/`revoke` もルールに対応付けられる。OIDC のグループからセッションの間だけチームに参加させる設定、SCIM 2.0 によるアカウントの無効化、`/-/ui/` での Web UI（`@pnpm/pnpr-ui`）の配信も加わった。

## 主な API・オプション

- upstream の integrity 計算 — キャッシュする upstream のみ。1 回の取得で最大 64 個。`dist.shasum` があれば照合してから固定。失敗したバージョンは upstream のメタデータのまま、tarball のルートは拒否し、次の更新で再試行
- OCI の upstream のリダイレクト許可リスト — Docker Hub・GHCR の CDN に加え、`https://quay.io` に対して `cdn.quay.io`・`cdn01`〜`cdn06.quay.io`。認証情報はレジストリのオリジンにだけ送る
- `auth.admins` — 管理者ロール。チーム・アカウント・ルールの管理 API を使える（未リリース）
- `teamsManagedBy: config | api` — `api` なら npm の team API でチームを管理。名簿はホスト型ストアに保存し、各レプリカが 10 秒以内に読み直す（未リリース）
- `/-/pnpr/v0/admin/users` — アカウントの一覧・作成・パスワード変更・削除とトークンの失効（htpasswd・libsql・PostgreSQL・MySQL、未リリース）
- `rulesManagedBy: api` と `/-/pnpr/v0/admin/rules/{ecosystem}/{name}` — パッケージルールの取得・置き換え・リセット。`ETag`/`If-Match` で条件付き（412 `precondition_failed`）（未リリース）
- `npm access grant`/`revoke`/`list packages` — `packages:` に名前で宣言したパッケージのルールを編集（未リリース）
- `auth.oidc[].login.groups.teams` — OIDC のグループをセッションの間だけレジストリのチームに対応付け（未リリース）
- `auth.scim.token` — `/-/pnpr/v0/scim/v2` で SCIM 2.0 のプロビジョニング・無効化（未リリース）
- `ui.enabled`・`ui.dir` — `/-/ui/` で Web UI（`@pnpm/pnpr-ui`）を配信（未リリース）

## 変更履歴

- 2026-10-09 — Web UI を `/-/ui/` で配信（[#16769](https://github.com/pnpm/pnpm/pull/16769)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — SCIM でアカウントを無効化（[#16742](https://github.com/pnpm/pnpm/pull/16742)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — `npm access grant`/`revoke` をルールに対応付け（[#16740](https://github.com/pnpm/pnpm/pull/16740)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — ルール変更を `If-Match` で条件付きに（[#16739](https://github.com/pnpm/pnpm/pull/16739)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — OIDC のグループからレジストリのチームに参加させる（[#16735](https://github.com/pnpm/pnpm/pull/16735)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — 管理者用のパッケージルール API（[#16732](https://github.com/pnpm/pnpm/pull/16732)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — 管理者用のアカウント管理 API（[#16729](https://github.com/pnpm/pnpm/pull/16729)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-09 — npm の team API で管理者がチームを管理（[#16725](https://github.com/pnpm/pnpm/pull/16725)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-09|変更]]
- 2026-10-05 — Quay の CDN（`cdn.quay.io`、`cdn01`〜`cdn06.quay.io`）への OCI レイヤーのリダイレクトを許可（[#16550](https://github.com/pnpm/pnpm/pull/16550)）📦 v12.9.1 · [[repos/pnpm-pnpm/changes/2026-10-05|変更]]
- 2026-10-02 — upstream の欠けた tarball の integrity を計算（[#16358](https://github.com/pnpm/pnpm/pull/16358)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-02|変更]]

## 関連

- [[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/pnpm-pnpm/releases/v12.9.1|v12.9.1]]
- [[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/pnpm-pnpm/topics/インストール|インストール]]（`registries` の `networkConcurrency`）
