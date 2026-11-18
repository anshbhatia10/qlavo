import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BookCallButton, EnquireButton } from '../components/ContactCta';
import './Commercial.css';

const steps = [
  { title: 'Agree the questions.', text: 'We lock in ten real questions your buyers ask ChatGPT—covering discovery, comparisons, and your category, not softball prompts.' },
  { title: 'Record the baseline.', text: 'We run each question ten times in fresh ChatGPT chats, saving every answer, whether you were named, how you were described, and which links were cited.' },
  { title: 'Ship the fixes.', text: 'We write the missing comparison and service pages, clean up inconsistent business facts, get them indexed on Bing, and pitch the outside roundups ChatGPT cites.' },
  { title: 'Re-run every month.', text: 'We repeat the exact same runs every month and send you the raw chats alongside what changed, without hiding behind a made-up score.' },
];

export default function AIVisibility() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="ChatGPT Visibility & GEO Services | Qlavo"
        description="Qlavo helps brands show up in ChatGPT recommendations through recorded buyer-question research, clear writing, consistent facts and technical clean-up."
        path="/ai-visibility"
      />
      <section className="q-container cm-hero">
        <p className="q-eyebrow">GEO / ChatGPT visibility</p>
        <h1 className="q-title">What does ChatGPT<br /><span className="cm-muted">say about you?</span></h1>
        <div className="cm-hero-bottom">
          <p className="q-lede">ChatGPT visibility is about whether your business gets named when buyers ask ChatGPT who to hire or buy from. We start with recorded observations, not a made-up score from your HTML.</p>
          <div className="cm-actions"><EnquireButton label="Discuss your visibility" size={17} /><BookCallButton size={17} /></div>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split" aria-labelledby="measured-answers">
        <div>
          <p className="q-eyebrow">01 / Observed in answers</p>
          <h2 className="q-section-heading" id="measured-answers">Real answers.<br />A defined sample.</h2>
          <p className="cm-muted">A real check records what ChatGPT actually returned under fixed conditions. It’s a clean benchmark, not a claim about every user on earth.</p>
        </div>
        <div className="cm-prose">
          <p>For each check, we record the prompt, platform, date, full response, and any cited links. We note whether your brand appears, how it’s described, and which competitors show up—keeping the misses right alongside the wins.</p>
          <p>We agree the ten buyer questions up front based on who you sell to, and run them in fresh Temporary Chats with memory and personalization turned off.</p>
          <p>When we report a mention rate, you get the underlying chats too. A limited sample is not a visibility score for an entire market, because wording, timing, and user context can always shift an answer.</p>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split" aria-labelledby="technical-signals">
        <div>
          <p className="q-eyebrow">02 / Reviewed on your site</p>
          <h2 className="q-section-heading" id="technical-signals">Site fundamentals.<br />Not magic tricks.</h2>
          <p className="cm-muted">Cleaning up your site removes blockers. It doesn’t force ChatGPT to recommend you, but it gives it clear material to work with.</p>
        </div>
        <dl className="cm-scope-inputs">
          <div><dt>Crawl &amp; indexing</dt><dd>Make sure your pages are easy to crawl, render cleanly, and get indexed on Bing—since ChatGPT search leans heavily on Bing’s index.</dd></div>
          <div><dt>Consistent facts</dt><dd>Align your business name, offer, pricing model, and third-party profiles so ChatGPT isn’t piecing together conflicting details.</dd></div>
          <div><dt>Pages worth citing</dt><dd>Publish plain, honest comparison pages and service explanations. An HTML checklist alone is never a substitute for real buyer-facing pages.</dd></div>
        </dl>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div>
          <p className="q-eyebrow">From research to delivery</p>
          <h2 className="q-section-heading">Simple process.<br />Honest reporting.</h2>
          <p className="cm-muted">You always know what we tested, what we changed, and what moved.</p>
        </div>
        <ol className="cm-editorial-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="q-kicker">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="q-container q-section q-rule cm-endnote">
        <p className="q-eyebrow">Scope before promises</p>
        <h2 className="q-section-heading">See where you stand.<br />Then decide what’s next.</h2>
        <p>One monthly plan, scoped and quoted in writing, cancel any time, with ten buyer questions agreed in writing. Deliverables, responsibilities, and timing are agreed before work starts. We do not guarantee recommendations, rankings, leads, or deadlines.</p>
        <div className="cm-actions">
          <EnquireButton size={17} />
          <BookCallButton size={17} />
          <Link className="q-text-link" to="/terms">Terms of engagement</Link>
          <Link className="q-text-link" to="/partners">White-label GEO for agencies</Link>
        </div>
        <p className="cm-note">Looking for the GEO calculator? This page explains the work instead—a URL alone can’t tell you what ChatGPT says.</p>
      </section>
    </div>
  );
}
