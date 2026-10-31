import { chromium } from 'playwright';
const base=process.argv[2]; const b=await chromium.launch(); let fail=0;
for (const [n,w,h] of [['mobile',390,844],['desktop',1280,800]]) {
  const p=await b.newPage({viewport:{width:w,height:h}}); const errs=[]; p.on('console',m=>m.type()==='error'&&errs.push(m.text())); p.on('pageerror',e=>errs.push(e.message));
  for (const pg of ['','about.html','privacy.html','terms.html']) {
    await p.goto(base+pg,{waitUntil:'networkidle'});
    const ov=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    const cards=await p.locator('.card').count();
    console.log(n,pg||'index','overflow',ov,'cards',cards); if(ov)fail++;
    await p.screenshot({path:`docs/screenshots/${n}-${(pg||'index').replace('.html','')}.png`,fullPage:true});
  }
  console.log(n,'errors',errs); if(errs.length)fail++;
}
await b.close(); console.log(fail?'FAIL':'PASS'); process.exit(fail?1:0);
