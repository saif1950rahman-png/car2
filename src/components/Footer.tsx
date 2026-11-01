import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/detailingData';
import { LegalModalType } from './LegalModal';
import { ServiceType } from '../types';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onSelectService: (service: ServiceType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="bg-[#080909] border-t border-white/10 text-xs text-[#A6AAA5] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A66B]" />
              <span className="text-lg font-bold tracking-tight text-[#F5F3EE] font-heading">
                TURBO SHINE DETAILING
              </span>
            </div>
            <p className="text-sm text-[#F5F3EE]/80 italic mb-6">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-xs text-[#A6AAA5] leading-relaxed mb-6 max-w-sm">
              Mobile automotive detailing delivered directly to homes and workplaces throughout {BUSINESS_INFO.operatingRegion}.
            </p>
            <div className="flex items-center gap-4 text-[#F5F3EE]">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#171A19] border border-white/10 flex items-center justify-center hover:text-[#C9A66B] hover:border-[#C9A66B]/50 transition-colors"
                aria-label="Turbo Shine Detailing Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#171A19] border border-white/10 flex items-center justify-center hover:text-[#C9A66B] hover:border-[#C9A66B]/50 transition-colors"
                aria-label="Turbo Shine Detailing Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F3EE] block mb-4 font-heading">
              Quick Links
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A66B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F3EE] block mb-4 font-heading">
              Our Services
            </span>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onSelectService(s.title as ServiceType);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-[#C9A66B] transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F3EE] block mb-4 font-heading">
              Direct Contact
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.operatingRegion}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phonePlaceholder}`}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  {BUSINESS_INFO.phonePlaceholder}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A66B] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.emailPlaceholder}`}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  {BUSINESS_INFO.emailPlaceholder}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Turbo Shine Detailing. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#F5F3EE] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#F5F3EE] transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-[#F5F3EE] transition-colors"
            >
              Cookie Policy
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#171A19] border border-white/10 flex items-center justify-center hover:text-[#C9A66B] hover:border-[#C9A66B]/50 transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
