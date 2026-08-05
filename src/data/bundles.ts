import { products, getProductBySlug } from './products';

export interface BundleItem {
  slug: string;
  qty: number;
}

export interface Bundle {
  id: string;
  slug: string;
  name: { en: string; ta: string };
  description: { en: string; ta: string };
  /** Occasion tags for filtering / landing pages */
  occasions: Array<'festival' | 'tea-time' | 'office-gifts' | 'gift'>;
  items: BundleItem[];
  /** Bundle price (savings vs sum of singles) */
  price: number;
  image: string;
  featured?: boolean;
}

export const bundles: Bundle[] = [
  {
    id: 'tea-time-pack',
    slug: 'tea-time-pack',
    name: {
      en: 'Tea-Time Pack',
      ta: 'தேநீர் நேர பேக்'
    },
    description: {
      en: 'Crispy favourites for evening chai — murukku, thenkuzhal & kara boondi from their famous hometowns.',
      ta: 'மாலை தேநீருக்கு முறிவான விருப்பங்கள் — புகழ்பெற்ற ஊர்களிலிருந்து முறுக்கு, தென்குழல் & காரா பூந்தி.'
    },
    occasions: ['tea-time', 'gift'],
    items: [
      { slug: 'kai-murukku', qty: 1 },
      { slug: 'thenkuzhal', qty: 1 },
      { slug: 'kara-boondi', qty: 1 }
    ],
    price: 420,
    image: '/images/products/kai-murukku.jpg',
    featured: true
  },
  {
    id: 'sweet-savory',
    slug: 'sweet-savory',
    name: {
      en: 'Sweet + Savory Box',
      ta: 'இனிப்பு + காரம் பெட்டி'
    },
    description: {
      en: 'Balance for any table — ghee-rich mysore pak with crunchy murukku and mixture.',
      ta: 'எந்த மேசைக்கும் சமநிலை — நெய் நிறைந்த மைசூர் பாக் உடன் முறுக்கு மற்றும் மிக்ச்சர்.'
    },
    occasions: ['gift', 'festival', 'tea-time'],
    items: [
      { slug: 'mysore-pak', qty: 1 },
      { slug: 'kai-murukku', qty: 1 },
      { slug: 'boondi-mixture', qty: 1 }
    ],
    price: 480,
    image: '/images/products/mysore-pak.jpg',
    featured: true
  },
  {
    id: 'festival-hamper',
    slug: 'festival-hamper',
    name: {
      en: 'Festival Gift Hamper',
      ta: 'திருவிழா பரிசு ஹாம்பர்'
    },
    description: {
      en: 'A generous spread for Diwali, Pongal, or any celebration — sweets and festival snacks, gift-ready.',
      ta: 'தீபாவளி, பொங்கல் அல்லது எந்த கொண்டாட்டத்திற்கும் — இனிப்புகளும் திருவிழா சிற்றுண்டிகளும், பரிசாக தயார்.'
    },
    occasions: ['festival', 'gift', 'office-gifts'],
    items: [
      { slug: 'mysore-pak', qty: 1 },
      { slug: 'adhirasam', qty: 1 },
      { slug: 'laddu', qty: 1 },
      { slug: 'thattai', qty: 1 },
      { slug: 'seedai', qty: 1 }
    ],
    price: 820,
    image: '/images/products/adhirasam.jpg',
    featured: true
  },
  {
    id: 'office-return-gift',
    slug: 'office-return-gift',
    name: {
      en: 'Office Return Gift Box',
      ta: 'அலுவலக ரிட்டர்ன் கிஃப்ட் பெட்டி'
    },
    description: {
      en: 'Compact, shareable packs suited for return gifts and desk treats — confirm quantities on WhatsApp.',
      ta: 'ரிட்டர்ன் கிஃப்ட் மற்றும் மேசை விருந்துக்கு ஏற்ற சிறிய பேக்குகள் — அளவை வாட்ஸ்அப்பில் உறுதி செய்யுங்கள்.'
    },
    occasions: ['office-gifts', 'gift'],
    items: [
      { slug: 'ribbon-pakoda', qty: 2 },
      { slug: 'laddu', qty: 1 },
      { slug: 'kara-boondi', qty: 1 }
    ],
    price: 560,
    image: '/images/products/ribbon-pakoda.jpg',
    featured: false
  }
];

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((b) => b.slug === slug);
}

export function getBundlesByOccasion(occasion: Bundle['occasions'][number]): Bundle[] {
  return bundles.filter((b) => b.occasions.includes(occasion));
}

export function getFeaturedBundles(): Bundle[] {
  return bundles.filter((b) => b.featured);
}

export function getBundleSinglesTotal(bundle: Bundle): number {
  return bundle.items.reduce((sum, item) => {
    const product = getProductBySlug(item.slug);
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);
}

export function getBundleSavings(bundle: Bundle): number {
  return Math.max(0, getBundleSinglesTotal(bundle) - bundle.price);
}

export function getBundleItemsResolved(bundle: Bundle) {
  return bundle.items
    .map((item) => {
      const product = getProductBySlug(item.slug);
      if (!product) return null;
      return { product, qty: item.qty };
    })
    .filter(Boolean) as Array<{ product: (typeof products)[number]; qty: number }>;
}

export function getBundleWhatsAppMessage(
  bundle: Bundle,
  locale: 'en' | 'ta',
  extras?: { area?: string; notes?: string }
): string {
  const lines = bundle.items.map((item) => {
    const p = getProductBySlug(item.slug);
    const name = p ? (locale === 'en' ? p.name : p.tamilName) : item.slug;
    return `• ${name} × ${item.qty}`;
  });

  if (locale === 'ta') {
    let msg = `வணக்கம் வினோஜா ஃபூட்ஸ்! நான் "${bundle.name.ta}" பேக் ஆர்டர் செய்ய விரும்புகிறேன் (₹${bundle.price}):\n${lines.join('\n')}`;
    if (extras?.area) msg += `\nபகுதி: ${extras.area}`;
    if (extras?.notes) msg += `\nகுறிப்பு: ${extras.notes}`;
    msg += '\nதயவுசெய்து கிடைக்கும் தன்மை மற்றும் டெலிவரியை உறுதி செய்யவும்.';
    return msg;
  }

  let msg = `Hello Vinoja Foods! I'd like to order the "${bundle.name.en}" (₹${bundle.price}):\n${lines.join('\n')}`;
  if (extras?.area) msg += `\nArea: ${extras.area}`;
  if (extras?.notes) msg += `\nNotes: ${extras.notes}`;
  msg += '\nPlease confirm availability and delivery.';
  return msg;
}

/** Build-a-box: products available for custom multi-item WhatsApp orders */
export const BUILD_A_BOX_PRODUCTS = products.filter((p) => p.inStock);
