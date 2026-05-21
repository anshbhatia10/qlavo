import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Loader2, Mail, Calendar, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    // Simulate audit submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-glow-emerald opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column — Audit + Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Let's find out if you're{' '}
              <span className="text-gradient-emerald">invisible to AI.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
              Enter your website. We'll run a free audit and send you a breakdown of your AI visibility score within 24 hours.
            </p>

            {/* Mini Audit Input */}
            {!submitted ? (
              <form
                onSubmit={handleAudit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  <input
                    type="url"
                    placeholder="yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="audit-input pl-11 pr-4 w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary justify-center whitespace-nowrap px-6 py-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Running...
                    </>
                  ) : (
                    <>
                      Run Audit <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="glass-panel rounded-xl p-6 mb-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Audit submitted!</p>
                  <p className="text-zinc-400 text-sm font-light">
                    We're analyzing your AI visibility now. You'll hear from us within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-zinc-600 font-light">
              Free. No email required. Just the truth about where you stand.
            </p>
          </div>

          {/* Right Column — Booking Info */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 border border-white/5">
            {/* Calendar Link */}
            <div className="mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-5">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                Book a Discovery Call
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                30 minutes. No pitch deck. We look at your situation, share what we see, and tell you if — and how — we can help.
              </p>

              {/* Calendly-style embed placeholder — replace href with actual Calendly link */}
              <a
                href="https://calendly.com/qlavo/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold w-full justify-center hover:brightness-110 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Pick a time
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-400 text-sm font-light">Or email us directly</span>
              </div>
              <a
                href="mailto:info@qlavo.in"
                className="text-emerald-400 font-medium text-sm hover:text-emerald-300 transition-colors"
              >
                info@qlavo.in
              </a>
            </div>
          </div>

        </div>

        {/* Trust Items Row */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { text: '24-hour response', sub: 'We reply within a day. Always.' },
            { text: 'Free discovery call', sub: 'No pressure. No fee. Just clarity.' },
            { text: 'No retainers or lock-in', sub: 'Month-to-month. You stay because it works.' }
          ].map((item, i) => (
            <div
              key={i}
              className="glass-panel rounded-xl px-6 py-5 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-0.5">{item.text}</p>
                <p className="text-zinc-500 text-xs font-light">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
