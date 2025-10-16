import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve('dist');
await mkdir(distDir, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>keisan placeholder</title>
  </head>
  <body>
    <main>
      <h1>keisan</h1>
      <p>本番のフロントエンド実装が追加されるまでの暫定ビルド成果物です。</p>
    </main>
  </body>
</html>
`;

await writeFile(resolve(distDir, 'index.html'), html, 'utf8');
console.log('dist/index.html を生成しました');
