# Turbo Shine Detailing — Implementation Plan

A bespoke, production-quality digital presence for **Turbo Shine Detailing**, a premium UK mobile car detailing and valeting service operating across Greater Manchester and the North West of England.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following project choices were confirmed during Phase 1 clarification:
> - **Operating Region & Coverage**: Greater Manchester and North West England (Manchester, Cheshire, Altrincham, Wilmslow, Knutsford, Stockport, Salford, Trafford, Bolton, and surrounding areas).
> - **Booking Enquiry Behaviour**: Direct email link generation alongside the online interactive booking enquiry form, providing instant draft email composition in the customer's mail client with all vehicle and appointment specifications pre-formatted, paired with an on-screen confirmation modal.
> - **Aesthetic & Brand Standard**: Strict luxury British automotive identity using deep obsidian `#080909`, warm charcoal surfaces `#171A19`, restrained champagne gold accents `#C9A66B`, Manrope display typography, clean editorial layouts, and zero-pill anti-slop discipline.

---

## 1. Overview & Core Concept

- **What It Does**: Provides a high-end web platform showcasing mobile vehicle valeting, paint enhancement, and exterior/interior detailing services brought directly to the customer's home or workplace. Features an interactive quote calculation engine, vehicle size selector, verified service scope breakdowns, interactive before/after transformation showcase with full lightbox, straightforward pricing guide, collapsible FAQ accordion, and an enquiry submission system.
- **Target Audience**: Discerning UK vehicle owners (Porsche, BMW, Mercedes-Benz, Audi, Tesla, Range Rover drivers), busy executives, car enthusiasts, and families in Greater Manchester and the North West who demand convenience and showroom-standard care.
- **Key Value**: *"Premium car care, brought straight to your door."* Removes the inconvenience of travelling to a detailing bay by delivering professional, water-safe, swirl-free valeting directly to home driveways and executive office car parks.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero & Discovery**: Immersive cinematic entrance featuring dark luxury vehicle imagery, clear British proposition, quick trust indicators (*01 We Come To You*, *02 Attention To Detail*, *03 Tailored Car Care*, *04 Convenient Booking*), and immediate CTAs.
2. **Service Investigation & Scope**: Interactive exploration of 4 core offerings: Exterior Detail, Interior Detail, Full Valet, and Paint Enhancement. Each card details explicit stages (pre-wash, snow foam, two-bucket safe wash, wheels/tyres, arches, glass, door shuts, extraction, trim dressing).
3. **Transparent Pricing & Estimation**: Clear "Starting From £XX" indicative price points for Small, Medium, Large, and SUV / 4x4 vehicles with explicit guidance that bespoke quotations are confirmed upon enquiry.
4. **Editorial Process & Transformation Gallery**: Step-by-step 4-stage client journey (*Get in Touch → Receive Your Quote → We Come to You → Enjoy the Finish*) alongside high-resolution photography showcasing paint gloss, wheel decon, and leather conditioning with modal lightbox view.
5. **Customer Confidence & FAQs**: Tasteful "Customer feedback coming soon" placeholder with zero fabricated reviews or false ratings, followed by an accessible FAQ accordion addressing water/power requirements, booking notice, and coverage postcodes.
6. **Lead Capture & Quote Dispatch**: Step-by-step or seamless multi-field enquiry form capturing vehicle details, registration plate (optional UK style format), size, preferred package, postcode, date/time, and special notes. Submitting generates an email draft mailto link with encoded vehicle specs and displays a clean confirmation receipt on-screen.

### Visual Identity & Theme
- **Dominant Canvas**: Obsidian Black `#080909` (60%)
- **Structural Surfaces**: Dark Charcoal `#111313` and Card Containers `#171A19` with subtle hairline borders `rgba(255,255,255,0.08)` (30%)
- **Champagne Gold Accent**: `#C9A66B` (10%) reserved for primary actions, subtle badges, and active focus rings
- **Typography**: Manrope for editorial headings with tight tracking (`tracking-tight`, `text-wrap: balance`), Inter for high-legibility body prose, and tabular numerals for pricing and specifications
- **Top Bar Contract**: Fixed header with single-line wordmark `TURBO SHINE DETAILING`, 6 clean single-line nav links, and gold CTA `Book Your Detail`.
- **Zero-Pill Restraint**: Informational metadata formatted with typographic dots (`·`), clean borders, zero generic pill badges, and no fake telemetry or code comments.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Mailto & On-Screen Confirmation Flow**
  - *Chosen Approach*: When a user completes the booking form, the app calculates an itemised summary, triggers the customer's native email client with pre-filled subject and structured body text, and simultaneously opens an on-screen confirmation modal with inquiry reference ID and contact details.
  - *Why*: Provides immediate, authentic lead dispatch without relying on broken backend mail servers or simulating fake server success.
  - *Alternatives Considered*: Pure mock submission (rejected as deceptive) or third-party paid form APIs (rejected due to external dependency risks).

- **Decision 2: Image Strategy with Batch Generation & Resilient Fallbacks**
  - *Chosen Approach*: Generate high-impact bespoke automotive assets (cinematic Porsche/BMW detailing hero, interior leather conditioning, wheel deep-clean decontamination, paint gloss enhancement) via `generate_image`, paired with inline SVG architectural fallbacks for guaranteed zero broken images.
  - *Why*: Ensures realistic, premium luxury photography without violating copyright or depending on fragile third-party CDNs.

- **Decision 3: Authentic Social Proof Representation**
  - *Chosen Approach*: Honor the prompt's strict prohibition against fabricated reviews, fake star scores, or invented awards. Display an elegant, branded "Customer feedback coming soon" section with verified operating standards.

---

## 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────────────────────┐
│                                App.tsx                                 │
│  State: activeSection, isBookingModalOpen, selectedService, lightbox   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
┌──────────────┐            ┌──────────────┐                ┌──────────────┐
│  Navigation  │            │  HeroSection │                │  TrustStrip  │
│ Sticky / Gold│            │ 16:9 Cinema  │                │ 4 Editorial  │
│ CTA / Mobile │            │ Luxury Focus │                │ Value Props  │
└──────────────┘            └──────────────┘                └──────────────┘
    │                               │                               │
    ├───────────────────────────────┼───────────────────────────────┤
    ▼                               ▼                               ▼
┌──────────────┐            ┌──────────────┐                ┌──────────────┐
│ AboutSection │            │ ServicesGrid │                │ PricingGuide │
│ Split Layout │            │ 4 Packages   │                │ Size Tiers   │
│ Quality Care │            │ Scope Check  │                │ Clear Notes  │
└──────────────┘            └──────────────┘                └──────────────┘
    │                               │                               │
    ├───────────────────────────────┼───────────────────────────────┤
    ▼                               ▼                               ▼
┌──────────────┐            ┌──────────────┐                ┌──────────────┐
│ WhyChooseUs  │            │ ProcessFlow  │                │ GalleryShow  │
│ 2-Col Grid   │            │ 4-Step Steps │                │ Filterable   │
│ Conv. & Care │            │ Desktop/Mob. │                │ Lightbox Mod.│
└──────────────┘            └──────────────┘                └──────────────┘
    │                               │                               │
    ├───────────────────────────────┼───────────────────────────────┤
    ▼                               ▼                               ▼
┌──────────────┐            ┌──────────────┐                ┌──────────────┐
│ Testimonial  │            │  FaqSection  │                │ BookingForm  │
│ Placeholder  │            │  Accordion   │                │ Validation   │
│ Transparent  │            │ 7 Key Items  │                │ Mailto/Modal │
└──────────────┘            └──────────────┘                └──────────────┘
                                    │
                                    ▼
                            ┌──────────────┐
                            │    Footer    │
                            │ Links, Legal │
                            │ Manchester NW│
                            └──────────────┘
```

### Component & State Mapping
- `Navigation`: Sticky header with scroll detection, mobile slide-over menu, smooth anchor scrolling.
- `ServicesGrid`: Allows clicking "Enquire About [Service]" which pre-selects the package and smoothly scrolls to `BookingForm`.
- `PricingGuide`: Interactive size selector (Small, Medium, Large, SUV/4x4) showing starting rates and comprehensive inclusions.
- `GalleryShow`: Interactive gallery with category filter and full-screen modal lightbox.
- `FaqSection`: Keyboard-accessible expandable disclosure components.
- `BookingForm`: Controlled input state, UK postcode validation, UK mobile number validation, vehicle registration helper, preferred slot selector, and dual action (Mailto generator + on-screen verified confirmation receipt).
