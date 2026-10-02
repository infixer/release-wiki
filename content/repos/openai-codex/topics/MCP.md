---
title: MCP
updated: 2026-10-02
tags:
  - repo/openai-codex
  - topic
---

## 概要

Codex から MCP（Model Context Protocol）サーバーに接続するクライアント側（`codex-rs/rmcp-client`）の認証まわり。2026-10-02 の回では、エンタープライズ管理（EMA）のトークン交換で、2 段階の ID-JAG 交換とトークン検証を独自実装から `rmcp` SDK（3.3.0、`auth-enterprise-managed`）に移した。また、ID-JAG 交換の前に MCP リソースの認可サーバーを発見・検証する `exchange_ema_auth_token` が追加され、リソース・issuer の制約の照合、JWT bearer 対応の確認、リダイレクトや宛先の制限を行うようになった。

## 主な API・オプション

- `exchange_ema_auth_token` — 認可サーバーの発見・検証の後に、エンタープライズの ID 資格情報を解決して ID-JAG のトークン交換を行う（低レベルの交換処理は非公開）
- 認可サーバーの発見 — `server/discover`（エンタープライズ管理の認可拡張付き）、protected-resource metadata のチャレンジ、well-known へのフォールバック。クロスオリジンのメタデータのリダイレクトは拒否
- エラーの区別 — `invalid_grant` をエンタープライズの ID の失敗とリソースの認可の失敗に分け、`insufficient_user_authentication` の扱いを維持

## 変更履歴

- 2026-10-02 — MCP の ID-JAG 交換の前に認可サーバーを発見・検証（[#49478](https://github.com/openai/codex/pull/49478)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]
- 2026-10-02 — MCP のエンタープライズ管理トークン交換を rmcp SDK に移行（[#49473](https://github.com/openai/codex/pull/49473)）📦 rust-v0.162.0-alpha.1 · [[repos/openai-codex/changes/2026-10-02|変更]]

## 関連

- [[repos/openai-codex/topics/認証|認証]]
- [[repos/openai-codex/topics/管理要件|管理要件]]
- [[repos/openai-codex/changes/2026-10-02|2026-10-02 の変更]]
