import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    title: 'We Ran HubSpot Through a GEO Audit. Here\u2019s What We Found.',
    slug: '/blog/hubspot-geo-audit-2026',
    excerpt:
      'HubSpot is an SEO giant. But when we applied our GEO framework to their public data, we found surprising technical gaps that leave them vulnerable to AI recommendation shifts. Full audit breakdown inside.',
    date: 'April 13, 2026',
    readTime: '7 min read',
    category: 'GEO Audits',
    featured: true,
  },
  {
    title: 'Top GEO Agencies for B2B Growth (2026)',
    slug: '/blog/top-geo-agencies-b2b-2026',
    excerpt:
      'A curated list of the best Generative Engine Optimization agencies serving B2B companies in 2026. Criteria, capabilities, and what makes each one stand out for enterprise AI visibility.',
    date: 'April 28, 2026',
    readTime: '5 min read',
    category: 'Industry Research',
  },
  {
    title: 'State of AI Search for GEO Agencies: April 2026 Data',
    slug: '/blog/state-of-ai-search-april-2026',
    excerpt:
      'A research-led audit of 22 target prompts across Google AI Overview and ChatGPT, documenting citation patterns, competitor dominance, and territorial gaps in the GEO space.',
    date: 'April 21, 2026',
    readTime: '6 min read',
    category: 'Research',
  },
];

const categoryColors: Record<string, string> = {
  'GEO Audits': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Industry Research': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Research: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

const BlogIndex: React.FC = () => {
  const featured = posts.find((p) => p.featured);
  const others = posts.filter((p) => !p.featured);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Qlavo Blog
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              Research, audits, and strategies at the intersection of brand visibility 
              and generative AI. No fluff. Just data.
            </p>
          </div>

          {/* Featured Post */}
          {featured && (
            <div className="mb-12">
              <div className="bento-card p-8 md:p-10 relative overflow-hidden group">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                        categoryColors[featured.category] || ''
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-mono flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" />
                      Featured
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">
                    {featured.title}
                  </h2>

                  <p className="text-zinc-400 text-base font-light leading-relaxed mb-6 max-w-2xl">
                    {featured.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to={featured.slug}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all text-sm hover:scale-[1.02]"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.date} &middot; {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="bento-card p-6 md:p-8 group block"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className={`text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                      categoryColors[post.category] || ''
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-mono">{post.date}</span>
                  <span className="text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state if only featured post shows (shouldn't happen) */}
          {others.length === 0 && (
            <p className="text-center text-zinc-600 text-sm font-mono mt-8">
              More posts coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/5 bg-zinc-900/20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
            Stay ahead of AI search shifts.
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
            Get the latest GEO research, audit findings, and visibility strategies 
            delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Subscribe <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;
