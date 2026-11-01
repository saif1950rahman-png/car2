import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/detailingData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-[#111313] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
            A Few Things You Might Be Wondering.
          </h2>
          <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed [text-wrap:balance]">
            Everything you need to know about our mobile detailing appointments, power and water arrangements, and booking process.
          </p>
        </div>

        {/* Elegant Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#171A19] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A66B]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F5F3EE] font-heading pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[#080909] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C9A66B]' : 'text-[#A6AAA5]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#A6AAA5] leading-relaxed border-t border-white/[0.06] animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supplementary prompt support */}
        <div className="mt-12 text-center text-xs text-[#A6AAA5]">
          Have a question not listed here?{' '}
          <a
            href="#contact"
            className="text-[#C9A66B] hover:underline font-medium"
          >
            Drop us an enquiry below
          </a>{' '}
          or message us directly on WhatsApp.
        </div>
      </div>
    </section>
  );
};
