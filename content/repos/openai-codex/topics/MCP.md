---
title: MCP
updated: 2026-10-21
tags:
  - repo/openai-codex
  - topic
---

## 概要

Codex から MCP（Model Context Protocol）サーバーに接続するクライアント側（`codex-rs/rmcp-client`）の認証まわり。2026-10-02 の回では、エンタープライズ管理（EMA）のトークン交換で、2 段階の ID-JAG 交換とトークン検証を独自実装から `rmcp` SDK（3.3.0、`auth-enterprise-managed`）に移した。また、ID-JAG 交換の前に MCP リソースの認可サーバーを発見・検証する `exchange_ema_auth_token` が追加され、リソース・issuer の制約の照合、JWT bearer 対応の確認、リダイレクトや宛先の制限を行うようになった。2026-10-05 の回では、issuer に紐付いたコールバックを使わない OAuth の例外が Figma から Mercado Pago に置き換えられた。また、必須の MCP の起動中に要求元が切断しても、作成したスレッドが通常どおりアンロードされるよう修正された。安定版 rust-v0.160.1 では、リモート環境変数を明示的に設定したリモートの stdio の MCP サーバーの起動で `SYSTEMROOT`・`TEMP`・`TMP` が保持されるようになった（Unix のホストから Windows の executor の起動環境を維持できる）。2026-10-09 の回では、応答されないまま待ち手を失った elicitation を `ElicitationAbandoned` で 1 回だけ通知するようになり、ユーザー確認の失敗・拒否・取り消しの応答の `_meta` に理由 `openai/userVerificationReason` を載せるようになった。安定版 rust-v0.161.0 では `/mcp login <name>` でターミナルから MCP サーバーにサインインできる。2026-10-16 の回では、リモート環境でもホストの MCP の設定をローカル環境から作るようにし、リモートの MCP サーバーの Windows の環境変数の扱いを修正した（未リリース）。2026-10-19 の回では、ツール一覧の変更をターンの途中で反映する `mcp_tool_list_changed`（既定は無効）、サーバーの状態の `toolListMeta`、OAuth の発見でのリソース固有のスコープの優先、承認の取り消しの理由の区別が入った。2026-10-21 の回では、MCP のツールのフックがサブエージェントの休止中のキャッシュ済みサーバーを起動して呼べるようになり（タイムアウトは起動を含む）、EMA の取り消しのスコープを設定の再読み込みにも通し、HTTP の境界で認可の権限を再確認するようになった。

## 主な API・オプション

- `exchange_ema_auth_token` — 認可サーバーの発見・検証の後に、エンタープライズの ID 資格情報を解決して ID-JAG のトークン交換を行う（低レベルの交換処理は非公開）
- 認可サーバーの発見 — `server/discover`（エンタープライズ管理の認可拡張付き）、protected-resource metadata のチャレンジ、well-known へのフォールバック。クロスオリジンのメタデータのリダイレクトは拒否
- エラーの区別 — `invalid_grant` をエンタープライズの ID の失敗とリソースの認可の失敗に分け、`insufficient_user_authentication` の扱いを維持
- OAuth のプロバイダ例外 — `https://mcp.mercadopago.com/mcp` の issuer に `auth.mercadopago.com` の認可エンドポイントと `mcp.mercadopago.com` のトークンエンドポイントを許可（Figma の例外は削除）
- `ElicitationAbandoned` — 応答できなくなった elicitation の通知（サーバー名と応答トークン付き）
- `openai/userVerificationReason` — ユーザー確認の失敗理由（応答の `_meta`、上限付き）
- `/mcp login <name>` — ターミナルのセッションから MCP サーバーにサインイン（rust-v0.161.0）
- `mcp_tool_list_changed`（既定は無効）— ツール一覧の変更通知でカタログを更新し、同じターンで新しいツールを発見・呼び出しできる
- `McpServerStatus.toolListMeta` — 最初の `tools/list` のページの `_meta`（無ければ `null`）
- OAuth の発見のスコープ — `WWW-Authenticate` のチャレンジ → protected resource metadata の順、対応していれば `offline_access`。認可サーバーの一般のスコープは使わない
- MCP の承認の取り消しの理由 — `user`・`interrupted`・`non_interactive`

## 変更履歴

- 2026-10-21 — EMA の取り消しを設定の再読み込みにも通し、HTTP の境界で権限を再確認（[#55287](https://github.com/openai/codex/pull/55287)、[#55288](https://github.com/openai/codex/pull/55288)）⏳ 未リリース · [[repos/openai-codex/changes/2026-10-21|変更]]
- 2026-10-21 — フックの呼び出しで休止中の MCP サーバーを起動（[#55263](https://github.com/openai/codex/pull/55263)）⏳ 未リリース · [[repos/openai-codex/changes/2026-10-21|変更]]
- 2026-10-19 — MCP の承認の取り消しの理由（`user`・`interrupted`・`non_interactive`）を区別（[#54679](https://github.com/openai/codex/pull/54679)）📦 rust-v0.164.0-alpha.3 · [[repos/openai-codex/changes/2026-10-19|変更]]
- 2026-10-19 — サーバーの状態でツール一覧のメタデータ `toolListMeta` を公開（[#54686](https://github.com/openai/codex/pull/54686)）📦 rust-v0.164.0-alpha.3 · [[repos/openai-codex/changes/2026-10-19|変更]]
- 2026-10-19 — ツール一覧の変更をターンの途中でも反映（`mcp_tool_list_changed`）（[#54656](https://github.com/openai/codex/pull/54656)）📦 rust-v0.164.0-alpha.3 · [[repos/openai-codex/changes/2026-10-19|変更]]
- 2026-10-19 — OAuth の発見でリソース固有のスコープを優先（[#54653](https://github.com/openai/codex/pull/54653)）📦 rust-v0.164.0-alpha.3 · [[repos/openai-codex/changes/2026-10-19|変更]]
- 2026-10-16 — リモートの MCP サーバーで `SYSTEMDRIVE`・`LOCALAPPDATA` を保ち、上書きを Windows に合わせて適用（[#54069](https://github.com/openai/codex/pull/54069)）⏳ 未リリース · [[repos/openai-codex/changes/2026-10-16|変更]]
- 2026-10-16 — リモート環境でもホストの MCP とプラグインの設定をローカル環境から作る（[#53990](https://github.com/openai/codex/pull/53990)）⏳ 未リリース · [[repos/openai-codex/changes/2026-10-16|変更]]
- 2026-10-09 — ユーザー確認の失敗理由を `openai/userVerificationReason` で保持（[#51808](https://github.com/openai/codex/pull/51808)）📦 rust-v0.163.0-alpha.1 · [[repos/openai-codex/changes/2026-10-09|変更]]
- 2026-10-09 — 応答されない elicitation の放棄を `ElicitationAbandoned` で通知（[#51611](https://github.com/openai/codex/pull/51611)）📦 rust-v0.163.0-alpha.1 · [[repos/openai-codex/changes/2026-10-09|変更]]
- 2026-10-07 — rust-v0.160.1 で、リモートの stdio の MCP サーバーの起動時に `SYSTEMROOT`・`TEMP`・`TMP` を保持（[#51121](https://github.com/openai/codex/pull/51121)、0.160 へのバックポート）📦 rust-v0.160.1 · [[repos/openai-codex/releases/rust-v0.160.1|リリース]]
- 2026-10-05 — MCP の起動中に切断されたスレッドがアンロードされない問題を修正（[#50380](https://github.com/openai/codex/pull/50380)）📦 rust-v0.162.0-alpha.13 · [[repos/openai-codex/changes/2026-10-05|変更]]
- 2026-10-05 — OAuth の例外を Figma から Mercado Pago に置き換え（[#50189](https://github.com/openai/codex/pull/50189)）📦 rust-v0.162.0-alpha.13 · [[repos/openai-codex/changes/2026-10-05|変更]]
- 2026-10-02 — MCP の ID-JAG 交換の前に認可サーバーを発見・検証（[#49478](https://github.com/openai/codex/pull/49478)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]
- 2026-10-02 — MCP のエンタープライズ管理トークン交換を rmcp SDK に移行（[#49473](https://github.com/openai/codex/pull/49473)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]

## 関連

- [[repos/openai-codex/topics/認証|認証]]
- [[repos/openai-codex/topics/管理要件|管理要件]]
- [[repos/openai-codex/changes/2026-10-02|2026-10-02 の変更]]
- [[repos/openai-codex/changes/2026-10-05|2026-10-05 の変更]]
- [[repos/openai-codex/releases/rust-v0.160.1|rust-v0.160.1]]
- [[repos/openai-codex/releases/rust-v0.161.0|rust-v0.161.0]]
- [[repos/openai-codex/changes/2026-10-09|2026-10-09 の変更]]
- [[repos/openai-codex/changes/2026-10-16|2026-10-16 の変更]]
