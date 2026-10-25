---
title: pnpr
updated: 2026-10-26
tags:
  - repo/pnpm-pnpm
  - topic
---

## 概要

pnpm リポジトリで開発されているレジストリサーバー pnpr（`pnpr/` 配下、プレリリース `pnpr@0.1.0-alpha.*` として公開）。upstream のレジストリから packument を取得してキャッシュし、pnpm クライアントにメタデータと tarball を配る。upstream の packument に `dist.integrity` が無いバージョンについては、tarball をダウンロードして SHA-512 の integrity を計算し、正規化した packument を保存するようになった（未リリース）。pnpm v12 は pnpr へレジストリの宣言を送るが、クライアント側だけの設定（`registries` の `networkConcurrency`）は送らない。OCI のコンテナイメージの upstream では、`https://quay.io` の CDN へのリダイレクトも許可するようになった（それまではレイヤー取得が 502）。2026-10-09 の回では、実行時の管理（pnpm/tasks#111）が一通り入った（いずれも未リリース）。管理者ロール `auth.admins` を設け、`teamsManagedBy: api` のレジストリでは npm の team API（`pnpm team create/destroy/add/rm`）でチームを、`/-/pnpr/v0/admin/users` でアカウントを管理できる。`rulesManagedBy: api` のレジストリでは `/-/pnpr/v0/admin/rules/{ecosystem}/{name}` でパッケージルールを設定のデプロイなしに変えられ（`If-Match` による条件付き更新に対応）、`npm access grant`/`revoke` もルールに対応付けられる。OIDC のグループからセッションの間だけチームに参加させる設定、SCIM 2.0 によるアカウントの無効化、`/-/ui/` での Web UI（`@pnpm/pnpr-ui`）の配信も加わった。2026-10-12 の回では、Web UI のサインイン（pnpm/tasks#113）が入った。パスワードは npm のログインのエンドポイント、OIDC はコールバックが 1 回限りのコードを HttpOnly の Cookie に置き、UI が `POST /-/oidc/handoff` でトークンに引き換える（トークンもコードも URL に出ない）。UI は pnpr-web 0.2.7 から作る。gzip で圧縮した Web UI のファイルが途中で切れて画面が空白になる問題も直った。プレリリース pnpr@0.1.0-alpha.15 が出た。2026-10-16 の回では、運用向けの項目（pnpm/tasks#131 の C・D 節）がまとめて入った（いずれも未リリース）。`SIGTERM` での停止と `/-/ready`・`/-/live`、信頼するプロキシからのクライアント IP、ログインのレート制限・`requestTimeout`・upstream 取得のまとめ、Prometheus のメトリクスと要求 ID・アクセスログ、キャッシュの LRU・TTL 削除と `pnpr cache-gc`、npm の audit のエンドポイント（OSV）、`npm token create` と読み取り専用・期限付きトークン、`npm publish --provenance` と attestation、管理操作の監査ログ（`pnpr::audit`）。監査で見つかった権限・ユーザー列挙・bcrypt の切り詰めなどの問題も直り、upstream に zstd での応答を求めて zstd で配れるようになった。2026-10-19 の回では、pnpm/tasks#131 の項目がさらに入った（いずれも未リリース）。すべてのエコシステムを接頭辞で配るようになり（npm は常に `/npm/`、破壊的変更）、ホスト型ストアは衝突しないレイアウト（`layout.json`・`default/`・`orgs/`）に変わった（破壊的変更）。packument の `ETag`・`304`、`npm login` の Web ログインでの SSO、保守用のサブコマンド（`config check`・`verify`・`export`・`migrate-storage`・`import-htpasswd`）、本番向けの最小の既定設定、認証データベースのスキーマ移行、予約したユーザー名の保護と `pnpr add-user`、パッケージの所有者・メンテナー・tombstone も加わった。zstd の content coding で非圧縮の tar を配り、リビジョンは tar のダイジェストで指す。未リリースの変更として、本番準備の Section A・B が入り、保存する文書に `formatVersion`、`pnpr serve` と期間の単位付きのフラグ、設定の厳密な検証、resolver のプロトコルの `v0` と `/-/pnpr` のハンドシェイク、秘密情報の未解決の `${VAR}` での起動失敗と用途ごとのサブキー、エコシステムごとの設定の検証が加わった。tarball から確かめた `requiresBuild` を `dist.pnpr.requiresBuild` で配り、pnpm v12 がインストールに使う。2026-10-26 の回では（いずれも未リリース）、パッチのリビジョンの tarball の URL を `<registry>/<name>@<version>+r<revision>` に変え（`/-/tarballs/sha512/<digest>` は廃止）、`.tgz` レジストリの `dist.tarball` も `{public_url}/{pkg}@{version}` に書き換えた（旧 URL も配る）。`/-rev/{rev}` の無い DELETE と `/-/user/{name}` を受け付け、まとめての公開は `/-/pnpr/v0/publish` に一本化した（pnpm/tasks#208）。ストレージは `packages/@<scope>/<name>/`・`blobs/<version>.tgz` の読みやすいパスと、エコシステムごとの名前空間（`default/<ecosystem>/`・`orgs/<org>/<ecosystem>/`）になった（既存のストアは公開し直すか `pnpr upgrade-storage`）。メトリクスは `metrics.token` か `metrics.listen` を設定したときだけ配る（破壊的変更）。トークンの最終使用時刻の記録を要求の外に出し、libsql の接続に 10 秒の期限と起動時の再試行を付け、GitHub Actions の OIDC のワークロードを確かめられるようにした。

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
- `GET /-/pnpr/v0/sign-in` — ブラウザのサインインに使える OIDC プロバイダーの一覧
- `/-/oidc/{provider}/login?return=ui` と `POST /-/oidc/handoff?flow=<flow>` — フローごとの `__Host-pnpr-oidc-handoff-<flow>` Cookie の 1 回限り・1 分で失効するコードを `{"token", "expires"}` に引き換え
- `GET /-/ready`・`GET /-/live`・`GET /-/ping` — ストレージと認証のレディネス（`503`）とライブネス。`SIGTERM` で処理中の要求を終えて停止（未リリース）
- `trustedProxies`・`trustedProxyHeader`（`x-forwarded-for`・`forwarded`・`x-real-ip`）— 信頼するプロキシの後ろでクライアントの IP を求める（未リリース）
- `requestTimeout`（既定 60 秒、超えると `504`）とログインのレート制限（`429`・`Retry-After`）（未リリース）
- `GET /-/metrics`・`GET /metrics`（Prometheus）、`x-request-id`、アクセスログ `pnpr::access`、監査ログ `pnpr::audit`（未リリース）
- `cache: { path, maxSize, maxAge }` と `pnpr cache-gc`（`--dry-run`・`--max-size`・`--max-age-secs`・`--orphans-only`）（未リリース）
- `POST /-/npm/v1/security/advisories/bulk`・`/-/npm/v1/security/audits`・`/audits/quick` — OSV のデータベースか upstream で応答（未リリース）
- `POST /-/npm/v1/tokens` — 読み取り専用・CIDR・有効期限・名前付きのトークン作成（未リリース）
- `GET /-/npm/v1/attestations/{*spec}`・`GET /-/npm/v1/keys` — provenance の Sigstore バンドルの配信（未リリース）
- `/npm/`・`/npm/~<name>/`・`/cargo/`・`/pypi/`・`/oci/` — エコシステムごとの接頭辞（`/v2/` は既定のイメージレジストリ）（未リリース）
- `layout.json` と `default/packages/<name>/`・`orgs/<org>/packages/` — ホスト型ストアのレイアウト（未リリース）
- `POST /-/v1/login`・`/-/v1/login/start`・`/-/v1/login/poll/{session}` — Web ログインの SSO（未リリース）
- `pnpr config check`・`pnpr verify`（`--prune-orphans`）・`pnpr export --out`・`pnpr migrate-storage`・`pnpr import-htpasswd`・`pnpr add-user` — 保守用のコマンド（未リリース）
- `$owners` — `publish`・`unpublish` をメンテナーか管理者に限るアクセスのトークン（未リリース）
- `metrics.token` / `metrics.listen` — メトリクスを bearer トークン付きのメインのポート、または専用のリスナーでだけ配る。どちらも無ければ配らない（未リリース）
- `PUT /-/pnpr/v0/publish`（`/npm/-/pnpr/v0/publish`）— まとめての公開。`PUT /-/pnpm/v1/publish` は廃止（未リリース）
- `<registry>/<name>@<version>+r<revision>` — パッチのリビジョンの tarball の URL（未リリース）

## 変更履歴

- 2026-10-26 — エコシステムごとのストレージの名前空間と名前の対応付け（[#17355](https://github.com/pnpm/pnpm/pull/17355)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — パッケージを読みやすいスコープとバージョンのパスに保存（既存のストアは公開し直し）（[#17353](https://github.com/pnpm/pnpm/pull/17353)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — まとめての公開を `/-/pnpr/v0/publish` に一本化（[#17351](https://github.com/pnpm/pnpm/pull/17351)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — `/-rev/{rev}` の付かない DELETE と `/-/user/{name}` を受け付ける（[#17346](https://github.com/pnpm/pnpm/pull/17346)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — `.tgz` レジストリの `dist.tarball` を `<name>@<version>` に書き換え（[#17340](https://github.com/pnpm/pnpm/pull/17340)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — パッチのリビジョンの tarball を `<name>@<version>+r<revision>` で配る（[#17337](https://github.com/pnpm/pnpm/pull/17337)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — メトリクスはトークンか専用のリスナーでだけ配る（破壊的変更）（[#17305](https://github.com/pnpm/pnpm/pull/17305)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — authorization endpoint の無い発行者（GitHub Actions）の OIDC のワークロードを確かめる（[#17301](https://github.com/pnpm/pnpm/pull/17301)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — `pnpr config check` が認証のバックエンドとすべての既定のレジストリを示す（[#17293](https://github.com/pnpm/pnpm/pull/17293)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — packument の書き換えで消したバージョンの tarball も消す（[#17292](https://github.com/pnpm/pnpm/pull/17292)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — libsql の認証データベースへの接続に 10 秒の期限、起動時は再試行（[#17278](https://github.com/pnpm/pnpm/pull/17278)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — アクセスログの各項目を 1 回だけ出す（[#17267](https://github.com/pnpm/pnpm/pull/17267)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — トークンの最終使用時刻を要求の外で 1 分に 1 回まで記録（[#17266](https://github.com/pnpm/pnpm/pull/17266)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-26 — v11 でもレジストリの `serverType: pnpr` を受け付ける（[#17354](https://github.com/pnpm/pnpm/pull/17354)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-26|変更]]
- 2026-10-23 — libsql の認証の読み取りと書き込みの接続待ちを認証の期限で区切る（[#17252](https://github.com/pnpm/pnpm/pull/17252)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-23 — libsql の認証の操作を接続のプールで行い、使用済みの baton による 500 を防ぐ（[#17237](https://github.com/pnpm/pnpm/pull/17237)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-23 — 組み込みレプリカの同期を専用の接続で行う（read-your-writes を切る）（[#17232](https://github.com/pnpm/pnpm/pull/17232)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-23 — 組み込みレプリカが Turso Cloud のプライマリに新しい sync プロトコルで追従（[#17225](https://github.com/pnpm/pnpm/pull/17225)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-23 — Turso が報告する一意制約の違反を認識、Cloudflare へのデプロイの文書（[#17223](https://github.com/pnpm/pnpm/pull/17223)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-23 — bin とシバンのランタイムを `dist.pnpr.bins` で配る（[#17186](https://github.com/pnpm/pnpm/pull/17186)）📦 v12.15.0 · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-23 — pnpr を通したインストールのメタデータの扱いを最適化（ファイル数・展開後のサイズなど）（[#17169](https://github.com/pnpm/pnpm/pull/17169)）📦 v12.15.0 · [[repos/pnpm-pnpm/changes/2026-10-23|変更]]
- 2026-10-21 — tarball から確かめた `requiresBuild` を配り、pnpm v12 が使う（[#17164](https://github.com/pnpm/pnpm/pull/17164)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-21|変更]]
- 2026-10-21 — 秘密情報の検証とサブキーの導出、エコシステムごとの設定の検証（Section B）（[#17126](https://github.com/pnpm/pnpm/pull/17126)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-21|変更]]
- 2026-10-21 — 文書の形式バージョン・`pnpr serve`・厳密な設定・`v0` プロトコル（Section A）（[#17112](https://github.com/pnpm/pnpm/pull/17112)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-21|変更]]
- 2026-10-19 — ホスト型ストアのレイアウトを衝突しない形に（`layout.json`、`default/packages/`・`orgs/<org>/packages/`、名前の `!xx` エンコード、破壊的変更）（[#17100](https://github.com/pnpm/pnpm/pull/17100)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — リビジョンを `revision: 0` から明示し、tar のダイジェストで指す（[#17092](https://github.com/pnpm/pnpm/pull/17092)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — すべてのエコシステムをそれぞれの接頭辞（`/npm/`・`/cargo/`・`/pypi/`・`/oci/`）で配る（破壊的変更）（[#17087](https://github.com/pnpm/pnpm/pull/17087)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — パッケージの所有者・メンテナー（`$owners`、`npm owner add/rm`）と tombstone（[#17060](https://github.com/pnpm/pnpm/pull/17060)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — 予約したユーザー名での自己登録を拒否、`pnpr add-user`（[#17046](https://github.com/pnpm/pnpm/pull/17046)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — zstd の content coding で非圧縮の tar を配る（[#17054](https://github.com/pnpm/pnpm/pull/17054)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — 認証データベースのスキーマ移行（`auth_schema_migrations`）とトークンの `scopes`・`kind`、MySQL の `username` の大文字小文字の区別（[#17039](https://github.com/pnpm/pnpm/pull/17039)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — 本番向けの最小の既定設定（テスト用の設定は `pnpr/.fixtures/config.yaml` へ）（[#17027](https://github.com/pnpm/pnpm/pull/17027)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — `pnpr config check`・`verify`・`export`・`migrate-storage`・`import-htpasswd` と Verdaccio の `{SHA}` パスワード（[#17002](https://github.com/pnpm/pnpm/pull/17002)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — `npm login`・`pnpm login` の Web ログイン（`/-/v1/login`）で OIDC の SSO（[#16969](https://github.com/pnpm/pnpm/pull/16969)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-19 — packument の `ETag`・`Vary: Accept`・`Cache-Control` と `304 Not Modified`（[#16962](https://github.com/pnpm/pnpm/pull/16962)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-19|変更]]
- 2026-10-16 — pnpr の管理操作の監査ログ（[#16960](https://github.com/pnpm/pnpm/pull/16960)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — zstd で圧縮した応答を配る（[#16585](https://github.com/pnpm/pnpm/pull/16585)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — `npm publish --provenance` と attestation のエンドポイント（[#16956](https://github.com/pnpm/pnpm/pull/16956)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — トークンの作成・有効期限・読み取り専用での audit（[#16954](https://github.com/pnpm/pnpm/pull/16954)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — npm の audit のエンドポイントと OSV（[#16950](https://github.com/pnpm/pnpm/pull/16950)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — キャッシュの LRU・TTL 削除と `pnpr cache-gc`（[#16946](https://github.com/pnpm/pnpm/pull/16946)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — Prometheus のメトリクス・要求 ID・アクセスログ（[#16944](https://github.com/pnpm/pnpm/pull/16944)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — レート制限・要求のタイムアウト・upstream 取得のまとめ（[#16943](https://github.com/pnpm/pnpm/pull/16943)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — 信頼するプロキシからクライアントの IP を求める（[#16939](https://github.com/pnpm/pnpm/pull/16939)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — `SIGTERM` での停止とレディネス・ライブネス（[#16934](https://github.com/pnpm/pnpm/pull/16934)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-16 — 監査で見つかったセキュリティ・ストレージの問題を修正（[#16927](https://github.com/pnpm/pnpm/pull/16927)）⏳ 未リリース · [[repos/pnpm-pnpm/changes/2026-10-16|変更]]
- 2026-10-12 — Web UI を pnpr-web 0.2.7 から作る（OIDC のサインインの修正）（[#16794](https://github.com/pnpm/pnpm/pull/16794)）📦 v12.11.2 · [[repos/pnpm-pnpm/changes/2026-10-12|変更]]
- 2026-10-12 — Web UI から OIDC でサインイン（[#16774](https://github.com/pnpm/pnpm/pull/16774)）📦 v12.11.2 · [[repos/pnpm-pnpm/changes/2026-10-12|変更]]
- 2026-10-12 — gzip で圧縮した Web UI のファイルを最後まで配信（[#16775](https://github.com/pnpm/pnpm/pull/16775)）📦 v12.11.2 · [[repos/pnpm-pnpm/changes/2026-10-12|変更]]
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

- [[repos/pnpm-pnpm/changes/2026-10-26|2026-10-26 の変更]]
- [[repos/pnpm-pnpm/changes/2026-10-23|2026-10-23 の変更]]
- [[repos/pnpm-pnpm/releases/v12.15.0|v12.15.0]]
- [[repos/pnpm-pnpm/changes/2026-10-21|2026-10-21 の変更]]
- [[repos/pnpm-pnpm/changes/2026-10-16|2026-10-16 の変更]]
- [[repos/pnpm-pnpm/changes/2026-10-12|2026-10-12 の変更]]
- [[repos/pnpm-pnpm/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/pnpm-pnpm/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/pnpm-pnpm/releases/v12.9.1|v12.9.1]]
- [[repos/pnpm-pnpm/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/pnpm-pnpm/topics/インストール|インストール]]（`registries` の `networkConcurrency`）
