export const SITE_CONFIG = {
  name: {
    en: 'Vinoja Foods',
    ta: 'வினோஜா ஃபூட்ஸ்'
  },
  description: {
    en: 'Authentic Tamil Nadu snacks and sweets made in their famous places of origin — hygienically packed, to our Chennai shop within a day.',
    ta: 'தமிழ்நாட்டின் புகழ்பெற்ற ஊர்களில் தயாரிக்கப்படும் உண்மையான சிற்றுண்டிகளும் மிட்டாய்களும் — சுகாதார பேக்கிங், ஒரு நாளுக்குள் சென்னை கடைக்கு.'
  },
  url: import.meta.env.PUBLIC_SITE_URL || 'https://vinojafoods.com',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX',
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || 'info@vinojafoods.com',
  contactPhone: import.meta.env.PUBLIC_CONTACT_PHONE || '+91 XXXXXXXXXX',
  address: {
    en: import.meta.env.PUBLIC_ADDRESS_EN || '123 Main Street, Chennai, Tamil Nadu 600001, India',
    ta: import.meta.env.PUBLIC_ADDRESS_TA || '123 மேன் ஸ்ட்ரீட், சென்னை, தமிழ்நாடு 600001, இந்தியா'
  },
  /** Chennai shop — OpenStreetMap embed works without API keys */
  map: {
    lat: Number(import.meta.env.PUBLIC_MAP_LAT) || 13.0827,
    lng: Number(import.meta.env.PUBLIC_MAP_LNG) || 80.2707,
    zoom: Number(import.meta.env.PUBLIC_MAP_ZOOM) || 15
  },
  social: {
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://instagram.com/vinojafoods',
    facebook: import.meta.env.PUBLIC_FACEBOOK_URL || 'https://facebook.com/vinojafoods',
    youtube: import.meta.env.PUBLIC_YOUTUBE_URL || 'https://youtube.com/@vinojafoods',
    twitter: import.meta.env.PUBLIC_TWITTER_URL || 'https://twitter.com/vinojafoods'
  },
  analytics: {
    plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN,
    gaId: import.meta.env.PUBLIC_GA_ID
  }
} as const;

export const DEFAULT_SEO = {
  title: {
    en: 'Vinoja Foods | Authentic Tamil Nadu Snacks & Sweets · Sold Fresh in Chennai',
    ta: 'வினோஜா ஃபூட்ஸ் | தமிழ்நாட்டின் உண்மையான சிற்றுண்டிகள் · சென்னையில் புதிதாக'
  },
  description: {
    en: 'Regional specialties from across Tamil Nadu — made where they’re famous, hygienically packed, to our Chennai shop within a day. Order on WhatsApp.',
    ta: 'தமிழ்நாடு முழுவதும் மாவட்டச் சிறப்புகள் — புகழ்பெற்ற ஊர்களில் தயாரிப்பு, சுகாதார பேக்கிங், ஒரு நாளுக்குள் சென்னை கடைக்கு. வாட்ஸ்அப்பில் ஆர்டர்.'
  },
  ogImage: '/images/og-default.jpg',
  twitterCard: 'summary_large_image'
} as const;

export const NAVIGATION = {
  en: {
    header: [
      { label: 'Home', href: '/en/' },
      { label: 'Products', href: '/en/products/' },
      { label: 'Bundles', href: '/en/bundles/' },
      { label: 'Occasions', href: '/en/occasions/festival/' },
      { label: 'Origins', href: '/en/origins/' },
      { label: 'About', href: '/en/about/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    footer: {
      company: [
        { label: 'About Us', href: '/en/about/' },
        { label: 'Our Story', href: '/en/about/#story' },
        { label: 'Quality Promise', href: '/en/about/#quality' },
        { label: 'Origins', href: '/en/origins/' }
      ],
      shop: [
        { label: 'All Products', href: '/en/products/' },
        { label: 'Bundles', href: '/en/bundles/' },
        { label: 'Festival Specials', href: '/en/occasions/festival/' },
        { label: 'Tea-Time', href: '/en/occasions/tea-time/' },
        { label: 'Office Gifts', href: '/en/occasions/office-gifts/' }
      ],
      support: [
        { label: 'Contact Us', href: '/en/contact/' },
        { label: 'Shipping & Returns', href: '/en/shipping-returns/' },
        { label: 'Refund Policy', href: '/en/refund-policy/' },
        { label: 'FAQ', href: '/en/faq/' }
      ],
      legal: [
        { label: 'Privacy Policy', href: '/en/privacy-policy/' },
        { label: 'Terms & Conditions', href: '/en/terms-conditions/' },
        { label: 'Cookie Policy', href: '/en/cookie-policy/' }
      ]
    }
  },
  ta: {
    header: [
      { label: 'முகப்பு', href: '/ta/' },
      { label: 'பொருட்கள்', href: '/ta/products/' },
      { label: 'பேக்குகள்', href: '/ta/bundles/' },
      { label: 'சந்தர்ப்பங்கள்', href: '/ta/occasions/festival/' },
      { label: 'மூலங்கள்', href: '/ta/origins/' },
      { label: 'எங்களைப் பற்றி', href: '/ta/about/' },
      { label: 'தொடர்பு', href: '/ta/contact/' }
    ],
    footer: {
      company: [
        { label: 'எங்களைப் பற்றி', href: '/ta/about/' },
        { label: 'எங்கள் கதை', href: '/ta/about/#story' },
        { label: 'தர உறுதி', href: '/ta/about/#quality' },
        { label: 'மூலங்கள்', href: '/ta/origins/' }
      ],
      shop: [
        { label: 'அனைத்து பொருட்கள்', href: '/ta/products/' },
        { label: 'பேக்குகள்', href: '/ta/bundles/' },
        { label: 'திருவிழா சிறப்புகள்', href: '/ta/occasions/festival/' },
        { label: 'தேநீர் நேரம்', href: '/ta/occasions/tea-time/' },
        { label: 'அலுவலக பரிசு', href: '/ta/occasions/office-gifts/' }
      ],
      support: [
        { label: 'தொடர்பு', href: '/ta/contact/' },
        { label: 'டெலிவரி & திருப்பம்', href: '/ta/shipping-returns/' },
        { label: 'பணத்திருப்பம் கொள்கை', href: '/ta/refund-policy/' },
        { label: 'கேள்விகள்', href: '/ta/faq/' }
      ],
      legal: [
        { label: 'தனியுரிமைக் கொள்கை', href: '/ta/privacy-policy/' },
        { label: 'நிபந்தனைகள்', href: '/ta/terms-conditions/' },
        { label: 'குக்கி கொள்கை', href: '/ta/cookie-policy/' }
      ]
    }
  }
} as const;

export const WHATSAPP_TEMPLATES = {
  en: {
    product: 'Hello Vinoja Foods! I would like to order {productName} ({weight}) for ₹{price}. Please confirm availability and delivery.',
    general: 'Hello Vinoja Foods! I have an inquiry about your products.',
    bulk: 'Hello Vinoja Foods! I would like to place a bulk order for my event/business. Please contact me.',
    bundle: 'Hello Vinoja Foods! I would like to order the {bundleName} pack.'
  },
  ta: {
    product: 'வணக்கம் வினோஜா ஃபூட்ஸ்! நான் {productName} ({weight}) ஐ ₹{price} க்கு ஆர்டர் செய்ய விரும்புகிறேன். தயவுசெய்து கிடைக்கும் தன்மை மற்றும் டெலிவரியை உறுதி செய்யவும்.',
    general: 'வணக்கம் வினோஜா ஃபூட்ஸ்! உங்கள் பொருட்கள் பற்றி எனக்கு ஒரு விசாரணை உள்ளது.',
    bulk: 'வணக்கம் வினோஜா ஃபூட்ஸ்! நான் என் விழா/வியாபாரத்துக்காக மொத்த ஆர்டர் வைக்க விரும்புகிறேன். தயவுசெய்து என்னைத் தொடர்பு கொள்ளுங்கள்.',
    bundle: 'வணக்கம் வினோஜா ஃபூட்ஸ்! நான் {bundleName} பேக் ஆர்டர் செய்ய விரும்புகிறேன்.'
  }
} as const;
