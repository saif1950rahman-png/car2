import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background cinematic photograph with dark luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_porsche_detailing_1793550719204.jpg"
          alt="Professionally detailed Porsche 911 GT3 with mirror-gloss finish"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Measured multi-stop dark scrim overlay for WCAG AA 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-[#080909]/75 to-[#080909]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080909]/85 via-transparent to-[#080909]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#080909]/40 to-[#080909]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
          <span>PREMIUM MOBILE CAR DETAILING | UK</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F3EE] mb-6 font-heading max-w-4xl [text-wrap:balance]">
          Your Car Deserves More Than Just a Wash.
        </h1>

        {/* Supporting paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#A6AAA5] max-w-2xl mx-auto mb-10 leading-relaxed font-normal [text-wrap:balance]">
          Professional mobile car detailing, delivered to your doorstep. From a fresh interior to a showroom-worthy finish, we bring expert car care straight to your home or workplace.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] rounded-lg transition-all duration-200 shadow-xl shadow-[#C9A66B]/20 hover:shadow-[#C9A66B]/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <span>Book Your Detail</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-[#F5F3EE] bg-[#171A19]/80 hover:bg-[#171A19] border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Explore Our Services
          </button>
        </div>

        {/* Trust Statement */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium tracking-wide text-[#F5F3EE]/80 uppercase mb-8">
          <span>Convenient</span>
          <span className="text-[#C9A66B]">·</span>
          <span>Professional</span>
          <span className="text-[#C9A66B]">·</span>
          <span>Detail-Driven</span>
        </div>

        {/* Regional Presence Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#A6AAA5]">
          <MapPin className="w-3.5 h-3.5 text-[#C9A66B]" />
          <span>Serving {BUSINESS_INFO.operatingRegion}</span>
        </div>

        {/* Subtle scroll indicator */}
        <a
          href="#trust-points"
          className="mt-12 text-[#A6AAA5] hover:text-[#C9A66B] transition-colors p-2 flex flex-col items-center gap-1 group"
          aria-label="Scroll down to value propositions"
        >
          <span className="text-[11px] tracking-widest uppercase opacity-70 group-hover:opacity-100">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C9A66B]" />
        </a>
      </div>
    </section>
  );
};
