---
title: adobe/react-spectrum
updated: 2026-10-12
tags:
  - repo/adobe-react-spectrum
---

[GitHub](https://github.com/adobe/react-spectrum) · ブランチ: `main`

## 最新リリース

- 安定版: [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|まとめ]]（`Sheet` の追加など）
- 安定版（S2）: [@react-spectrum/s2@1.8.0](https://github.com/adobe/react-spectrum/releases/tag/%40react-spectrum/s2%401.8.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|まとめ]]（`SideNavPanel`、Menu の非同期・仮想化など）
- プレリリース: なし

## 直近の注目変更

- `window.screen.orientation` が無い環境で import 時に例外を投げないように（[#10743](https://github.com/adobe/react-spectrum/pull/10743)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- useMenu・useDateField などでキーボードハンドラーを `useKeyboard` 経由に（[#10651](https://github.com/adobe/react-spectrum/pull/10651)）→ 同日に revert（[#10744](https://github.com/adobe/react-spectrum/pull/10744)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- テストで見つかった `Sheet` の問題を修正（iOS Safari で画面外までスワイプ、`scrollbar-gutter: stable`）（[#10732](https://github.com/adobe/react-spectrum/pull/10732)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- Safari 27 の flex のバグを AttachmentGrid・AttachmentList で回避（[#10724](https://github.com/adobe/react-spectrum/pull/10724)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]]
- PromptField で添付ファイルだけのプロンプトを送信できるように（[#10703](https://github.com/adobe/react-spectrum/pull/10703)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]]
- 入れ子の Popover が親の `PopoverContext` を引き継がないように（[#10685](https://github.com/adobe/react-spectrum/pull/10685)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- 新しい CLDR で DateField がクラッシュする問題を修正（[#10698](https://github.com/adobe/react-spectrum/pull/10698)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/DateField|DateField]]
- React Aria Components に `Sheet` コンポーネントを追加（[#10674](https://github.com/adobe/react-spectrum/pull/10674)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- `@react-aria/optimize-locales-plugin` が Turbopack に対応（[#10462](https://github.com/adobe/react-spectrum/pull/10462)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]]
- TokenField でトークン編集後にスクロールが飛ぶ問題を修正（[#10676](https://github.com/adobe/react-spectrum/pull/10676)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/TokenField|TokenField]]

## トピック

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]] — `@react-spectrum/ai` の PromptField・Chat/Thread・AttachmentList・AttachmentGrid・AttachmentBadge など
- [[repos/adobe-react-spectrum/topics/Collections|Collections]] — コレクションのキー管理（`Document`/`BaseCollection`）
- [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]] — 非同期アイテム読み込み時の開閉制御
- [[repos/adobe-react-spectrum/topics/DateField|DateField]] — 日付入力（`useDateSegment`・`DateField`）
- [[repos/adobe-react-spectrum/topics/Menu|Menu]] — S2 の Menu（セパレーター表示・仮想化）
- [[repos/adobe-react-spectrum/topics/SideNav|SideNav]] — S2 の SideNav と SideNavPanel（旧 SidePanel）内での折りたたみ
- [[repos/adobe-react-spectrum/topics/TokenField|TokenField]] — トークン入力欄（`useTokenField`）のキャレット位置・スクロール
- [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]] — Modal・Popover・Sheet の配置とスクリーンキーボードへの対応
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]] — `useKeyboard` とパッケージ import 時のグローバルイベント（`screen.orientation` のフォールバック）
- [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]] — S2 の `style` マクロとテーマで使えるプロパティ
- [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]] — `@react-aria/optimize-locales-plugin`（Turbopack 対応）

## 取り込み

- [[repos/adobe-react-spectrum/log|取り込み履歴]]
- リリース: [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]]、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]]
- 最近の変更: [[repos/adobe-react-spectrum/changes/2026-10-12|2026-10-12]]、[[repos/adobe-react-spectrum/changes/2026-10-09|2026-10-09]]、[[repos/adobe-react-spectrum/changes/2026-10-07|2026-10-07]]、[[repos/adobe-react-spectrum/changes/2026-10-05|2026-10-05]]、[[repos/adobe-react-spectrum/changes/2026-10-02|2026-10-02]]
