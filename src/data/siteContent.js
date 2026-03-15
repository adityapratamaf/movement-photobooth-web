import brandMark from '../assets/brand-mark.svg';
import weddingGarden from '../assets/portfolio/wedding-garden.svg';
import townhallCorporate from '../assets/portfolio/townhall-corporate.svg';
import brandLaunchNight from '../assets/portfolio/brand-launch-night.svg';
import graduationParty from '../assets/portfolio/graduation-party.svg';
import anniversaryOffice from '../assets/portfolio/anniversary-office.svg';
import communityFest from '../assets/portfolio/community-fest.svg';
import clientAwan from '../assets/clients/client-awan.svg';
import clientRuang from '../assets/clients/client-ruang.svg';
import clientKawan from '../assets/clients/client-kawan.svg';
import clientNusa from '../assets/clients/client-nusa.svg';
import clientSora from '../assets/clients/client-sora.svg';
import clientBumi from '../assets/clients/client-bumi.svg';

export const siteMeta = {
  businessName: 'Movement Photobooth',
  shortName: 'Movement',
  tagLine: 'Photobooth event service yang bikin acara makin hidup.',
};

export const contactInfo = {
  businessName: 'Movement Photobooth',
  whatsappNumber: '6282177487703',
  whatsappDisplay: '+62 821-7748-7703',
  phoneDisplay: '+62 821-7748-7703',
  email: 'hello@movementphotobooth.id',
  address: 'Jl. Cempaka Raya No. 18, Bintaro, Tangerang Selatan',
  mapsLink: 'https://maps.google.com/?q=Jl.%20Cempaka%20Raya%20No.%2018%20Bintaro%20Tangerang%20Selatan',
  instagram: 'https://instagram.com/movement.photobooth',
  tiktok: 'https://tiktok.com/@movement.photobooth',
  whatsappDefaultMessage: 'Halo Movement Photobooth, aku mau tanya paket photobooth untuk event aku.',
  operationalHours: 'Setiap hari · 09.00 - 21.00 WIB',
};

export const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Nilai Kami', to: '/nilai-kami' },
  { label: 'Kontak', to: '/kontak' },
  { label: 'Online Booth', to: '/photobooth-online' },
];

export const heroPoints = [
  { title: 'Fast response', description: 'Admin cepat, brief langsung nyambung.' },
  { title: 'Visual custom', description: 'Frame dan overlay ikut tema event.' },
  { title: 'Operator standby', description: 'Tamu tinggal pose, tim kami yang jaga flow.' },
];

export const heroCarouselSlides = [
  {
    title: 'Garden Wedding',
    category: 'Wedding',
    service: 'Fotobooth Print',
    highlight: 'Print langsung jadi',
    image: weddingGarden,
    alt: 'Visual portofolio fotobooth print untuk acara wedding outdoor.',
    description: 'Hangat, elegan, dan enak buat dibawa pulang.',
  },
  {
    title: 'Town Hall Party',
    category: 'Corporate',
    service: 'Fotobooth Print',
    highlight: 'Flow antrian tetap rapi',
    image: townhallCorporate,
    alt: 'Visual portofolio fotobooth print untuk acara corporate.',
    description: 'Rapi dilihat, tetap seru waktu tim mulai foto bareng.',
  },
  {
    title: 'Brand Launch',
    category: 'Brand Activation',
    service: 'Videobooth 360',
    highlight: 'Konten siap story',
    image: brandLaunchNight,
    alt: 'Visual portofolio videobooth 360 untuk activation brand.',
    description: 'Begitu 360 nyala, area event langsung punya magnet sendiri.',
  },
  {
    title: 'Office Anniversary',
    category: 'Corporate',
    service: 'Videobooth 360',
    highlight: 'Naik platform, hasilnya wow',
    image: anniversaryOffice,
    alt: 'Visual portofolio videobooth 360 untuk anniversary kantor.',
    description: 'Pas buat bikin momen kantor terasa lebih hidup dan modern.',
  },
];

export const homeHighlights = [
  'Fotobooth print langsung cetak',
  'Videobooth 360 siap share',
  'Desain visual custom',
  'Setup rapi, operator standby',
];

export const services = [
  {
    slug: 'fotobooth-print',
    icon: '📸',
    badge: 'Paling favorit',
    name: 'Fotobooth Print',
    shortDescription: 'Buat tamu yang pengen pulang bawa hasil foto, bukan cuma file.',
    teaser: 'Masuk booth, pose bentar, hasil cetak langsung di tangan.',
    summary: 'Layanan photobooth print yang simpel, rapi, dan gampang bikin tamu mampir.',
    quickFacts: ['Unlimited sesi', 'Template custom', 'Print langsung jadi'],
    stats: [
      { title: 'Unlimited sesi', description: 'Selama jam booth aktif.' },
      { title: 'Frame custom', description: 'Bisa ikut tema acara.' },
      { title: 'Operator standby', description: 'Bantu tamu dari awal sampai jadi.' },
    ],
    highlights: [
      'Unlimited sesi selama durasi booth aktif',
      'Pilihan layout strip atau postcard',
      'Desain frame custom sesuai tema acara',
      'Printer cepat dengan hasil cetak rapi',
      'Softcopy gallery setelah event selesai',
    ],
    idealFor: ['Wedding', 'Engagement', 'Gathering kantor', 'Acara kampus', 'Community event'],
    packages: [
      {
        name: 'Lite 2 Jam',
        description: 'Pas buat acara intimate atau sesi prime time.',
        inclusions: ['2 jam operasional', '1 desain frame', '1 operator', 'Unlimited print'],
      },
      {
        name: 'Prime 4 Jam',
        description: 'Pilihan aman buat event dengan traffic ramai.',
        inclusions: ['4 jam operasional', '2 operator', 'Props basic', 'Softcopy gallery'],
      },
      {
        name: 'All Out 6 Jam',
        description: 'Buat event panjang dari awal sampai closing.',
        inclusions: ['6 jam operasional', '2 desain frame', 'Extra stock print', 'Priority support'],
      },
    ],
    addOns: ['Guest book corner', 'Backdrop premium', 'Magnetic frame', 'QR gallery page'],
    momentLine: 'Cocok buat event yang pengen hangat, cair, dan gampang diingat tamu.',
  },
  {
    slug: 'videobooth-360',
    icon: '🎥',
    badge: 'Crowd magnet',
    name: 'Videobooth 360',
    shortDescription: 'Buat event yang pengen punya momen paling heboh dan paling gampang viral.',
    teaser: 'Naik platform, muter sekali, hasilnya langsung pengen di-post.',
    summary: 'Layanan videobooth 360 yang bikin area event terasa lebih hype tanpa ribet.',
    quickFacts: ['Overlay custom', 'Instant sharing', 'Visual cinematic'],
    stats: [
      { title: 'Instant sharing', description: 'File cepat dikirim ke tamu.' },
      { title: 'Overlay custom', description: 'Branding dan warna bisa disesuaikan.' },
      { title: 'Crew guide', description: 'Flow tetap aman walau ramai.' },
    ],
    highlights: [
      'Video 360 slow motion dengan angle dramatis',
      'Overlay brand atau nama event bisa custom',
      'Crew guide bantu tamu biar hasil tetap oke',
      'Instant sharing via QR atau link',
      'Lighting dan setup yang siap jadi spotlight venue',
    ],
    idealFor: ['Brand launch', 'Gala dinner', 'Anniversary kantor', 'Birthday party', 'Campus event'],
    packages: [
      {
        name: 'Spotlight 2 Jam',
        description: 'Durasi singkat buat momen yang pengen langsung pecah.',
        inclusions: ['2 jam operasional', '1 overlay video', '1 crew guide', 'Sharing station'],
      },
      {
        name: 'Peak 4 Jam',
        description: 'Pilihan ideal buat acara yang butuh momentum lebih lama.',
        inclusions: ['4 jam operasional', '2 crew guide', 'Lighting booth', 'Effect transition'],
      },
      {
        name: 'Stage 6 Jam',
        description: 'Buat event besar dengan traffic tinggi.',
        inclusions: ['6 jam operasional', 'Branding area', 'Priority support', 'Quick highlight recap'],
      },
    ],
    addOns: ['Red carpet setup', 'Smoke effect', 'Full wrap branding', 'Opening bumper video'],
    momentLine: 'Cocok buat event yang pengen punya titik paling heboh di venue.',
  },
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));

export const coreValues = [
  {
    title: 'Gercep tapi tetap rapi',
    description: 'Chat dibalas cepat, teknis juga tetap jelas.',
  },
  {
    title: 'Visual nggak asal tempel',
    description: 'Booth harus nyambung sama mood acara, bukan numpang lewat.',
  },
  {
    title: 'Tamu gampang ikut',
    description: 'Flow booth simpel dan operator siap bantu.',
  },
  {
    title: 'Koordinasi enak',
    description: 'EO, venue, dan tim internal bisa jalan bareng tanpa drama.',
  },
  {
    title: 'Setup aman',
    description: 'Area booth tetap rapi dan nyaman buat lalu-lintas tamu.',
  },
  {
    title: 'After event tetap beres',
    description: 'File dan follow-up tetap jelas setelah acara selesai.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Brief singkat',
    description: 'Kasih tahu tanggal, venue, dan tipe acara.',
  },
  {
    step: '02',
    title: 'Pilih layanan',
    description: 'Kami bantu arahin paket yang paling pas.',
  },
  {
    step: '03',
    title: 'Desain & teknis',
    description: 'Frame, overlay, dan kebutuhan area kami rapikan.',
  },
  {
    step: '04',
    title: 'Hari H jalan',
    description: 'Tim setup lebih awal dan booth siap dipakai tamu.',
  },
];

export const portfolioItems = [
  {
    title: 'Garden Wedding',
    category: 'Wedding',
    service: 'Fotobooth Print',
    serviceSlug: 'fotobooth-print',
    image: weddingGarden,
    result: 'Mood hangat dengan print yang langsung jadi suvenir kecil.',
  },
  {
    title: 'Town Hall Party',
    category: 'Corporate',
    service: 'Fotobooth Print',
    serviceSlug: 'fotobooth-print',
    image: townhallCorporate,
    result: 'Rapi untuk kantor, tetap cair waktu sesi foto bareng.',
  },
  {
    title: 'Brand Launch',
    category: 'Brand Activation',
    service: 'Videobooth 360',
    serviceSlug: 'videobooth-360',
    image: brandLaunchNight,
    result: 'Area sponsor jadi pusat perhatian karena hasil videonya mencuri fokus.',
  },
  {
    title: 'Graduation Day',
    category: 'Campus',
    service: 'Fotobooth Print',
    serviceSlug: 'fotobooth-print',
    image: graduationParty,
    result: 'Pas buat momen wisuda yang pengen dibawa pulang rame-rame.',
  },
  {
    title: 'Office Anniversary',
    category: 'Corporate',
    service: 'Videobooth 360',
    serviceSlug: 'videobooth-360',
    image: anniversaryOffice,
    result: 'Bikin sesi celebration kantor terasa lebih modern dan fun.',
  },
  {
    title: 'Community Fest',
    category: 'Community',
    service: 'Fotobooth Print',
    serviceSlug: 'fotobooth-print',
    image: communityFest,
    result: 'Flow gampang bikin banyak orang berani ikut tanpa nunggu lama.',
  },
];

export const clients = [
  { name: 'Awan Corp', logo: clientAwan },
  { name: 'Ruang Tumbuh', logo: clientRuang },
  { name: 'Kawan Office', logo: clientKawan },
  { name: 'Nusa Grid', logo: clientNusa },
  { name: 'Sora Studio', logo: clientSora },
  { name: 'Bumi Media', logo: clientBumi },
];

export const testimonials = [
  {
    quote: 'Adminnya cepat. Hari H juga rapi. Kami tinggal fokus ke acaranya.',
    name: 'Dinda',
    role: 'People & Culture',
    company: 'Ruang Tumbuh',
  },
  {
    quote: 'Brief cepat nangkep. Booth-nya bikin area event langsung hidup.',
    name: 'Arif',
    role: 'Marketing Lead',
    company: 'Awan Corp',
  },
  {
    quote: 'Videobooth 360-nya jadi spot paling ramai sepanjang acara.',
    name: 'Nadia',
    role: 'Brand Executive',
    company: 'Bumi Media',
  },
  {
    quote: 'Enak diajak koordinasi. Tim kami jadi nggak ikut panik.',
    name: 'Rangga',
    role: 'Event PIC',
    company: 'Kawan Office',
  },
];

export const comparisonPoints = [
  {
    label: 'Paling cocok buat',
    print: 'Acara yang pengen pulangan fisik.',
    video360: 'Acara yang butuh wow factor.',
  },
  {
    label: 'Mood',
    print: 'Hangat, akrab, gampang diikuti.',
    video360: 'Hype, modern, dan standout.',
  },
  {
    label: 'Output',
    print: 'Cetakan langsung + softcopy.',
    video360: 'Video 360 + instant share.',
  },
  {
    label: 'Nilai plus',
    print: 'Kenang-kenangan buat tamu.',
    video360: 'Konten yang langsung pengen diposting.',
  },
];

export const socialLinks = [
  { label: 'Instagram', href: contactInfo.instagram },
  { label: 'TikTok', href: contactInfo.tiktok },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappDefaultMessage)}`,
  },
];

export function createWhatsAppLink(message = contactInfo.whatsappDefaultMessage) {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export { brandMark };
