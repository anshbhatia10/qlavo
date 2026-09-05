import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { load } from 'cheerio';
const vite=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom',logLevel:'error'});
after(()=>vite.close());
const {render}=await vite.ssrLoadModule('/entry-server.tsx');
const page=()=>load(render('/',{}));
test('hero leads with a complete, crawlable brand-in-answer proposition',()=>{
 const $=page();assert.equal($('h1').length,1);
 assert.match($('h1').text(),/Be the brand\s*in the answer\./);
 assert.match($('main').text(),/generative engine optimization/i);
 assert.ok($('.q-hero a[href="/contact"]').length);
 assert.ok($('.q-hero a[href="#approach"]').length);
 assert.equal($('.q-hero canvas, .q-hero video, .q-hero iframe').length,0);
 assert.equal($('.q-hero [aria-hidden="true"] .q-signal').length,1);
});
test('homepage offers a readable methodology instead of simulated AI results',()=>{
 const $=page();const text=$('main').text();
 assert.equal($('#approach').length,1);
 assert.equal($('#services .q-service-row').length,4);
 assert.equal($('#approach .q-method-step').length,3);
 assert.ok($('#approach a[href="/sample-deliverable"]').length);
 assert.match(text,/format preview/i);
 assert.doesNotMatch(text,/Simulated AI Response|training data|Brands Audited/);
});
test('FAQ can be read and expanded without JavaScript',()=>{
 const $=page();assert.equal($('#faq details').length,6);assert.equal($('#faq summary').length,6);
 assert.match($('#faq').text(),/cannot guarantee/i);assert.ok($('#faq a[href="/partners"]').length);
});
test('navigation and footer offer a compact crawlable hierarchy',()=>{
 const $=page();assert.equal($('header.q-nav').length,1);
 assert.ok($('header nav[aria-label="Primary"] a[href="/pricing"]').length);
 assert.ok($('button[aria-controls="mobile-navigation"][aria-expanded="false"]').length);
 assert.equal($('#mobile-navigation[hidden]').length,1);
 assert.ok($('footer a[href="/partners"]').length);
 assert.equal($('footer img[src*="producthunt"]').length,0);
});
