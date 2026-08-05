import type { Locale } from './i18n';

export function formatPrice(price: number, locale: Locale = 'en'): string {
  const formatter = new Intl.NumberFormat(locale === 'en' ? 'en-IN' : 'ta-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return formatter.format(price);
}

export function formatDate(dateString: string, locale: Locale = 'en'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'en' ? 'en-IN' : 'ta-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getWhatsAppUrl(message: string, phoneNumber?: string): string {
  const number = phoneNumber || import.meta.env.PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

/** OpenStreetMap embed (no API key). Marker at shop coordinates. */
export function getOsmEmbedUrl(lat: number, lng: number, delta = 0.025): string {
  const minLng = lng - delta;
  const minLat = lat - delta * 0.75;
  const maxLng = lng + delta;
  const maxLat = lat + delta * 0.75;
  const bbox = encodeURIComponent(`${minLng},${minLat},${maxLng},${maxLat}`);
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${encodeURIComponent(`${lat},${lng}`)}`;
}

export function getOsmLink(lat: number, lng: number): string {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;
}

export function getGoogleMapsSearchUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function getProductWhatsAppMessage(
  productName: string,
  weight: string,
  price: number,
  locale: Locale
): string {
  const templates = {
    en: `Hello Vinoja Foods! I would like to order ${productName} (${weight}) for ₹${price}. Please confirm availability and delivery.`,
    ta: `வணக்கம் வினோஜா ஃபூட்ஸ்! நான் ${productName} (${weight}) ஐ ₹${price} க்கு ஆர்டர் செய்ய விரும்புகிறேன். தயவுசெய்து கிடைக்கும் தன்மை மற்றும் டெலிவரியை உறுதி செய்யவும்.`
  };
  return templates[locale];
}

export function getCategoryWhatsAppMessage(categoryName: string, locale: Locale): string {
  const templates = {
    en: `Hello Vinoja Foods! I'm interested in your ${categoryName} category. Could you share more details and pricing?`,
    ta: `வணக்கம் வினோஜா ஃபூட்ஸ்! நான் உங்கள் ${categoryName} வகை பற்றி ஆர்வமாக இருக்கிறேன். மேலும் விவரங்கள் மற்றும் விலைகளை பகிர முடியுமா?`
  };
  return templates[locale];
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function parseJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data, null, 2);
}

export function getJsonLdScript(data: Record<string, unknown>): string {
  return `<script type="application/ld+json">${parseJsonLd(data)}</script>`;
}