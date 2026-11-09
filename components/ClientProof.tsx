import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SMARTER_TRACKS_REVIEW as R } from '../data/clientProof';
import './ClientProof.css';

/** One verbatim client quote with attribution, score summary and a link to the case study. */
export default function ClientProof({ compact = false }: { compact?: boolean }) {
  const all10 = R.scores.every(([, s]) => s === 10);
  return (
    <section className={`q-section q-rule cp-band${compact ? ' cp-compact' : ''}`} aria-label="Client review">
      <div className="q-container cp-inner">
        <p className="q-eyebrow">Client review</p>
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
    </section>
  );
}
