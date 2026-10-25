---
title: adobe/react-spectrum
updated: 2026-10-26
tags:
  - repo/adobe-react-spectrum
---

[GitHub](https://github.com/adobe/react-spectrum) · ブランチ: `main`

## 最新リリース

- 安定版: [react-aria-components@1.22.0](https://github.com/adobe/react-spectrum/releases/tag/react-aria-components%401.22.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|まとめ]]（`Sheet` の追加など）
- 安定版（S2）: [@react-spectrum/s2@1.8.0](https://github.com/adobe/react-spectrum/releases/tag/%40react-spectrum/s2%401.8.0)（2026-10-09）→ [[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|まとめ]]（`SideNavPanel`、Menu の非同期・仮想化など）
- プレリリース: なし

## 直近の注目変更

- macOS で Enter を押すと Select が開き直る問題を修正（`usePress`）（[#10820](https://github.com/adobe/react-spectrum/pull/10820)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]]
- Chat のスクロールアンカーを改善（モバイルでの位置飛び、`ResponseStatus` の展開時のスクロール）（[#10600](https://github.com/adobe/react-spectrum/pull/10600)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]]
- SideNavPanel で移動先の無いトップレベルの項目が隠れ・展開されない問題を修正（[#10778](https://github.com/adobe/react-spectrum/pull/10778)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/SideNav|SideNav]]
- `AttachmentList` の card 型の添付を全幅で表示し、ファイル名と説明が見えるように（[#10818](https://github.com/adobe/react-spectrum/pull/10818)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]]
- タッチ操作の後に `useHover` のホバー状態が残る問題を修正（[#10824](https://github.com/adobe/react-spectrum/pull/10824)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]]
- `GridListItem` に `onFocus`・`onBlur`・`onFocusChange` を追加（[#10822](https://github.com/adobe/react-spectrum/pull/10822)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Collections|Collections]]
- `Sheet` が開くときに画面外で待たされる時間をなくす（[#10815](https://github.com/adobe/react-spectrum/pull/10815)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]]
- Select のタイプアヘッドで同じ文字の繰り返しが正しく動くように（[#10006](https://github.com/adobe/react-spectrum/pull/10006)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]]
- `hasChildItems` の TreeItem が子の行なしでも展開できるように（[#10799](https://github.com/adobe/react-spectrum/pull/10799)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/Collections|Collections]]
- テスト環境ではスタイルマクロのクラス名にバージョンの接尾辞を付けない（[#10736](https://github.com/adobe/react-spectrum/pull/10736)）⏳ 未リリース · トピック: [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]]

## トピック

- [[repos/adobe-react-spectrum/topics/AI-コンポーネント|AI-コンポーネント]] — `@react-spectrum/ai` の PromptField・Chat/Thread・AttachmentList・AttachmentGrid・AttachmentBadge など
- [[repos/adobe-react-spectrum/topics/Collections|Collections]] — コレクションのキー管理（`Document`/`BaseCollection`）とキーボード・フォーカス、Tree の展開、`GridListItem` のフォーカスイベント
- [[repos/adobe-react-spectrum/topics/ComboBox|ComboBox]] — 非同期アイテム読み込み時の開閉制御と VoiceOver での読み上げ
- [[repos/adobe-react-spectrum/topics/DateField|DateField]] — 日付入力（`useDateSegment`・`DateField`）
- [[repos/adobe-react-spectrum/topics/Menu|Menu]] — S2 の Menu（セパレーター表示・仮想化）
- [[repos/adobe-react-spectrum/topics/SideNav|SideNav]] — S2 の SideNav と SideNavPanel（旧 SidePanel）内での折りたたみ
- [[repos/adobe-react-spectrum/topics/Toast|Toast]] — S2 の Toast（展開したリストとボタンの間隔）
- [[repos/adobe-react-spectrum/topics/TokenField|TokenField]] — トークン入力欄（`useTokenField`）のキャレット位置・スクロール・選択の `onChange`
- [[repos/adobe-react-spectrum/topics/インタラクション|インタラクション]] — react-aria のインタラクション用フック（`useHover` のタッチ・マウス併用時のホバー状態、`usePress` の macOS での Enter）
- [[repos/adobe-react-spectrum/topics/オーバーレイ|オーバーレイ]] — Modal・Popover・Sheet の配置とスクリーンキーボードへの対応
- [[repos/adobe-react-spectrum/topics/キーボード操作|キーボード操作]] — `useKeyboard`（コレクション・DatePicker・Toolbar のキーボード処理）とパッケージ import 時のグローバルイベント
- [[repos/adobe-react-spectrum/topics/スタイルマクロ|スタイルマクロ]] — S2 の `style` マクロ（ESM ビルド）とテーマで使えるプロパティ
- [[repos/adobe-react-spectrum/topics/ドラッグアンドドロップ|ドラッグアンドドロップ]] — `useDrag`・`useDescription` と仮想化リスト（`ListLayout`）でのドロップ位置
- [[repos/adobe-react-spectrum/topics/フォーム|フォーム]] — RAC の `Form`（入れ子）、Select・CheckboxGroup のフォームリセットと Select の props
- [[repos/adobe-react-spectrum/topics/ユーティリティ|ユーティリティ]] — react-aria の utils（`runAfterTransition`・`useDescription`）
- [[repos/adobe-react-spectrum/topics/ロケール最適化|ロケール最適化]] — `@react-aria/optimize-locales-plugin`（Turbopack 対応）

## 取り込み

- [[repos/adobe-react-spectrum/log|取り込み履歴]]
- リリース: [[repos/adobe-react-spectrum/releases/react-aria-components@1.22.0|react-aria-components@1.22.0]]、[[repos/adobe-react-spectrum/releases/@react-spectrum-s2@1.8.0|@react-spectrum/s2@1.8.0]]
- 最近の変更: [[repos/adobe-react-spectrum/changes/2026-10-26|2026-10-26]]、[[repos/adobe-react-spectrum/changes/2026-10-23|2026-10-23]]、[[repos/adobe-react-spectrum/changes/2026-10-21|2026-10-21]]、[[repos/adobe-react-spectrum/changes/2026-10-19|2026-10-19]]、[[repos/adobe-react-spectrum/changes/2026-10-16|2026-10-16]]
