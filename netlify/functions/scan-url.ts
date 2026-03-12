// Serverless function for Netlify to fetch and parse HTML securely to bypass CORS
import * as cheerio from 'cheerio';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { url } = JSON.parse(event.body);

    if (!url) {
      return { statusCode: 400, body: JSON.stringify({ error: 'URL is required' }) };
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'QlavoGEOValidatorBot/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const foundSchemas: Set<string> = new Set();
    const scripts = $('script[type="application/ld+json"]');

    scripts.each((_, el) => {
      try {
        const data = JSON.parse($(el).html() || '{}');
        if (Array.isArray(data)) {
          data.forEach(item => {
             if (item['@type']) foundSchemas.add(item['@type']);
          });
        } else if (data['@type']) {
          foundSchemas.add(data['@type']);
        } else if (data['@graph']) {
            data['@graph'].forEach((item: any) => {
               if (item['@type']) foundSchemas.add(item['@type']);
            });
        }
      } catch (e) {
        // Ignore parsing errors for individual scripts
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ schemas: Array.from(foundSchemas) }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
