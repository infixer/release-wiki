# Release Wiki 更新手順（Claude ルーチン用）

`digest/inbox/*.json` の内容を `content/` の Wiki に反映する手順です。
データ集めは GitHub Actions の collect が済ませています。あなたの仕事は **要約と Wiki の更新だけ** です。

## 0. トークン節約の原則（必ず守る）

- 読むのは `digest/inbox/*.json` と、更新が必要な Wiki ページだけ。
- リポジトリの clone、diff の取得、GitHub API、Web 取得はしない。必要なデータはすべて inbox にある。
- inbox に JSON ファイルが 1 つも無ければ（`.gitkeep` だけなら）、何も変更せずに「新着なし」と報告して終了する。
- `hint: "other"` の PR は、考え込まずに「その他」へ 1 行で書く。
- 1 リポジトリの PR が `maxPrs`（JSON に入っている。既定 60）を超えたら、詳しく書くのは `hint` が `feature` / `fix` / `unknown` のものだけにし、残りは「その他」に 1 行の箇条書きにする。
  それでも多すぎるときは、`unknown` のうち内部的なリファクタや軽微な変更も 1 行扱いにしてよい。
- トピックページは、まず `ls content/repos/<id>/topics/` で一覧を見て、更新するものだけ開く。全部を読まない。
- `digest/state.json` と `digest/config.yml` は読まない・触らない。

## 1. 準備

1. `ls digest/inbox/` で JSON を確認する。
2. ファイル名は `<YYYY-MM-DD>-<id>(-N).json`。同じ id のファイルが複数あれば（前の回が失敗した分）、**日付の古い順にまとめて 1 回分として** 処理する。
3. 今日の日付（JST, `YYYY-MM-DD`）を「この回の日付」とする。以下 `<date>` と書く。

id とフォルダの対応:

| inbox | Wiki のフォルダ |
|---|---|
| `kind: "repo"`、`repo: "vercel/next.js"` | `content/repos/vercel-next.js/`（`/` を `-` にしたもの） |
| `kind: "blog"`、`id: "nextjs"` | `content/blogs/nextjs/` |

フォルダやページが無ければ作る（初回はどれも無い）。

## 2. inbox の JSON の中身

リポジトリ:

- `range.from`〜`range.to`: 取り込んだ期間
- `latest.stable` / `latest.prerelease`: 最新の安定版と、それより新しいプレリリース（無ければ null）
- `releasesInRange[]`: 期間内に公開された Release（`prerelease` が true ならプレリリース）
- `prs[]`: マージ済み PR（古い順）
  - `hint`: 分類の目安（`feature` / `fix` / `other` / `unknown`）。目安なので、本文を読んで明らかに違えば直してよい
  - `release`: 収録状況（`📦 v16.4.0-canary.42` / `⏳ 未リリース`）。そのまま書く
  - `body`: PR 本文（3000 字まで）、`files`: 変更ファイル（40 件まで。`filesTruncated` が true なら他にもある）
- `maxPrs`: 詳しく書く PR の上限
- `errors[]`: collect で起きたエラー。空でなければ log.md に書く

ブログ:

- `posts[]`: 新着記事（古い順）。`text` は本文（15000 字まで）、`versions` は本文中のバージョン表記
- `relatedRepo`: 関連リポジトリ（`vercel/next.js` など）
- `errors[]`: collect で起きたエラー

## 3. 書き方の共通ルール

- 日本語で書く。API 名・オプション名・コマンドはコードのまま（`` `next analyze` ``）。
- **PR 本文・タイトル・ファイル一覧・記事本文から読み取れることだけを書く。推測で補わない。** 分からないことは書かない。
- すべてのページに frontmatter を付ける。`tags` に `repo/<owner>-<repo>`（例: `repo/vercel-next.js`）や `blog/<id>`（例: `blog/nextjs`）を入れる。
- ページ間のリンクは `[[wikilink]]` で、**content/ からのパス（.md なし）と表示名** を書く。
  例: `[[repos/vercel-next.js/topics/キャッシュ|キャッシュ]]`、`[[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]`
- 外部へのリンク（PR・Release・記事）は Markdown のリンク `[#99074](https://github.com/...)` で書く。
- ファイル名に空白・`/`・`#`・`?`・`%` を使わない（空白は `-` にする）。
- callout は Obsidian 形式（`> [!tip]`、`> [!quote]`、`> [!success]`、`> [!warning]`、`> [!info]`）。

## 4. PR の要約（changes ページの中身）

### 新機能（`hint: feature` など、できることが増えたもの）

```markdown
### next analyze コマンドが正式機能に（[#99074](https://github.com/vercel/next.js/pull/99074)）

> [!tip] 何ができるようになったか
> バンドルの中身を調べる `next analyze` コマンドが experimental から外れ、正式に使えるようになった。
>
> - **使い方**: `next analyze`（`--output` で出力先を指定）
> - **嬉しい場面**: どのモジュールがバンドルを大きくしているかを調べたいとき

📦 v16.4.0-canary.42 に収録 · トピック: [[repos/vercel-next.js/topics/バンドル分析|バンドル分析]]
```

### 変更・修正（`hint: fix` など、挙動が変わったもの）

```markdown
### ハイドレーション時のクラッシュを修正（[#12345](https://github.com/react/react/pull/12345)）

> [!quote] Before
> Suspense 境界の中でテキストが一致しないと、クライアントでクラッシュしていた。

> [!success] After
> 不一致を警告として報告し、その境界だけをクライアントで描画し直す。

⏳ 未リリース · トピック: [[repos/react-react/topics/ハイドレーション|ハイドレーション]]
```

- Before / After はそれぞれ 1〜3 文。
- 移行作業が必要なら `> [!warning] 移行が必要` で何をすればよいかを書く。

### その他（docs・CI・テスト・リファクタ、`hint: other`）

```markdown
- テストの安定化（[#12346](https://github.com/react/react/pull/12346)）⏳ 未リリース
```

## 5. ページの作り方

`<id>` はリポジトリなら `vercel-next.js`、ブログなら `nextjs` のような名前です。

### 5.1 `content/repos/<id>/changes/<date>.md`（その回の PR 要約）

同じ日付のページが既にあれば追記する。

```markdown
---
title: vercel/next.js の変更 2026-09-24
date: 2026-09-24
tags:
  - repo/vercel-next.js
  - changes
---

期間: 2026-09-20 〜 2026-09-23 · PR 33 件（新機能 3 / 変更・修正 12 / その他 18）

## 新機能

（4 の形式で）

## 変更・修正

（4 の形式で）

## その他

（1 行の箇条書き）
```

見出しが空になるときは「なし」と書く。

### 5.2 `content/repos/<id>/topics/<トピック>.md`（Wiki の本体）

- **新機能と変更・修正は、必ずどれかのトピックに反映する。** その他は反映しなくてよい。
- 既存のトピックに合うならそこへ追記する。PR ごとに新しいトピックを作らない。
  トピックは「機能・領域」の単位（例: `キャッシュ`、`App-Router`、`Server-Actions`、`ハイドレーション`、`DevTools`）。
- `## 概要` は、その機能の **現時点の状態** に書き直してよい（履歴は `## 変更履歴` に残る）。

```markdown
---
title: キャッシュ
updated: 2026-09-24
tags:
  - repo/vercel-next.js
  - topic
---

## 概要

（この機能・領域が今どうなっているかを 3〜8 行で）

## 主な API・オプション

- `cacheLife()` — …
- `experimental.xxx` — …

## 変更履歴

- 2026-09-24 — `revalidateTag` に第 2 引数を追加（[#99100](https://github.com/vercel/next.js/pull/99100)）📦 v16.4.0-canary.42 · [[repos/vercel-next.js/changes/2026-09-24|変更]]
- 2026-09-20 — …

## 関連

- [[repos/vercel-next.js/releases/v16.4.0|v16.4.0]]
- [[blogs/nextjs/posts/2026-09-22-next-16-4|Next.js 16.4（ブログ）]]
```

`## 変更履歴` は新しい順（先頭に追加）。

### 5.3 `content/repos/<id>/releases/<tag>.md`（安定版リリース）

- `releasesInRange` に **安定版（`prerelease: false`）** があるときだけ作る。canary・rc などのプレリリースはページを作らない。
- ファイル名は tag そのまま（例: `v16.4.0.md`）。

```markdown
---
title: vercel/next.js v16.4.0
date: 2026-09-24
tags:
  - repo/vercel-next.js
  - release
---

[Release ページ](https://github.com/vercel/next.js/releases/tag/v16.4.0) · 公開: 2026-09-23

## 要点

- （Release の本文から 3〜8 項目。新機能・破壊的変更を優先）

## 関連

- 取り込み済みの PR: [[repos/vercel-next.js/changes/2026-09-24|2026-09-24 の変更]]
- トピック: [[repos/vercel-next.js/topics/キャッシュ|キャッシュ]]
- ブログ: [[blogs/nextjs/posts/2026-09-22-next-16-4|Next.js 16.4]]
```

### 5.4 `content/blogs/<id>/posts/<YYYY-MM-DD>-<slug>.md`（ブログ記事）

- 日付は記事の `publishedAt`（JST）、slug は記事 URL の最後の部分（例: `next-16-4`）。

```markdown
---
title: Next.js 16.4
date: 2026-09-22
tags:
  - blog/nextjs
  - post
---

[元の記事](https://nextjs.org/blog/next-16-4) · 公開: 2026-09-22

## 要約

（3〜5 行）

## 新機能・主な変更

> [!tip] next analyze が正式機能に
> …

## 破壊的変更・移行手順

> [!warning] `experimental.analyze` の削除
> …

（無ければ「なし」）

## 関連

- リリース: [[repos/vercel-next.js/releases/v16.4.0|v16.4.0]]
- トピック: [[repos/vercel-next.js/topics/バンドル分析|バンドル分析]]
```

- `## 関連` には、`versions` に対応する `relatedRepo` の releases ページ（あるものだけ）と、関係するトピックへのリンクを書く。
- **逆方向のリンク**: 関係するトピックの `## 関連` と、対応する releases ページの `## 関連` にも、この記事へのリンクを追記する。

### 5.5 `content/repos/<id>/index.md`（リポジトリのトップ。毎回書き直す）

```markdown
---
title: vercel/next.js
updated: 2026-09-24
tags:
  - repo/vercel-next.js
---

[GitHub](https://github.com/vercel/next.js) · ブランチ: `canary`

## 最新リリース

- 安定版: [v16.3.6](https://github.com/...)（2026-09-10）→ [[repos/vercel-next.js/releases/v16.3.6|まとめ]]（ページがあれば）
- プレリリース: [v16.4.0-canary.45](https://github.com/...)（2026-09-23）

## 直近の注目変更

（新機能・大きな変更・修正を新しい順に 10 件。各行に PR リンク・収録状況・トピックへのリンク）

## トピック

（topics/ のページを五十音・アルファベット順に全部。1 行の説明付き）

## 取り込み

- [[repos/vercel-next.js/log|取り込み履歴]]
- 最近の変更: [[repos/vercel-next.js/changes/2026-09-24|2026-09-24]]、…（直近 5 回分）
```

### 5.6 `content/repos/<id>/log.md`（取り込み履歴。毎回、先頭に 1 項目追加）

```markdown
---
title: vercel/next.js 取り込み履歴
updated: 2026-09-24
tags:
  - repo/vercel-next.js
---

## 2026-09-24

- 期間: 2026-09-20T21:17:00Z 〜 2026-09-23T21:17:00Z
- PR 33 件（詳しく 15 件 / 1 行 18 件）、Release 4 件（安定版 1 件）
- 更新したページ: [[repos/vercel-next.js/changes/2026-09-24|changes]]、[[repos/vercel-next.js/topics/キャッシュ|キャッシュ]]、…
- エラー: なし（`errors` があればそのまま書く）
```

ブログの取り込みは、関連リポジトリがあればその log.md にも「ブログ: 記事 N 件」として書き、`errors` があれば添える。

### 5.7 `content/blogs/<id>/index.md`（記事一覧。毎回書き直す）

```markdown
---
title: Next.js Blog
updated: 2026-09-24
tags:
  - blog/nextjs
---

[元のブログ](https://nextjs.org/blog) · 関連: [[repos/vercel-next.js/index|vercel/next.js]]

## 記事

- 2026-09-22 — [[blogs/nextjs/posts/2026-09-22-next-16-4|Next.js 16.4]] — （1 行の要約）
```

新しい順に全部並べる。

### 5.8 `content/index.md`（サイトのトップ。毎回書き直す）

- `## リポジトリ`: 表（リポジトリ・ブランチ・最新の安定版・最終更新）。リポジトリ名は `[[repos/<id>/index|owner/repo]]` のリンクにする
- `## ブログ`: 表（ブログ・関連リポジトリ・最新の記事）
- `## 最近の更新`: この回の要点を 3〜10 行（各 changes ページ・記事へのリンク付き）

`content/repos/index.md` と `content/blogs/index.md` の一覧にも、新しく作ったリポジトリ・ブログへのリンクを足す。

## 6. 仕上げ

1. 処理した `digest/inbox/*.json` を削除する（`.gitkeep` は残す）。
2. `content/` の変更と inbox の削除をまとめて `main` に commit・push する。
   - コミットメッセージ: `wiki: <date>`
   - PR は作らない。`digest/state.json` は触らない。
3. push すると GitHub Actions の deploy がサイトを公開する。
4. 報告は短く: 取り込んだ件数（リポジトリごとの PR 数・Release 数・記事数）、作成・更新したページ、エラーの有無。
