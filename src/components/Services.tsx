import React from 'react';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { SERVICES } from '../data/detailingData';
import { ServiceType } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: ServiceType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#111313] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
            Professional Care for Every Part of Your Car.
          </h2>
          <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed">
            Choose the level of care your vehicle needs. Every service is designed to leave your car looking fresher, cleaner and better cared for.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const serviceIndex = `0${index + 1}`;
            return (
              <div
                key={service.id}
                className="group relative bg-[#171A19] rounded-2xl border border-white/10 hover:border-[#C9A66B]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#C9A66B] tracking-widest font-heading">
                        SERVICE {serviceIndex}
                      </span>
                      {service.badge && (
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C9A66B] px-2.5 py-0.5 rounded-full bg-[#C9A66B]/10 border border-[#C9A66B]/30">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#A6AAA5]">
                      <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span>{service.typicalDuration}</span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3EE] mb-4 font-heading group-hover:text-[#C9A66B] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#A6AAA5] leading-relaxed mb-8">
                    {service.shortDesc}
                  </p>

                  {/* What's Included */}
                  <div className="mb-8">
                    <div className="text-xs font-semibold tracking-wider uppercase text-[#F5F3EE] mb-4">
                      What’s Included:
                    </div>
                    <ul className="space-y-3">
                      {service.inclusions.map((inclusion) => (
                        <li key={inclusion} className="flex items-start gap-3 text-sm text-[#A6AAA5]">
                          <span className="w-4 h-4 rounded-full bg-[#C9A66B]/15 border border-[#C9A66B]/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#C9A66B]" />
                          </span>
                          <span className="leading-snug">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action & Price indication */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#A6AAA5] block uppercase tracking-wider">Starting rate</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#F5F3EE] font-heading tabular-nums">
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title as ServiceType)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5F3EE] group-hover:text-[#080909] bg-[#080909] group-hover:bg-[#C9A66B] border border-white/15 group-hover:border-transparent rounded-lg transition-all duration-200"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Safety Clarification Note */}
        <div className="mt-12 p-5 rounded-xl bg-[#171A19]/50 border border-white/10 text-xs sm:text-sm text-[#A6AAA5] flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-2.5 text-[#F5F3EE]">
            <Sparkles className="w-4 h-4 text-[#C9A66B] shrink-0" />
            <span>Water-safe and swirl-free wash practices used across all appointments.</span>
          </div>
          <p className="text-xs text-[#A6AAA5]">
            *Paint enhancement is designed to reduce light surface imperfections subject to individual paint inspection.
          </p>
        </div>
      </div>
    </section>
  );
};
