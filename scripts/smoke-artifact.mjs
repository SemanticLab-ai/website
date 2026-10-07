import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:net';
const environment = process.argv[2];
assert(['preview','production'].includes(environment));
const preview = environment === 'preview';
const contract = JSON.parse(await readFile(new URL('../config/deployment-contract.json', import.meta.url), 'utf8'));
const featuresEnabled = [
 'networkMotion',
 'workHeroVideo',
 'workProductsGallery',
 'founderExperienceGallery',
].every(name => contract[environment].features[name]);
async function freePort() {
 return new Promise((resolve,reject) => {
  const server=createServer();
  server.once('error',reject);
  server.listen(0,'127.0.0.1',() => {
   const {port}=server.address();
   server.close(() => resolve(port));
  });
 });
}
async function smoke(disableFeature = false) {
 const port=await freePort();
 const origin=`http://127.0.0.1:${port}`;
 const args = ['dev','--config','build/server/wrangler.json','--port',String(port)];
 if(disableFeature) args.push('--var','SL_FEATURE_NETWORK_MOTION:false');
 if(disableFeature) args.push('--var','SL_FEATURE_WORK_HERO_VIDEO:false');
 if(disableFeature) args.push('--var','SL_FEATURE_WORK_PRODUCTS_GALLERY:false');
 if(disableFeature) args.push('--var','SL_FEATURE_FOUNDER_EXPERIENCE_GALLERY:false');
 const child = spawn('node_modules/.bin/wrangler', args, { stdio: ['ignore','pipe','pipe'] });
 let log = ''; child.stdout.on('data', d=>log+=d); child.stderr.on('data',d=>log+=d);
 try {
  let ready=false;
  for(let i=0;i<100;i++) {
   if(child.exitCode !== null) throw new Error(log);
   try { if((await fetch(`${origin}/`)).ok) {ready=true;break;} } catch {}
   await new Promise(resolve=>setTimeout(resolve,200));
  }
  assert(ready,log);
  const response=await fetch(`${origin}/`); const html=await response.text();
  assert.equal(html.includes('data-network-motion="true"'),featuresEnabled&&!disableFeature,'Network motion must require both build and runtime flags');
  assert.equal(html.includes('data-cta-network="true"'),featuresEnabled&&!disableFeature,'CTA network must require both build and runtime flags');
  assert(!html.includes('data-galaxy-motion'), 'Homepage must not render the galaxy canvas');
  assert(!html.includes('semantic-hero__landscape'), 'Homepage must not render the dot landscape');
  assert.equal(html.includes('googletagmanager.com'),!preview,'Analytics isolation');
  assert.equal(response.headers.get('x-robots-tag')?.includes('noindex')??false,preview,'Indexing isolation');
  assert(html.includes('https://semanticlab.ai/'),'Canonical unchanged');
  const robots=await (await fetch(`${origin}/robots.txt`)).text();
  assert.equal(/Disallow: \/(?:\n|$)/.test(robots),preview);
  const pageHtmlByPath=new Map([['/',html]]);
  for(const path of [
   '/services', '/founders', '/work', '/design-system',
   '/products/syncd', '/products/image-enhancer', '/products/image-enhancer/pricing',
   '/products/smartapply', '/products/visual-search', '/products/visual-search/pricing',
  ]) {
   const page=await fetch(`${origin}${path}`);
   assert.equal(page.status,200,path);
   const pageHtml=await page.text();
   pageHtmlByPath.set(path,pageHtml);
   assert(!pageHtml.includes('mailto:'),`${path} must not expose email links`);
   assert(!pageHtml.includes('hello@semanticlab.ai'),`${path} must not expose the recipient address`);
  }
  assert(!html.includes('mailto:'),'Homepage must not expose email links');
  assert(!html.includes('hello@semanticlab.ai'),'Homepage must not expose the recipient address');
  const servicesHtml=pageHtmlByPath.get('/services');
  assert.equal(servicesHtml.includes('Preview mode: your details are checked but no email is sent.'), preview, 'Direct form preview copy');
  assert.equal(servicesHtml.includes('Your request is sent securely to SemanticLab.'), !preview, 'Production direct form copy');
  const leadForm=new URLSearchParams({
   name:'Preview Test', email:'preview@example.com', organisation:'Test Organisation', role:'',
   stage:'Exploring where to focus', horizon:'Timing is still open',
   opportunity:'A meaningful test opportunity', outcome:'A useful test outcome', context:'', company_website:'',
  });
  const leadResponse=await fetch(`${origin}/services`,{
   method:'POST',
   headers:{ Origin:preview?origin:'https://invalid.example', 'Content-Type':'application/x-www-form-urlencoded' },
   body:leadForm,
   signal:AbortSignal.timeout(10_000),
  });
  assert.equal(leadResponse.status, preview ? 200 : 403, 'Server form origin gate');
  assert.equal((await leadResponse.text()).includes('No email was sent.'), preview, 'Preview delivery gate');
  const oversizedBody=new ReadableStream({
   start(controller) {
    controller.enqueue(new Uint8Array(16_385));
    controller.close();
   },
  });
  const oversizedResponse=await fetch(`${origin}/services`,{
   method:'POST',
   headers:{ Origin:origin, 'Content-Type':'application/x-www-form-urlencoded' },
   body:oversizedBody,
   duplex:'half',
   signal:AbortSignal.timeout(10_000),
  });
  assert.equal(oversizedResponse.status,413,'Headerless oversized form body');
  const workHtml=pageHtmlByPath.get('/work');
  assert.equal(workHtml.includes('data-work-hero-video="true"'),featuresEnabled&&!disableFeature,'Work video must require both build and runtime flags');
  assert.equal(workHtml.includes('data-work-product-gallery="true"'),featuresEnabled&&!disableFeature,'Work product gallery must require both build and runtime flags');
  assert.equal(workHtml.includes('work-evidence-list--light'),!featuresEnabled||disableFeature,'Original product rows must remain when the gallery is disabled');
  assert.equal(workHtml.includes('data-founder-experience-gallery="true"'),featuresEnabled&&!disableFeature,'Founder experience gallery must require both build and runtime flags');
  assert.equal(workHtml.includes('work-evidence-list--dark'),!featuresEnabled||disableFeature,'Original founder rows must remain when the gallery is disabled');
  console.log(`${environment}: network flag ${disableFeature?'disabled':'default'}, homepage, analytics, robots, canonical and supporting routes passed.`);
 } finally {
  child.kill('SIGTERM');
  await new Promise(resolve=>{if(child.exitCode!==null)resolve();else child.once('exit',resolve);});
 }
}
await smoke();
await smoke(true);
