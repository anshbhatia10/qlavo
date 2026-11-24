// Published client reviews. Quote text is reproduced word for word from the client's own
// submission on qlavo.in/review (FTC consumer-review rule: verbatim, never edited or cherry-picked).

export interface ClientReview {
  id: string;
  quote: string;
  summary?: string;
  fullBody?: string;
  name: string;
  role: string;
  company: string;
  date: string;
  dateLabel: string;
  scores: readonly (readonly [string, number])[];
  caseStudyPath: string;
}

export const RALLY_CORP_REVIEW: ClientReview = {
  id: 'rally-corp',
  quote: 'I was a bit surprised by how great the results were in such a short time. Job well done!',
  summary: 'Did a small project to test the waters and I was super impressed.',
  fullBody: 'We plan to do another project and refer a friend. I was a bit surprised by how great the results were in such a short time. Job well done!',
  name: 'James Martin',
  role: 'CEO',
  company: 'Rally Corp',
  date: '2026-11-24',
  dateLabel: '24 November 2026',
  scores: [
    ['Overall experience', 10],
    ['Communication', 10],
    ['Speed and turnaround', 10],
    ['Quality of the work', 10],
    ['Honesty about results', 10],
    ['Ease of working with us', 10],
    ['Likely to recommend us', 10],
  ] as const,
  caseStudyPath: '/case-studies/rally-corp',
};

export const SMARTER_TRACKS_REVIEW: ClientReview = {
  id: 'smarter-tracks',
  quote: 'Impressive results in a short amount of time',
  name: 'Brock Coburn',
  role: 'Founder',
  company: 'Smarter Tracks',
  date: '2026-11-09',
  dateLabel: '9 November 2026',
  scores: [
    ['Overall experience', 10],
    ['Communication', 10],
    ['Speed and turnaround', 10],
    ['Quality of the work', 10],
    ['Honesty about results', 10],
    ['Ease of working with us', 10],
    ['Likely to recommend us', 10],
  ] as const,
  caseStudyPath: '/case-studies/smarter-tracks',
};

export const CLIENT_REVIEWS: readonly ClientReview[] = [
  RALLY_CORP_REVIEW,
  SMARTER_TRACKS_REVIEW,
];
