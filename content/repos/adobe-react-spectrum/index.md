---
title: adobe/react-spectrum
updated: 2026-11-04
tags:
  - repo/adobe-react-spectrum
---

[GitHub](https://github.com/adobe/react-spectrum) · ブランチ: `main`

## 最新リリース

- 安定版: [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|まとめ]]（`Sheet` の追加など）
- 安定版（S2）: [@react-spectrum/s2@1.8.0](https://github.com/adobe/react-spectrum/releases/tag/%40react-spectrum/s2%401.8.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|まとめ]]（`SideNavPanel`、Menu の非同期・仮想化など）
- プレリリース: なし

## 直近の注目変更

- ComboBox: `isReadOnly` のときは blur で値を確定しない（[#10869](https://github.com/adobe/react-spectrum/pull/10869)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]]
- ComboBox: 入力欄と Popover が別の shadow root にあってもキーボードで開けるように（[#10631](https://github.com/adobe/react-spectrum/pull/10631)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]]
- Tree の項目に説明テキスト（`Text slot="description"`）（[#10710](https://github.com/adobe/react-spectrum/pull/10710)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Collections|Collections]]
- TabPanels: 入れ子の Tabs で高さのアニメーションが跳ねる問題を修正（[#10819](https://github.com/adobe/react-spectrum/pull/10819)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Tabs|Tabs]]
- Table の `Row` に `onFocus`・`onBlur`・`onFocusChange` を追加（[#10857](https://github.com/adobe/react-spectrum/pull/10857)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Collections|Collections]]
- optimize-locales-plugin: Turbopack の loader の `locales` の型を直し、`NextConfig` での TS2322 を解消（[#10889](https://github.com/adobe/react-spectrum/pull/10889)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]]
- S2: `page.css` の型宣言を戻す（`noUncheckedSideEffectImports` での TS2882 の修正）（[#10874](https://github.com/adobe/react-spectrum/pull/10874)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]]
- `ColorField` が `Form` の `validationBehavior` を引き継ぐように（[#10863](https://github.com/adobe/react-spectrum/pull/10863)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/フォーム|フォーム]]
- macOS で Enter を押すと Select が開き直る問題を修正（`usePress`）（[#10820](https://github.com/adobe/react-spectrum/pull/10820)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]]
- Chat のスクロールアンカーを改善（モバイルでの位置飛び、`ResponseStatus` の展開時のスクロール）（[#10600](https://github.com/adobe/react-spectrum/pull/10600)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]]

## トピック

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]] — `@react-spectrum/ai` の PromptField・Chat/Thread・AttachmentList・AttachmentGrid・AttachmentBadge など
- [[repos/adobe-react-spectrum/topics/Collections|Collections]] — コレクションのキー管理（`Document`/`BaseCollection`）とキーボード・フォーカス、Tree の展開・説明テキスト、`GridListItem` と Table の `Row` のフォーカスイベント
- [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]] — 非同期アイテム読み込み時の開閉制御、VoiceOver での読み上げ、shadow DOM・`isReadOnly` での挙動
- [[repos/adobe-react-spectrum/topics/DateField|DateField]] — 日付入力（`useDateSegment`・`DateField`）
- [[repos/adobe-react-spectrum/topics/Menu|Menu]] — S2 の Menu（セパレーター表示・仮想化）
- [[repos/adobe-react-spectrum/topics/SideNav|SideNav]] — S2 の SideNav と SideNavPanel（旧 SidePanel）内での折りたたみ
- [[repos/adobe-react-spectrum/topics/Tabs|Tabs]] — RAC の Tabs（TabPanels のサイズのアニメーションと入れ子の Tabs）
- [[repos/adobe-react-spectrum/topics/Toast|Toast]] — S2 の Toast（展開したリストとボタンの間隔）
- [[repos/adobe-react-spectrum/topics/TokenField|TokenField]] — トークン入力欄（`useTokenField`）のキャレット位置・スクロール・選択の `onChange`
- [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]] — react-aria のインタラクション用フック（`useHover` のタッチ・マウス併用時のホバー状態、`usePress` の macOS での Enter）
- [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]] — Modal・Popover・Sheet の配置とスクリーンキーボードへの対応
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]] — `useKeyboard`（コレクション・DatePicker・Toolbar のキーボード処理）とパッケージ import 時のグローバルイベント
- [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]] — S2 の `style` マクロ（ESM ビルド）とテーマで使えるプロパティ、`page.css` の型宣言
- [[repos/adobe-react-spectrum/topics/ドラッグアンドドロップ|ドラッグアンドドロップ]] — `useDrag`・`useDescription` と仮想化リスト（`ListLayout`）でのドロップ位置
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]] — RAC の `Form`（入れ子）、Select・CheckboxGroup のフォームリセットと Select の props
- [[repos/adobe-react-spectrum/topics/ユーティリティ|ユーティリティ]] — react-aria の utils（`runAfterTransition`・`useDescription`）
- [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]] — `@react-aria/optimize-locales-plugin`（Turbopack 対応と loader の型）

## 取り込み

- [[repos/adobe-react-spectrum/log|取り込み履歴]]
- リリース: [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]]、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]]
- 最近の変更: [[repos/adobe-react-spectrum/changes/2026-11-04|2026-11-04]]、[[repos/adobe-react-spectrum/changes/2026-10-30|2026-10-30]]、[[repos/adobe-react-spectrum/changes/2026-10-28|2026-10-28]]、[[repos/adobe-react-spectrum/changes/2026-10-26|2026-10-26]]、[[repos/adobe-react-spectrum/changes/2026-10-23|2026-10-23]]
