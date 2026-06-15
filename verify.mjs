import { chromium } from 'playwright';

const base = 'http://localhost:3000';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });

// ---- APPLY ----
await page.goto(base + '/apply', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
const applyChain = await page.evaluate(() => {
  const h1 = [...document.querySelectorAll('h1')].find((e) => e.textContent.includes('find the right funding'));
  const out = [];
  let el = h1;
  while (el && el.tagName !== 'BODY') {
    out.push(`${el.tagName}=${getComputedStyle(el).opacity}`);
    el = el.parentElement;
  }
  return out.slice(0, 5);
});
console.log('APPLY header opacity chain:', applyChain.join('  '));
await page.screenshot({ path: '/tmp/mtp-shots/pw-apply.png' });

// ---- HOME (scroll to trigger reveals) ----
await page.goto(base + '/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 600) {
  await page.evaluate((_y) => window.scrollTo(0, _y), y);
  await page.waitForTimeout(180);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
const stuck = await page.evaluate(
  () => [...document.querySelectorAll('*')].filter((e) => parseFloat(getComputedStyle(e).opacity) < 0.05).length,
);
console.log('HOME elements with opacity<0.05 after scrolling through page:', stuck);
await page.screenshot({ path: '/tmp/mtp-shots/pw-home-full.png', fullPage: true });

await browser.close();
console.log('done');
