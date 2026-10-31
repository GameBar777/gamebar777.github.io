import { chromium, webkit, devices } from 'playwright';
const url=process.argv[2]; let fail=0;
for (const [name,bt,opt] of [['webkit-iphone13',webkit,devices['iPhone 13']],['chromium-mobile',chromium,{viewport:{width:390,height:844}}],['chromium-desktop',chromium,{viewport:{width:1280,height:800}}]]){
 for (const blocker of [false,true]){
  let b; try{b=await bt.launch()}catch(e){console.log(name,'SKIP (browser cannot launch here)');break} const ctx=await b.newContext(opt); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  // simulate common content-blocker cosmetic rules (EasyList-style generic selectors)
  if(blocker) await ctx.addInitScript(()=>document.addEventListener('DOMContentLoaded',()=>{const s=document.createElement('style');s.textContent='.ad,.ads,.advert,.ad-banner,.sponsor,[class^="ad-"],[id^="ad-"],.banner-ad{display:none!important}';document.head.append(s)}));
  await p.goto(url+'?v='+Date.now(),{waitUntil:'load'});
  const H=await p.evaluate(()=>document.body.scrollHeight); for(let y=0;y<H;y+=400){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(60)}
  await p.locator('#astral').scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
  const r=await p.evaluate(async()=>{const s=document.querySelector('#astral');const imgs=[...s.querySelectorAll('img')];await Promise.all(imgs.map(i=>Promise.race([i.decode().catch(()=>{}),new Promise(r=>setTimeout(r,3000))])));
   const vis=el=>{let e=el;while(e){const c=getComputedStyle(e);if(c.display==='none'||c.visibility==='hidden'||+c.opacity===0)return false;e=e.parentElement}const b=el.getBoundingClientRect();return b.width>0&&b.height>0};
   const texts=[...s.querySelectorAll('h3,li,p')];return{imgs:imgs.map(i=>[i.naturalWidth,vis(i)]),textVisible:texts.filter(vis).length,textTotal:texts.length,h3:s.querySelector('h3')?.textContent}});
  const ok=r.imgs.length===2&&r.imgs.every(([w,v])=>w>0&&v)&&r.textVisible===r.textTotal&&r.textTotal>10&&!errs.length;
  console.log(name,blocker?'blocker':'clean',JSON.stringify(r),errs,ok?'OK':'FAIL'); if(!ok)fail++;
  if(!blocker) await p.locator('#astral').screenshot({path:`docs/screenshots/${name}-astral.png`});
  await b.close();
 }}
console.log(fail?'FAIL':'PASS'); process.exit(fail?1:0);
