import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const environment = process.argv[2];
assert(['preview','production'].includes(environment));
const preview = environment === 'preview';
async function smoke(disableFeature = false) {
 const args = ['dev','--config','build/server/wrangler.json','--port','8788'];
 if(disableFeature) args.push('--var','SL_FEATURE_GALAXY_MOTION:false');
 const child = spawn('node_modules/.bin/wrangler', args, { stdio: ['ignore','pipe','pipe'] });
 let log = ''; child.stdout.on('data', d=>log+=d); child.stderr.on('data',d=>log+=d);
 try {
  let ready=false;
  for(let i=0;i<100;i++) {
   if(child.exitCode !== null) throw new Error(log);
   try { if((await fetch('http://127.0.0.1:8788/')).ok) {ready=true;break;} } catch {}
   await new Promise(resolve=>setTimeout(resolve,200));
  }
  assert(ready,log);
  const response=await fetch('http://127.0.0.1:8788/'); const html=await response.text();
  assert.equal(html.includes('data-galaxy-motion="true"'),preview&&!disableFeature,'Galaxy must require BOTH preview build and runtime flag');
  assert.equal(html.includes('googletagmanager.com'),!preview,'Analytics isolation');
  assert.equal(response.headers.get('x-robots-tag')?.includes('noindex')??false,preview,'Indexing isolation');
  assert(html.includes('https://semanticlab.ai/'),'Canonical unchanged');
  const robots=await (await fetch('http://127.0.0.1:8788/robots.txt')).text();
  assert.equal(/Disallow: \/(?:\n|$)/.test(robots),preview);
  for(const path of ['/services','/founders','/work','/design-system']) assert.equal((await fetch(`http://127.0.0.1:8788${path}`)).status,200,path);
  console.log(`${environment}: runtime flag ${disableFeature?'disabled':'default'}, homepage, analytics, robots, canonical and supporting routes passed.`);
 } finally {
  child.kill('SIGTERM');
  await new Promise(resolve=>{if(child.exitCode!==null)resolve();else child.once('exit',resolve);});
 }
}
await smoke();
if(preview) await smoke(true);
