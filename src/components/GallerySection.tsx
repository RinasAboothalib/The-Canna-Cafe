import React, { useState } from 'react';
import { Instagram, Facebook, Maximize2, ArrowUpRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, CAFE_INFO } from '../data/cafeData';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  isStandalonePage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isStandalonePage = false }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Paninis & Food' },
    { id: 'beers', label: 'Craft Beers' },
    { id: 'ambiance', label: 'Lounge & Decor' }
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const currentIndex = selectedItem ? filteredGallery.findIndex((i) => i.id === selectedItem.id) : 0;

  const handlePrev = () => {
    if (filteredGallery.length === 0) return;
    const nextIdx = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedItem(filteredGallery[nextIdx]);
  };

  const handleNext = () => {
    if (filteredGallery.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredGallery.length;
    setSelectedItem(filteredGallery[nextIdx]);
  };

  return (
    <div id="gallery" className="bg-[#0A0A0C]">
      {/* Standalone Page Header (.phead) */}
      {isStandalonePage && (
        <section className="phead">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] mb-3 block">
              Moments & Culinary Highlights
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#FAF8F5] tracking-tight max-w-4xl mx-auto leading-tight text-balance">
              Visual Archive.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Authentic snapshots of our Rockford cafe, craft brews, pressed sandwiches, and cozy lounge inside The Hemp Center.
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
                  Curated Visual Gallery
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-tight">
                  Life Inside The Canna Cafe.
                </h2>
                <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-xl">
                  Authentic snapshots from our kitchen, craft draft taps, and lounge in Rockford, IL.
                </p>
              </div>

              {/* Social Connect Buttons */}
              <div className="flex items-center gap-3 self-start md:self-end">
                <a
                  href={CAFE_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all hover:border-[#DE9B35]/40"
                >
                  <Instagram className="w-4 h-4 text-[#DE9B35]" />
                  <span>@thecannacafe815</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={CAFE_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all hover:border-[#DE9B35]/40"
                >
                  <Facebook className="w-4 h-4 text-[#DE9B35]" />
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>
          )}

          {/* Category Tabs (Big Man & Co style filters) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-150 cursor-pointer uppercase tracking-wider ${
                  filterCategory === tab.id
                    ? 'bg-[#DE9B35] text-[#0D0D0F] shadow-md'
                    : 'text-stone-300 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredGallery.map((item, index) => {
              const colSpan =
                index === 0
                  ? 'lg:col-span-7'
                  : index === 1
                  ? 'lg:col-span-5'
                  : index === 2
                  ? 'lg:col-span-4'
                  : index === 3
                  ? 'lg:col-span-4'
                  : 'lg:col-span-4';

              const heightClass =
                index === 0 ? 'h-[360px] sm:h-[440px]' : 'h-[320px] sm:h-[380px]';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`${colSpan} group relative rounded-3xl overflow-hidden bg-[#141418] border border-white/10 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`w-full ${heightClass} overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Expand icon pill */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DE9B35] mb-1 block">
                      {item.caption}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#DE9B35] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-1 opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-[#111114] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/5 text-[#DE9B35] shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Official Social Media Presence</span>
                <p className="text-xs text-stone-400 mt-0.5">
                  Follow @thecannacafe815 on Instagram and Facebook for our daily specials, tap lists, and weekend events.
                </p>
              </div>
            </div>
            <a
              href={CAFE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#DE9B35] hover:bg-[#F2B85B] text-[#0D0D0F] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Prev/Next Controls */}
      <LightboxModal
        item={selectedItem}
        items={filteredGallery}
        currentIndex={currentIndex}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
