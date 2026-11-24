import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/clientProof';
import './ClientProof.css';

const AUTO_ROTATE_MS = 6500;

/** Sideways-scrollable, auto-rotating verbatim client reviews with case study links. */
export default function ClientProof({ compact = false }: { compact?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = CLIENT_REVIEWS.length;

  const goTo = useCallback((idx: number) => {
    const next = ((idx % count) + count) % count;
    setActive(next);
    const el = trackRef.current;
    if (el) {
      el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
    }
  }, [count]);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx >= 0 && idx < count) setActive(idx);
  }, [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % count;
        const el = trackRef.current;
        if (el) el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
        return next;
      });
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  return (
    <section
      className={`q-section q-rule cp-band${compact ? ' cp-compact' : ''}`}
      aria-label="Client reviews"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="q-container">
        <div className="cp-bar">
          <p className="q-eyebrow">Client reviews</p>
          <div className="cp-controls" aria-label="Review navigation">
            <div className="cp-tabs" role="tablist" aria-label="Select client review">
              {CLIENT_REVIEWS.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`cp-tab${active === i ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  {r.company}
                </button>
              ))}
            </div>
            <div className="cp-arrows">
              <button type="button" className="cp-arrow" aria-label="Previous client review" onClick={() => goTo(active - 1)}>
                <ChevronLeft size={16} aria-hidden="true" />
              </button>
              <button type="button" className="cp-arrow" aria-label="Next client review" onClick={() => goTo(active + 1)}>
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="cp-track"
          tabIndex={0}
          aria-label="Scrollable client reviews"
          onScroll={handleScroll}
          onKeyDown={e => {
            if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1); }
          }}
        >
          {CLIENT_REVIEWS.map((R, i) => {
            const all10 = R.scores.every(([, s]) => s === 10);
            return (
              <div className="cp-slide" key={R.id} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${count}: ${R.company}`}>
                <div className="cp-inner">
                  <span className="q-kicker cp-index">0{i + 1} / 0{count}</span>
                  <figure className="cp-figure">
                    <blockquote className="cp-quote"><p>“{R.quote}”</p></blockquote>
                    <figcaption className="cp-cite">
                      <span className="cp-name">{R.name}</span>
                      <span className="cp-role">{R.role}, {R.company}</span>
                    </figcaption>
                  </figure>
                  <div className="cp-side">
                    <p className="cp-score"><span>{all10 ? '10/10' : ''}</span>{all10 ? 'on all seven areas he rated' : ''}</p>
                    <p className="cm-note cp-note">Quoted word for word from his review, {R.dateLabel}.</p>
                    <Link className="q-text-link cp-link" to={R.caseStudyPath}>Read the case study <ArrowUpRight size={16} aria-hidden="true" /></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
