# keisan
# README.md

## プロジェクト概要
小学生向けの「たし算レベル（L01〜L11）」を起点に、**時間制限**・**正誤音**・**ユーザー登録**・**“昨日の続き”** を備えた学習アプリです。  
レベルに応じて **静的バンク（問題をファイルで配布）** と **動的ジェネレータ（その場で生成）** を使い分け、低負荷かつ無限練習を両立します。将来は**四則演算**へ拡張します。

- 📄 ドキュメントの入口：**[`docs/structure.md`](./docs/structure.md)**（ファイル構造のSSOT）
- 🧭 レベル一覧：**[`docs/levels.md`](./docs/levels.md)**
- 🧪 生成仕様：**[`docs/generators.md`](./docs/generators.md)**
- 🔊 効果音・⏱ タイマー：**[`docs/audio-timer.md`](./docs/audio-timer.md)**
- 🔐 認証・続き：**[`docs/auth-resume.md`](./docs/auth-resume.md)**

---

## クイックスタート

### 1) 必要環境
- Node.js 18+
- pnpm 8+（推奨）
- （サーバー運用時）Firebase/FireStore などのDB

### 2) 依存関係のインストール
```bash
pnpm install
