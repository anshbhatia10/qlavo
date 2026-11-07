// Vercel Serverless Function — client review form (/review).
// Validates the submission, emails it to REVIEW_TO via the Gmail API and logs a JSON copy.
// Env: GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN (gmail.send scope), REVIEW_TO.

const KEYS = ['overall', 'communication', 'speed', 'quality', 'honesty', 'ease', 'recommend'];
const LABELS = {
  overall: 'Overall experience', communication: 'Communication', speed: 'Speed and turnaround',
  quality: 'Quality of the work', honesty: 'Honesty about results', ease: 'Ease of working with us',
  recommend: 'Likely to recommend us',
};
const PUBLISH = {
  named: 'Publish with name and company', anonymous: 'Publish anonymously', private: 'Private — Qlavo only',
};

const clean = (v, max) => (typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '');
const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function validate(input) {
  const b = input && typeof input === 'object' ? input : {};
  if (clean(b.website, 200)) return { spam: true };
  const scores = {};
  for (const k of KEYS) {
    const n = Number(b.scores && b.scores[k]);
    if (!Number.isInteger(n) || n < 1 || n > 10) return { error: `Missing or invalid score: ${k}` };
    scores[k] = n;
  }
  const r = {
    client: clean(b.client, 40),
    scores,
    name: clean(b.name, 80),
    role: clean(b.role, 80),
    company: clean(b.company, 100),
    headline: clean(b.headline, 140),
    body: clean(b.body, 1200),
    privateNote: clean(b.privateNote, 1500),
    publish: PUBLISH[b.publish] ? b.publish : '',
    caseStudy: b.caseStudy === true,
  };
  if (!r.name) return { error: 'Name is required' };
  if (!r.company) return { error: 'Company is required' };
  if (!r.headline) return { error: 'One-line summary is required' };
  if (!r.privateNote) return { error: 'One thing we could have done better is required' };
  if (!r.publish) return { error: 'Choose how we can use the review' };
  return { review: r };
}

export function compose(r, to) {
  const avg = (KEYS.reduce((s, k) => s + r.scores[k], 0) / KEYS.length).toFixed(1);
  const subject = `Review from ${r.name} (${r.company}) — ${r.scores.overall}/10 overall`;
  const rows = KEYS.map(k => `<tr><td style="padding:4px 16px 4px 0">${LABELS[k]}</td><td style="padding:4px 0"><b>${r.scores[k]}/10</b></td></tr>`).join('');
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#111">
<p><b>${esc(r.name)}</b>${r.role ? `, ${esc(r.role)}` : ''} — ${esc(r.company)}</p>
<table style="border-collapse:collapse">${rows}<tr><td style="padding:8px 16px 4px 0">Average</td><td style="padding:8px 0 4px"><b>${avg}/10</b></td></tr></table>
<p><b>One-line summary</b><br>${esc(r.headline)}</p>
${r.body ? `<p><b>More</b><br>${esc(r.body).replace(/\n/g, '<br>')}</p>` : ''}
<p><b>One thing we could have done better (private, never publish)</b><br>${esc(r.privateNote).replace(/\n/g, '<br>')}</p>
<p><b>Use:</b> ${PUBLISH[r.publish]}<br><b>Named case study:</b> ${r.caseStudy ? 'Yes — approved' : 'No'}</p>
<p style="color:#666;font-size:12px">Submitted ${new Date().toISOString()} via qlavo.in/review${r.client ? `?client=${esc(r.client)}` : ''}</p></div>`;
  const b64 = s => Buffer.from(s, 'utf8').toString('base64');
  const mime = [
    `To: ${to}`, `From: Qlavo Reviews <${to}>`, `Subject: =?UTF-8?B?${b64(subject)}?=`,
    'MIME-Version: 1.0', 'Content-Type: text/html; charset=UTF-8', 'Content-Transfer-Encoding: base64', '', b64(html),
  ].join('\r\n');
  return { subject, raw: Buffer.from(mime).toString('base64url') };
}

async function sendGmail(raw, env) {
  const tok = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GMAIL_CLIENT_ID, client_secret: env.GMAIL_CLIENT_SECRET,
      refresh_token: env.GMAIL_REFRESH_TOKEN, grant_type: 'refresh_token',
    }),
  });
  const t = await tok.json();
  if (!t.access_token) throw new Error('token');
  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${t.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ raw }),
  });
  if (!res.ok) throw new Error(`gmail ${res.status}`);
  return (await res.json()).id;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false, error: 'Method not allowed' }); }
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  const v = validate(body);
  if (v.spam) return res.status(200).json({ ok: true });
  if (v.error) return res.status(400).json({ ok: false, error: v.error });
  const env = process.env;
  const to = env.REVIEW_TO || 'ansh@qlavo.co.in';
  console.log('review-submission', JSON.stringify(v.review));
  try {
    const { raw } = compose(v.review, to);
    await sendGmail(raw, env);
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('review-send-failed', String(e && e.message));
    return res.status(502).json({ ok: false, error: 'Could not send' });
  }
}
