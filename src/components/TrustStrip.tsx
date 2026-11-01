import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/detailingData';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-points" className="relative z-10 border-y border-white/10 bg-[#111313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {VALUE_PROPOSITIONS.map((item, idx) => (
            <div
              key={item.number}
              className={`pt-6 sm:pt-0 ${idx !== 0 ? 'lg:pl-6' : ''} flex flex-col justify-start`}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-[#C9A66B] font-heading">
                  {item.number}
                </span>
                <span className="text-xs text-[#A6AAA5] font-light">—</span>
                <h2 className="text-sm font-semibold tracking-wider text-[#F5F3EE] uppercase font-heading">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm text-[#A6AAA5] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
