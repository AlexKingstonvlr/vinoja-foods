import type { Locale } from './i18n';

export const schemas = {
  organization: (locale: Locale) => {
    const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://vinojafoods.com';
    const lat = Number(import.meta.env.PUBLIC_MAP_LAT) || 13.0827;
    const lng = Number(import.meta.env.PUBLIC_MAP_LNG) || 80.2707;
    const name = locale === 'en' ? 'Vinoja Foods' : 'வினோஜா ஃபூட்ஸ்';
    return {
    '@context': 'https://schema.org',
    '@type': ['FoodAndBeverageBusiness', 'LocalBusiness', 'Store'],
    '@id': `${siteUrl}/#organization`,
    name,
    alternateName: locale === 'en' ? 'வினோஜா ஃபூட்ஸ்' : 'Vinoja Foods',
    description: locale === 'en' 
      ? 'Authentic Tamil Nadu snacks and sweets made in their famous places of origin — sold fresh at our Chennai shop within a day of packing.'
      : 'தமிழ்நாட்டின் புகழ்பெற்ற ஊர்களில் தயாரிக்கப்படும் உண்மையான சிற்றுண்டிகளும் மிட்டாய்களும் — ஒரு நாளுக்குள் சென்னை கடையில் புதிதாக.',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/og-default.jpg`,
    telephone: import.meta.env.PUBLIC_CONTACT_PHONE || '+91 XXXXXXXXXX',
    email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'info@vinojafoods.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: import.meta.env.PUBLIC_ADDRESS_EN || '123 Main Street',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng
    },
    hasMap: `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`,
    sameAs: [
      import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://instagram.com/vinojafoods',
      import.meta.env.PUBLIC_FACEBOOK_URL || 'https://facebook.com/vinojafoods',
      import.meta.env.PUBLIC_YOUTUBE_URL || 'https://youtube.com/@vinojafoods',
      import.meta.env.PUBLIC_TWITTER_URL || 'https://twitter.com/vinojafoods'
    ].filter(Boolean),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
    knowsLanguage: ['en', 'ta'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '20:00'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Chennai'
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: lat,
          longitude: lng
        },
        geoRadius: '50000'
      }
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX'}`,
      servicePhone: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX',
      availableLanguage: ['English', 'Tamil']
    },
    slogan: locale === 'en'
      ? 'Best of every region — sold fresh in Chennai'
      : 'ஒவ்வொரு மாவட்டத்தின் சிறப்பு — சென்னையில் புதிதாக'
  };
  },

  website: (locale: Locale) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: locale === 'en' ? 'Vinoja Foods' : 'வினோஜா ஃபூட்ஸ்',
    alternateName: locale === 'en' ? 'Vinoja Foods' : 'வினோஜா ஃபூட்ஸ்',
    url: `${import.meta.env.PUBLIC_SITE_URL || 'https://vinojafoods.com'}/${locale}/`,
    inLanguage: locale === 'en' ? 'en-IN' : 'ta-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${import.meta.env.PUBLIC_SITE_URL || 'https://vinojafoods.com'}/${locale}/search/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),

  product: (product: {
    name: string;
    description: string;
    image: string[];
    price: number;
    currency: string;
    availability: string;
    sku: string;
    brand: string;
    category: string;
    weight: string;
    url: string;
  }, locale: Locale) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: locale === 'en' ? 'Vinoja Foods' : 'வினோஜா ஃபூட்ஸ்'
    },
    category: product.category,
    weight: {
      '@type': 'QuantitativeValue',
      value: parseFloat(product.weight),
      unitCode: product.weight.includes('g') ? 'GRM' : 'KGM'
    },
    offers: {
      '@type': 'Offer',
      url: product.url,
      priceCurrency: product.currency,
      price: product.price,
      availability: product.availability === 'in-stock' 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: locale === 'en' ? 'Vinoja Foods' : 'வினோஜா ஃபூட்ஸ்'
      }
    }
  }),

  blogPost: (post: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: string;
    publisher: string;
    url: string;
    mainEntityOfPage: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.headline,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinoja Foods',
      logo: {
        '@type': 'ImageObject',
        url: `${import.meta.env.PUBLIC_SITE_URL || 'https://vinojafoods.com'}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.mainEntityOfPage
    }
  }),

  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }),

  collectionPage: (collection: {
    name: string;
    description: string;
    url: string;
    itemListElement: Array<{
      name: string;
      url: string;
      image: string;
      price: number;
      currency: string;
    }>;
  }, locale: Locale) => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url: collection.url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: collection.itemListElement.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: item.name,
          url: item.url,
          image: item.image,
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: item.currency,
            availability: 'https://schema.org/InStock'
          }
        }
      }))
    }
  })
};