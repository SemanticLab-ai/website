import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const environment = process.argv[2];
assert(['preview','production'].includes(environment));
const preview = environment === 'preview';
const child = spawn('node_modules/.bin/wrangler', ['dev','--config','build/server/wrangler.json','--port','8788','--var',`SL_FEATURE_EMERALD_VARIATION:${preview}`,'--var',`SL_DEPLOY_ENV:${environment}`], { stdio: ['ignore','pipe','pipe'] });
let log = '';
child.stdout.on('data', data => { log += data; });
child.stderr.on('data', data => { log += data; });
try {
 let ready = false;
 for (let i=0;i<50;i++) {
  if (child.exitCode !== null) throw new Error(log);
  try { const response = await fetch('http://127.0.0.1:8788/'); if(response.ok) { ready=true; break; } } catch {}
  await new Promise(resolve => setTimeout(resolve,200));
 }
 assert(ready, `Local ${environment} artifact did not start: ${log}`);
 const response = await fetch('http://127.0.0.1:8788/');
 const html = await response.text();
 assert.equal(response.status,200);
 assert.equal(html.includes('id="em-heading"'),preview,'Homepage variant must follow server flag');
 assert.equal(html.includes('googletagmanager.com'),!preview,'Analytics must follow environment');
 assert.equal(response.headers.get('x-robots-tag')?.includes('noindex') ?? false,preview);
 const robots = await (await fetch('http://127.0.0.1:8788/robots.txt')).text();
 assert.equal(robots.includes('Disallow: /\n') || robots.endsWith('Disallow: /'),preview);
 const style = await fetch('http://127.0.0.1:8788/design-system/emerald');
 assert.equal(style.status,preview?200:404,'Style tile must be preview-only');
 for(const path of ['/services','/founders','/work','/work/partshq','/work/sponsoredfeeds','/work/instadash']) {
  const route = await fetch(`http://127.0.0.1:8788${path}`);
  assert.equal(route.status,200,`${path} must remain available`);
 }
 console.log(`${environment}: homepage, analytics, robots, style gate and six supporting routes passed HTTP smoke checks.`);
} finally {
 child.kill('SIGTERM');
 await new Promise(resolve => { if(child.exitCode !== null) resolve(); else child.once('exit',resolve); });
}
