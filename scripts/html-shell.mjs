import { load } from 'cheerio';

// Use parser offsets only: serializing the app would rewrite React's comments,
// entities and JSON-LD, potentially changing the DOM expected by hydration.
function elements(html) {
  const $ = load(html, { xml: { xmlMode: false, withStartIndices: true, withEndIndices: true } }, false);
  return $.root().children().toArray().map(node => ({
    node,
    start: node.startIndex,
    end: node.endIndex + 1,
    html: html.slice(node.startIndex, node.endIndex + 1),
  }));
}

function metadataKey({ name, attribs }) {
  if (attribs.itemprop !== undefined) return null;
  if (name === 'title') return 'title';
  if (name === 'link' && attribs.rel?.toLowerCase() === 'canonical') return 'canonical';
  if (name === 'meta') {
    for (const field of ['name', 'property', 'http-equiv', 'charset']) {
      if (attribs[field] !== undefined) return `meta:${field}:${field === 'charset' ? '' : attribs[field].toLowerCase()}`;
    }
  }
  return null;
}

function removeRanges(html, entries) {
  for (const { start, end } of [...entries].sort((a, b) => b.start - a.start)) {
    html = html.slice(0, start) + html.slice(end);
  }
  return html;
}

export function inject(template, appHtml, helmet) {
  const native = elements(appHtml).filter(entry => metadataKey(entry.node));
  const helmetHead = ['title', 'priority', 'meta', 'link', 'script']
    .map(field => helmet?.[field]?.toString?.() ?? '').filter(Boolean).join('\n');
  // Legacy Helmet wins if a caller supplies both forms of the same metadata.
  const incoming = [...native, ...elements(helmetHead)];
  const byKey = new Map();
  for (const entry of incoming) {
    const key = metadataKey(entry.node);
    if (key) byKey.set(key, entry);
  }
  const headTags = incoming.filter(entry => {
    const key = metadataKey(entry.node);
    return !key || byKey.get(key) === entry;
  }).map(entry => entry.html).join('\n    ');

  const head = template.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  if (!head) throw new Error('Could not find <head> in dist/index.html');
  // Only remove superseded shell metadata inside the head, never body content
  // or the shell's Organization schema, fonts, styles and module scripts.
  const shellHead = removeRanges(head[1], elements(head[1]).filter(entry => byKey.has(metadataKey(entry.node))));
  let html = template.replace(head[0], () => head[0].replace(head[1], () => `\n    ${headTags}${shellHead}`));

  const rootOpen = html.indexOf('<div id="root">');
  const bodyClose = html.lastIndexOf('</body>');
  if (rootOpen === -1 || bodyClose === -1) {
    throw new Error('Could not find #root or </body> in dist/index.html');
  }
  const rootClose = html.lastIndexOf('</div>', bodyClose);
  if (rootClose === -1 || rootClose < rootOpen) {
    throw new Error('Could not find closing </div> for #root in dist/index.html');
  }
  return html.slice(0, rootOpen) + `<div id="root">${removeRanges(appHtml, native)}</div>` + html.slice(rootClose + '</div>'.length);
}
