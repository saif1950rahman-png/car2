import React from 'react';
import { Star, Shield, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080909] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
          <span>CLIENT REVIEWS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
          Good Service Speaks for Itself.
        </h2>
        <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed max-w-xl mx-auto mb-12">
          We pride ourselves on honest craftsmanship, transparent communication, and genuine pride in our work.
        </p>

        {/* Tasteful Verified Review Placeholder */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#171A19] border border-white/10 relative overflow-hidden text-center">
          <div className="w-12 h-12 rounded-full bg-[#111313] border border-white/10 mx-auto flex items-center justify-center mb-6">
            <Shield className="w-5 h-5 text-[#C9A66B]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3EE] mb-3 font-heading">
            Customer feedback coming soon.
          </h3>

          <p className="text-sm text-[#A6AAA5] max-w-md mx-auto leading-relaxed mb-6">
            We are actively collecting authentic client reviews from our recent appointments across Greater Manchester and the North West. Real testimonials and verified Google ratings will be displayed here shortly.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-[#C9A66B] font-medium py-1 px-3 rounded-full bg-[#C9A66B]/10 border border-[#C9A66B]/20">
            <span>Verified Customer Reviews Pending</span>
          </div>
        </div>
      </div>
    </section>
  );
};
