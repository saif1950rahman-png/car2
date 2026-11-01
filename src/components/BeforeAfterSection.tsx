import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  processPoints: string[];
  vehicleNote: string;
}

export const BeforeAfterSection: React.FC<{ onEnquire: () => void }> = ({ onEnquire }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const items: BeforeAfterItem[] = [
    {
      id: 'paintwork',
      category: 'Paint Enhancement',
      title: 'Metallic Black Bonnet 50/50 Swirl Reduction',
      subtitle: 'Inspection LED spotlight reveals true defect removal vs untreated clearcoat',
      imageSrc: '/src/assets/images/before_after_paint_5050_1793562139685.jpg',
      beforeLabel: 'BEFORE: Swirl Marks & Oxidation',
      afterLabel: 'AFTER: Machine Polished Mirror Gloss',
      description:
        'A single-stage machine polish assessment on heavy spider-web swirls caused by automated car washes and improper contact washing. Note the masked centre tape line: the left side remains scratched and hazy, while the right side achieves razor-sharp reflection, rich obsidian depth, and swirl-free clarity.',
      processPoints: [
        'Safe multi-stage decontamination wash & clay bar treatment',
        'Digital electronic paint gauge depth readings taken across panels',
        'Medium-cut diminishing abrasive compound with dual-action polisher',
        'Hydrophobic ceramic barrier applied for durable exterior protection',
      ],
      vehicleNote: 'Demonstrated on Mercedes-Benz C-Class metallic obsidian black clearcoat.',
    },
    {
      id: 'leather',
      category: 'Interior Valet',
      title: 'Executive Cabin Perforated Leather Deep Clean',
      subtitle: 'Restoring the natural matte factory finish from body oils and ingrained grime',
      imageSrc: '/src/assets/images/before_after_leather_seat_1793562141325.jpg',
      beforeLabel: 'BEFORE: Greasy, Shiny Soiled Leather',
      afterLabel: 'AFTER: OEM Matte Restored Finish',
      description:
        'Many drivers mistake shiny leather for clean leather. In reality, shine is caused by skin oils, dirt, and friction. Our pH-balanced leather foam and gentle horsehair brushes extract ingrained grime from the grain and pores, returning the leather to its velvety, non-greasy matte factory state.',
      processPoints: [
        'Gentle foaming pH-neutral leather cleanser worked into micro-perforations',
        'Delicate horsehair detailing brush agitation without abrasive friction',
        'Warm microfibre extraction to remove lifted dirt and body oils',
        'Breathable UV conditioner applied to maintain suppleness and prevent cracking',
      ],
      vehicleNote: 'Demonstrated on executive sports saloon Nappa perforated leather.',
    },
    {
      id: 'wheels',
      category: 'Wheels & Arches',
      title: 'Multi-Spoke Alloy & Caliper Decontamination',
      subtitle: 'Removing burnt-on corrosive brake dust, iron fallout, and road film',
      imageSrc: '/src/assets/images/before_after_alloy_wheel_1793562142298.jpg',
      beforeLabel: 'BEFORE: Baked Brake Dust & Road Film',
      afterLabel: 'AFTER: Deep Decontaminated & Satin Dressed',
      description:
        'Standard roadside washes leave hot corrosive brake dust etched into wheel finishes. Our non-acidic iron-dissolving treatment liquefies ferrous fallout across both the outer face and inner wheel barrel, accompanied by caliper detailing and a sling-free satin tyre dressing.',
      processPoints: [
        'Acid-free wheel cleaner safe on lacquer and bare metal finishes',
        'Chemical iron fallout remover dissolving metallic dust into purple run-off',
        'Wheel barrel and brake caliper deep agitation with ultra-soft woolies',
        'Dry-touch satin tyre conditioner preventing rubber browning without sling',
      ],
      vehicleNote: 'Demonstrated on forged multi-spoke alloy wheels with painted calipers.',
    },
  ];

  const currentItem = items[activeTab];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPosition(percentage);
  };

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-[#080909] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A66B] mb-3">
            <span>AUTHENTIC TRANSFORMATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-heading [text-wrap:balance]">
            Genuine 50/50 Detailing Demonstrations.
          </h2>
          <p className="text-base sm:text-lg text-[#A6AAA5] leading-relaxed [text-wrap:balance]">
            See the undeniable contrast when surfaces are professionally cared for. We tape off true 50/50 test sections on the very same vehicle to show genuine before-and-after results without camera tricks.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2.5 mb-10 p-1.5 bg-[#171A19] rounded-xl border border-white/10 w-fit">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-[#C9A66B] text-[#080909] shadow-md shadow-[#C9A66B]/20'
                  : 'text-[#A6AAA5] hover:text-[#F5F3EE] hover:bg-white/[0.04]'
              }`}
            >
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Main Transformation Showcase Card */}
        <div className="bg-[#171A19] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Interactive Image Split View Container */}
            <div className="lg:col-span-7 bg-[#080909] relative flex flex-col justify-center select-none overflow-hidden group">
              <div
                className="relative aspect-[16/9] w-full overflow-hidden cursor-ew-resize"
                onMouseMove={(e) => {
                  if (isDragging || e.buttons === 1) handleSliderMove(e);
                }}
                onTouchMove={handleSliderMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onClick={handleSliderMove}
              >
                {/* Full 50/50 Image */}
                <img
                  src={currentItem.imageSrc}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Left Side Label (Before) */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg bg-black/85 text-red-300 border border-red-500/30 backdrop-blur-md shadow-lg">
                    {currentItem.beforeLabel}
                  </span>
                </div>

                {/* Right Side Label (After) */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg bg-black/85 text-[#C9A66B] border border-[#C9A66B]/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
                    <span>{currentItem.afterLabel}</span>
                  </span>
                </div>

                {/* Interactive Slider Line Overlay */}
                <div
                  className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center transition-all duration-75"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-[2px] h-full bg-[#C9A66B] shadow-[0_0_10px_rgba(201,166,107,0.8)]" />
                  <div className="absolute w-8 h-8 rounded-full bg-[#C9A66B] text-[#080909] flex items-center justify-center shadow-2xl border-2 border-[#080909]">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom hint overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-[#A6AAA5]">
                  Drag or click across image to compare 50/50 boundary
                </div>
              </div>
            </div>

            {/* Editorial Information Panel */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#C9A66B] tracking-widest font-heading uppercase">
                    {currentItem.category} Study
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3EE] mb-2 font-heading">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-[#C9A66B] mb-5 font-medium">
                  {currentItem.subtitle}
                </p>

                <p className="text-sm text-[#A6AAA5] leading-relaxed mb-6">
                  {currentItem.description}
                </p>

                {/* Detailed Steps */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F3EE]">
                    How We Achieved This Standard:
                  </div>
                  {currentItem.processPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A6AAA5]">
                      <span className="w-4 h-4 rounded-full bg-[#C9A66B]/15 border border-[#C9A66B]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C9A66B]" />
                      </span>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Vehicle Reference */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#A6AAA5]">
                  <span className="text-[#F5F3EE] font-medium block">Verified Test Panel</span>
                  {currentItem.vehicleNote}
                </div>

                <button
                  onClick={onEnquire}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#080909] bg-[#C9A66B] hover:bg-[#D8B77D] rounded-lg transition-colors shadow-md shadow-[#C9A66B]/20 whitespace-nowrap"
                >
                  <span>Enquire For Your Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* UK Transparency Assurance */}
        <div className="mt-8 p-4 rounded-xl bg-[#111313] border border-white/10 text-xs text-[#A6AAA5] flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#C9A66B] shrink-0" />
          <span>
            Strict Detailing Ethics: All examples above are single-vehicle 50/50 test panel demonstrations photographed under direct inspection lighting. We never present unrelated vehicles or digitally altered images as comparisons.
          </span>
        </div>
      </div>
    </section>
  );
};
