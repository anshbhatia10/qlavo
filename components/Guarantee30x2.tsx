import React from 'react';
import { Link } from 'react-router-dom';
import { OFFER } from '../data/offer';

/**
 * The marketing term for the offer: The 30&2 Guarantee.
 * 30 days, 2 prompts, then the plain-English description.
 */
export default function Guarantee30x2({ className = '' }: { className?: string }) {
  return <div className={`q-g32${className ? ` ${className}` : ''}`}>
    <h3 className="q-g32-name">The 30&amp;2 Guarantee</h3>
    <div className="q-g32-stats">
      <p className="q-g32-stat"><span className="q-g32-num">{OFFER.windowDays}</span><span className="q-g32-unit">days</span></p>
      <p className="q-g32-stat"><span className="q-g32-num">{OFFER.targetWins}</span><span className="q-g32-unit">prompts</span></p>
    </div>
    <p className="q-g32-desc">ChatGPT recommends two of your ten buyer prompts within {OFFER.windowDays} days — or we refund the first month and keep working free until it recommends them.<Link to="/terms" className="q-g32-asterisk" aria-label="Full terms">*</Link></p>
    <p className="q-g32-fine">*Free work continues for up to {OFFER.freeWorkDays} further days. <Link to="/terms">Exact terms and measurement</Link>.</p>
  </div>;
}
