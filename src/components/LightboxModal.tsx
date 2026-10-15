import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { GalleryItem, CAFE_INFO } from '../data/cafeData';
import { BrandLogo } from './BrandLogo';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-2xl animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-[#141418] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D0F]">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs font-semibold tabular-nums text-stone-300">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Media Stage with Navigation Arrows */}
        <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[350px] max-h-[65vh] group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh] transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Left Arrow Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#DE9B35] text-white hover:text-black border border-white/15 transition-all cursor-pointer backdrop-blur-md opacity-80 hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#DE9B35] text-white hover:text-black border border-white/15 transition-all cursor-pointer backdrop-blur-md opacity-80 hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Foot Caption & Social Action */}
        <div className="p-6 bg-[#0D0D0F] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-xl">
            <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
            <p className="text-xs text-stone-300 leading-relaxed">{item.description}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CAFE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#DE9B35]" />
              <span>@thecannacafe815</span>
            </a>
            <a
              href={CAFE_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-[#DE9B35]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
