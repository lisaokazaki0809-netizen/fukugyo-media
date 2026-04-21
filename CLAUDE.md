# 二足のわらじ (fukugyo-media)

## プロジェクト概要
30代会社員が気になる副業と投資を調べて、比較して、考えた記録ブログ。
トーン: 一人称視点、「調べてみた・比較してみた」ベース。盛らない。煽らない。
※実際に試していないものもあるので「やってみた」とは書かない。

## 技術スタック
- Astro (SSG)
- TypeScript (strict)
- Tailwind CSS v4
- Pagefind (クライアントサイド検索)
- Vercel デプロイ

## ディレクトリ構造
```
src/
├── content/
│   └── posts/          # 記事Markdown (frontmatter必須)
├── layouts/
│   └── Base.astro      # 共通レイアウト
├── components/         # UIコンポーネント
├── pages/
│   ├── index.astro     # トップページ
│   ├── about.astro     # About
│   ├── search.astro    # 検索ページ
│   ├── rss.xml.ts      # RSSフィード
│   ├── posts/[slug].astro  # 記事詳細
│   ├── category/[slug].astro # カテゴリページ
│   └── tag/[slug].astro     # タグページ
├── lib/                # ユーティリティ
└── styles/
    └── global.css      # Tailwind + カスタムスタイル
```

## カテゴリ (5つ固定)
| slug | 表示名 |
|------|--------|
| investment | 投資 |
| ai | AI副業 |
| entrepreneur | 起業 |
| fortune | 占い |
| relationship | 恋愛 |

## 記事テンプレート
```markdown
---
title: "記事タイトル"
description: "メタディスクリプション（120文字以内）"
pubDate: 2026-04-21
category: "investment"
tags: ["株式投資", "初心者"]
image: "/images/og-default.png"
---

本文をここに書く
```

## コマンド
- `npm run dev` — 開発サーバー起動
- `npm run build` — ビルド + Pagefindインデックス生成
- `npm run preview` — ビルド結果のプレビュー

## デプロイ手順 (Vercel)
1. GitHubリポジトリにpush
2. Vercelでリポジトリを接続
3. Framework Preset: Astro
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. 環境変数: `SITE_URL` を本番URLに設定

## デザインルール
- フォント: Noto Sans JP
- 配色: 白背景 (#FFFFFF) / テキスト (#1F2937) / アクセント (#1E3A5F)
- 記事本文: font-size 16px, line-height 1.7
- ダークモードなし
