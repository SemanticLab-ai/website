import { readFile, stat, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
for (const variant of ['desktop','mobile']) {
 const base = new URL(`../public/images/emerald/${variant}/`, import.meta.url);
 const manifest = JSON.parse(await readFile(new URL('manifest.json',base),'utf8'));
 assert(manifest.frameCount > 60 && manifest.frameCount < 300);
 assert(manifest.pattern === 'frames/frame-%04d.webp');
 assert(variant === 'desktop' ? manifest.width > manifest.height : manifest.width < manifest.height);
 const files = await readdir(new URL('frames/',base));
 assert.equal(files.length,manifest.frameCount);
 let bytes = 0;
 for (let i=0; i<manifest.frameCount;i++) {
  const file = new URL(manifest.pattern.replace('%04d',String(i).padStart(4,'0')),base);
  const content = await readFile(file);
  assert.equal(content.toString('ascii',0,4),'RIFF');
  assert.equal(content.toString('ascii',8,12),'WEBP');
  bytes += content.length;
 }
 assert(bytes < 10_000_000,`${variant} must stay below 10MB`);
 assert((await stat(new URL('poster.webp',base))).size > 1000);
 assert.equal(bytes,manifest.totalBytes);
 console.log(`${variant}: ${manifest.frameCount} contiguous WebP frames, ${manifest.width}×${manifest.height}, ${bytes} bytes, poster present.`);
}
