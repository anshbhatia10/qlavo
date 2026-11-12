import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import {
  CHECKED_AT, FAQS, MEASURABLE_GUARANTEES, NO_PASS_MARK_GUARANTEES,
  PAID_BEFORE_VERDICT, type GuaranteeRow,
} from '../data/guarantees';
import './Editorial.css';
import './Commercial.css';

const PATH = '/geo-agency-guarantees';
const TITLE = 'GEO Agency Guarantees 2026: Who Guarantees Results';
const DESCRIPTION = '14 GEO agencies that publish a results guarantee, compared on the pass mark, days to a verdict, the remedy and what you pay before you find out.';
const H1 = 'GEO agency guarantees in 2026: which agencies offer a results guarantee';

const SIX_QUESTIONS = [
  {
    question: '1. What exactly counts as a win?',
    answer: 'This is the biggest difference between guarantees. Five of the fourteen set no number at all: Ekamoira promises "positive trends", ShowUpWithAI "an increase", Georanc that visibility "improves", WKND Agency "measurable movement" and Arise GEO that "leading indicators move". The rest set a count. Citant.ai counts a brand named on 3 of 10 queries. KKV Labs requires a top-3 recommendation on 3 of 5. Qlavo counts a question as won only when ChatGPT recommends you in at least 5 of 10 runs, so one lucky answer does not pass. A target without a number is easy to meet and hard to dispute.',
  },
  {
    question: '2. Who picks the questions?',
    answer: 'Citant.ai, GEOHATS, KKV Labs, CiteVantage, Cited Co and Qlavo all agree the questions in writing before the clock starts. Qlavo also removes any question you already win at the start, so the guarantee can only be met by new ground.',
  },
  {
    question: '3. How is it measured?',
    answer: 'Ask how many times each question is run, whether memory is off, and from which country. KKV Labs uses fresh logged-out ChatGPT sessions with dated screenshots. CiteVantage counts a question at 2 of 3 runs. Qlavo runs each question 10 times in a fresh ChatGPT Temporary Chat with memory off, from a US connection, and shares every raw answer. Traffic-based guarantees such as RankZero\'s and ShowUpWithAI\'s measure visits in Google Analytics rather than what the AI says.',
  },
  {
    question: '4. Which AI platforms count?',
    answer: 'Citant.ai tracks six platforms and needs two of them. KKV Labs accepts ChatGPT or Google AI Mode. Qlavo measures ChatGPT only, which keeps the pass mark to one number you can check yourself in a temporary chat.',
  },
  {
    question: '5. What is the remedy, and how fast?',
    answer: 'Refunds: Citant.ai, GEOHATS, ShowUpWithAI, Arise GEO, Qlavo, and KKV Labs if you choose it. Free work: CiteVantage, RankZero, Georanc. Waived fees: Cited Co (month five), Resurrect Studio (the next month), Ekamoira (the first month). Qlavo refunds the first month within seven days and then keeps working for up to 60 more days at no charge.',
  },
  {
    question: '6. How long is your money committed?',
    answer: 'Check the minimum term as well as the window. CiteVantage has a 3-month minimum, Resurrect Studio a 3-month minimum and a 12-month target. Qlavo has no minimum term; either side can end it by email.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: H1,
  description: DESCRIPTION,
  datePublished: CHECKED_AT,
  dateModified: CHECKED_AT,
  author: { '@type': 'Person', name: 'Ansh Bhatia' },
  publisher: { '@id': 'https://qlavo.in#organization' },
  mainEntityOfPage: `https://qlavo.in${PATH}`,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

/** Agency cell: the quoted page, opened in a new tab, never sold as a link. */
const AgencyCell: React.FC<{ row: GuaranteeRow }> = ({ row }) => row.isQlavo
  ? <Link to={row.url}><strong>{row.agency}</strong></Link>
  : <a href={row.url} target="_blank" rel="nofollow noopener">{row.agency}</a>;

const GEOAgencyGuarantees: React.FC = () => (
  <div className="cm-page">
    <SEOMeta title={TITLE} description={DESCRIPTION} path={PATH} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <header className="q-container cm-hero">
      <p className="q-eyebrow">Guide / GEO guarantees</p>
      <p className="ed-posted">Posted on <time dateTime={CHECKED_AT}>3 November 2026</time></p>
      <h1 className="q-title">{H1}</h1>
      <p>We found fourteen GEO agencies that publish a results guarantee, including Qlavo, Citant.ai, GEOHATS, KKV Labs and CiteVantage. Nine state a pass mark you can check; five promise improvement without saying how much. Of the measurable guarantees, Qlavo's gives a verdict at 30 days, Citant.ai's at 9 weeks, and the rest at 90 days or later.</p>
    </header>

    <section className="q-container q-section q-rule" aria-labelledby="measurable-heading">
      <h2 className="q-section-heading" id="measurable-heading">Guarantees with a pass mark you can check</h2>
      <p className="cm-muted">Sorted by how soon you get a verdict, because that is how long your money is tied up. Ties are sorted by published price.</p>
      <div className="ed-table-wrap" tabIndex={0} role="region" aria-label="Measurable GEO guarantees, scroll horizontally on smaller screens">
        <table>
          <thead>
            <tr>
              <th scope="col">Agency</th>
              <th scope="col">What has to happen</th>
              <th scope="col">AI platforms</th>
              <th scope="col">Verdict at</th>
              <th scope="col">If it fails</th>
              <th scope="col">Published price</th>
            </tr>
          </thead>
          <tbody>
            {MEASURABLE_GUARANTEES.map(row => (
              <tr key={row.agency}>
                <td><AgencyCell row={row} /></td>
                <td>{row.passMark}</td>
                <td>{row.platforms}</td>
                <td>{row.verdictLabel}</td>
                <td>{row.remedy}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="no-pass-mark-heading">
      <h2 className="q-section-heading" id="no-pass-mark-heading">Promises without a pass mark</h2>
      <p className="cm-muted">These five agencies also call their offer a guarantee, but none of them says how much improvement counts as a pass. That makes it hard to know when the guarantee has been met, or missed.</p>
      <div className="ed-table-wrap" tabIndex={0} role="region" aria-label="GEO promises without a pass mark, scroll horizontally on smaller screens">
        <table>
          <thead>
            <tr>
              <th scope="col">Agency</th>
              <th scope="col">What they promise</th>
              <th scope="col">Verdict at</th>
              <th scope="col">If it fails</th>
              <th scope="col">Published price</th>
            </tr>
          </thead>
          <tbody>
            {NO_PASS_MARK_GUARANTEES.map(row => (
              <tr key={row.agency}>
                <td><AgencyCell row={row} /></td>
                <td>{row.passMark}</td>
                <td>{row.verdictLabel}</td>
                <td>{row.remedy}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="cm-note">Every agency name links to the page its terms were quoted from.</p>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="window-heading">
      <h2 className="q-section-heading" id="window-heading">Why the length of the window matters</h2>
      <p className="cm-muted">A guarantee is only as useful as the date you can act on it. Seven of the nine measurable guarantees above are scored at 90 days or later, and most are billed monthly, so by the time the verdict arrives you have usually paid for three or more months of work.</p>
      <p className="cm-muted">AI answers also move quickly. ChatGPT runs fresh web searches for buying questions, so a page or a listing can change an answer within weeks. A 30-day window is long enough to see that movement and short enough that a failed test costs one month, not a quarter.</p>

      <h3>What you pay before you find out</h3>
      <p className="cm-muted">Using the published starting price of each measurable guarantee:</p>
      <div className="ed-table-wrap" tabIndex={0} role="region" aria-label="What you pay before the verdict, scroll horizontally on smaller screens">
        <table>
          <thead>
            <tr>
              <th scope="col">Agency</th>
              <th scope="col">Paid before the verdict</th>
              <th scope="col">If the test fails</th>
            </tr>
          </thead>
          <tbody>
            {PAID_BEFORE_VERDICT.map(row => (
              <tr key={row.agency}>
                <td>{row.agency}</td>
                <td>{row.paid}</td>
                <td>{row.ifFails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="cm-note">Agencies that do not publish a price are left out of this table.</p>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="six-questions-heading">
      <h2 className="q-section-heading" id="six-questions-heading">Six questions to ask before you trust a GEO guarantee</h2>
      <dl className="cm-scope-inputs">
        {SIX_QUESTIONS.map(({ question, answer }) => (
          <div key={question}>
            <dt>{question}</dt>
            <dd>{answer}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="no-guarantee-heading">
      <h2 className="q-section-heading" id="no-guarantee-heading">Agencies that say they don't guarantee results</h2>
      <p className="cm-muted">Several GEO agencies state plainly that they will not guarantee a result, among them Strategi, Wenstein, Wynterix, ezgeo.ai, This Is GEO, Smart GEO Agency, The Williams Agency, Pieo and Cited (thegeoagency.co). Most of them guarantee the work and the reporting instead.</p>
      <p className="cm-muted">They are right that nobody controls what an AI model says. A useful guarantee does not need to. It needs a fixed set of questions, a fixed test anyone can repeat, and a remedy if the test fails.</p>
      <p className="cm-muted">Note that Cited (thegeoagency.co) and Cited Co (citedco.ai) are different companies. Cited publishes no guarantee; Cited Co guarantees one AI platform naming you within 120 days.</p>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="faq-heading">
      <h2 className="q-section-heading" id="faq-heading">FAQ</h2>
      <div className="cm-faq">
        {FAQS.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="checked-heading">
      <h2 className="q-section-heading" id="checked-heading">How we checked</h2>
      <p className="cm-muted">We read the guarantee, pricing, terms and FAQ pages of 28 GEO agencies on 3 November 2026 and quoted each guarantee from the agency's own site. Agencies that mention a guarantee without publishing its terms are not in the table. We will re-check these terms every quarter.</p>
      <p className="cm-muted">Qlavo's full terms are on the <Link to="/terms">terms page</Link>.</p>
    </section>

    <div className="q-container q-section q-rule">
      <p className="cm-note">Qlavo wrote this page and lists itself first; every other agency's terms are quoted from its own website, checked 3 November 2026. Corrections: info@qlavo.in</p>
    </div>
  </div>
);

export default GEOAgencyGuarantees;
