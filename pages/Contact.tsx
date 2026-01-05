import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    needs: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', firm: '', needs: '' });
    }, 1500);
  };

  return (
    <section className="pt-28 md:pt-32 pb-20 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-6 tracking-tight">Let's Talk.</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg px-4 font-light">
                Book a time directly on our calendar below, or send us a message. All inquiries are routed to <span className="text-white">info@qlavo.in</span>.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Column: Calendar */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="glass-panel p-2 rounded-2xl overflow-hidden border border-white/10 bg-black/50 min-h-[500px] md:min-h-0">
               <iframe 
                 src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0m67cc7T8yNqwjlHdpaDMR5f80tLImiXQXgFS3QCxL8X24WietLa6HHJBSJqoha2gJWRtOAB_d?gv=true" 
                 style={{ border: 0, minHeight: '600px' }} 
                 width="100%" 
                 height="100%"
                 frameBorder="0"
                 title="Book an appointment"
                 className="rounded-xl"
               ></iframe>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Direct Email</span>
                    <a href="mailto:info@qlavo.in" className="text-base md:text-lg text-white hover:text-zinc-300 transition-colors flex items-center gap-2 group truncate">
                        info@qlavo.in <ArrowUpRight className="w-4 h-4 opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Office</span>
                    <span className="text-base md:text-lg text-white">New Delhi, India</span>
                </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel p-6 md:p-10 rounded-3xl border border-white/5 h-fit relative">
            {status === 'success' ? (
              <div className="py-12 md:py-20 text-center animate-fade-in">
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-6" />
                <h3 className="text-xl md:text-2xl font-medium text-white mb-4">Message Sent</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  Thank you for reaching out. We've received your inquiry and it has been sent to our team at <strong>info@qlavo.in</strong>. You can expect a response within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-zinc-500 hover:text-white transition-colors underline underline-offset-4 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">Firm Name</label>
                            <input 
                                type="text" 
                                name="firm"
                                value={formData.firm}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="Doe & Partners"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                    <label className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">Work Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="john@firm.com"
                        required
                    />
                    </div>

                    <div className="space-y-2">
                    <label className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">How can we help?</label>
                    <textarea 
                        name="needs"
                        value={formData.needs}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                        placeholder="Tell us about your challenges..."
                        required
                    ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
                    >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                          </>
                        ) : (
                          'Send Request'
                        )}
                    </button>
                    <p className="text-center text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest">
                        Standard NDA applies to all initial discovery conversations.
                    </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;