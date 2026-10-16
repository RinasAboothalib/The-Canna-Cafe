import React from 'react';
import { ShieldCheck, Compass, UtensilsCrossed, Beer, Calendar, MapPin, Gamepad2 } from 'lucide-react';
import { CAFE_INFO, WEEKLY_SPECIALS } from '../data/cafeData';

interface AboutSectionProps {
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isStandalonePage = false }) => {
  return (
    <div id="about" className="bg-[#0D0D0F]">
      {/* Standalone Page Header (bigman-demo style .phead) */}
      {isStandalonePage && (
        <section className="phead">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-3 block">
              Inside The Hemp Center · Rockford, IL
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#FAF8F5] tracking-tight max-w-4xl mx-auto leading-tight text-balance">
              The Canna Cafe Story.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Illinois’ premier hybrid cafe, craft bar, and botanical gathering space.
            </p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Heading for home or inner */}
          {!isStandalonePage && (
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-3 block">
                Our Story & Heritage
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-tight text-balance">
                Illinois’ First Hybrid Cafe & Dispensary Lounge.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
                Inside <span className="text-white font-medium">The Hemp Center</span> at 6830 Spring Creek Road in Rockford, we created a welcoming gathering space that seamlessly brings together artisanal cafe craftsmanship, cold craft brews, and everyday wellness.
              </p>
            </div>
          )}

          {/* Split Screen Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Visual Side with mask zoom */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900 group">
                <img
                  src="/src/assets/images/hero_canna_cafe_atmosphere_1792125152810.jpg"
                  alt="Inside The Canna Cafe & The Hemp Center Rockford"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0D0D0F]/85 backdrop-blur-md border border-white/10">
                  <p className="text-sm sm:text-base font-medium text-stone-200 italic">
                    “A sophisticated, comfortable space where guests can savor fresh hot paninis, cold regional craft beer, and discover verified hemp wellness under one roof.”
                  </p>
                  <span className="text-xs text-[#DE9B35] font-semibold tracking-wider uppercase mt-2 block">
                    6830 Spring Creek Rd · Rockford, Illinois
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                A Crafted Social Space Unlike Any Other
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Founded to rethink traditional cafe and nightlife spaces, The Canna Cafe provides an elevated atmosphere where you can enjoy pressed Cuban paninis, fresh veggie sushi rolls, craft draft beers, or consult with knowledgeable specialists at The Hemp Center.
              </p>

              {/* Feature Points (clean typography, no sparkle icons) */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#DE9B35] shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Located Inside The Hemp Center</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Explore a full retail dispensary boutique featuring lab-certified CBD tinctures, pain topicals, and fruit gummies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#DE9B35] shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Signature In-House Kitchen</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      From our famous pressed Cuban Sammy served with potato chips to fresh maki rolls, Bavarian pretzels, and hot panini melts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#DE9B35] shrink-0 mt-0.5">
                    <Beer className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Curated Illinois Craft Brews</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Rotating taps and cans from Pollyanna, Around The Bend, Maplewood, Prairie Brewing, and Tighthead.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#DE9B35] shrink-0 mt-0.5">
                    <Gamepad2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Video Gaming & Social Lounge</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Casual comfortable booths, gaming machines, and an inviting communal environment for friends and family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Community Specials Banner (from user's social uploads) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-stone-900/90 via-[#18181D] to-stone-900/90 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DE9B35] mb-3">
              <Calendar className="w-4 h-4" />
              <span>Weekly Events at The Canna Cafe</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              Join Us for Weekly Cafe Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WEEKLY_SPECIALS.map((spec) => (
                <div
                  key={spec.day}
                  className="p-6 rounded-2xl bg-[#0D0D0F]/80 border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase font-bold text-[#DE9B35] tracking-wider">
                        {spec.day}
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">
                        {spec.tag}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{spec.title}</h4>
                    <p className="text-xs text-stone-300 leading-relaxed">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
