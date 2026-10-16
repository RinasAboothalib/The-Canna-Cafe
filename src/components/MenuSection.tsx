import React, { useState } from 'react';
import { Search, Info, Beer, UtensilsCrossed, Coffee, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import { BrandLogo } from './BrandLogo';

interface MenuSectionProps {
  isStandalonePage?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ isStandalonePage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Items', icon: null },
    { id: 'food', label: 'Paninis & Kitchen', icon: UtensilsCrossed },
    { id: 'beers', label: '21+ Craft Beers & Wine', icon: Beer },
    { id: 'coffee', label: 'Artisanal Coffee & Teas', icon: Coffee },
    { id: 'boutique', label: 'Hemp Boutique', icon: ShoppingBag }
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div id="menu" className="bg-[#0A0A0C]">
      {/* Standalone Page Header (.phead) */}
      {isStandalonePage && (
        <section className="phead">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <BrandLogo size="lg" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F5] tracking-tight max-w-4xl mx-auto leading-tight text-balance">
              Handcrafted Menu
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Featuring our signature pressed Cuban Sammy, fresh veggie sushi rolls, cold regional craft drafts, and boutique wellness.
            </p>
          </div>
        </section>
      )}

      {/* Main Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header for in-page view */}
          {!isStandalonePage && (
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-3 block">
                  Handcrafted Menu
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-tight">
                  Artisan Paninis, Craft Pours & Fresh Fare.
                </h2>
                <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-xl">
                  Prepared fresh in our kitchen. From hot pressed Cuban Sammys to cold regional draft beers.
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs text-stone-300 self-start md:self-end">
                <Info className="w-4 h-4 text-[#DE9B35] shrink-0" />
                <span>Kitchen items prepared fresh daily · Dine-in & carryout</span>
              </div>
            </div>
          )}

          {/* Filter & Search Bar */}
          <div className="glass-panel rounded-2xl p-4 sm:p-5 mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between shadow-xl">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer uppercase tracking-wider ${
                      selectedCategory === cat.id
                        ? 'bg-[#DE9B35] text-[#0D0D0F] shadow-md font-bold'
                        : 'text-stone-300 hover:text-white bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search paninis, beers, rolls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-900/90 border border-white/10 rounded-full text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#DE9B35]"
              />
            </div>
          </div>

          {/* Menu Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-3xl bg-[#141418] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-black/50"
                >
                  {/* Optional featured image */}
                  {item.image && (
                    <div className="w-full h-48 overflow-hidden bg-stone-900 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />
                      {item.badge && (
                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#DE9B35] text-[#0D0D0F] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category kicker */}
                      {!item.image && (
                        <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                          <span className="text-stone-400 uppercase tracking-widest text-[11px] font-semibold">
                            {item.category === 'food' && 'Panini & Kitchen'}
                            {item.category === 'beers' && '21+ Craft Brew'}
                            {item.category === 'coffee' && 'Cafe Beverage'}
                            {item.category === 'boutique' && 'The Hemp Center'}
                          </span>
                          {item.badge && (
                            <span className="text-[#DE9B35] text-[11px] font-bold tracking-wide uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title & Price */}
                      <div className="flex items-baseline justify-between gap-3 mb-2.5">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#DE9B35] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-base font-bold text-[#DE9B35] tabular-nums shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Notes Footer */}
                    {item.notes && (
                      <div className="pt-3 border-t border-white/5 text-[11px] text-stone-400">
                        {item.notes}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 rounded-3xl bg-[#141418] border border-white/5">
              <p className="text-stone-300 text-base">No menu items match your search query.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2 rounded-full bg-[#DE9B35] text-[#0D0D0F] font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
