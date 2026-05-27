import React, { useState } from 'react';
import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';
import {
  Search, ArrowRight, Globe, Loader2, FileJson, Link as LinkIcon,
  RefreshCw, MessageSquare, BarChart3, AlertTriangle,
  Eye, Share2, FileText, Layout, Lock, Zap,
  Award, ChevronDown, ChevronUp, Calendar,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

interface CatResult {
  score: number;
  max: number;
  details: string[];
}

interface ScanResponse {
  score: number;
  band: string;
  url: string;
  duration_ms: number;
  categories: Record<string, CatResult>;
  recommendations: string[];
  error: string | null;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function getBandInfo(band: string): { label: string; color: string; bg: string; border: string; text: string } {
  switch (band) {
    case 'critical':
      return { label: 'Critical', color: 'text-red-400', bg: 'bg-red-500', border: 'border-red-500/30', text: 'text-red-400' };
    case 'poor':
      return { label: 'Poor', color: 'text-orange-400', bg: 'bg-orange-500', border: 'border-orange-500/30', text: 'text-orange-400' };
    case 'needs-work':
      return { label: 'Needs Work', color: 'text-amber-400', bg: 'bg-amber-500', border: 'border-amber-500/30', text: 'text-amber-400' };
    case 'good':
      return { label: 'Good', color: 'text-emerald-400', bg: 'bg-emerald-500', border: 'border-emerald-500/30', text: 'text-emerald-400' };
    case 'excellent':
      return { label: 'Excellent', color: 'text-green-400', bg: 'bg-green-500', border: 'border-green-500/30', text: 'text-green-400' };
    default:
      return { label: 'Unknown', color: 'text-zinc-400', bg: 'bg-zinc-500', border: 'border-zinc-500/30', text: 'text-zinc-400' };
  }
}

function getScoreArcColor(score: number): string {
  if (score <= 30) return 'text-red-400';
  if (score <= 50) return 'text-orange-400';
  if (score <= 70) return 'text-amber-400';
  if (score <= 85) return 'text-emerald-400';
  return 'text-green-400';
}

function getProgressColor(score: number): string {
  if (score <= 30) return 'bg-red-500';
  if (score <= 50) return 'bg-orange-500';
  if (score <= 70) return 'bg-amber-500';
  if (score <= 85) return 'bg-emerald-500';
  return 'bg-green-500';
}

function getCategoryIcon(key: string): React.ReactNode {
  const icons: Record<string, React.ReactNode> = {
    schema: <FileJson className="w-4 h-4" />,
    meta: <Eye className="w-4 h-4" />,
    og: <Share2 className="w-4 h-4" />,
    robots: <AlertTriangle className="w-4 h-4" />,
    sitemap: <FileText className="w-4 h-4" />,
    llms: <MessageSquare className="w-4 h-4" />,
    content: <FileText className="w-4 h-4" />,
    headings: <Layout className="w-4 h-4" />,
    ssl: <Lock className="w-4 h-4" />,
    links: <LinkIcon className="w-4 h-4" />,
    brand: <Award className="w-4 h-4" />,
    performance: <Zap className="w-4 h-4" />,
  };
  return icons[key] || <BarChart3 className="w-4 h-4" />;
}

function getCategoryLabel(key: string): string {
  const labels: Record<string, string> = {
    schema: 'Structured Data (Schema)',
    meta: 'Meta Tags',
    og: 'Open Graph / Twitter',
    robots: 'Robots.txt',
    sitemap: 'Sitemap.xml',
    llms: 'LLMs.txt',
    content: 'Content Quality',
    headings: 'Heading Hierarchy',
    ssl: 'SSL / HTTPS',
    links: 'Link Structure',
    brand: 'Brand Presence',
    performance: 'Performance',
  };
  return labels[key] || key;
}

// ── Component ──────────────────────────────────────────────────────────────

const GEOCalculator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'results' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState<ScanResponse | null>(null);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus('scanning');
    setErrorMsg('');
    setData(null);

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || `Server responded with ${response.status}`);
      }

      const result: ScanResponse = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setData(result);
      setStatus('results');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to scan URL. Please check the URL and try again.');
      setStatus('error');
    }
  };

  const resetScan = () => {
    setStatus('idle');
    setUrl('');
    setData(null);
    setErrorMsg('');
    setExpandedCat(null);
  };

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="bg-black min-h-screen pt-28 md:pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HERO */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-xs text-zinc-400 font-mono mb-6">
            <BarChart3 className="w-3 h-3 text-emerald-400" />
            FREE AUDIT TOOL
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter mb-5">
            Check Your AI Visibility Score
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Enter your URL. We'll scan how ChatGPT, Perplexity, and Gemini see your brand.
            No sign-up required.
          </p>
        </div>

        {/* URL Input (idle or error) */}
        {(status === 'idle' || status === 'error') && (
          <div className="max-w-2xl mx-auto mb-10">
            <form onSubmit={handleScan} className="relative group">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-2xl transition-all duration-500 group-hover:bg-white/10 pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-zinc-900/80 border border-white/10 rounded-2xl p-2 backdrop-blur-sm gap-2">
                <Globe className="hidden sm:block w-6 h-6 text-zinc-500 ml-4 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="yourwebsite.com"
                  className="flex-1 bg-transparent text-white placeholder:text-zinc-600 outline-none px-4 sm:px-2 py-4 text-lg"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'scanning'}
                  className="btn-primary bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto disabled:opacity-50"
                >
                  {status === 'scanning' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Scanning...</>
                  ) : (
                    <><Search className="w-4 h-4" /> Check My Score</>
                  )}
                </button>
              </div>
            </form>

            {/* Error display */}
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-medium text-sm mb-1">Scan Failed</p>
                    <p className="text-red-300/80 text-sm">{errorMsg}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Scanning State */}
        {status === 'scanning' && (
          <div className="max-w-2xl mx-auto mb-10 glass-panel bg-zinc-900/50 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-md">
            <div className="w-16 h-16 border-3 border-zinc-800 border-t-emerald-400 rounded-full animate-spin mx-auto mb-6" />
            <h3 className="text-xl text-white font-medium mb-2">Scanning your site...</h3>
            <p className="text-zinc-500 text-sm font-mono mb-6 truncate max-w-full">{url}</p>
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div className="bg-emerald-400 h-full animate-pulse rounded-full" style={{ width: '60%' }} />
            </div>
            <div className="mt-6 flex flex-col gap-2 text-left bg-black/40 p-4 rounded-lg font-mono text-xs text-zinc-500 min-h-[7rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
              <p className="text-emerald-400">[OK] Connected to target server</p>
              <p className="text-zinc-400">[INFO] Fetching HTML, robots.txt, sitemap.xml, llms.txt...</p>
              <p className="text-zinc-400">[INFO] Analyzing schema, meta, OG tags, content...</p>
              <p className="text-amber-400">[WARN] Cross-referencing brand presence across platforms...</p>
              <p className="text-zinc-400">[INFO] Calculating GEO visibility score...</p>
            </div>
          </div>
        )}

        {/* Results State */}
        {status === 'results' && data && (
          <div className="mb-16 animate-fade-in space-y-6">
            {/* Score Overview Card */}
            <div className="glass-panel bg-zinc-900/50 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-72 h-72 ${getBandInfo(data.band).bg}/[0.06] blur-[100px] pointer-events-none rounded-full`} />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                  {/* Score Circle */}
                  <div className="flex flex-col items-center shrink-0">
                    <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest mb-4">GEO Score</p>
                    <div className="relative">
                      <svg className="w-40 h-40 md:w-48 md:h-48 transform -rotate-90" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-zinc-800" />
                        <circle
                          cx="60" cy="60" r="52"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${(data.score / 100) * 326.73} 326.73`}
                          className={`${getScoreArcColor(data.score)} transition-all duration-1000 ease-out`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-5xl md:text-6xl font-bold tracking-tight ${getScoreArcColor(data.score)}`}>{data.score}</span>
                        <span className="text-xs text-zinc-500 font-mono mt-1">/ 100</span>
                      </div>
                    </div>
                    <span className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${getBandInfo(data.band).border} ${getBandInfo(data.band).text} ${getBandInfo(data.band).bg}/10`}>
                      {getBandInfo(data.band).label}
                    </span>
                  </div>

                  {/* Score details and recommendations */}
                  <div className="flex-1 w-full">
                    <div className="mb-5">
                      <p className="text-sm text-zinc-500 font-mono mb-1">Scanned URL</p>
                      <p className="text-white text-sm font-mono break-all bg-zinc-800/50 rounded-lg px-3 py-2 inline-block max-w-full">
                        {data.url}
                      </p>
                    </div>

                    <div className="mb-5">
                      <p className="text-sm text-zinc-500 font-mono mb-2">Duration</p>
                      <p className="text-zinc-300 text-sm">{data.duration_ms}ms</p>
                    </div>

                    {/* Score interpretation */}
                    <div className="mb-6">
                      <p className="text-zinc-400 font-light text-sm leading-relaxed">
                        {data.score <= 30
                          ? 'Your brand is largely invisible to AI engines. LLMs lack the structured data they need to cite you accurately — which means they either guess or recommend a competitor.'
                          : data.score <= 50
                          ? 'Your site has some signals but significant gaps in schema and structured data. LLMs may have trouble finding and citing your brand.'
                          : data.score <= 70
                          ? 'You have several signals in place, but gaps in schema, citations, or brand consistency are hurting your AI visibility. Targeted fixes could move you up.'
                          : data.score <= 85
                          ? 'Your site has solid entity foundations. AI engines can find you, but there\'s room to optimize for top-tier placement.'
                          : 'Excellent! Your site is well-optimized for AI engines. LLMs can easily find, understand, and cite your content.'}
                      </p>
                    </div>

                    {/* Top Recommendations */}
                    {data.recommendations.length > 0 && (
                      <div>
                        <p className="text-sm text-zinc-500 font-mono mb-3">Top Recommendations</p>
                        <ul className="space-y-2">
                          {data.recommendations.slice(0, 3).map((rec, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-amber-400 mt-0.5 shrink-0">•</span>
                              <span className="text-zinc-300">{rec}</span>
                            </li>
                          ))}
                          {data.recommendations.length > 3 && (
                            <li className="text-xs text-zinc-600">+{data.recommendations.length - 3} more recommendations below</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="glass-panel bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white mb-6">Score Breakdown by Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(data.categories).map(([key, cat]) => {
                  const isExpanded = expandedCat === key;
                  const scoreColor = cat.score >= 80 ? 'text-emerald-400' : cat.score >= 50 ? 'text-amber-400' : 'text-red-400';
                  return (
                    <div
                      key={key}
                      className="bento-card bg-zinc-800/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all cursor-pointer"
                      onClick={() => setExpandedCat(isExpanded ? null : key)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400">
                            {getCategoryIcon(key)}
                          </div>
                          <span className="text-white text-sm font-medium">{getCategoryLabel(key)}</span>
                        </div>
                        <span className={`text-sm font-bold font-mono ${scoreColor}`}>{cat.score}</span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`${getProgressColor(cat.score)} h-full rounded-full transition-all duration-700`}
                          style={{ width: `${cat.score}%` }}
                        />
                      </div>

                      {/* Expandable details */}
                      {isExpanded && cat.details.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/5 space-y-1">
                          {cat.details.map((detail, i) => (
                            <p key={i} className={`text-xs font-mono flex items-start gap-1.5 ${detail.includes('missing') || detail.includes('not found') || detail.includes('WARNING') || detail.includes('low')
                              ? 'text-red-400/70'
                              : detail.includes('present') || detail.includes('good') || detail.includes('OK') || detail.includes('found')
                              ? 'text-emerald-400/70'
                              : 'text-zinc-500'
                            }`}>
                              <span className="mt-0.5 shrink-0">{detail.includes('missing') || detail.includes('not found') || detail.includes('WARNING') ? '✗' : '✓'}</span>
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Expand/collapse hint */}
                      <div className="mt-1 flex justify-center">
                        {isExpanded ? (
                          <ChevronUp className="w-3 h-3 text-zinc-600" />
                        ) : (
                          <ChevronDown className="w-3 h-3 text-zinc-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* All Recommendations */}
            {data.recommendations.length > 0 && (
              <div className="glass-panel bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-amber-400 text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetScan}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all hover:scale-[1.02] text-sm border border-white/10"
              >
                <RefreshCw className="w-4 h-4" /> Scan Another URL
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all hover:scale-[1.02] text-sm"
              >
                <Calendar className="w-4 h-4" /> Book a Discovery Call
              </Link>
            </div>
          </div>
        )}

        {/* How It Works (always visible below results) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">How It Works</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mt-3 tracking-tight">
              What we scan in your GEO audit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FileJson, number: '01', label: 'Fetch & Parse', desc: 'We fetch your HTML, robots.txt, sitemap.xml, and llms.txt to analyze all AI-facing signals.' },
              { icon: BarChart3, number: '02', label: 'Score 12 Categories', desc: 'Schema, meta tags, OG, content, headings, links, brand presence, performance, and more.' },
              { icon: Award, number: '03', label: 'Get Your Score & Fixes', desc: 'A weighted GEO score out of 100, with specific, actionable recommendations for improvement.' },
            ].map((step) => (
              <div key={step.number} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-900/30">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-3xl font-bold text-emerald-500/30 font-mono">{step.number}</span>
                <h3 className="text-white font-semibold text-lg mt-3 mb-2">{step.label}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Check - Categories grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">Audit Criteria</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mt-3 tracking-tight">
              All 12 categories we analyze
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: FileJson, label: 'Schema Markup', desc: 'JSON-LD structured data with Organization, Person, FAQ, and WebSite schemas.' },
              { icon: Eye, label: 'Meta Tags', desc: 'Title, description, viewport, canonical URL, lang attribute, and keywords.' },
              { icon: Share2, label: 'Open Graph', desc: 'og:title, og:description, og:image, twitter:card, and other social meta tags.' },
              { icon: AlertTriangle, label: 'Robots.txt', desc: 'AI bot rules (GPTBot, CCBot, etc.), sitemap references, no blanket disallow.' },
              { icon: FileText, label: 'Sitemap.xml', desc: 'Valid XML sitemap with proper URL references for crawlers.' },
              { icon: MessageSquare, label: 'LLMs.txt', desc: 'Dedicated llms.txt file for LLM context with sections and links.' },
              { icon: Layout, label: 'Content & Headings', desc: 'H1-H6 hierarchy, 300+ words, proper structure with lists and paragraphs.' },
              { icon: Lock, label: 'SSL / HTTPS', desc: 'Secure connection via HTTPS for trust and ranking signals.' },
              { icon: LinkIcon, label: 'Internal & External Links', desc: 'Navigation links, external rel attributes, anchor text quality.' },
              { icon: Award, label: 'Brand Presence', desc: 'LinkedIn, Twitter, Crunchbase, Wikipedia, GitHub profiles via sameAs.' },
              { icon: Zap, label: 'Performance', desc: 'Page size, gzip compression, lazy loading, server timing.' },
              { icon: Globe, label: 'Platform Presence', desc: 'Cross-referencing your brand across 11+ knowledge graph sources.' },
            ].map((cat) => (
              <div key={cat.label} className="glass-panel p-5 md:p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:border-white/10 transition-all">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <cat.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-white font-medium text-sm mb-2">{cat.label}</h3>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Score Zones Legend */}
        <section className="mb-20">
          <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-semibold text-lg mb-6 text-center">Score Zones</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                { range: '0-30', label: 'Critical', color: 'text-red-400', border: 'border-red-500/10', bg: 'bg-red-500/5' },
                { range: '31-50', label: 'Poor', color: 'text-orange-400', border: 'border-orange-500/10', bg: 'bg-orange-500/5' },
                { range: '51-70', label: 'Needs Work', color: 'text-amber-400', border: 'border-amber-500/10', bg: 'bg-amber-500/5' },
                { range: '71-85', label: 'Good', color: 'text-emerald-400', border: 'border-emerald-500/10', bg: 'bg-emerald-500/5' },
                { range: '86-100', label: 'Excellent', color: 'text-green-400', border: 'border-green-500/10', bg: 'bg-green-500/5' },
              ].map((zone) => (
                <div key={zone.range} className={`flex items-center gap-3 p-3 rounded-xl ${zone.bg} ${zone.border} border`}>
                  <div className={`w-8 h-8 rounded-full ${zone.bg} flex items-center justify-center shrink-0`}>
                    <span className={`${zone.color} font-bold text-xs`}>{zone.range}</span>
                  </div>
                  <p className={`${zone.color} text-xs font-medium`}>{zone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center border-t border-white/5 pt-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Want the full breakdown?
          </h2>
          <p className="text-zinc-400 font-light max-w-lg mx-auto mb-8 leading-relaxed">
            The scan above checks surface-level signals. A full GEO audit maps your entire
            entity graph, citation chain, and competitive positioning across 40+ data points.
          </p>
          <a
            href="mailto:info@qlavo.in?subject=Full%20GEO%20Audit%20Request"
            className="inline-flex items-center gap-2 px-10 py-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all hover:scale-[1.03] text-sm"
          >
            Request Full Audit <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default GEOCalculator;
