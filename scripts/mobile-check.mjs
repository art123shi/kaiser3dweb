// Phone layout check. Opens every page in headless Chrome with real mobile
// emulation at several widths and fails if any text or control is pushed past
// the edge of the screen (even when an overflow-hidden parent hides it, which
// is how a cut-off hero once reached production).
//
//   npm run dev            (in another terminal)
//   npm run check:mobile   (defaults to http://localhost:3000)
//   node scripts/mobile-check.mjs https://kaiser3dweb.com ./mobile-shots
//
// Screenshots land in the output folder; look at them before shipping.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
const base = process.argv[2] || 'http://localhost:3000';
const out = process.argv[3] || './mobile-shots';
const widths = (process.argv[4] || '320,360,390,430').split(',').map(Number);
const paths = (process.argv[5] || '/,/services,/process,/work,/about,/contact,/insights').split(',');
fs.mkdirSync(out, { recursive: true });
const port = 9333 + Math.floor(Math.random() * 500);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', `--remote-debugging-port=${port}`, '--hide-scrollbars',
  `--user-data-dir=${fs.mkdtempSync(os.tmpdir() + '/mobcheck-')}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
let ver;
for (let i = 0; i < 40; i++) { try { ver = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); break; } catch { await sleep(250); } }
const page = ver.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.result?.value;
await send('Page.enable');
if (process.env.DARK) await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'dark' }] });
await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1' });
const audit = `(async () => {
  // scroll through the page so lazy / in-view content renders
  const H = document.documentElement.scrollHeight;
  for (let y = 0; y < H; y += 350) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 250)); }
  window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 400));
  const vw = document.documentElement.clientWidth;
  const res = { vw, scrollW: document.documentElement.scrollWidth, bodyScrollW: document.body.scrollWidth, height: document.documentElement.scrollHeight, over: [], small: [], taps: [], clipped: [] };
  const sel = (el) => { let s = el.tagName.toLowerCase(); if (el.id) s += '#' + el.id; const c = (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className || '').toString().trim().split(/\\s+/).slice(0, 4).join('.'); if (c) s += '.' + c; return s; };
  const hiddenByAncestor = (el) => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const cs = getComputedStyle(p); if (/(hidden|clip|auto|scroll)/.test(cs.overflowX)) return cs.overflowX; } return null; };
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    if (r.right > vw + 1 || r.left < -1) {
      const anc = hiddenByAncestor(el);
      res.over.push({ el: sel(el), left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width), anc, text: (el.textContent || '').trim().slice(0, 40) });
    }
    const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2);
    if (own) {
      const fs = parseFloat(cs.fontSize);
      if (fs < 12) res.small.push({ el: sel(el), fs, text: el.textContent.trim().slice(0, 40) });
      if (el.scrollWidth > el.clientWidth + 1 && /(hidden|clip)/.test(cs.overflowX)) res.clipped.push({ el: sel(el), text: el.textContent.trim().slice(0, 40) });
    }
    if (/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName) && (r.height < 40 || r.width < 40) && cs.display !== 'inline') res.taps.push({ el: sel(el), w: Math.round(r.width), h: Math.round(r.height), text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30) });
  }
  res.over = res.over.slice(0, 25); res.small = res.small.slice(0, 15); res.taps = res.taps.slice(0, 25); res.clipped = res.clipped.slice(0, 10);
  return res;
})()`;
const report = {};
for (const w of widths) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: 800, deviceScaleFactor: 2, mobile: true });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  for (const p of paths) {
    await send('Page.navigate', { url: base + p });
    await sleep(3500);
    const r = await evalJs(audit);
    report[`${w}${p}`] = r;
    if (process.env.SHOTS !== '0') {
      const h = Math.min(r?.height || 800, 14000);
      await send('Emulation.setDeviceMetricsOverride', { width: w, height: 800, deviceScaleFactor: 1, mobile: true });
      await sleep(300);
      const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 72, captureBeyondViewport: true, clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
      fs.writeFileSync(`${out}/${w}_${p.replace(/\//g, '') || 'home'}.jpg`, Buffer.from(shot.result.data, 'base64'));
      await send('Emulation.setDeviceMetricsOverride', { width: w, height: 800, deviceScaleFactor: 2, mobile: true });
    }
  }
}
if (process.env.MENU) {
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 800, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: base + '/' }); await sleep(3500);
  const ok = await evalJs(`(() => { const b = document.querySelector('header button[aria-label="Open menu"]'); if (!b) return false; b.click(); return true; })()`);
  await sleep(1200);
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 72 });
  fs.writeFileSync(`${out}/menu.jpg`, Buffer.from(shot.result.data, 'base64'));
  console.log('menu opened:', ok);
}
fs.writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 1));
let failed = 0;
for (const [k, r] of Object.entries(report)) {
  if (!r) { console.log('FAIL', k, 'page did not load'); failed++; continue; }
  // Content off-screen counts unless it sits in a deliberate horizontal scroller
  // or is a purely decorative, empty element.
  const bad = r.over.filter(o => !/auto|scroll/.test(o.anc || '') && o.text);
  const pageScrolls = r.scrollW > r.vw + 1;
  const ok = !bad.length && !pageScrolls && !r.clipped.length;
  if (!ok) failed++;
  console.log(ok ? 'ok  ' : 'FAIL', k, `(${r.vw}px wide, ${r.height}px tall)`,
    pageScrolls ? `page scrolls sideways to ${r.scrollW}px` : '',
    bad.length ? `off-screen: ${bad.slice(0, 3).map(o => `${o.el} "${o.text}" right=${o.right}`).join(' | ')}` : '',
    r.clipped.length ? `cut-off text: ${r.clipped.map(c => `"${c.text}"`).join(', ')}` : '');
}
ws.close(); chrome.kill();
console.log(failed ? `\n${failed} page/width combinations failed` : '\nAll pages fit on every width.');
process.exit(failed ? 1 : 0);
