import React from 'react';
import { ArrowDown, MapPin, Clock, UtensilsCrossed, ArrowUpRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background cinematic photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_atmosphere.jpg"
          alt="The Canna Cafe and bar lounge inside The Hemp Center in Rockford, Illinois"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.1] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/70 to-[#0D0D0F]/45" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-black/40 to-[#0D0D0F]/95" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* First Image Logo replacing website name */}
        <div className="mb-8 transform hover:scale-[1.02] transition-transform">
          <BrandLogo size="hero" />
        </div>

        {/* Main Heading: Required exact copy */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FAF8F5] max-w-4xl mx-auto leading-[1.08] mb-5 text-balance"
          style={{ letterSpacing: '-0.02em' }}
        >
          Your Next Favourite Spot.
        </h1>

        {/* Supporting text: One short brand-appropriate sentence */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          Illinois’ premier destination combining artisanal cafe sandwiches, cold craft beers, and curated hemp wellness inside The Hemp Center in Rockford.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto justify-center mb-12">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#DE9B35] hover:bg-[#F2B85B] text-[#0D0D0F] font-bold text-sm tracking-wide uppercase transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#DE9B35]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE9B35] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Explore the Cafe</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF8F5] border border-white/20 font-semibold text-sm tracking-wide uppercase backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Quick verified credentials row (removed sparkle icon and infused on request as requested) */}
        <div className="pt-5 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#DE9B35]" />
            <span>6830 Spring Creek Rd, Rockford, IL</span>
          </div>
          <span className="hidden sm:inline text-white/20">·</span>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#DE9B35]" />
            <span>Tue–Fri 11am–7pm · Sat–Sun 11am–4pm</span>
          </div>
          <span className="hidden sm:inline text-white/20">·</span>
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#DE9B35]" />
            <span>Signature Cuban Sammy & Craft Taps</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        type="button"
        onClick={onExploreClick}
        aria-label="Scroll down to cafe introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-stone-400 hover:text-[#DE9B35] transition-colors cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium opacity-70 group-hover:opacity-100">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
