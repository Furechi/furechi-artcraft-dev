# Portfolio Site

3タブ切り替え式ポートフォリオサイト（Dev / イラスト・アニメ / 編み物）

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react

## セットアップ

```bash
npm install
npm run dev
```

## ビルド & デプロイ

```bash
npm run build
```

`dist/` フォルダが生成されます。GitHub Pages, Vercel, Netlify 等にデプロイ可能。

## ファイル構成

```
src/
├── config/
│   └── theme.js            ← テーマカラー・フォント・コピー
├── data/                    ← コンテンツ（編集頻度：高）
│   ├── works.js             作品データ
│   ├── career.js            経歴・技術スタック
│   └── socials.js           SNSリンク・連絡先
├── icons/
│   └── GithubIcon.jsx       カスタムSVGアイコン
├── components/
│   ├── TabSwitcher.jsx      上部タブ切り替えUI
│   ├── HeroCatchphrase.jsx  共通キャッチコピー
│   ├── Decorations.jsx      背景装飾（グレイン・浮遊円）
│   ├── DevTab.jsx           Devタブ全体
│   └── CreativeTab.jsx      イラスト・編み物タブ（共通）
├── App.jsx                  メインコンポーネント
├── main.jsx                 エントリーポイント
└── index.css                Tailwind + アニメーション定義
```

### 編集ガイド

| やりたいこと | 編集ファイル |
|---|---|
| 作品を追加・変更 | `src/data/works.js` |
| 経歴を更新 | `src/data/career.js` |
| SNSリンクを変更 | `src/data/socials.js` |
| 色・フォントを変更 | `src/config/theme.js` |
| 自己紹介文を変更 | `src/components/CreativeTab.jsx` 内の `content` |
| Dev紹介文を変更 | `src/components/DevTab.jsx` |

---
