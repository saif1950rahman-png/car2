import React from 'react';
import { PROCESS_STEPS } from '../data/detailingData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#080909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
            Getting Your Car Detailed Is Simple.
          </h2>
          <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed [text-wrap:balance]">
            From your initial enquiry to the final showroom presentation, we ensure a seamless and effortless experience.
          </p>
        </div>

        {/* 4-Step Horizontal Process (Desktop) / Vertical (Mobile) */}
        <div className="relative">
          {/* Subtle connecting line across desktop steps */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#171A19] rounded-2xl p-8 border border-white/10 hover:border-[#C9A66B]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-[#C9A66B] font-heading">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#080909] border border-white/10 text-xs text-[#A6AAA5] flex items-center justify-center font-mono">
                      0{parseInt(step.step, 10)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F3EE] mb-3 font-heading tracking-wide uppercase">
                    STEP {step.step} — {step.title}
                  </h3>

                  <p className="text-sm text-[#A6AAA5] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-[#A6AAA5] flex items-center justify-between">
                  <span>Seamless UK Service</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
