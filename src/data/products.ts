export interface Product {
  id: number;
  slug: string;
  name: string;
  tamilName: string;
  price: number;
  originalPrice: number;
  weight: string;
  category: string;
  categoryName: string;
  image: string;
  inStock: boolean;
  featured: boolean;
  description: {
    en: string;
    ta: string;
  };
  shortDescription: {
    en: string;
    ta: string;
  };
  ingredients: {
    en: string;
    ta: string;
  };
  shelfLife: {
    en: string;
    ta: string;
  };
  storageInstructions: {
    en: string;
    ta: string;
  };
  origin: string;
  tags: {
    en: string[];
    ta: string[];
  };
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'kai-murukku',
    name: 'Kai Murukku',
    tamilName: 'கை முறுக்கு',
    price: 180,
    originalPrice: 200,
    weight: '200g',
    category: 'murukku-chakli',
    categoryName: 'Murukku & Chakli',
    image: '/images/products/kai-murukku.jpg',
    inStock: true,
    featured: true,
    description: {
      en: 'Our Kai Murukku is a beloved traditional snack handcrafted using time-honored techniques passed down through generations. Made from a carefully balanced blend of rice flour and urad dal, each murukku is hand-rolled and deep-fried to a golden perfection. The result is an irresistibly crunchy snack with a rich, nutty flavor that pairs perfectly with a hot cup of tea.',
      ta: 'எங்கள் கை முறுக்கு தலைமுறை தலைமுறையாக கடத்தப்பட்ட நேரத்தை மதிக்கும் நுட்பங்களைப் பயன்படுத்தி கையால் செய்யப்பட்ட பிரியமான பாரம்பரிய சிற்றுண்டி ஆகும். அரிசி மாவு மற்றும் உளுந்து பருப்பின் கவனமாக சமநிலையான கலவையிலிருந்து தயாரிக்கப்படுகிறது, ஒவ்வொரு முறுக்குவும் கையால் உருட்டப்பட்டு தங்க நிறமாக வறுக்கப்படுகிறது.',
    },
    shortDescription: {
      en: 'Traditional handmade murukku made with rice flour and urad dal.',
      ta: 'அரிசி மாவு மற்றும் உளுந்து பருப்புடன் கைநிர்மணம் செய்யப்பட்ட பாரம்பரிய முறுக்கு.',
    },
    ingredients: {
      en: 'Rice flour, Urad dal flour, Butter, Cumin seeds, Asafoetida, Salt, Oil',
      ta: 'அரிசி மாவு, உளுந்து மாவு, வெண்ணெய், சீரகம், பெருங்காயம், உப்பு, எண்ணெய்',
    },
    shelfLife: {
      en: '15 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 15 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place in an airtight container.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் காற்று புகாத பாத்திரத்தில் சேமியுங்கள்.',
    },
    origin: 'Manapparai, Tamil Nadu',
    tags: {
      en: ['Traditional', 'Handmade', 'Crispy'],
      ta: ['பாரம்பரிய', 'கைநிர்மணம்', 'முக்கிரிசான'],
    },
  },
  {
    id: 2,
    slug: 'mysore-pak',
    name: 'Mysore Pak',
    tamilName: 'மைசூர் பாக்',
    price: 220,
    originalPrice: 250,
    weight: '250g',
    category: 'sweets-mithai',
    categoryName: 'Sweets & Mithai',
    image: '/images/products/mysore-pak.jpg',
    inStock: true,
    featured: true,
    description: {
      en: 'Indulge in the rich, melt-in-your-mouth goodness of our authentic Mysore Pak. Made with premium besan (gram flour), pure ghee, and sugar, this classic South Indian sweet delivers an unparalleled taste experience. Each piece is carefully prepared to achieve the perfect texture — soft, porous, and dripping with ghee.',
      ta: 'பிரீமியம் கடலை மாவு, தூய நெய் மற்றும் சர்க்கரையுடன் செய்யப்பட்ட எங்கள் உண்மையான மைசூர் பாக்-இன் வளமான, வாயில் உருகும் நன்மையை அனுபவியுங்கள்.',
    },
    shortDescription: {
      en: 'Classic Mysore Pak made with besan, ghee, and sugar.',
      ta: 'கடலை மாவு, நெய் மற்றும் சர்க்கரையுடன் செய்யப்பட்ட கிளாஸிக் மைசூர் பாக்.',
    },
    ingredients: {
      en: 'Besan (Gram flour), Sugar, Ghee, Cardamom',
      ta: 'கடலை மாவு, சர்க்கரை, நெய், ஏலக்காய்',
    },
    shelfLife: {
      en: '10 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 10 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in an airtight container. Keep refrigerated in hot weather.',
      ta: 'காற்று புகாத பாத்திரத்தில் சேமியுங்கள்.',
    },
    origin: 'Madurai, Tamil Nadu',
    tags: {
      en: ['Sweet', 'Festival', 'Ghee'],
      ta: ['இனிப்பு', 'திருவிழா', 'நெய்'],
    },
  },
  {
    id: 3,
    slug: 'thenkuzhal',
    name: 'Thenkuzhal',
    tamilName: 'தென்குழல்',
    price: 160,
    originalPrice: 180,
    weight: '200g',
    category: 'murukku-chakli',
    categoryName: 'Murukku & Chakli',
    image: '/images/products/thenkuzhal.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Thenkuzhal is a beloved Tamil snack known for its distinctive tube shape and satisfying crunch. Made from a blend of rice flour and urad dal flour, seasoned with cumin and asafoetida, this snack delivers a savory flavor that keeps you reaching for more.',
      ta: 'தென்குழல் அதன் தனித்துவமான குழாய் வடிவம் மற்றும் திருப்தியான முறிவுக்கு பெயர் பெற்ற பிரியமான தமிழ்ச் சிற்றுண்டி ஆகும்.',
    },
    shortDescription: {
      en: 'Crispy thenkuzhal made with rice flour and spices.',
      ta: 'அரிசி மாவு மற்றும் மசாலாக்களுடன் முக்கிரிசான தென்குழல்.',
    },
    ingredients: {
      en: 'Rice flour, Urad dal flour, Butter, Cumin seeds, Asafoetida, Salt',
      ta: 'அரிசி மாவு, உளுந்து மாவு, வெண்ணெய், சீரகம், பெருங்காயம், உப்பு',
    },
    shelfLife: {
      en: '15 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 15 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் சேமியுங்கள்.',
    },
    origin: 'Coimbatore, Tamil Nadu',
    tags: {
      en: ['Crispy', 'Traditional'],
      ta: ['முக்கிரிசான', 'பாரம்பரிய'],
    },
  },
  {
    id: 4,
    slug: 'adhirasam',
    name: 'Adhirasam',
    tamilName: 'அதிரசம்',
    price: 200,
    originalPrice: 220,
    weight: '250g',
    category: 'sweets-mithai',
    categoryName: 'Sweets & Mithai',
    image: '/images/products/adhirasam.jpg',
    inStock: true,
    featured: true,
    description: {
      en: 'Adhirasam is an ancient Tamil sweet dating back to the Sangam period. Made with rice flour and jaggery, this disc-shaped delicacy has a unique crispy exterior and a soft, chewy center. A must-have during festivals and celebrations.',
      ta: 'அதிரசம் சங்க காலம் வரை சென்றடையும் பண்டைய தமிழ் இனிப்பு ஆகும்.',
    },
    shortDescription: {
      en: 'Traditional adhirasam made with rice flour and jaggery.',
      ta: 'அரிசி மாவு மற்றும் வெல்லத்துடனான பாரம்பரிய அதிரசம்.',
    },
    ingredients: {
      en: 'Rice flour, Jaggery, Ghee, Cardamom, Sesame seeds',
      ta: 'அரிசி மாவு, வெல்லம், நெய், ஏலக்காய், எள்',
    },
    shelfLife: {
      en: '12 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 12 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in an airtight container.',
      ta: 'காற்று புகாத பாத்திரத்தில் சேமியுங்கள்.',
    },
    origin: 'Thanjavur, Tamil Nadu',
    tags: {
      en: ['Traditional', 'Jaggery', 'Festival'],
      ta: ['பாரம்பரிய', 'வெல்லம்', 'திருவிழா'],
    },
  },
  {
    id: 5,
    slug: 'boondi-mixture',
    name: 'Boondi Mixture',
    tamilName: 'பூந்தி மிக்ச்சர்',
    price: 140,
    originalPrice: 160,
    weight: '200g',
    category: 'mixture-namkeen',
    categoryName: 'Mixture & Namkeen',
    image: '/images/products/boondi-mixture.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Our Boondi Mixture is the perfect balance of crispy boondi pearls, roasted peanuts, and aromatic spices. A versatile snack that satisfies your cravings any time of the day.',
      ta: 'எங்கள் பூந்தி மிக்ச்சர் முக்கிரிசான பூந்தி முத்துக்கள், வறுக்கப்பட்ட நிலக்கடலை மற்றும் மசாலாக்களின் சரியான சமநிலையாகும்.',
    },
    shortDescription: {
      en: 'Crispy boondi mixture with nuts and spices.',
      ta: 'பருப்பு மற்றும் மசாலாக்களுடனான முக்கிரிசான பூந்தி மிக்ச்சர்.',
    },
    ingredients: {
      en: 'Besan, Peanuts, Curry leaves, Red chili, Mustard seeds',
      ta: 'கடலை மாவு, நிலக்கடலை, கருவேப்பிலை, சிவப்பு மிளகாய்',
    },
    shelfLife: {
      en: '20 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 20 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் சேமியுங்கள்.',
    },
    origin: 'Madurai, Tamil Nadu',
    tags: {
      en: ['Mixture', 'Spicy'],
      ta: ['மிக்ச்சர்', 'காரமான'],
    },
  },
  {
    id: 6,
    slug: 'kara-boondi',
    name: 'Kara Boondi',
    tamilName: 'காரா பூந்தி',
    price: 130,
    originalPrice: 150,
    weight: '200g',
    category: 'mixture-namkeen',
    categoryName: 'Mixture & Namkeen',
    image: '/images/products/kara-boondi.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Kara Boondi is a spicy, crunchy snack made from gram flour droplets fried with curry leaves, red chilies, and aromatic spices. Perfect for tea time.',
      ta: 'காரா பூந்தி கருவேப்பிலை, சிவப்பு மிளகாய் மற்றும் மசாலாக்களுடன் கலந்த காரமான, முக்கிரிசான சிற்றுண்டி ஆகும்.',
    },
    shortDescription: {
      en: 'Spicy kara boondi perfect for tea time.',
      ta: 'தேநீர் நேரத்திற்கு ஏற்ற காரா பூந்தி.',
    },
    ingredients: {
      en: 'Besan, Curry leaves, Red chili, Mustard seeds, Asafoetida',
      ta: 'கடலை மாவு, கருவேப்பிலை, சிவப்பு மிளகாய், கடுகு',
    },
    shelfLife: {
      en: '20 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 20 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் சேமியுங்கள்.',
    },
    origin: 'Tirunelveli, Tamil Nadu',
    tags: {
      en: ['Spicy', 'Boondi'],
      ta: ['காரமான', 'பூந்தி'],
    },
  },
  {
    id: 7,
    slug: 'ribbon-pakoda',
    name: 'Ribbon Pakoda',
    tamilName: 'ரிபன் பகோடா',
    price: 150,
    originalPrice: 170,
    weight: '200g',
    category: 'murukku-chakli',
    categoryName: 'Murukku & Chakli',
    image: '/images/products/ribbon-pakoda.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Ribbon Pakoda is a visually appealing snack named for its delicate ribbon-like shape. Made from besan and rice flour, each piece is crispy, light, and seasoned to perfection.',
      ta: 'ரிபன் பகோடா அதன் நேர்த்தியான ரிபன் போன்ற வடிவத்திற்கு பெயர் பெற்ற காட்சிரீதியாக ஈர்க்கும் சிற்றுண்டி ஆகும்.',
    },
    shortDescription: {
      en: 'Crispy ribbon-shaped pakoda made with besan.',
      ta: 'கடலை மாவுடனான முக்கிரிசான ரிபன் வடிவ பகோடா.',
    },
    ingredients: {
      en: 'Besan, Rice flour, Butter, Sesame seeds, Asafoetida',
      ta: 'கடலை மாவு, அரிசி மாவு, வெண்ணெய், எள்',
    },
    shelfLife: {
      en: '15 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 15 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் சேமியுங்கள்.',
    },
    origin: 'Salem, Tamil Nadu',
    tags: {
      en: ['Crispy', 'Besan'],
      ta: ['முக்கிரிசான', 'கடலை மாவு'],
    },
  },
  {
    id: 8,
    slug: 'badusha',
    name: 'Badusha',
    tamilName: 'பாதுஷா',
    price: 190,
    originalPrice: 210,
    weight: '250g',
    category: 'sweets-mithai',
    categoryName: 'Sweets & Mithai',
    image: '/images/products/badusha.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Badusha is a flaky, layered pastry-like sweet soaked in sugar syrup. Its buttery texture and sweet glaze make it an irresistible treat for any occasion.',
      ta: 'பாதுஷா சர்க்கரை சிரப்பில் ஊறவைக்கப்பட்ட மெல்லிய, அடுக்குடைய பேஸ்ட்ரி போன்ற இனிப்பு ஆகும்.',
    },
    shortDescription: {
      en: 'Flaky layered badusha dipped in sugar syrup.',
      ta: 'சர்க்கரை சிரப்பில் ஊறவைக்கப்பட்ட மெல்லிய அடுக்கு பாதுஷா.',
    },
    ingredients: {
      en: 'Maida, Ghee, Curd, Sugar, Cardamom',
      ta: 'மைதா, நெய், தயிர், சர்க்கரை, ஏலக்காய்',
    },
    shelfLife: {
      en: '7 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 7 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in an airtight container.',
      ta: 'காற்று புகாத பாத்திரத்தில் சேமியுங்கள்.',
    },
    origin: 'Thoothukudi, Tamil Nadu',
    tags: {
      en: ['Sweet', 'Flaky'],
      ta: ['இனிப்பு', 'மெல்லிய'],
    },
  },
  {
    id: 9,
    slug: 'kalakand',
    name: 'Kalakand',
    tamilName: 'கலகாந்து',
    price: 240,
    originalPrice: 270,
    weight: '250g',
    category: 'sweets-mithai',
    categoryName: 'Sweets & Mithai',
    image: '/images/products/kalakand.jpg',
    inStock: false,
    featured: false,
    description: {
      en: 'Kalakand is a rich, grainy milk sweet made by slowly cooking milk with sugar. Topped with pistachios, this melt-in-your-mouth delicacy is a true indulgence.',
      ta: 'கலகாந்து பாலை மெதுவாக சமைத்து சர்க்கரையுடன் சேர்த்து தயாரிக்கப்படும் வளமான, தானிய பால் இனிப்பு ஆகும்.',
    },
    shortDescription: {
      en: 'Soft milk cake with pistachios.',
      ta: 'பிஸ்தா உடன் மிருது பால் கேக்.',
    },
    ingredients: {
      en: 'Milk, Sugar, Pistachios, Cardamom, Saffron',
      ta: 'பால், சர்க்கரை, பிஸ்தா, ஏலக்காய், குங்குமப்பூ',
    },
    shelfLife: {
      en: '5 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 5 நாட்கள்',
    },
    storageInstructions: {
      en: 'Refrigerate immediately.',
      ta: 'உடனடியாக குளிர்சாதனத்தில் வையுங்கள்.',
    },
    origin: 'Kumbakonam, Tamil Nadu',
    tags: {
      en: ['Sweet', 'Milk-based'],
      ta: ['இனிப்பு', 'பால்'],
    },
  },
  {
    id: 10,
    slug: 'thattai',
    name: 'Thattai',
    tamilName: 'தட்டை',
    price: 120,
    originalPrice: 140,
    weight: '150g',
    category: 'murukku-chakli',
    categoryName: 'Murukku & Chakli',
    image: '/images/products/thattai.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Thattai is an essential festival snack in Tamil Nadu. These flat, crispy discs are made from rice flour and lentils, seasoned with curry leaves and spices.',
      ta: 'தட்டை தமிழ்நாட்டில் திருவிழாக்களின் போது அத்தியாவசிய சிற்றுண்டியாகும்.',
    },
    shortDescription: {
      en: 'Crispy flat rice crackers with spices.',
      ta: 'மசாலாக்களுடனான முக்கிரிசான தட்டை அரிசி வண்டிகள்.',
    },
    ingredients: {
      en: 'Rice flour, Chana dal, Curry leaves, Sesame seeds, Red chili',
      ta: 'அரிசி மாவு, கடலை பருப்பு, கருவேப்பிலை, எள்',
    },
    shelfLife: {
      en: '15 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 15 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் சேமியுங்கள்.',
    },
    origin: 'Kanchipuram, Tamil Nadu',
    tags: {
      en: ['Traditional', 'Festival'],
      ta: ['பாரம்பரிய', 'திருவிழா'],
    },
  },
  {
    id: 11,
    slug: 'seedai',
    name: 'Seedai',
    tamilName: 'சீடை',
    price: 140,
    originalPrice: 160,
    weight: '150g',
    category: 'murukku-chakli',
    categoryName: 'Murukku & Chakli',
    image: '/images/products/seedai.jpg',
    inStock: true,
    featured: false,
    description: {
      en: 'Seedai is an integral part of Krishna Jayanthi celebrations. These deep-fried rice balls are crispy on the outside and soft inside, seasoned with cumin and asafoetida.',
      ta: 'சீடை கிருஷ்ண ஜெயந்தி கொண்டாட்டங்களின் அத்தியாவசிய பகுதியாகும்.',
    },
    shortDescription: {
      en: 'Traditional deep-fried rice balls.',
      ta: 'பாரம்பரிய ஆழமாக வறுக்கப்பட்ட அரிசி உருண்டைகள்.',
    },
    ingredients: {
      en: 'Rice flour, Urad dal flour, Butter, Cumin, Asafoetida',
      ta: 'அரிசி மாவு, உளுந்து மாவு, வெண்ணெய், சீரகம், பெருங்காயம்',
    },
    shelfLife: {
      en: '15 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 15 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in a cool, dry place.',
      ta: 'குளிர்ந்த, உலர்ந்த இடத்தில் சேமியுங்கள்.',
    },
    origin: 'Madurai, Tamil Nadu',
    tags: {
      en: ['Traditional', 'Festival'],
      ta: ['பாரம்பரிய', 'திருவிழா'],
    },
  },
  {
    id: 12,
    slug: 'laddu',
    name: 'Laddu',
    tamilName: 'லட்டு',
    price: 180,
    originalPrice: 200,
    weight: '200g',
    category: 'sweets-mithai',
    categoryName: 'Sweets & Mithai',
    image: '/images/products/laddu.jpg',
    inStock: true,
    featured: true,
    description: {
      en: 'Our Besan Laddu is a melt-in-your-mouth sweet ball made from slowly roasted gram flour in pure ghee, mixed with sugar, cashews, raisins, and cardamom.',
      ta: 'எங்கள் கடலை மாவு லட்டு தூய நெய்யில் மெதுவாக வறுக்கப்பட்ட கடலை மாவு மற்றும் சர்க்கரையுடன் வாயில் உருகும் இனிப்பு உருண்டை ஆகும்.',
    },
    shortDescription: {
      en: 'Besan laddu made with ghee and nuts.',
      ta: 'நெய் மற்றும் பருப்புடனான கடலை மாவு லட்டு.',
    },
    ingredients: {
      en: 'Besan, Ghee, Sugar, Cashews, Raisins, Cardamom',
      ta: 'கடலை மாவு, நெய், சர்க்கரை, முந்திரி, திராட்சை, ஏலக்காய்',
    },
    shelfLife: {
      en: '10 days from packaging date',
      ta: 'பேக்கேஜிங் தேதியிலிருந்து 10 நாட்கள்',
    },
    storageInstructions: {
      en: 'Store in an airtight container.',
      ta: 'காற்று புகாத பாத்திரத்தில் சேமியுங்கள்.',
    },
    origin: 'Tiruchirappalli, Tamil Nadu',
    tags: {
      en: ['Sweet', 'Festival', 'Ghee'],
      ta: ['இனிப்பு', 'திருவிழா', 'நெய்'],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
