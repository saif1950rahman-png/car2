import React, { useState } from 'react';
import { Maximize2, X, ChevronRight, Check } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/detailingData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'exterior', label: 'Exterior Care' },
    { id: 'interior', label: 'Cabin & Leather' },
    { id: 'wheels', label: 'Wheels & Arches' },
    { id: 'enhancement', label: 'Paint Enhancement' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#111313] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
              <span>WORK PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-4 font-heading [text-wrap:balance]">
              See the Difference Attention to Detail Makes.
            </h2>
            <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed max-w-2xl">
              Explore the care and transformation that goes into every vehicle.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#171A19] rounded-xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#C9A66B] text-[#080909] font-semibold shadow-sm'
                    : 'text-[#A6AAA5] hover:text-[#F5F3EE] hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#171A19] border border-white/10 hover:border-[#C9A66B]/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#080909]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Lightbox trigger pill */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#080909]/80 backdrop-blur-md border border-white/20 text-[#F5F3EE] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4 text-[#C9A66B]" />
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#080909]/80 backdrop-blur-md border border-white/10 text-[#C9A66B]">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F3EE] mb-2 font-heading group-hover:text-[#C9A66B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6AAA5] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#C9A66B] font-medium">
                  <span>View Details & Finish</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171A19] rounded-2xl border border-white/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#080909]/80 hover:bg-[#080909] text-white border border-white/20 flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
              {/* Image side */}
              <div className="md:col-span-7 bg-[#080909] relative flex items-center justify-center min-h-[300px]">
                <img
                  src={activeLightboxItem.imageUrl}
                  alt={activeLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[550px]"
                />
              </div>

              {/* Information side */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A66B] mb-2">
                    {activeLightboxItem.category} Specimen
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3EE] mb-4 font-heading">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-sm text-[#A6AAA5] leading-relaxed mb-6">
                    {activeLightboxItem.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F3EE]">
                      Detailing Notes:
                    </div>
                    {activeLightboxItem.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A6AAA5]">
                        <Check className="w-3.5 h-3.5 text-[#C9A66B] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs text-[#A6AAA5]">
                  Authentic vehicle detailing photography. Results subject to vehicle paintwork & clearcoat condition.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
