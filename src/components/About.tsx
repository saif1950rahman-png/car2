import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onDiscoverServices: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverServices }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Authentic Detailing Craftsmanship Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#171A19] group">
              <img
                src="/src/assets/images/about_artisan_detailer_1793550718657.jpg"
                alt="Automotive detailer inspecting deep gloss vehicle paintwork with a plush microfibre cloth"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Subtle caption marker */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#080909]/80 backdrop-blur-md border border-white/10 text-xs text-[#F5F3EE] flex items-center justify-between">
                <span className="font-medium">Handcrafted vehicle care</span>
                <span className="text-[#C9A66B] font-mono text-[11px]">Safe contact methods</span>
              </div>
            </div>

            {/* Subtle decorative geometric border line */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#C9A66B]/20 rounded-bl-2xl -z-10" />
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-4">
              <span>THE TURBO SHINE APPROACH</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-8 font-heading [text-wrap:balance]">
              More Than a Clean Car. A Better Standard of Care.
            </h2>

            {/* Body Copy */}
            <div className="space-y-5 text-base sm:text-lg text-[#A6AAA5] leading-relaxed mb-10">
              <p>
                At Turbo Shine Detailing, we believe looking after your car should be simple, convenient and worth every penny.
              </p>
              <p>
                That’s why we bring professional mobile detailing directly to you. Whether your vehicle needs a thorough interior refresh, a deep exterior clean or a complete transformation, our focus is on quality, care and the little details that make a difference.
              </p>
              <p className="text-[#F5F3EE] font-medium">
                No unnecessary journeys. No rushed finishes. Just dedicated car care, wherever you need us.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm text-[#F5F3EE]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span>Two-bucket swirl prevention</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span>pH-neutral wheel cleaning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span>Deep interior fabric & leather care</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <span>At your home or workplace</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onDiscoverServices}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] rounded-lg transition-all duration-200 shadow-md shadow-[#C9A66B]/10 active:scale-[0.99]"
              >
                <span>Discover Our Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
