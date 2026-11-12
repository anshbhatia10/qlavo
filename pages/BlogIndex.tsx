import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Editorial.css';

const posts = [
  {
    title: '7 Signals That Tell AI Engines Your Brand Exists',
    slug: '/blog/7-signals-ai-engines-brand-exists',
    excerpt: 'A framework for reviewing how a business is described, connected, and represented across the web. Seven signals to consider when planning an AI visibility review.',
    date: 'May 26, 2026',
    dateTime: '2026-05-26',
    readTime: '7 min read',
    category: 'Industry Research',
  },
  {
    title: 'Top GEO Agencies for B2B Growth (2026)',
    slug: '/blog/top-geo-agencies-b2b-2026',
    excerpt: 'An editorial look at agency capabilities and selection criteria for B2B teams. A starting point for due diligence, not an independently verified ranking.',
    date: 'April 28, 2026',
    dateTime: '2026-04-28',
    readTime: '5 min read',
    category: 'Industry Research',
  },
  {
    title: 'State of AI Search for GEO Agencies: April 2026 Data',
    slug: '/blog/state-of-ai-search-april-2026',
    excerpt: 'An April 2026 snapshot discussing prompt responses and citation patterns in the GEO agency category. Read the dated observations in context, not as a forecast of your results.',
    date: 'April 21, 2026',
    dateTime: '2026-04-21',
    readTime: '6 min read',
    category: 'Research',
  },
  {
    title: 'We Ran HubSpot Through a GEO Audit. Here’s What We Found.',
    slug: '/blog/hubspot-geo-audit-2026',
    excerpt: 'An editorial review of HubSpot’s public web presence through a GEO framework, covering crawler access, structured data, and entity consistency. Not a commissioned client engagement.',
    date: 'April 13, 2026',
    dateTime: '2026-04-13',
    readTime: '7 min read',
    category: 'GEO Audits',
  },
];

const BlogIndex: React.FC = () => (
  <div className="ed-hub">
    <SEOMeta
      title="Modern SEO & AI Search Blog — Insights from Qlavo | Delhi"
      description="Read Qlavo's journal on modern SEO, Generative Engine Optimization, and AI search visibility. Editorial perspectives, dated research, and practical reading."
      path="/blog"
    />
    <header className="q-container ed-masthead">
      <div className="ed-topline">
        <p className="q-eyebrow">Learn / Journal</p>
        <Link className="q-text-link ed-small-link" to="/geo-resources">The GEO resource library <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="ed-hero-grid">
        <h1 className="q-title">Qlavo Journal<span className="ed-title-stop" aria-hidden="true">.</span></h1>
        <div className="ed-hero-note">
          <p className="q-lede">Notes on being found.<br />And understanding the answer.</p>
          <p className="ed-muted">Perspectives on AI search, brand visibility, and the work behind Generative Engine Optimization.</p>
        </div>
      </div>
      <nav className="ed-section-nav" aria-label="Journal sections">
        <a href="#all-articles">All articles <span aria-hidden="true">↓</span></a>
        <Link to="/geo-resources#definition">GEO foundations</Link>
        <Link to="/geo-resources#checklist">Practical checklist</Link>
      </nav>
    </header>

    <section id="all-articles" className="q-container ed-journal-index" aria-label="All journal articles">
      <div className="ed-index-heading"><p className="q-eyebrow">The reading list</p><p className="q-eyebrow">2026 edition</p></div>
      {posts.map((post, index) => (
        <article className={`ed-post${index === 0 ? ' ed-post-lead' : ''}`} key={post.slug}>
          <div className="ed-post-meta">
            <span className="q-kicker">{post.category}</span>
            <time dateTime={post.dateTime}>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
          <div className="ed-post-body">
            <h2><Link to={post.slug}>{post.title}<span className="ed-post-arrow" aria-hidden="true">↗</span></Link></h2>
            <p>{post.excerpt}</p>
          </div>
        </article>
      ))}
      <aside className="ed-editor-note" aria-label="About these articles">
        <p className="q-eyebrow">A note on context</p>
        <p>These are editorial articles, not client case studies. Research posts reflect their stated publication period; AI answers can change by prompt, platform, location, and time. This index does not independently validate their underlying datasets.</p>
      </aside>
    </section>

    <section className="q-container q-section q-rule ed-closing" aria-labelledby="journal-next">
      <div><p className="q-eyebrow">From reading to practice</p><h2 id="journal-next" className="q-section-heading">Start with the foundations.</h2></div>
      <div><p className="ed-muted">Understand the terminology, compare SEO and GEO, and work through a practical baseline before deciding what to change.</p><Link to="/geo-resources" className="q-button">Explore GEO resources <span aria-hidden="true">↗</span></Link><Link to="/contact" className="q-text-link ed-follow-link">Discuss a project</Link></div>
    </section>
  </div>
);

export default BlogIndex;
