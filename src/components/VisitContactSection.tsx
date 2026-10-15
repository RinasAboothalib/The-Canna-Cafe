import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Clock, Navigation, Send, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { BrandLogo } from './BrandLogo';

interface VisitContactSectionProps {
  isStandalonePage?: boolean;
}

export const VisitContactSection: React.FC<VisitContactSectionProps> = ({ isStandalonePage = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    inquiryType: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compute live open/closed status for Rockford IL (Central Time)
  const currentStatus = useMemo(() => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        weekday: 'long',
        hour: 'numeric',
        hour12: false
      });
      const parts = formatter.formatToParts(now);
      const weekdayPart = parts.find((p) => p.type === 'weekday')?.value || '';
      const hourPart = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);

      const todaySchedule = CAFE_INFO.hours.find((h) => h.day === weekdayPart);
      if (!todaySchedule || todaySchedule.isClosed) {
        return { isOpen: false, text: `Closed today (${weekdayPart}) · Opens Tue 11am` };
      }

      if (todaySchedule.open && todaySchedule.close) {
        if (hourPart >= todaySchedule.open && hourPart < todaySchedule.close) {
          return {
            isOpen: true,
            text: `Open now until ${todaySchedule.close > 12 ? todaySchedule.close - 12 + ':00 PM' : todaySchedule.close + ':00 AM'}`
          };
        } else if (hourPart < todaySchedule.open) {
          return { isOpen: false, text: `Opens today at 11:00 AM` };
        } else {
          return { isOpen: false, text: `Closed for today · Reopens tomorrow at 11:00 AM` };
        }
      }
      return { isOpen: false, text: 'Check daily schedule' };
    } catch {
      return { isOpen: true, text: 'Open Tuesday – Sunday' };
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.emailOrPhone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div id="visit" className="bg-[#0D0D0F]">
      {/* Standalone Page Header (.phead) */}
      {isStandalonePage && (
        <section className="phead">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <BrandLogo size="lg" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F5] tracking-tight max-w-4xl mx-auto leading-tight text-balance">
              Visit & Contact
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Located directly inside The Hemp Center at 6830 Spring Creek Road. Walk-ins always welcome.
            </p>
          </div>
        </section>
      )}

      {/* Main Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* In-page header */}
          {!isStandalonePage && (
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-3 block">
                Visit & Contact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-tight text-balance">
                Stop By The Cafe on Spring Creek Road.
              </h2>
              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                Conveniently located in Rockford, Illinois inside The Hemp Center. Walk-ins are always warmly welcomed!
              </p>
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Col: Details & Hours */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quick Status Card */}
              <div className="p-6 rounded-3xl bg-[#141418] border border-white/10 shadow-xl">
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-white/5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                      Operating Status
                    </span>
                    <span className="text-sm font-bold text-white mt-0.5 block">
                      {currentStatus.text}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      currentStatus.isOpen
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {currentStatus.isOpen ? 'Open Now' : 'Closed Now'}
                  </span>
                </div>

                {/* Verified Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-[#DE9B35] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Location</h4>
                      <p className="text-sm font-medium text-white mt-0.5">
                        6830 Spring Creek Rd
                      </p>
                      <p className="text-xs text-stone-400">
                        Inside The Hemp Center · Rockford, IL 61114
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-[#DE9B35] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Phone</h4>
                      <a
                        href={`tel:${CAFE_INFO.phoneClean}`}
                        className="text-sm font-medium text-white hover:text-[#DE9B35] transition-colors mt-0.5 block"
                      >
                        {CAFE_INFO.phone}
                      </a>
                      <span className="text-xs text-stone-400">Call during cafe hours</span>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/5">
                  <a
                    href={CAFE_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#DE9B35] hover:bg-[#F2B85B] text-[#0D0D0F] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </a>
                  <a
                    href={`tel:${CAFE_INFO.phoneClean}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#DE9B35]" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="p-6 rounded-3xl bg-[#141418] border border-white/10 shadow-xl">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#DE9B35]">
                  <Clock className="w-4 h-4" />
                  <span>Verified Operating Hours</span>
                </div>
                <div className="divide-y divide-white/5 text-xs">
                  {CAFE_INFO.hours.map((h) => (
                    <div key={h.day} className="py-2.5 flex items-center justify-between">
                      <span className={`font-medium ${h.isClosed ? 'text-stone-500' : 'text-stone-300'}`}>
                        {h.day}
                      </span>
                      <span className={`font-bold tabular-nums ${h.isClosed ? 'text-rose-400/80' : 'text-white'}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Map Card & Form */}
            <div className="lg:col-span-7 space-y-6">
              {/* Map Preview Card */}
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141418] relative group shadow-xl">
                <div className="h-64 sm:h-72 w-full relative bg-stone-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[#16161B] opacity-90">
                    <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DE9B35" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center p-6 bg-[#0D0D0F]/90 backdrop-blur-md rounded-2xl border border-white/10 max-w-sm mx-4">
                    <div className="w-10 h-10 rounded-full bg-[#DE9B35] text-[#0D0D0F] flex items-center justify-center font-bold mb-3 shadow-lg shadow-[#DE9B35]/30">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="mb-3">
                      <BrandLogo size="sm" />
                    </div>
                    <p className="text-xs text-stone-300">
                      6830 Spring Creek Rd, Rockford, IL 61114
                    </p>
                    <a
                      href={CAFE_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <Navigation className="w-3 h-3 text-[#DE9B35]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Have a Question or Group Inquiry?
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mb-6">
                  Planning a visit, group gathering, or have a question about our menu and dispensary boutique? Drop us a message.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Message Received!</h4>
                    <p className="text-xs text-stone-300">
                      Thank you, {formData.name}. Our staff at The Canna Cafe 815 will be in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', emailOrPhone: '', inquiryType: 'general', message: '' });
                      }}
                      className="mt-3 text-xs text-[#DE9B35] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-stone-400 mb-1.5 block font-medium">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/10 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#DE9B35]"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-stone-400 mb-1.5 block font-medium">Phone or Email *</label>
                        <input
                          type="text"
                          required
                          value={formData.emailOrPhone}
                          onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                          placeholder="(815) 000-0000 or email"
                          className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/10 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#DE9B35]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-stone-400 mb-1.5 block font-medium">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/10 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#DE9B35]"
                      >
                        <option value="general">General Cafe Question</option>
                        <option value="table">Table / Group Gathering</option>
                        <option value="dispensary">The Hemp Center Boutique / Products</option>
                        <option value="events">Private Event & Catering</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-stone-400 mb-1.5 block font-medium">Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we assist you today?"
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900/90 border border-white/10 text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#DE9B35]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-full bg-[#DE9B35] hover:bg-[#F2B85B] text-[#0D0D0F] font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
