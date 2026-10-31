import { chromium } from 'playwright';
const b=await chromium.launch();
for (const [n,w,h] of [['mobile',390,844],['desktop',1280,800]]){const p=await b.newPage({viewport:{width:w,height:h}});await p.goto('https://gamebar777.github.io/?v='+Date.now());await p.locator('#astral').screenshot({path:`docs/screenshots/${n}-astral.png`});await p.locator('.gc.dev').screenshot({path:`docs/screenshots/${n}-astral-card.png`});}
await b.close();
