# Codespace セットアップと実行手順

GitHub Actions と同じ手順でビルド結果を確認するための Codespace 手順をまとめています。各ブランチでビルド URL を発行する際の確認に利用してください。

## 1. Codespace 起動時の環境

- Node.js 20 系（`mcr.microsoft.com/devcontainers/typescript-node:20` イメージ）
- pnpm 9 系（Dev Container Feature で自動インストール）
- VS Code 拡張機能
  - `astro-build.astro-vscode`
  - `dbaeumer.vscode-eslint`
- 初回起動時に `pnpm install` が自動実行され、依存関係を揃えます。

## 2. ブランチごとのビルド確認フロー

以下のコマンドは GitHub Actions（`.github/workflows/pages.yml`）と同等の処理です。Codespace 上で手動実行することで、ブランチの状態を事前検証できます。

```bash
# 依存関係の再インストール（必要に応じて）
pnpm install --frozen-lockfile

# 本番ビルドと同じコマンド
pnpm run build

# 任意：ビルド内容をローカルでプレビューしたい場合
pnpm run preview -- --host 0.0.0.0 --port 4321
```

`pnpm run build` が成功すると `dist/` ディレクトリが生成され、GitHub Actions と同じ成果物を確認できます。`preview` コマンドを使う場合、Codespace のフォワードポートで `https://<codespace>-4321.app.github.dev` のような URL が払い出され、各ブランチの表示確認ができます。

## 3. トラブルシュート

- 依存関係が更新されている場合は `pnpm install` を再実行してください。
- Node.js や pnpm のバージョン差異によるビルドエラーは、`devcontainer.json` の設定を更新し Codespace を再構築することで解消します。
- GitHub Actions の失敗内容を再現したい場合は、同じブランチをチェックアウトした状態で上記コマンドを順番に実行してください。
