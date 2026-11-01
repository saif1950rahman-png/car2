import React from 'react';
import { X, Shield } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'cookies' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: '1 November 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'Turbo Shine Detailing collects personal details provided directly when you submit a booking enquiry, including your name, telephone number, email address, vehicle details, and postcode.',
        },
        {
          heading: '2. Purpose of Processing',
          body: 'We process your information solely to provide accurate detailing quotes, arrange appointments at your designated location, communicate regarding your booking, and maintain vehicle care history.',
        },
        {
          heading: '3. Data Security & Retention',
          body: 'We respect UK GDPR regulations. Your data is never sold, leased, or distributed to third-party marketing companies. Personal records are retained only as long as necessary for administrative and tax compliance.',
        },
        {
          heading: '4. Your Rights',
          body: 'You retain the right to request access to, rectification of, or erasure of your personal data at any time by contacting enquiries@turboshinedetailing.co.uk.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      lastUpdated: '1 November 2026',
      sections: [
        {
          heading: '1. Mobile Appointments & Access',
          body: 'Appointments are conducted at customer-specified residential or commercial addresses across Greater Manchester and the North West. Safe working access, permission from the property owner, and vehicle clearance must be ensured.',
        },
        {
          heading: '2. Quotations & Pricing',
          body: 'All online rates are starting guide estimates. Final pricing is confirmed prior to commencing work following an on-site inspection of vehicle size, condition, paintwork state, and heavy contamination (such as pet hair or bio-hazards).',
        },
        {
          heading: '3. Weather & Rescheduling',
          body: 'Automotive detailing requires safe working conditions. In the event of severe weather (e.g. torrential rain, sub-zero freezing temperatures or high gale winds), we reserve the right to reschedule without cancellation penalties.',
        },
        {
          heading: '4. Paint Enhancement Disclaimer',
          body: 'Paint enhancement is designed to improve gloss and reduce light micro-marring. We do not guarantee complete scratch removal or full paint correction where clearcoat thickness is insufficient.',
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: '1 November 2026',
      sections: [
        {
          heading: '1. Essential Cookies Only',
          body: 'Our website uses essential session storage and local preferences necessary to remember your chosen vehicle category and ensure smooth navigation without invasive tracking.',
        },
        {
          heading: '2. No Invasive Ad Tracking',
          body: 'We do not employ third-party advertising cookies, cross-site trackers, or data broker beacons.',
        },
      ],
    },
  };

  const activeContent = contentMap[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#171A19] rounded-2xl border border-white/20 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#080909] border border-white/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#C9A66B]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F5F3EE] font-heading">
                {activeContent.title}
              </h3>
              <span className="text-[11px] text-[#A6AAA5]">
                UK Statutory Notice · Last updated: {activeContent.lastUpdated}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#080909] text-[#A6AAA5] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-[#A6AAA5] leading-relaxed">
          {activeContent.sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold text-[#F5F3EE] mb-2 font-heading">
                {section.heading}
              </h4>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#C9A66B] text-[#080909] hover:bg-[#D8B77D] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
