import { chromium } from 'playwright';
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:720}});
for (const s of ['ripple-years','showa-crossroads','odaiba-afterlines']){await p.goto(`https://gamebar777.github.io/${s}/`,{waitUntil:'networkidle'});await p.waitForTimeout(2500);await p.screenshot({path:`/tmp/kv-${s}.png`});}
await b.close();
