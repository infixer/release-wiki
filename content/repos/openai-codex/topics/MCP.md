---
title: MCP
updated: 2026-10-07
tags:
  - repo/openai-codex
  - topic
---

## 概要

Codex から MCP（Model Context Protocol）サーバーに接続するクライアント側（`codex-rs/rmcp-client`）の認証まわり。2026-10-02 の回では、エンタープライズ管理（EMA）のトークン交換で、2 段階の ID-JAG 交換とトークン検証を独自実装から `rmcp` SDK（3.3.0、`auth-enterprise-managed`）に移した。また、ID-JAG 交換の前に MCP リソースの認可サーバーを発見・検証する `exchange_ema_auth_token` が追加され、リソース・issuer の制約の照合、JWT bearer 対応の確認、リダイレクトや宛先の制限を行うようになった。2026-10-05 の回では、issuer に紐付いたコールバックを使わない OAuth の例外が Figma から Mercado Pago に置き換えられた。また、必須の MCP の起動中に要求元が切断しても、作成したスレッドが通常どおりアンロードされるよう修正された。安定版 rust-v0.160.1 では、リモート環境変数を明示的に設定したリモートの stdio の MCP サーバーの起動で `SYSTEMROOT`・`TEMP`・`TMP` が保持されるようになった（Unix のホストから Windows の executor の起動環境を維持できる）。

## 主な API・オプション

- `exchange_ema_auth_token` — 認可サーバーの発見・検証の後に、エンタープライズの ID 資格情報を解決して ID-JAG のトークン交換を行う（低レベルの交換処理は非公開）
- 認可サーバーの発見 — `server/discover`（エンタープライズ管理の認可拡張付き）、protected-resource metadata のチャレンジ、well-known へのフォールバック。クロスオリジンのメタデータのリダイレクトは拒否
- エラーの区別 — `invalid_grant` をエンタープライズの ID の失敗とリソースの認可の失敗に分け、`insufficient_user_authentication` の扱いを維持
- OAuth のプロバイダ例外 — `https://mcp.mercadopago.com/mcp` の issuer に `auth.mercadopago.com` の認可エンドポイントと `mcp.mercadopago.com` のトークンエンドポイントを許可（Figma の例外は削除）

## 変更履歴

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
