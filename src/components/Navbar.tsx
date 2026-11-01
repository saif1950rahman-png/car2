import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Our Process', href: '#process' },
    { label: 'Before & After', href: '#transformations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080909]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-lg sm:text-xl font-bold tracking-tight text-[#F5F3EE] hover:text-[#C9A66B] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 font-heading"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A66B] inline-block" />
              <span>TURBO SHINE DETAILING</span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A6AAA5]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#F5F3EE] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A66B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Gold CTA Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <button
                onClick={onBookClick}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] rounded-lg transition-all duration-200 shadow-lg shadow-[#C9A66B]/15 hover:shadow-[#C9A66B]/25 active:scale-[0.98] whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Book Your Detail</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F5F3EE] hover:text-[#C9A66B] focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down / Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080909]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-wider text-[#A6AAA5] border-b border-white/10 pb-3">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-heading font-medium text-[#F5F3EE] hover:text-[#C9A66B] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="text-xs text-[#A6AAA5]">
              Mobile Detailing across {BUSINESS_INFO.operatingRegion}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 text-center font-semibold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Your Detail</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phonePlaceholder}`}
              className="w-full py-3 text-center text-sm font-medium text-[#F5F3EE] border border-white/10 rounded-lg hover:border-[#C9A66B]/50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C9A66B]" />
              <span>Call: {BUSINESS_INFO.phonePlaceholder}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
