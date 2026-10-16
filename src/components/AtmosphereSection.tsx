import React from 'react';
import { Beer, UtensilsCrossed, Gamepad2, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { PageId } from './Navbar';

interface AtmosphereSectionProps {
  onNavigate?: (page: PageId) => void;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({ onNavigate }) => {
  const experiences = [
    {
      icon: UtensilsCrossed,
      title: 'Artisan Kitchen & Paninis',
      subtitle: 'Fresh In-House Fare',
      description: 'Slow-roasted pulled pork Cuban Sammys with dill pickles and Swiss, fresh maki rolls, Bavarian pretzels, and hot panini melts.',
      targetPage: 'menu' as PageId
    },
    {
      icon: Beer,
      title: 'Craft Beer & Draft Bar',
      subtitle: '21+ Regional Microbrews',
      description: 'Chilled craft cans and rotating drafts from premier Illinois breweries including Pollyanna, Around The Bend, Maplewood, and Tighthead.',
      targetPage: 'menu' as PageId
    },
    {
      icon: ShoppingBag,
      title: 'The Hemp Center Boutique',
      subtitle: 'Dispensary & Wellness',
      description: 'Explore Illinois’ trusted destination for lab-certified full-spectrum tinctures, pain relief salves, and organic fruit gems with knowledgeable guidance.',
      targetPage: 'about' as PageId
    },
    {
      icon: Gamepad2,
      title: 'Social Lounge & Video Gaming',
      subtitle: 'Relax, Socialize, Play',
      description: 'A welcoming space featuring casual seating, intimate lighting, and licensed video gaming machines for a fun night out in Rockford.',
      targetPage: 'visit' as PageId
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#0D0D0F] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-3 block">
            The 815 Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-tight text-balance">
            Four Unique Vibes Under One Welcoming Roof.
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            The Canna Cafe redefines modern hospitality by blending fresh kitchen sandwiches, regional craft drafts, dispensary boutique wellness, and social gaming.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                onClick={() => onNavigate && onNavigate(exp.targetPage)}
                className="group p-8 rounded-3xl bg-[#141418] border border-white/5 hover:border-[#DE9B35]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DE9B35] group-hover:bg-[#DE9B35] group-hover:text-[#0D0D0F] transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-stone-400 text-xs uppercase tracking-wider block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#DE9B35] transition-colors mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#DE9B35] font-semibold">
                  <span>Explore Pillar 0{idx + 1}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
