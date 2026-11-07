import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';
import './Review.css';

/** Private client review form. Not linked from navigation, not in the sitemap, noindex. */

const RATINGS = [
  ['overall', 'Overall experience', 'Taking everything into account.'],
  ['communication', 'Communication', 'Clear, regular updates. You knew where things stood.'],
  ['speed', 'Speed and turnaround', 'How quickly work and replies came back.'],
  ['quality', 'Quality of the work', 'The pages, content and recommendations we produced.'],
  ['honesty', 'Honesty about results', 'Whether we set expectations straight and reported results as they were.'],
  ['ease', 'Ease of working with us', 'How little of your time and effort it took.'],
  ['recommend', 'Likely to recommend us', 'To a peer or another business owner.'],
] as const;

type RatingKey = typeof RATINGS[number][0];
type Publish = 'named' | 'anonymous' | 'private';
type Status = 'idle' | 'sending' | 'sent' | 'error';

const CLIENTS: Record<string, { company: string; name: string; role: string }> = {
  'smarter-tracks': { company: 'Smarter Tracks', name: 'Brock Coburn', role: 'Founder' },
};

const HEADLINE_MAX = 140;
const BODY_MAX = 1200;
const PRIVATE_MAX = 1500;

function ScoreRow({ id, label, hint, value, onChange }: {
  id: string; label: string; hint: string; value: number | undefined; onChange: (n: number) => void;
}) {
  return (
    <fieldset className="rv-score">
      <legend className="rv-score-label">
        <span>{label}</span>
        <span className="rv-score-value" aria-hidden="true">{value ? `${value}/10` : '—'}</span>
      </legend>
      <p className="rv-hint" id={`${id}-hint`}>{hint}</p>
      <div className="rv-scale" role="radiogroup" aria-describedby={`${id}-hint`}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
          <label key={n} className={`rv-dot${value === n ? ' is-on' : ''}${value && n <= value ? ' is-filled' : ''}`}>
            <input type="radio" name={id} value={n} checked={value === n} onChange={() => onChange(n)} required />
            <span>{n}</span>
          </label>
        ))}
      </div>
      <div className="rv-scale-ends" aria-hidden="true"><span>Poor</span><span>Excellent</span></div>
    </fieldset>
  );
}

export default function Review() {
  const [scores, setScores] = useState<Partial<Record<RatingKey, number>>>({});
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [clientKey, setClientKey] = useState('');
  const [headline, setHeadline] = useState('');
  const [body, setBody] = useState('');
  const [privateNote, setPrivateNote] = useState('');
  const [publish, setPublish] = useState<Publish | ''>('');
  const [caseStudy, setCaseStudy] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // Pre-fill the company from ?client=… after mount so the prerendered markup hydrates cleanly.
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get('client') || '';
    const c = CLIENTS[key];
    if (c) { setClientKey(key); setCompany(c.company); setName(c.name); setRole(c.role); }
  }, []);

  // Clear a validation message as soon as the user edits a required field.
  useEffect(() => { setError(e => (status === 'error' ? e : '')); }, [headline, privateNote, name, company]); // eslint-disable-line react-hooks/exhaustive-deps

  const missing = RATINGS.filter(([k]) => !scores[k]).length;
  const companyLabel = company.trim() || 'your company';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (missing) { setError(`Please rate all ${RATINGS.length} areas (${missing} left).`); return; }
    if (!headline.trim()) { setError('Please add a one-line summary.'); return; }
    if (!privateNote.trim()) { setError('Please tell us one thing we could have done better.'); return; }
    if (!name.trim() || !company.trim()) { setError('Please add your name and company.'); return; }
    if (!publish) { setError('Please choose how we can use your review.'); return; }
    setError(''); setStatus('sending');
    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client: clientKey, scores, name, role, company, headline, body, privateNote, publish, caseStudy, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'send failed');
      setStatus('sent');
      window.scrollTo({ top: 0 });
    } catch {
      setStatus('error');
      setError('That didn’t go through. Please try again in a minute — nothing you typed has been lost.');
    }
  }

  return (
    <div className="cm-page rv-page">
      <SEOMeta title="Review Qlavo" description="Tell us how we did. A short private review form for Qlavo clients." path="/review" />
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>

      {status === 'sent' ? (
        <section className="q-container rv-wrap rv-done" aria-live="polite">
          <p className="q-eyebrow">Received</p>
          <h1 className="rv-title">Thank you.</h1>
          <p className="rv-lede">Your review has reached us. We read every word, and we’ll only use it the way you chose.</p>
        </section>
      ) : (
        <section className="q-container rv-wrap" aria-labelledby="rv-heading">
          <p className="q-eyebrow">Client review{company ? ` · ${company}` : ''}</p>
          <h1 className="rv-title" id="rv-heading">How did we do?</h1>
          <p className="rv-lede">Score us out of 10, then say it in your own words. It takes about two minutes. Be as honest as you like — your answer on what we could have done better is never published.</p>

          <form className="rv-form" onSubmit={submit} noValidate>
            <div className="rv-block">
              <h2 className="rv-h2"><span className="q-kicker">01</span> Scores</h2>
              {RATINGS.map(([k, label, hint]) => (
                <ScoreRow key={k} id={`rv-${k}`} label={label} hint={hint} value={scores[k]}
                  onChange={n => { setScores(s => ({ ...s, [k]: n })); if (status !== 'error') setError(''); }} />
              ))}
            </div>

            <div className="rv-block">
              <h2 className="rv-h2"><span className="q-kicker">02</span> In your words</h2>
              <label className="rv-field">
                <span className="rv-label">One-line summary <em>required</em></span>
                <span className="rv-hint">If someone asked you about working with Qlavo, what would you say in a sentence?</span>
                <input type="text" value={headline} maxLength={HEADLINE_MAX} required onChange={e => setHeadline(e.target.value)} />
                <span className="rv-count">{headline.length}/{HEADLINE_MAX}</span>
              </label>
              <label className="rv-field">
                <span className="rv-label">Anything more <em>optional</em></span>
                <span className="rv-hint">A short paragraph: what you needed, what we did, what changed.</span>
                <textarea rows={5} value={body} maxLength={BODY_MAX} onChange={e => setBody(e.target.value)} />
                <span className="rv-count">{body.length}/{BODY_MAX}</span>
              </label>
              <label className="rv-field">
                <span className="rv-label">One thing we could have done better <em>required · never published</em></span>
                <span className="rv-hint">If you had to pick one thing, what would it be? Small or big — this is how we improve.</span>
                <textarea rows={4} value={privateNote} maxLength={PRIVATE_MAX} required onChange={e => setPrivateNote(e.target.value)} />
              </label>
            </div>

            <div className="rv-block">
              <h2 className="rv-h2"><span className="q-kicker">03</span> About you</h2>
              <div className="rv-grid">
                <label className="rv-field"><span className="rv-label">Name <em>required</em></span>
                  <input type="text" autoComplete="name" value={name} maxLength={80} required onChange={e => setName(e.target.value)} /></label>
                <label className="rv-field"><span className="rv-label">Role <em>optional</em></span>
                  <input type="text" autoComplete="organization-title" value={role} maxLength={80} placeholder="e.g. Founder" onChange={e => setRole(e.target.value)} /></label>
                <label className="rv-field rv-span"><span className="rv-label">Company <em>required</em></span>
                  <input type="text" autoComplete="organization" value={company} maxLength={100} required onChange={e => setCompany(e.target.value)} /></label>
              </div>
              <label className="rv-trap" aria-hidden="true">Website<input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} /></label>
            </div>

            <div className="rv-block">
              <h2 className="rv-h2"><span className="q-kicker">04</span> How we can use it</h2>
              <fieldset className="rv-choices">
                <legend className="rv-label">Your review <em>required</em></legend>
                {([
                  ['named', 'Publish it with my name and company'],
                  ['anonymous', 'Publish it anonymously'],
                  ['private', 'Keep it private — for Qlavo only'],
                ] as const).map(([v, t]) => (
                  <label key={v} className={`rv-choice${publish === v ? ' is-on' : ''}`}>
                    <input type="radio" name="rv-publish" value={v} checked={publish === v} onChange={() => { setPublish(v); if (status !== 'error') setError(''); }} required />
                    <span>{t}</span>
                  </label>
                ))}
              </fieldset>
              <label className={`rv-choice rv-check${caseStudy ? ' is-on' : ''}`}>
                <input type="checkbox" checked={caseStudy} onChange={e => setCaseStudy(e.target.checked)} />
                <span>Qlavo may name {companyLabel} in a case study about this project.</span>
              </label>
              <p className="cm-note">We publish reviews word for word and never edit what you wrote. You can change your mind any time by emailing us.</p>
            </div>

            {error && <p className="rv-error" role="alert">{error}</p>}
            <div className="rv-submit">
              <button className="q-button" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send review'}
              </button>
              {missing > 0 && <span className="cm-note">{missing} of {RATINGS.length} scores left</span>}
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
