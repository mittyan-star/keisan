import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const distDir = resolve('dist');

const args = process.argv.slice(2);
let host = '0.0.0.0';
let port = 4321;

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === '--host' && i + 1 < args.length) {
    host = args[i + 1];
    i += 1;
    continue;
  }
  if (arg === '--port' && i + 1 < args.length) {
    port = Number(args[i + 1]);
    i += 1;
    continue;
  }
  if (!arg.startsWith('--')) {
    const maybePort = Number(arg);
    if (!Number.isNaN(maybePort)) {
      port = maybePort;
    }
  }
}

if (!existsSync(distDir)) {
  console.error('dist/ ディレクトリが存在しません。先に "pnpm run build" を実行してください。');
  process.exit(1);
}

const server = createServer((req, res) => {
  const urlPath = req.url && req.url !== '/' ? req.url : '/index.html';
  const filePath = join(distDir, urlPath.replace(/^\/+/, ''));

  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  const address = server.address();
  if (typeof address === 'object' && address) {
    console.log(`http://${host}:${address.port} で dist/ を配信しています`);
  }
});
