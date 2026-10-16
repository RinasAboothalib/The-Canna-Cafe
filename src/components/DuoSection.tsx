import React from 'react';
import { ArrowUpRight, Flame, Beer } from 'lucide-react';
import { PageId } from './Navbar';

interface DuoSectionProps {
  onNavigate: (page: PageId) => void;
}

export const DuoSection: React.FC<DuoSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section kicker */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-2 block">
            House Favorites
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F5] tracking-tight">
            Crafted Bites & Cold Pours.
          </h2>
        </div>

        {/* 2-Column Split Cards (bigman-demo style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Card 1: The Cuban Sammy */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#141418] border border-white/10 shadow-2xl flex flex-col justify-end min-h-[460px] sm:min-h-[520px] p-8 sm:p-10 transform hover:-translate-y-1 transition-all duration-300">
            {/* Background image with mask zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/cuban_sammy.jpg"
                alt="The Cuban Sammy Panini with chips and pepperoncini"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.65]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DE9B35] text-[#0D0D0F] text-[11px] font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Today's Special</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                The Cuban Sammy
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md leading-relaxed">
                Slow-roasted shredded pork, cured ham, melted Swiss, crisp pickles, and mustard pressed on artisan crusty sourdough. Served with Lay's potato chips and pepperoncini.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="link-arrow text-xs sm:text-sm text-[#DE9B35] hover:text-[#F2B85B] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>See Full Food Menu</span>
                  <ArrowUpRight className="w-4 h-4 arrow-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Craft Beers & Drafts */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#141418] border border-white/10 shadow-2xl flex flex-col justify-end min-h-[460px] sm:min-h-[520px] p-8 sm:p-10 transform hover:-translate-y-1 transition-all duration-300">
            {/* Background image with mask zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/craft_beer.jpg"
                alt="Cold craft beer with condensation and colorful mural"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.62]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 border border-white/20 text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                <Beer className="w-3.5 h-3.5 text-[#DE9B35]" />
                <span>21+ Regional Drafts</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Illinois Microbrews
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md leading-relaxed">
                Featuring rotating taps and chilled cans from Pollyanna, Around The Bend, Maplewood, and Tighthead Brewing. From hazy NEIPAs to velvety pistachio cream ales.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="link-arrow text-xs sm:text-sm text-[#DE9B35] hover:text-[#F2B85B] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Drafts & Cans</span>
                  <ArrowUpRight className="w-4 h-4 arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
