/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale: 'en' | 'ta';
    lang: string;
    t: (key: string, params?: Record<string, string>) => string;
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_WHATSAPP_NUMBER: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly DECAP_CMS_GITHUB_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{ Content: import('astro').Component; headings: import('astro').MarkdownHeading[] }>;
    '.mdx': Promise<{ Content: import('astro').Component; headings: import('astro').MarkdownHeading[] }>;
  }
}