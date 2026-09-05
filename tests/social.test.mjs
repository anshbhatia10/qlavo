import {test,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {load} from 'cheerio';
import fs from 'node:fs';
const vite=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom',logLevel:'error'});after(()=>vite.close());
const React=(await import('react')).default;
const {renderToString}=await import('react-dom/server');
const {HelmetProvider}=await import('react-helmet-async');HelmetProvider.canUseDOM=false;
const {default:SEOMeta}=await vite.ssrLoadModule('/components/SEOMeta.tsx');
test('social preview uses a purpose-built wide Qlavo image rather than a tiny icon',()=>{
 const context={};const html=renderToString(React.createElement(HelmetProvider,{context},React.createElement(SEOMeta,{title:'Qlavo',description:'GEO agency',path:'/'})));const $=load(context.helmet?.meta.toString() || html);
 assert.equal($('meta[property="og:image"]').attr('content'),'https://qlavo.in/og-qlavo.png');
 assert.equal($('meta[property="og:image:width"]').attr('content'),'1200');
 assert.equal($('meta[property="og:image:height"]').attr('content'),'630');
 assert.match($('meta[property="og:image:alt"]').attr('content'),/Qlavo/);
 const png=fs.readFileSync('public/og-qlavo.png');assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);
});
