import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ENQUIRE_EMAIL = 'ansh@qlavo.co.in';
export const BOOK_CALL_URL = 'https://calendly.com/anshnb07/30min';
export const ENQUIRE_LABEL = 'Enquire';
export const BOOK_CALL_LABEL = 'Book a call';

export function enquireHref(topic = 'working with Qlavo') {
  const subject = topic === 'working with Qlavo' ? 'Qlavo enquiry' : `Qlavo enquiry — ${topic}`;
  const body = `Hi Ansh,\n\nI'd like to enquire about ${topic}.\n\n`;
  return `mailto:${ENQUIRE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

type CtaProps = { topic?: string; label?: string; className?: string; size?: number };

export const EnquireButton: React.FC<CtaProps> = ({ topic, label = ENQUIRE_LABEL, className = 'q-button', size = 16 }) => (
  <a className={className} href={enquireHref(topic)}>{label} <ArrowUpRight size={size} aria-hidden="true" /></a>
);

export const BookCallButton: React.FC<CtaProps> = ({ label = BOOK_CALL_LABEL, className = 'q-button-secondary', size = 16 }) => (
  <a className={className} href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">{label} <ArrowUpRight size={size} aria-hidden="true" /></a>
);
