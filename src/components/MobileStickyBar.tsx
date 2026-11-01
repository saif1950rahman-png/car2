import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MobileStickyBarProps {
  onQuoteClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onQuoteClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contact');
      if (!contactEl) return;

      const contactRect = contactEl.getBoundingClientRect();
      const isPastHero = scrollY > 400;
      // Hide if the contact form is already in the viewport
      const isNearForm = contactRect.top < window.innerHeight && contactRect.bottom > 0;

      setIsVisible(isPastHero && !isNearForm);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#080909]/95 backdrop-blur-md border-t border-white/10 lg:hidden shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="text-left">
          <span className="text-xs font-bold text-[#F5F3EE] block font-heading">
            Turbo Shine Detailing
          </span>
          <span className="text-[11px] text-[#A6AAA5]">
            Mobile car care to your door
          </span>
        </div>

        <button
          onClick={onQuoteClick}
          className="px-5 py-2.5 text-xs font-bold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-[#C9A66B]/20 whitespace-nowrap"
        >
          <span>Get a Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
