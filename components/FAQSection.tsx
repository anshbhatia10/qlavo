import React from 'react';
export default function FAQSection() {
  const questions = [
    ['Is this a white-label service?', 'Yes. Your agency keeps the client relationship, reviews the work and presents the editable handoff. Qlavo does not contact your client without your consent.'],
    ['Will you publish on the client site?', 'The agency or client publishes. The pilot includes one publish-ready page improvement and an implementation checklist, not assumed CMS access or development work. No live changes are made without approval.'],
    ['Can a brand enquire directly?', 'Yes. Direct-brand enquiries are welcome. We will confirm fit and agree the project scope with you before starting.'],
    ['What if the brand is still absent from AI answers?', 'We record that result. No recommendations, rankings or leads are guaranteed. You still receive the agreed research, page improvement and handoff; payment is for those deliverables, not an AI outcome.'],
  ];
  return <section className="pilot-section pilot-faq"><p className="pilot-eyebrow">Before you enquire</p><h2>A few practical questions.</h2>{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>;
}
