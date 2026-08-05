/** Tamil Nadu region → specialty storytelling, tied to product origins. */

export interface OriginRegion {
  id: string;
  place: { en: string; ta: string };
  specialty: { en: string; ta: string };
  /** Product slugs associated with this origin */
  productSlugs: string[];
}

export const ORIGIN_REGIONS: OriginRegion[] = [
  {
    id: 'manapparai',
    place: { en: 'Manapparai', ta: 'மணப்பாறை' },
    specialty: { en: 'Kai Murukku — hand-rolled crunch', ta: 'கை முறுக்கு — கையால் உருட்டிய முறிவு' },
    productSlugs: ['kai-murukku']
  },
  {
    id: 'madurai',
    place: { en: 'Madurai', ta: 'மதுரை' },
    specialty: { en: 'Mysore Pak, mixtures & festival snacks', ta: 'மைசூர் பாக், மிக்ச்சர் & திருவிழா சிற்றுண்டிகள்' },
    productSlugs: ['mysore-pak', 'boondi-mixture', 'seedai']
  },
  {
    id: 'coimbatore',
    place: { en: 'Coimbatore', ta: 'கோயம்புத்தூர்' },
    specialty: { en: 'Thenkuzhal — tube-shaped crisp', ta: 'தென்குழல் — குழாய் வடிவ முறிவு' },
    productSlugs: ['thenkuzhal']
  },
  {
    id: 'thanjavur',
    place: { en: 'Thanjavur', ta: 'தஞ்சாவூர்' },
    specialty: { en: 'Adhirasam — jaggery classic', ta: 'அதிரசம் — வெல்ல பாரம்பரியம்' },
    productSlugs: ['adhirasam']
  },
  {
    id: 'tirunelveli',
    place: { en: 'Tirunelveli', ta: 'திருநெல்வேலி' },
    specialty: { en: 'Kara Boondi — spicy tea-time', ta: 'காரா பூந்தி — காரமான தேநீர் நேரம்' },
    productSlugs: ['kara-boondi']
  },
  {
    id: 'salem',
    place: { en: 'Salem', ta: 'சேலம்' },
    specialty: { en: 'Ribbon Pakoda — light & crisp', ta: 'ரிபன் பகோடா — இலேசான முறிவு' },
    productSlugs: ['ribbon-pakoda']
  },
  {
    id: 'thoothukudi',
    place: { en: 'Thoothukudi', ta: 'தூத்துக்குடி' },
    specialty: { en: 'Badusha — flaky sugar-syrup sweet', ta: 'பாதுஷா — மெல்லிய சிரப்பு இனிப்பு' },
    productSlugs: ['badusha']
  },
  {
    id: 'kumbakonam',
    place: { en: 'Kumbakonam', ta: 'கும்பகோணம்' },
    specialty: { en: 'Kalakand — soft milk sweet', ta: 'கலகாந்து — மிருது பால் இனிப்பு' },
    productSlugs: ['kalakand']
  },
  {
    id: 'kanchipuram',
    place: { en: 'Kanchipuram', ta: 'காஞ்சிபுரம்' },
    specialty: { en: 'Thattai — festival flat crisps', ta: 'தட்டை — திருவிழா தட்டை முறிவு' },
    productSlugs: ['thattai']
  },
  {
    id: 'trichy',
    place: { en: 'Tiruchirappalli', ta: 'திருச்சிராப்பள்ளி' },
    specialty: { en: 'Besan Laddu — ghee-rich balls', ta: 'கடலை மாவு லட்டு — நெய் நிறைந்த உருண்டைகள்' },
    productSlugs: ['laddu']
  }
];

export const ORIGINS_PAGE = {
  en: {
    title: 'Best of every region',
    subtitle:
      'We don’t make everything in Chennai. Each snack comes from the town famous for it — then reaches our Chennai shop within a day, hygienically packed.',
    label: 'Tamil Nadu origins',
    hygieneTitle: 'Packed with care',
    hygieneBody:
      'Sealed for freshness from maker to our shop. Sold in Chennai — never claiming “made in Chennai.”'
  },
  ta: {
    title: 'ஒவ்வொரு மாவட்டத்தின் சிறந்தவை',
    subtitle:
      'நாங்கள் எல்லாவற்றையும் சென்னையில் செய்வதில்லை. ஒவ்வொரு சிற்றுண்டியும் அதற்கு புகழ்பெற்ற ஊரிலிருந்து வந்து, சுகாதாரமாக பேக் செய்யப்பட்டு ஒரு நாளுக்குள் எங்கள் சென்னை கடைக்கு வரும்.',
    label: 'தமிழ்நாட்டு மூலங்கள்',
    hygieneTitle: 'கவனத்துடன் பேக்',
    hygieneBody:
      'தயாரிப்பாளரிடமிருந்து கடை வரை புதுமைக்கு இறுக்கமாக மூடப்பட்டவை. சென்னையில் விற்பனை — “சென்னையில் தயாரிப்பு” என்று சொல்வதில்லை.'
  }
} as const;
