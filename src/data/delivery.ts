/** Honest, configurable delivery / order copy — no invented guarantees. */

export const DELIVERY_INFO = {
  areasServed: {
    en: 'Chennai & nearby areas — confirm availability and delivery on WhatsApp.',
    ta: 'சென்னை மற்றும் அருகிலுள்ள பகுதிகள் — கிடைக்கும் தன்மை மற்றும் டெலிவரியை வாட்ஸ்அப்பில் உறுதி செய்யுங்கள்.'
  },
  howOrderingWorks: {
    en: 'Message us on WhatsApp with the products you want. We confirm stock, freshness, and delivery details before you pay.',
    ta: 'வேண்டிய பொருட்களை வாட்ஸ்அப்பில் அனுப்புங்கள். பணம் செலுத்துவதற்கு முன் இருப்பு, புதுமை, டெலிவரி விவரங்களை உறுதி செய்கிறோம்.'
  },
  freshness: {
    en: 'Made at famous places of origin across Tamil Nadu, hygienically packed, and arrives at our Chennai shop within a day.',
    ta: 'தமிழ்நாட்டின் புகழ்பெற்ற ஊர்களில் தயாரித்து, சுகாதாரமாக பேக் செய்து, ஒரு நாளுக்குள் எங்கள் சென்னை கடைக்கு வரும்.'
  },
  hygiene: {
    en: 'Sealed packing for freshness and food safety — from maker to our shop, then to you.',
    ta: 'புதுமைக்கும் உணவு பாதுகாப்பிற்கும் இறுக்கமான பேக்கிங் — தயாரிப்பாளரிடமிருந்து கடைக்கு, பின்னர் உங்களிடம்.'
  },
  note: {
    en: 'Exact delivery windows and fees depend on your area — we’ll confirm on WhatsApp.',
    ta: 'சரியான டெலிவரி நேரமும் கட்டணமும் உங்கள் பகுதியைப் பொறுத்தது — வாட்ஸ்அப்பில் உறுதி செய்வோம்.'
  }
} as const;

export const TRUST_STRIP = {
  en: [
    { label: 'Made at origin', detail: 'Famous towns across Tamil Nadu' },
    { label: 'Within a day to shop', detail: 'Fresh at our Chennai store' },
    { label: 'Hygienically packed', detail: 'Sealed for freshness' },
    { label: 'WhatsApp ordering', detail: 'Confirm before you pay' }
  ],
  ta: [
    { label: 'ஊரிலேயே தயாரிப்பு', detail: 'தமிழ்நாட்டின் புகழ்பெற்ற ஊர்கள்' },
    { label: 'ஒரு நாளுக்குள் கடைக்கு', detail: 'சென்னை கடையில் புதிதாக' },
    { label: 'சுகாதார பேக்கிங்', detail: 'புதுமைக்கு இறுக்கமாக மூடப்பட்டவை' },
    { label: 'வாட்ஸ்அப் ஆர்டர்', detail: 'பணத்திற்கு முன் உறுதி' }
  ]
} as const;
