import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Car,
  CheckCircle2,
  Send,
  MessageCircle,
  Copy,
  ExternalLink,
  Info,
  X,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, PRICING_TIERS } from '../data/detailingData';
import { BookingFormData, ServiceType, VehicleSize } from '../types';

interface BookingSectionProps {
  preselectedService?: ServiceType;
  preselectedSize?: VehicleSize;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  preselectedSize,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleReg: '',
    vehicleSize: preselectedSize || 'Medium',
    serviceRequired: preselectedService || 'Full Valet',
    postcode: '',
    preferredDate: '',
    preferredTime: 'Morning (08:30 – 12:30)',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [generatedRef, setGeneratedRef] = useState('');
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedSize) {
      setFormData((prev) => ({ ...prev, vehicleSize: preselectedSize }));
    }
  }, [preselectedSize]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid UK email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a UK telephone or mobile number';
    } else if (!/^((\+44)|(0)) ?7\d{3} ?\d{6}$|^0[1-9]\d{8,9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid UK phone number (e.g. 07700 900888)';
    }

    if (!formData.vehicleMake.trim()) {
      newErrors.vehicleMake = 'Please enter your vehicle make (e.g. Porsche, BMW)';
    }

    if (!formData.vehicleModel.trim()) {
      newErrors.vehicleModel = 'Please enter your vehicle model (e.g. 911, M3, X5)';
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Please enter your UK postcode';
    } else if (
      !/^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i.test(formData.postcode.trim())
    ) {
      newErrors.postcode = 'Please enter a valid UK postcode (e.g. M1 1AE, SK9 2AB)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const ref = `TSD-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedRef(ref);

    // Format mailto payload
    const subject = encodeURIComponent(
      `Detailing Enquiry: ${formData.vehicleMake} ${formData.vehicleModel} [Ref: ${ref}]`
    );

    const bodyContent = `Dear Turbo Shine Detailing,

I would like to request a tailored quote for mobile detailing.

--- CUSTOMER & VEHICLE DETAILS ---
Enquiry Ref: ${ref}
Full Name: ${formData.fullName}
Email: ${formData.email}
UK Telephone: ${formData.phone}
Location Postcode: ${formData.postcode.toUpperCase()}

Vehicle: ${formData.vehicleMake} ${formData.vehicleModel}
Number Plate (Reg): ${formData.vehicleReg ? formData.vehicleReg.toUpperCase() : 'Not provided'}
Vehicle Category: ${formData.vehicleSize}
Requested Service: ${formData.serviceRequired}

--- PREFERRED APPOINTMENT ---
Preferred Date: ${formData.preferredDate || 'Flexible / As soon as available'}
Preferred Time: ${formData.preferredTime}

Additional Information & Access Notes:
${formData.additionalInfo || 'None specified. Driveway/parking space available.'}

Looking forward to your quotation and confirmation.

Best regards,
${formData.fullName}`;

    const mailtoUrl = `mailto:${BUSINESS_INFO.emailPlaceholder}?subject=${subject}&body=${encodeURIComponent(
      bodyContent
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      // Trigger user's mail client as selected in Phase 1 clarification
      window.location.href = mailtoUrl;
    }, 600);
  };

  const copyReceiptDetails = () => {
    const textToCopy = `Turbo Shine Detailing Enquiry\nRef: ${generatedRef}\nName: ${formData.fullName}\nVehicle: ${formData.vehicleMake} ${formData.vehicleModel} (${formData.vehicleSize})\nService: ${formData.serviceRequired}\nPostcode: ${formData.postcode.toUpperCase()}\nDate: ${formData.preferredDate || 'Flexible'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080909] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
                <span>ENQUIRE TODAY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
                Ready to Give Your Car Some Attention?
              </h2>
              <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed mb-10 [text-wrap:balance]">
                Tell us what you drive and what you'd like done. We'll get back to you with a personalised quote and appointment availability.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#171A19] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A66B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A6AAA5] block font-medium">
                      Operating Coverage Area
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#F5F3EE]">
                      {BUSINESS_INFO.operatingRegion}
                    </span>
                    <p className="text-xs text-[#A6AAA5] mt-1">
                      Manchester, Salford, Altrincham, Wilmslow, Knutsford, Stockport & Cheshire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#171A19] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A66B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A6AAA5] block font-medium">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phonePlaceholder}`}
                      className="text-sm sm:text-base font-semibold text-[#F5F3EE] hover:text-[#C9A66B] transition-colors"
                    >
                      {BUSINESS_INFO.phonePlaceholder}
                    </a>
                    <span className="text-xs text-[#A6AAA5] block mt-0.5">
                      Mon – Sat: 08:00 – 18:00
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#171A19] border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A66B]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A6AAA5] block font-medium">
                      Booking Enquiries
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.emailPlaceholder}`}
                      className="text-sm sm:text-base font-semibold text-[#F5F3EE] hover:text-[#C9A66B] transition-colors"
                    >
                      {BUSINESS_INFO.emailPlaceholder}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Quick Enquire Button */}
            <div className="p-6 rounded-2xl bg-[#171A19] border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-sm font-semibold text-[#F5F3EE] font-heading">
                  Prefer a fast message on WhatsApp?
                </span>
              </div>
              <p className="text-xs text-[#A6AAA5] mb-4 leading-relaxed">
                Send vehicle photos or your postcode directly to our detailer for a swift response.
              </p>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors"
              >
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Full Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#171A19] rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Section 1: Customer Contact Details */}
                <div className="border-b border-white/10 pb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C9A66B] mb-4">
                    1. Your Details
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Full Name <span className="text-[#C9A66B]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. James Harrison"
                        className={`w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border ${
                          errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#C9A66B]'
                        } focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Email Address <span className="text-[#C9A66B]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. james@example.co.uk"
                        className={`w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#C9A66B]'
                        } focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        UK Mobile Number <span className="text-[#C9A66B]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 07700 900888"
                        className={`w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border ${
                          errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#C9A66B]'
                        } focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Location Postcode <span className="text-[#C9A66B]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.postcode}
                        onChange={(e) =>
                          setFormData({ ...formData, postcode: e.target.value.toUpperCase() })
                        }
                        placeholder="e.g. M1 1AE, SK9 2AB"
                        className={`w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border uppercase ${
                          errors.postcode ? 'border-red-500' : 'border-white/15 focus:border-[#C9A66B]'
                        } focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40 font-mono`}
                      />
                      {errors.postcode && (
                        <p className="text-xs text-red-400 mt-1">{errors.postcode}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Vehicle Details */}
                <div className="border-b border-white/10 pb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C9A66B] mb-4">
                    2. Vehicle Specification
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Vehicle Make <span className="text-[#C9A66B]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleMake}
                        onChange={(e) =>
                          setFormData({ ...formData, vehicleMake: e.target.value })
                        }
                        placeholder="e.g. Porsche, BMW, Audi"
                        className={`w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border ${
                          errors.vehicleMake ? 'border-red-500' : 'border-white/15 focus:border-[#C9A66B]'
                        } focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40`}
                      />
                      {errors.vehicleMake && (
                        <p className="text-xs text-red-400 mt-1">{errors.vehicleMake}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Vehicle Model <span className="text-[#C9A66B]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleModel}
                        onChange={(e) =>
                          setFormData({ ...formData, vehicleModel: e.target.value })
                        }
                        placeholder="e.g. 911, M3, Taycan"
                        className={`w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border ${
                          errors.vehicleModel ? 'border-red-500' : 'border-white/15 focus:border-[#C9A66B]'
                        } focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40`}
                      />
                      {errors.vehicleModel && (
                        <p className="text-xs text-red-400 mt-1">{errors.vehicleModel}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Number Plate <span className="text-[#A6AAA5] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleReg}
                        onChange={(e) =>
                          setFormData({ ...formData, vehicleReg: e.target.value.toUpperCase() })
                        }
                        placeholder="e.g. AB24 CDE"
                        className="w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border border-white/15 focus:border-[#C9A66B] focus:outline-none transition-colors uppercase font-mono tracking-widest placeholder:text-[#A6AAA5]/40"
                      />
                    </div>
                  </div>

                  {/* Vehicle Size Selection */}
                  <div>
                    <label className="block text-xs font-medium text-[#F5F3EE] mb-2">
                      Vehicle Size Category <span className="text-[#C9A66B]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Small', 'Medium', 'Large', 'SUV / 4x4'] as VehicleSize[]).map(
                        (size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setFormData({ ...formData, vehicleSize: size })}
                            className={`py-2.5 px-3 text-xs font-medium rounded-lg border transition-all ${
                              formData.vehicleSize === size
                                ? 'bg-[#C9A66B] text-[#080909] border-[#C9A66B] font-semibold'
                                : 'bg-[#080909] text-[#A6AAA5] border-white/10 hover:border-white/20'
                            }`}
                          >
                            {size}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 3: Service Selection */}
                <div className="border-b border-white/10 pb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C9A66B] mb-4">
                    3. Service Required
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(
                      [
                        'Exterior Detail',
                        'Interior Detail',
                        'Full Valet',
                        'Paint Enhancement',
                        'Not Sure — Need Advice',
                      ] as ServiceType[]
                    ).map((serviceName) => (
                      <button
                        key={serviceName}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, serviceRequired: serviceName })
                        }
                        className={`p-3 text-xs text-left rounded-lg border transition-all flex items-center justify-between ${
                          formData.serviceRequired === serviceName
                            ? 'bg-[#080909] border-[#C9A66B] text-[#F5F3EE] font-semibold'
                            : 'bg-[#080909] border-white/10 text-[#A6AAA5] hover:border-white/25'
                        }`}
                      >
                        <span>{serviceName}</span>
                        {formData.serviceRequired === serviceName && (
                          <CheckCircle2 className="w-4 h-4 text-[#C9A66B] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 4: Preferred Appointment Timing */}
                <div className="border-b border-white/10 pb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C9A66B] mb-4">
                    4. Preferred Appointment
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Preferred Date <span className="text-[#A6AAA5] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border border-white/15 focus:border-[#C9A66B] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                        Preferred Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border border-white/15 focus:border-[#C9A66B] focus:outline-none transition-colors"
                      >
                        <option value="Morning (08:30 – 12:30)">Morning (08:30 – 12:30)</option>
                        <option value="Afternoon (13:00 – 17:00)">Afternoon (13:00 – 17:00)</option>
                        <option value="Weekend Appointment">Weekend Appointment (subject to schedule)</option>
                        <option value="Flexible / First Available">Flexible / First Available</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F5F3EE] mb-1.5">
                      Additional Information / Access Notes <span className="text-[#A6AAA5] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        setFormData({ ...formData, additionalInfo: e.target.value })
                      }
                      placeholder="e.g. Driveway access available, water hose connection present, specific pet hair removal or minor paint blemishes..."
                      className="w-full px-4 py-3 bg-[#080909] text-sm text-[#F5F3EE] rounded-lg border border-white/15 focus:border-[#C9A66B] focus:outline-none transition-colors placeholder:text-[#A6AAA5]/40"
                    />
                  </div>
                </div>

                {/* Submission CTA */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-sm sm:text-base font-bold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] disabled:opacity-50 rounded-lg transition-all duration-200 shadow-xl shadow-[#C9A66B]/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Preparing Your Quotation...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request My Quote</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-[#A6AAA5] mt-3">
                    No obligation. We’ll review your enquiry and confirm pricing and availability.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Booking Receipt Modal */}
      {submissionSuccess && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative max-w-lg w-full bg-[#171A19] rounded-2xl border border-white/20 p-8 shadow-2xl animate-fade-in">
            <button
              onClick={() => setSubmissionSuccess(false)}
              className="absolute top-4 right-4 text-[#A6AAA5] hover:text-white transition-colors"
              aria-label="Close Confirmation Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#C9A66B]/15 border border-[#C9A66B]/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-[#C9A66B]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A66B] block mb-1">
                Booking Enquiry Drafted
              </span>
              <h3 className="text-2xl font-bold text-[#F5F3EE] font-heading">
                Thank You, {formData.fullName.split(' ')[0]}
              </h3>
              <p className="text-xs text-[#A6AAA5] mt-2">
                Reference Code:{' '}
                <span className="font-mono text-[#F5F3EE] font-bold">{generatedRef}</span>
              </p>
            </div>

            <div className="bg-[#080909] rounded-xl p-4 border border-white/10 mb-6 text-xs space-y-2 text-[#A6AAA5]">
              <div className="flex justify-between">
                <span>Vehicle:</span>
                <span className="text-[#F5F3EE] font-medium">
                  {formData.vehicleMake} {formData.vehicleModel} ({formData.vehicleSize})
                </span>
              </div>
              <div className="flex justify-between">
                <span>Requested Package:</span>
                <span className="text-[#F5F3EE] font-medium">{formData.serviceRequired}</span>
              </div>
              <div className="flex justify-between">
                <span>Postcode:</span>
                <span className="text-[#F5F3EE] font-medium">{formData.postcode}</span>
              </div>
              <div className="flex justify-between">
                <span>Preferred Window:</span>
                <span className="text-[#F5F3EE] font-medium">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#A6AAA5] mb-6 leading-relaxed">
              <Info className="w-4 h-4 text-[#C9A66B] inline mr-1.5 -mt-0.5" />
              Your email client has been prepared with your vehicle specifications. If your email application did not open automatically, you can copy your booking receipt below or send us a WhatsApp directly.
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyReceiptDetails}
                className="flex-1 py-3 px-4 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-[#F5F3EE] transition-colors flex items-center justify-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>{copiedReceipt ? 'Copied to Clipboard' : 'Copy Enquiry Details'}</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-xs font-semibold rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-[#080909] transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Fast-track via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
