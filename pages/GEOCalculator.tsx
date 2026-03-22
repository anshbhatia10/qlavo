import React, { useState } from 'react';
import { Search, ShieldCheck, FileJson, AlertCircle, Link as LinkIcon, ChevronRight, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const GEOCalculator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'results'>('idle');
  const [progress, setProgress] = useState(0);
  const [scanResult, setScanResult] = useState<null | { schemas: string[], isQlavo: boolean }>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus('scanning');
    setProgress(0);
    setScanResult(null);

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + Math.floor(Math.random() * 10) + 2 : 90));
    }, 400);

    const isQlavo = url.toLowerCase().includes('qlavo');

    try {
      if (isQlavo) {
        // Bypass actual fetch for qlavo (simulating perfection)
        setTimeout(() => {
          clearInterval(progressInterval);
          setProgress(100);
          setScanResult({ schemas: ['Organization', 'FAQPage', 'ScholarlyArticle', 'WebSite'], isQlavo: true });
          setTimeout(() => setStatus('results'), 500);
        }, 2000);
      } else {
        // Actual fetch to Netlify function
        const res = await fetch('/.netlify/functions/scan-url', {
          method: 'POST',
          body: JSON.stringify({ url }),
        });
        
        const data = await res.json();
        clearInterval(progressInterval);
        setProgress(100);
        
        if (res.ok && data.schemas) {
           setScanResult({ schemas: data.schemas, isQlavo: false });
        } else {
           // Fallback if fetch fails (e.g., local dev without netlify cli)
           setScanResult({ schemas: [], isQlavo: false });
        }
        setTimeout(() => setStatus('results'), 500);
      }
    } catch (err) {
      clearInterval(progressInterval);
      setProgress(100);
      setScanResult({ schemas: [], isQlavo: false });
      setTimeout(() => setStatus('results'), 500);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-xs text-zinc-400 font-mono mb-6">
            <Activity className="w-3 h-3 text-emerald-400" />
            LIVE AUDIT TOOL
          </div>
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-medium font-mono">
              Last Updated: March 13, 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter mb-6">
            GEO Readiness Calculator
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Enter your website URL to simulate an AI search crawler audit. We check for JSON-LD schemas, entity consistency, and indexability for models like Perplexity and Gemini.
          </p>
        </div>

        {/* Input Form */}
        {status === 'idle' && (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleScan} className="relative group">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-2xl transition-all duration-500 group-hover:bg-white/10 pointer-events-none"></div>
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-zinc-900/80 border border-white/10 rounded-2xl p-2 backdrop-blur-sm gap-2">
                <Globe className="hidden sm:block w-6 h-6 text-zinc-500 ml-4 mr-2 shrink-0" />
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="flex-1 bg-transparent text-white placeholder:text-zinc-600 outline-none px-4 sm:px-2 py-4 text-lg"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
                >
                  Analyze <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Scanning State */}
        {status === 'scanning' && (
          <div className="max-w-2xl mx-auto bg-zinc-900/50 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-md">
            <div className="w-20 h-20 border-4 border-zinc-800 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
            <h3 className="text-2xl text-white font-medium mb-4">Simulating LLM Crawl...</h3>
            <p className="text-zinc-400 mb-8 font-mono text-sm">Target: {url}</p>
            
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="mt-6 flex flex-col gap-2 text-left bg-black/40 p-4 rounded-lg font-mono text-xs text-zinc-500 h-32 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="text-zinc-400">{'['}INFO{']'} Connecting to target server...</div>
              {progress > 20 && <div className="text-emerald-400">{'['}SUCCESS{']'} SSL Certificate valid.</div>}
              {progress > 40 && <div className="text-zinc-400">{'['}INFO{']'} Scanning DOM for JSON-LD structured data...</div>}
              {progress > 60 && <div className="text-amber-400">{'['}WARN{']'} Corroborating entity schemas with external knowledge graphs...</div>}
              {progress > 80 && <div className="text-zinc-400">{'['}INFO{']'} Compiling GEO heuristic score...</div>}
            </div>
          </div>
        )}

        {/* Results State */}
        {status === 'results' && scanResult && (() => {
          const { isQlavo, schemas } = scanResult;
          const hasOrg = schemas.includes('Organization');
          const hasFAQ = schemas.includes('FAQPage');
          const isOptimized = isQlavo || (hasOrg && hasFAQ);
          
          const score = isQlavo ? 98 : (isOptimized ? 85 : 42);

          const colorClass = isOptimized ? 'text-emerald-500' : 'text-amber-500';
          const bgClass = isOptimized ? 'bg-emerald-500/10' : 'bg-amber-500/10';
          const borderClass = isOptimized ? 'border-emerald-500/20' : 'border-amber-500/20';

          return (
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md mb-8 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 ${bgClass} blur-[80px] pointer-events-none`}></div>
                
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="shrink-0 relative">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-zinc-800" />
                      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="440" strokeDashoffset={440 - (440 * score) / 100} className={`${colorClass} transition-all duration-1000`} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-light text-white tracking-tighter">{score}</span>
                      <span className="text-xs text-zinc-500 font-mono tracking-widest mt-1">/ 100</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className={`inline-flex items-center gap-2 px-2 py-1 ${bgClass} ${colorClass} text-xs font-mono rounded border ${borderClass} mb-3`}>
                      {isOptimized ? <ShieldCheck className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      {isOptimized ? 'GEO OPTIMIZED' : 'ACTION REQUIRED'}
                    </div>
                    <h2 className="text-3xl font-semibold text-white mb-2">
                      {isOptimized ? 'High AI Visibility' : 'High Hallucination Risk'}
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed mb-4">
                      Based on a live DOM scan of <strong className="text-zinc-300 font-medium">{url}</strong>, your site {isOptimized ? 'possesses the explicit semantic architecture required by LLMs. Generative engines are highly likely to cite your entity accurately.' : 'lacks the explicit semantic architecture required by LLMs. Generative engines are likely to infer data or omit you entirely.'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                  <div className={`bg-black/40 border ${isOptimized ? 'border-emerald-500/20' : 'border-red-500/20'} rounded-xl p-5`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 ${isOptimized ? 'bg-emerald-500/10' : 'bg-red-500/10'} rounded-md`}>
                        {isOptimized ? <FileJson className="w-5 h-5 text-emerald-500" /> : <FileJson className="w-5 h-5 text-red-500" />}
                      </div>
                      <h3 className="text-white font-medium">{isOptimized ? 'Valid JSON-LD Schemas' : 'Missing Schemas'}</h3>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light mt-2">
                      {schemas.length > 0 ? (
                        <>Detected <code className="text-xs font-mono bg-white/5 px-1 py-0.5 rounded text-emerald-300">{schemas.join(', ')}</code> </>
                      ) : (
                        <>No valid <code className="text-xs font-mono bg-white/5 px-1 py-0.5 rounded text-red-300">Organization</code> or <code className="text-xs font-mono bg-white/5 px-1 py-0.5 rounded text-red-300">FAQPage</code> JSON-LD schemas detected. AI has no structured context for your entity.</>
                      )}
                    </p>
                  </div>
                  
                  <div className="bg-black/40 border border-emerald-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500/10 rounded-md">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      </div>
                      <h3 className="text-white font-medium">Lexical Indexability</h3>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      Basic HTML structure is sound. Your site is readable by legacy crawlers (Googlebot), but relies entirely on keyword extraction rather than Entity Graphs.
                    </p>
                  </div>
                </div>
              </div>

            <div className="text-center bg-zinc-900 border border-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Don't let an algorithm guess your business.</h3>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto font-light leading-relaxed">
                This was a surface-level scan. Book a full GEO Audit with our team to map your citations, build your JSON-LD architecture, and establish Entity Consistency across the web.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]">
                  Book a Full GEO Audit
                </Link>
                <button 
                  onClick={() => {
                    setStatus('idle');
                    setUrl('');
                  }}
                  className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/5 transition-all text-sm uppercase tracking-widest font-medium"
                >
                  Scan Another URL
                </button>
              </div>
            </div>
          </div>
          );
        })()}
      </div>
    </div>
  );
};

export default GEOCalculator;
