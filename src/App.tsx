/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { DuoSection } from './components/DuoSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { GallerySection } from './components/GallerySection';
import { VisitContactSection } from './components/VisitContactSection';
import { Footer } from './components/Footer';
import { PageWipe } from './components/PageWipe';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [wipeStatus, setWipeStatus] = useState<'idle' | 'entering' | 'exiting'>('idle');

  // Big Man & Co style branded page transition
  const handleNavigate = (targetPage: PageId) => {
    if (targetPage === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Trigger entering wipe curtain
    setWipeStatus('entering');

    setTimeout(() => {
      setCurrentPage(targetPage);
      window.scrollTo(0, 0);

      // Trigger exiting wipe curtain
      setWipeStatus('exiting');

      setTimeout(() => {
        setWipeStatus('idle');
      }, 550);
    }, 420);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#FAF8F5] selection:bg-[#DE9B35]/30 selection:text-[#DE9B35] flex flex-col relative overflow-x-hidden">
      {/* Big Man & Co Branded Amber Screen Wipe */}
      <PageWipe status={wipeStatus} />

      {/* Top Floating Glass Navigation with First Image Logo */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* Hero Section */}
            <Hero
              onExploreClick={() => handleNavigate('menu')}
              onContactClick={() => handleNavigate('visit')}
            />

            {/* Big Man & Co Style Dual Spotlight Cards */}
            <DuoSection onNavigate={handleNavigate} />

            {/* Autumn Feature Callout */}
            <section className="py-20 sm:py-28 bg-[#0D0D0F] relative border-t border-white/5">
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-stone-900 border border-white/10 shadow-2xl relative group">
                    <img
                      src="/src/assets/images/canna_botanical_pumpkin_1792125154762.jpg"
                      alt="Autumn evenings and botanical pumpkin at The Canna Cafe"
                      className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                      <span className="text-[11px] font-bold text-[#DE9B35] uppercase tracking-wider block">
                        Autumn At The Canna Cafe
                      </span>
                      <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
                        Cozy lounge seating, warm ambient candles, and seasonal specials inside The Hemp Center.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#DE9B35] block">
                      Rockford Gathering Spot
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF8F5] tracking-tight leading-tight">
                      Elevated Comfort & Community.
                    </h2>
                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                      Whether you’re stopping in for our famous pressed Cuban Sammy, enjoying craft beers with friends on Sunday Funday, or browsing verified botanicals at The Hemp Center, you’ll find a comfortable space crafted just for you.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => handleNavigate('about')}
                        className="px-6 py-3 rounded-full bg-[#DE9B35] hover:bg-[#F2B85B] text-[#0D0D0F] font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Our Full Story</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavigate('gallery')}
                        className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Browse Archive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4 Pillars Experience */}
            <AtmosphereSection onNavigate={handleNavigate} />

            {/* Quick Visit Overview */}
            <VisitContactSection isStandalonePage={false} />
          </div>
        )}

        {currentPage === 'menu' && (
          <div className="animate-in fade-in duration-300">
            <MenuSection isStandalonePage={true} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutSection isStandalonePage={true} />
          </div>
        )}

        {currentPage === 'gallery' && (
          <div className="animate-in fade-in duration-300">
            <GallerySection isStandalonePage={true} />
          </div>
        )}

        {currentPage === 'visit' && (
          <div className="animate-in fade-in duration-300">
            <VisitContactSection isStandalonePage={true} />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
