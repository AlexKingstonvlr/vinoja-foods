import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vinojafoods.com',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  compressHTML: true,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ta'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    drafts: true
  },
  vite: {
    build: {
      cssCodeSplit: true
    },
    optimizeDeps: {
      include: ['sharp']
    }
  },
  scopedStyleStrategy: 'where',
  devToolbar: {
    enabled: true
  }
});