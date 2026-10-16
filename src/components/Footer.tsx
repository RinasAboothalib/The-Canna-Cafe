import React from 'react';
import { Instagram, Facebook, MapPin, Phone, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { PageId } from './Navbar';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] text-stone-400 border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Bio with first image logo */}
          <div className="md:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('home');
                scrollToTop();
              }}
              className="text-left cursor-pointer inline-block"
              aria-label="The Canna Cafe - Back to home"
            >
              <BrandLogo size="lg" />
            </button>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed mt-4">
              Illinois’ premier hybrid cafe, craft bar, and social gathering space. Featuring pressed Cuban Sammys, fresh veggie sushi rolls, cold regional craft draft beers, and The Hemp Center dispensary boutique in Rockford.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DE9B35] text-stone-300 hover:text-[#0D0D0F] flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DE9B35] text-stone-300 hover:text-[#0D0D0F] flex items-center justify-center transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#DE9B35]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('menu')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Handcrafted Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About The Cafe
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Visual Archive
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('visit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Visit & Operating Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#DE9B35]">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DE9B35] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-semibold">The Canna Cafe 815</span>
                  <span className="text-stone-400">Inside The Hemp Center</span>
                  <span className="text-stone-400 block">6830 Spring Creek Rd, Rockford, IL 61114</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#DE9B35] shrink-0" />
                <a href={`tel:${CAFE_INFO.phoneClean}`} className="text-stone-200 hover:text-[#DE9B35] transition-colors">
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-stone-500">
                <span>Tue: 11am–6pm · Wed–Fri: 11am–7pm · Sat–Sun: 11am–4pm · Mon: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            All wellness items adhere strictly to Illinois state regulations and the 2018 Farm Bill containing &lt;0.3% Delta-9 THC. Must be 21+ for craft alcoholic draft beers and wine. Kitchen food and sandwich items are completely uninfused.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span>© {new Date().getFullYear()} The Canna Cafe. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
