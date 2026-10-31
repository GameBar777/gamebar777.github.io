import { chromium } from 'playwright';
const base=process.argv[2];const b=await chromium.launch();
for (const [n,w,h] of [['mobile',390,844],['desktop',1280,800]]){const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:2});
await p.goto(base,{waitUntil:'networkidle'});await p.screenshot({path:`docs/screenshots/${n}-hero.png`});
await p.locator('.coaster').first().click();await p.waitForTimeout(700);await p.locator('.item').first().screenshot({path:`docs/screenshots/${n}-coaster-flip.png`});}
await b.close();
