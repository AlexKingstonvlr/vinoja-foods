import type { Bundle } from './bundles';

export type OccasionSlug = 'festival' | 'tea-time' | 'office-gifts';

export interface OccasionPage {
  slug: OccasionSlug;
  bundleOccasion: Bundle['occasions'][number];
  /** Product slugs to highlight (in addition to bundles) */
  productSlugs: string[];
  meta: {
    en: { title: string; description: string };
    ta: { title: string; description: string };
  };
  copy: {
    en: {
      label: string;
      title: string;
      subtitle: string;
      cta: string;
      waMessage: string;
      bundlesLabel: string;
      productsLabel: string;
    };
    ta: {
      label: string;
      title: string;
      subtitle: string;
      cta: string;
      waMessage: string;
      bundlesLabel: string;
      productsLabel: string;
    };
  };
}

export const OCCASIONS: OccasionPage[] = [
  {
    slug: 'festival',
    bundleOccasion: 'festival',
    productSlugs: ['mysore-pak', 'adhirasam', 'laddu', 'thattai', 'seedai', 'badusha'],
    meta: {
      en: {
        title: 'Festival Specials & Gift Hampers | Vinoja Foods',
        description:
          'Diwali, Pongal, and celebration-ready sweets & snacks from Tamil Nadu’s famous towns — hygienically packed, fresh at our Chennai shop within a day. Order on WhatsApp.'
      },
      ta: {
        title: 'திருவிழா சிறப்புகள் & பரிசு ஹாம்பர்கள் | வினோஜா ஃபூட்ஸ்',
        description:
          'தீபாவளி, பொங்கல் மற்றும் கொண்டாட்டங்களுக்கு — தமிழ்நாட்டின் புகழ்பெற்ற ஊர்களிலிருந்து இனிப்புகளும் சிற்றுண்டிகளும். வாட்ஸ்அப்பில் ஆர்டர்.'
      }
    },
    copy: {
      en: {
        label: 'Festival gifting',
        title: 'Festival Specials',
        subtitle:
          'Curated sweets and festival snacks made in their famous places of origin — gift-ready hampers for Diwali, Pongal, or any celebration. Confirm packs on WhatsApp.',
        cta: 'Order festival hamper on WhatsApp',
        waMessage:
          'Hello Vinoja Foods! I would like to order a Festival Gift Hamper / festival sweets. Please share options and availability.',
        bundlesLabel: 'Ready gift hampers',
        productsLabel: 'Festival favourites'
      },
      ta: {
        label: 'திருவிழா பரிசு',
        title: 'திருவிழா சிறப்புகள்',
        subtitle:
          'புகழ்பெற்ற ஊர்களில் தயாரிக்கப்பட்ட இனிப்புகளும் திருவிழா சிற்றுண்டிகளும் — தீபாவளி, பொங்கல் அல்லது எந்த கொண்டாட்டத்திற்கும். வாட்ஸ்அப்பில் உறுதி செய்யுங்கள்.',
        cta: 'திருவிழா ஹாம்பரை வாட்ஸ்அப்பில் ஆர்டர்',
        waMessage:
          'வணக்கம் வினோஜா ஃபூட்ஸ்! திருவிழா பரிசு ஹாம்பர் / திருவிழா இனிப்புகள் ஆர்டர் செய்ய விரும்புகிறேன். விருப்பங்களையும் கிடைக்கும் தன்மையையும் பகிரவும்.',
        bundlesLabel: 'தயாரான பரிசு ஹாம்பர்கள்',
        productsLabel: 'திருவிழா விருப்பங்கள்'
      }
    }
  },
  {
    slug: 'tea-time',
    bundleOccasion: 'tea-time',
    productSlugs: ['kai-murukku', 'thenkuzhal', 'kara-boondi', 'ribbon-pakoda', 'boondi-mixture'],
    meta: {
      en: {
        title: 'Tea-Time Snacks Pack | Vinoja Foods Chennai',
        description:
          'Crispy Tamil Nadu tea-time snacks from their famous hometowns — murukku, thenkuzhal, kara boondi. Fresh at our Chennai shop within a day. Order on WhatsApp.'
      },
      ta: {
        title: 'தேநீர் நேர சிற்றுண்டி பேக் | வினோஜா ஃபூட்ஸ்',
        description:
          'புகழ்பெற்ற ஊர்களிலிருந்து முறுக்கு, தென்குழல், காரா பூந்தி — தேநீர் நேரத்திற்கு. வாட்ஸ்அப்பில் ஆர்டர்.'
      }
    },
    copy: {
      en: {
        label: 'Evening chai',
        title: 'Tea-Time Favourites',
        subtitle:
          'Crunchy regional snacks that belong next to a hot cup of tea — made where they’re famous, packed hygienically, at our Chennai shop within a day.',
        cta: 'Order tea-time pack on WhatsApp',
        waMessage:
          'Hello Vinoja Foods! I would like to order the Tea-Time Pack (or tea-time snacks). Please confirm availability.',
        bundlesLabel: 'Tea-time packs',
        productsLabel: 'Crispy singles'
      },
      ta: {
        label: 'மாலை தேநீர்',
        title: 'தேநீர் நேர விருப்பங்கள்',
        subtitle:
          'சூடான தேநீருடன் சேர வேண்டிய முறிவான மாவட்டச் சிற்றுண்டிகள் — புகழ்பெற்ற ஊரில் தயாரிப்பு, சுகாதார பேக்கிங், ஒரு நாளுக்குள் சென்னை கடைக்கு.',
        cta: 'தேநீர் பேக்கை வாட்ஸ்அப்பில் ஆர்டர்',
        waMessage:
          'வணக்கம் வினோஜா ஃபூட்ஸ்! தேநீர் நேர பேக் (அல்லது தேநீர் சிற்றுண்டிகள்) ஆர்டர் செய்ய விரும்புகிறேன். கிடைக்கும் தன்மையை உறுதி செய்யவும்.',
        bundlesLabel: 'தேநீர் நேர பேக்குகள்',
        productsLabel: 'தனி முறிவுகள்'
      }
    }
  },
  {
    slug: 'office-gifts',
    bundleOccasion: 'office-gifts',
    productSlugs: ['ribbon-pakoda', 'laddu', 'mysore-pak', 'kai-murukku', 'kara-boondi'],
    meta: {
      en: {
        title: 'Office & Return Gifts | Vinoja Foods Chennai',
        description:
          'Compact snack & sweet boxes for office return gifts and corporate treats — authentic Tamil Nadu specialties. Confirm quantities on WhatsApp.'
      },
      ta: {
        title: 'அலுவலக & ரிட்டர்ன் கிஃப்ட் | வினோஜா ஃபூட்ஸ்',
        description:
          'அலுவலக ரிட்டர்ன் கிஃப்ட் மற்றும் நிறுவன விருந்துக்கு சிறிய சிற்றுண்டி & இனிப்பு பெட்டிகள். அளவை வாட்ஸ்அப்பில் உறுதி செய்யுங்கள்.'
      }
    },
    copy: {
      en: {
        label: 'Corporate & return gifts',
        title: 'Office & Return Gifts',
        subtitle:
          'Shareable packs for desks, farewell gifts, and small celebrations. Tell us quantity and area on WhatsApp — we’ll confirm stock and packing.',
        cta: 'Ask about return gifts on WhatsApp',
        waMessage:
          'Hello Vinoja Foods! I need office / return gift boxes. Please share pack options, pricing for quantity, and delivery to my area.',
        bundlesLabel: 'Gift-ready boxes',
        productsLabel: 'Popular for gifting'
      },
      ta: {
        label: 'அலுவலக & ரிட்டர்ன் கிஃப்ட்',
        title: 'அலுவலக & ரிட்டர்ன் கிஃப்ட்',
        subtitle:
          'மேசை, விடைபெறுதல் பரிசு, சிறிய கொண்டாட்டங்களுக்கு பகிரக்கூடிய பேக்குகள். அளவு மற்றும் பகுதியை வாட்ஸ்அப்பில் சொல்லுங்கள் — இருப்பு மற்றும் பேக்கிங்கை உறுதி செய்வோம்.',
        cta: 'ரிட்டர்ன் கிஃப்ட் பற்றி வாட்ஸ்அப்பில் கேளுங்கள்',
        waMessage:
          'வணக்கம் வினோஜா ஃபூட்ஸ்! அலுவலக / ரிட்டர்ன் கிஃப்ட் பெட்டிகள் வேண்டும். பேக் விருப்பங்கள், அளவு விலை, என் பகுதிக்கு டெலிவரியைப் பகிரவும்.',
        bundlesLabel: 'பரிசுக்கு தயாரான பெட்டிகள்',
        productsLabel: 'பரிசுக்கு பிரபலமானவை'
      }
    }
  }
];

export function getOccasion(slug: string): OccasionPage | undefined {
  return OCCASIONS.find((o) => o.slug === slug);
}

export const OCCASION_NAV = {
  en: [
    { label: 'Festival Specials', href: '/en/occasions/festival/' },
    { label: 'Tea-Time', href: '/en/occasions/tea-time/' },
    { label: 'Office Gifts', href: '/en/occasions/office-gifts/' }
  ],
  ta: [
    { label: 'திருவிழா சிறப்புகள்', href: '/ta/occasions/festival/' },
    { label: 'தேநீர் நேரம்', href: '/ta/occasions/tea-time/' },
    { label: 'அலுவலக பரிசு', href: '/ta/occasions/office-gifts/' }
  ]
} as const;
