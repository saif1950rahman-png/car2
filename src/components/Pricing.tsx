import React, { useState } from 'react';
import { ArrowUpRight, Check, Info } from 'lucide-react';
import { PRICING_TIERS } from '../data/detailingData';
import { VehicleSize } from '../types';

interface PricingProps {
  onQuoteClick: (preselectedSize?: VehicleSize) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onQuoteClick }) => {
  const [selectedSize, setSelectedSize] = useState<VehicleSize>('Medium');

  const sizeKeys: VehicleSize[] = ['Small', 'Medium', 'Large', 'SUV / 4x4'];
  const currentTier = PRICING_TIERS[selectedSize];

  const packages = [
    {
      id: 'exterior-detail',
      name: 'Exterior Detail',
      price: currentTier.prices['exterior-detail'],
      items: [
        'Exterior safe wash & dry',
        'Wheels and tyres dressed',
        'Exterior glass cleaning',
        'Door shuts wiped down',
        'Final protective gloss wipe',
      ],
    },
    {
      id: 'interior-detail',
      name: 'Interior Detail',
      price: currentTier.prices['interior-detail'],
      items: [
        'Full interior vacuuming',
        'Dashboard, console & trim',
        'Carpets and footwell mats',
        'Interior glass cleaning',
        'Cabin deodorising refresh',
      ],
    },
    {
      id: 'full-valet',
      name: 'Full Valet',
      price: currentTier.prices['full-valet'],
      isHighlight: true,
      items: [
        'Complete interior vacuum & detail',
        'Comprehensive exterior safe wash',
        'Wheel decontamination & dress',
        'Glass, mirrors & door shuts',
        'Complete showroom presentation',
      ],
    },
    {
      id: 'paint-enhancement',
      name: 'Paint Enhancement',
      price: currentTier.prices['paint-enhancement'],
      items: [
        'Paintwork digital gauge inspection',
        'Full safe wash & decontamination',
        'Machine polishing assessment',
        'Light swirl reduction & gloss depth',
        'Durable protective sealant layer',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#080909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
            <span>STRAIGHTFORWARD PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
            Quality Car Care, Without the Guesswork.
          </h2>
          <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed [text-wrap:balance]">
            Every vehicle is different. Our starting prices give you a clear idea of what to expect, with a tailored quote based on your vehicle size and condition.
          </p>
        </div>

        {/* Vehicle Size Interactive Selector */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="text-xs text-center uppercase tracking-wider text-[#A6AAA5] mb-3 font-medium">
            Select Your Vehicle Category:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#171A19] rounded-xl border border-white/10">
            {sizeKeys.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                  selectedSize === size
                    ? 'bg-[#C9A66B] text-[#080909] shadow-md shadow-[#C9A66B]/20'
                    : 'text-[#A6AAA5] hover:text-[#F5F3EE] hover:bg-white/[0.04]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-[#A6AAA5] mt-3">
            Showing guide rates for <span className="text-[#F5F3EE] font-medium">{currentTier.label}</span> ({currentTier.examples})
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.isHighlight
                  ? 'bg-[#171A19] border-2 border-[#C9A66B] relative shadow-xl shadow-[#C9A66B]/10 -translate-y-1'
                  : 'bg-[#111313] border border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {pkg.isHighlight && (
                  <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#080909] bg-[#C9A66B] px-3 py-1 rounded-full mb-4">
                    Recommended
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#F5F3EE] mb-2 font-heading">
                  {pkg.name}
                </h3>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F5F3EE] font-heading tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#A6AAA5] font-normal">/ starting rate*</span>
                  </div>
                  <span className="text-[11px] text-[#A6AAA5] mt-1 block">
                    Illustrative guide for {selectedSize}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-[#A6AAA5]">
                      <Check className="w-3.5 h-3.5 text-[#C9A66B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onQuoteClick(selectedSize)}
                className={`w-full py-3 px-4 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
                  pkg.isHighlight
                    ? 'bg-[#C9A66B] hover:bg-[#D8B77D] text-[#080909] shadow-lg shadow-[#C9A66B]/20'
                    : 'bg-[#171A19] hover:bg-white/10 text-[#F5F3EE] border border-white/10'
                }`}
              >
                <span>Get Your Personalised Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency & Pricing Disclaimer */}
        <div className="max-w-3xl mx-auto p-5 rounded-xl bg-[#111313] border border-white/10 text-xs text-[#A6AAA5] leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
          <div>
            <span className="text-[#F5F3EE] font-semibold block mb-1">Pricing Transparency:</span>
            Final pricing depends on vehicle size, condition, service requirements and travel distance. All prices will be confirmed before your appointment. Starting prices shown are indicative guides awaiting vehicle confirmation.
          </div>
        </div>
      </div>
    </section>
  );
};
