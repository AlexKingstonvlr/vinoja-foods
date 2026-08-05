export const LOCALES = ['en', 'ta'] as const;
export const DEFAULT_LOCALE = 'en' as const;

export type Locale = typeof LOCALES[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ta: 'தமிழ்'
};

export const LOCALE_DIRS: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ta: 'ltr'
};

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
}

export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (locale === DEFAULT_LOCALE) {
    return pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';
  }
  return pathname.replace(`/${locale}`, '') || '/';
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  if (locale === DEFAULT_LOCALE) {
    return `/${DEFAULT_LOCALE}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  }
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}

export function getAlternateUrls(pathname: string, siteUrl: string): Record<Locale, string> {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const alternates: Record<Locale, string> = {
    en: '',
    ta: ''
  };
  
  for (const locale of LOCALES) {
    const localizedPath = locale === DEFAULT_LOCALE 
      ? `/${DEFAULT_LOCALE}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
      : `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    alternates[locale] = new URL(localizedPath, siteUrl).toString();
  }
  
  return alternates;
}

export function getHreflangLinks(pathname: string, siteUrl: string): string {
  const alternates = getAlternateUrls(pathname, siteUrl);
  return LOCALES.map(locale => 
    `<link rel="alternate" hreflang="${locale}" href="${alternates[locale]}" />`
  ).join('\n');
}

export function getCanonicalUrl(pathname: string, siteUrl: string): string {
  const locale = getLocaleFromPath(pathname);
  const localizedPath = getLocalizedPath(pathname, locale);
  return new URL(localizedPath, siteUrl).toString();
}