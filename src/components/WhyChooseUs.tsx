import React from 'react';
import { MapPin, Sparkles, Sliders, MessageSquare } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/detailingData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <MapPin key="loc" className="w-5 h-5 text-[#C9A66B]" />,
    <Sparkles key="det" className="w-5 h-5 text-[#C9A66B]" />,
    <Sliders key="suit" className="w-5 h-5 text-[#C9A66B]" />,
    <MessageSquare key="comm" className="w-5 h-5 text-[#C9A66B]" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111313] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
            <span>THE TURBO SHINE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
            Professional Detailing. Made Convenient.
          </h2>
          <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed">
            Designed from the ground up for vehicle owners who appreciate exceptional care without taking time out of their busy schedules.
          </p>
        </div>

        {/* Elegant 2-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={feature.title}
              className="p-8 sm:p-10 rounded-2xl bg-[#171A19] border border-white/10 hover:border-[#C9A66B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#080909] border border-white/10 flex items-center justify-center mb-6">
                  {icons[idx]}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3EE] mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A6AAA5] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A6AAA5]">
                <span>Standard of Excellence</span>
                <span className="text-[#C9A66B] font-mono">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
