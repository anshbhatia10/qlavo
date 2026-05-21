import React from 'react';
import { ArrowUpRight, Clock, Phone, FileText, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-6 tracking-tight">
            Book a Discovery Call
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg px-4 font-light">
            30 minutes. No pitch deck. We look at your situation and tell you if — and how — we can help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Calendar */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div
              className="rounded-2xl overflow-hidden border border-white/10 min-h-[500px] md:min-h-0"
              style={{ filter: 'invert(1) hue-rotate(180deg)' }}
            >
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0m67cc7T8yNqwjlHdpaDMR5f80tLImiXQXgFS3QCxL8X24WietLa6HHJBSJqoha2gJWRtOAB_d?gv=true"
                style={{ border: 0, minHeight: '600px' }}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book an appointment"
                className="rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Direct Email</span>
                <a
                  href="mailto:info@qlavo.in"
                  className="text-base md:text-lg text-white hover:text-zinc-300 transition-colors flex items-center gap-2 group truncate"
                >
                  info@qlavo.in{' '}
                  <ArrowUpRight className="w-4 h-4 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Office</span>
                <span className="text-base md:text-lg text-white">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-1">24-hour response</p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Every inquiry gets a personal reply within one business day.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-1">Free discovery call</p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                30 minutes to understand your business. No pitch. No pressure.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-medium text-sm mb-1">No retainers or lock-in</p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Project-based engagements. You pay for results, not hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
