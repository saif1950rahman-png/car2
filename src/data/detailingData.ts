import { GalleryItem, ServiceDetail } from '../types';

export const BUSINESS_INFO = {
  name: 'Turbo Shine Detailing',
  tagline: 'Premium car care, brought straight to your door.',
  operatingRegion: 'Greater Manchester & North West England',
  coverageAreas: ['Manchester City Centre', 'Salford & MediaCity', 'Altrincham & Hale', 'Wilmslow & Alderley Edge', 'Knutsford & Cheshire', 'Stockport & Bramhall', 'Trafford & Bowdon', 'Bolton & Bury'],
  phonePlaceholder: '07700 900888',
  emailPlaceholder: 'enquiries@turboshinedetailing.co.uk',
  instagram: 'https://instagram.com/turboshinedetailing',
  facebook: 'https://facebook.com/turboshinedetailing',
  whatsappUrl: 'https://wa.me/447700900888?text=Hello%20Turbo%20Shine%20Detailing,%20I%20would%20like%20to%20enquire%20about%20a%20mobile%20car%20detail.',
};

export const VALUE_PROPOSITIONS = [
  {
    number: '01',
    title: 'WE COME TO YOU',
    description: 'Professional car care at your home or workplace.',
  },
  {
    number: '02',
    title: 'ATTENTION TO DETAIL',
    description: 'Every finish, surface and corner receives careful attention.',
  },
  {
    number: '03',
    title: 'TAILORED CAR CARE',
    description: 'Services designed around your vehicle and its condition.',
  },
  {
    number: '04',
    title: 'CONVENIENT BOOKING',
    description: 'Simple enquiries and flexible appointment arrangements.',
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'exterior-detail',
    title: 'Exterior Detail',
    shortDesc:
      "Bring back that fresh, clean finish. Our exterior detailing focuses on safely cleaning your vehicle's exterior, removing everyday road grime and giving attention to the details that matter.",
    inclusions: [
      'Pre-wash and safe exterior wash',
      'Wheel and tyre cleaning',
      'Exterior glass cleaning',
      'Door shuts cleaned',
      'Careful drying',
      'Tyre dressing',
    ],
    startingPrice: 'From £60',
    typicalDuration: 'Approx. 2 – 2.5 hours',
  },
  {
    id: 'interior-detail',
    title: 'Interior Detail',
    shortDesc:
      'Refresh the inside of your vehicle with a thorough interior clean. From carpets and seats to dashboards and hard-to-reach areas, we focus on creating a cleaner, more comfortable cabin.',
    inclusions: [
      'Full interior vacuum',
      'Dashboard and console cleaning',
      'Door panel cleaning',
      'Interior glass cleaning',
      'Carpet and mat cleaning',
      'Interior surface detailing',
    ],
    startingPrice: 'From £75',
    typicalDuration: 'Approx. 2.5 – 3 hours',
  },
  {
    id: 'full-valet',
    title: 'Full Valet',
    shortDesc:
      'The complete refresh for your vehicle. Combining interior and exterior cleaning, our full valet is ideal when your car needs attention inside and out.',
    inclusions: [
      'Exterior safe wash',
      'Wheel and tyre cleaning',
      'Interior vacuum',
      'Dashboard and trim cleaning',
      'Door shuts',
      'Glass cleaning',
      'Final presentation check',
    ],
    startingPrice: 'From £120',
    typicalDuration: 'Approx. 3.5 – 4.5 hours',
    badge: 'Most Popular',
  },
  {
    id: 'paint-enhancement',
    title: 'Paint Enhancement',
    shortDesc:
      "Give your vehicle's paintwork some extra attention. Paint enhancement is designed to improve the appearance of the finish by reducing the appearance of suitable light imperfections, subject to paint condition and assessment.",
    inclusions: [
      'Paintwork inspection',
      'Safe wash and preparation',
      'Decontamination where appropriate',
      'Machine polishing assessment',
      'Gloss enhancement',
      'Suitable finishing protection',
    ],
    startingPrice: 'From £195',
    typicalDuration: 'Approx. 5 – 7 hours',
  },
];

export const PRICING_TIERS = {
  Small: {
    label: 'Small Vehicle',
    examples: 'e.g. Ford Fiesta, VW Polo, Mini Cooper, Fiat 500',
    prices: {
      'exterior-detail': 'From £55',
      'interior-detail': 'From £70',
      'full-valet': 'From £110',
      'paint-enhancement': 'From £185',
    },
  },
  Medium: {
    label: 'Medium Vehicle',
    examples: 'e.g. VW Golf, BMW 3 Series, Audi A4, Tesla Model 3',
    prices: {
      'exterior-detail': 'From £65',
      'interior-detail': 'From £80',
      'full-valet': 'From £130',
      'paint-enhancement': 'From £210',
    },
  },
  Large: {
    label: 'Large Saloon / Estate',
    examples: 'e.g. BMW 5 Series, Mercedes E-Class, Audi A6, Porsche Taycan',
    prices: {
      'exterior-detail': 'From £75',
      'interior-detail': 'From £90',
      'full-valet': 'From £150',
      'paint-enhancement': 'From £240',
    },
  },
  'SUV / 4x4': {
    label: 'SUV / 4x4 / Large MPV',
    examples: 'e.g. Range Rover, Porsche Cayenne, BMW X5, Audi Q7',
    prices: {
      'exterior-detail': 'From £85',
      'interior-detail': 'From £105',
      'full-valet': 'From £170',
      'paint-enhancement': 'From £275',
    },
  },
};

export const WHY_CHOOSE_US = [
  {
    title: 'Your Location, Your Convenience',
    description:
      'Skip the trip to a detailing centre. We arrange your appointment at your home or workplace, subject to location and access.',
  },
  {
    title: 'Care in Every Detail',
    description:
      'From wheels and glass to interior surfaces, we focus on the small details that complete the finish.',
  },
  {
    title: 'Services That Suit Your Vehicle',
    description:
      "Not every car needs the same treatment. We'll help you choose a service based on your vehicle and what you'd like to achieve.",
  },
  {
    title: 'Clear Communication',
    description:
      'From your first enquiry to the final finish, we aim to keep everything straightforward and transparent.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'GET IN TOUCH',
    description: "Tell us about your vehicle, the service you're interested in and your location.",
  },
  {
    step: '02',
    title: 'RECEIVE YOUR QUOTE',
    description: "We'll review your requirements and provide a clear quotation before confirming your appointment.",
  },
  {
    step: '03',
    title: 'WE COME TO YOU',
    description: "Once booked, we'll arrive at the agreed location and get to work.",
  },
  {
    step: '04',
    title: 'ENJOY THE FINISH',
    description: 'Your vehicle receives the attention it deserves. Sit back and enjoy the difference.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-porsche',
    title: 'Porsche 911 GT3 Full Valet & Exterior Preservation',
    category: 'exterior',
    description: 'Deep mirror-gloss finish with hydrophobic sealant application on deep metallic black paintwork.',
    aspect: '16:9',
    imageUrl: '/src/assets/images/hero_porsche_detailing_1793550719204.jpg',
    details: ['Safe two-bucket contact wash', 'Iron & fallout chemical decontamination', 'Synthetic gloss protection barrier', 'Delivered in Wilmslow, Cheshire'],
  },
  {
    id: 'craftsman-polish',
    title: 'Single-Stage Paintwork Enhancement',
    category: 'enhancement',
    description: 'Careful machine polishing assessment reducing light swirl marks and bringing out natural depth.',
    aspect: '4:3',
    imageUrl: '/src/assets/images/about_artisan_detailer_1793550718657.jpg',
    details: ['Digital paint depth assessment', 'Fine finishing pad polish', 'Swirl reduction on high-gloss panels', 'Carried out at client residence in Hale'],
  },
  {
    id: 'executive-cabin',
    title: 'Executive Saloon Leather & Cabin Refresh',
    category: 'interior',
    description: 'Matte-finish leather cleaning and deep conditioning, full vacuum, and interior glass treatment.',
    aspect: '4:3',
    imageUrl: '/src/assets/images/gallery_interior_cabin_1793550719878.jpg',
    details: ['Perforated leather gentle cleaning', 'Anti-static matte dash protection', 'Crevice extraction & pedal cleaning', 'Completed in MediaCity, Salford'],
  },
  {
    id: 'forged-wheels',
    title: 'Forged Wheel Decontamination & Satin Tyre Dressing',
    category: 'wheels',
    description: 'Bespoke alloy safe wheel cleaner, inner barrel decontamination, and dry satin tyre dressing.',
    aspect: '4:3',
    imageUrl: '/src/assets/images/gallery_wheel_detailing_1793550720889.jpg',
    details: ['pH-neutral rim cleaner', 'Brake caliper detail', 'Water-repellent tyre sealant', 'No sling, satin OEM appearance'],
  },
  {
    id: 'water-beading',
    title: 'Hydrophobic Paintwork Protection & Water Beading',
    category: 'enhancement',
    description: 'Contact angle water beading after ceramic wax layer, safeguarding exterior clearcoat from road film.',
    aspect: '4:3',
    imageUrl: '/src/assets/images/gallery_paint_reflection_1793550720964.jpg',
    details: ['Intense hydrophobic run-off', 'UV and acid rain protection', 'Silky tactile surface feel', 'Greater Manchester mobile appointment'],
  },
];

export const FAQS = [
  {
    q: 'Do you come to my home?',
    a: 'Yes. Turbo Shine Detailing is a mobile service, so we aim to carry out your chosen service at your home or workplace, depending on your location and access arrangements.',
  },
  {
    q: 'What areas do you cover?',
    a: "We're building our service coverage around our operating location in Greater Manchester and Cheshire (including Manchester, Salford, Altrincham, Wilmslow, Knutsford, Stockport, Trafford and surrounding North West areas). Contact us with your postcode and we'll confirm whether we can reach you.",
  },
  {
    q: 'How long does a detail take?',
    a: "Timing depends on the vehicle's size, condition and selected service. We'll give you an estimated duration when confirming your booking.",
  },
  {
    q: 'Do I need to provide water or electricity?',
    a: 'This depends on the equipment and setup available for your appointment. Please mention your access arrangements when enquiring so we can confirm what is required.',
  },
  {
    q: 'Can I book for a weekend?',
    a: "Weekend appointments may be available depending on our schedule. Get in touch with your preferred date and we'll do our best to accommodate you.",
  },
  {
    q: 'How do I get a price?',
    a: "Simply send us your vehicle details, postcode and preferred service. We'll provide a personalised quotation before confirming your booking.",
  },
  {
    q: 'What types of vehicles do you detail?',
    a: "We can advise on suitable services for cars of different sizes and types. Let us know your vehicle's make and model when enquiring.",
  },
];
