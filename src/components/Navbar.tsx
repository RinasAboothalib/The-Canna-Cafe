import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type PageId = 'home' | 'menu' | 'about' | 'gallery' | 'visit';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visit', label: 'Visit Us' },
  ];

  const handleLinkClick = (id: PageId) => {
    setMobileMenuOpen(false);
    if (currentPage !== id) {
      onNavigate(id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0D0F]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: First image logo replacing website name */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center select-none shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE9B35] rounded-lg cursor-pointer"
            aria-label="The Canna Cafe - Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-stone-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 cursor-pointer whitespace-nowrap shrink-0 transition-colors duration-150 uppercase text-xs tracking-[0.16em] ${
                    isActive
                      ? 'text-[#DE9B35] font-bold'
                      : 'hover:text-[#FAF8F5]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#DE9B35] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('visit')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D0D0F] bg-[#DE9B35] hover:bg-[#F2B85B] rounded-full transition-all duration-200 whitespace-nowrap shrink-0 shadow-md flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE9B35]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0F]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base font-semibold uppercase tracking-wider py-2 border-b border-white/5 transition-colors cursor-pointer ${
                  currentPage === link.id ? 'text-[#DE9B35]' : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleLinkClick('visit')}
                className="w-full text-center block py-3 text-xs font-bold uppercase tracking-wider text-[#0D0D0F] bg-[#DE9B35] hover:bg-[#F2B85B] rounded-full shadow-md cursor-pointer"
              >
                Plan Your Visit · Rockford, IL
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
