const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { URL } = require('url');

const PORT = process.env.PORT || 3456;
const DIST_DIR = path.join(__dirname, 'dist');

// MIME types
const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.xml': 'text/xml',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
};

// Serve static files
function serveStatic(req, res) {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  // SPA fallback: if no extension, serve index.html
  if (!path.extname(filePath)) filePath = '/index.html';

  const fullPath = path.join(DIST_DIR, filePath);

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      // SPA fallback for all routes
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, data2) => {
        if (err2) {
          res.writeHead(500);
          res.end('Internal Server Error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data2);
      });
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

// Run GEO audit using the Python geo-optimizer tool
async function runAudit(url) {
  const pythonScript = `
import asyncio, json, sys
from geo_optimizer import audit_async

async def main():
    try:
        result = await audit_async('${url.replace(/'/g, "'\\''")}')
        d = {
            'url': result.url,
            'score': result.score,
            'band': result.band,
            'duration_ms': result.audit_duration_ms,
            'http_status': result.http_status,
            'categories': {},
            'recommendations': result.recommendations or [],
            'error': None,
        }
        if hasattr(result, 'score_breakdown') and result.score_breakdown:
            for cat, score in result.score_breakdown.items():
                d['categories'][cat] = {'score': score, 'max': 100}
        if hasattr(result, 'meta'):
            d['categories']['meta'] = d['categories'].get('meta', {'score': 0, 'max': 100})
            meta_details = []
            if hasattr(result.meta, 'title') and result.meta.title: meta_details.append('✓ Has <title>')
            if hasattr(result.meta, 'description') and result.meta.description: meta_details.append('✓ Has meta description')
            if hasattr(result.meta, 'viewport') and result.meta.viewport: meta_details.append('✓ Has viewport meta')
            d['categories']['meta']['details'] = meta_details
        if hasattr(result, 'schema'):
            sch = result.schema
            details = []
            if hasattr(sch, 'checks'):
                for c in sch.checks:
                    details.append(('✓ ' if c.passed else '✗ ') + c.name)
            d['categories']['schema'] = d['categories'].get('schema', {'score': 0, 'max': 100})
            if details:
                d['categories']['schema']['details'] = details[:5]
        if hasattr(result, 'content'):
            con = result.content
            content_details = []
            if hasattr(con, 'checks'):
                for c in con.checks:
                    content_details.append(('✓ ' if c.passed else '✗ ') + c.name)
            d['categories']['content'] = d['categories'].get('content', {'score': 0, 'max': 100})
            if content_details:
                d['categories']['content']['details'] = content_details[:5]
        print(json.dumps(d))
    except Exception as e:
        print(json.dumps({'error': str(e), 'score': 0, 'categories': {}, 'recommendations': []}))

asyncio.run(main())
`;

  const result = execSync(`cd /root/qlavo-redesign && /root/geo-venv/bin/python3 -c '${pythonScript.replace(/'/g, "'\\''")}'`, {
    timeout: 30000,
    maxBuffer: 1024 * 1024,
  });
  return JSON.parse(result.toString());
}

// API: POST /api/audit
async function handleAudit(req, res) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const { url } = JSON.parse(body);
      if (!url) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'URL is required', score: 0 }));
        return;
      }
      console.log(`Auditing: ${url}`);
      const result = await runAudit(url);
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: e.message, score: 0 }));
    }
  });
}

// OPTIONS handler for CORS preflight
function handleOptions(req, res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end();
}

// Main server
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  console.log(`${req.method} ${pathname}`);

  if (req.method === 'OPTIONS') {
    return handleOptions(req, res);
  }

  if (req.method === 'POST' && (pathname === '/api/audit' || pathname === '/.netlify/functions/scan-url')) {
    return handleAudit(req, res);
  }

  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Qlavo server running at http://localhost:${PORT}`);
  console.log(`Static files: ${DIST_DIR}`);
  console.log(`API: POST http://localhost:${PORT}/api/audit`);
});
