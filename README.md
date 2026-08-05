# Vinoja Foods - Bilingual Static E-commerce Site

A modern, performant, bilingual (English + Tamil) static site for Vinoja Foods built with Astro, Tailwind CSS, and Decap CMS.

## Features

- **Bilingual**: Full English + Tamil support with locale-preserving routing (`/en/`, `/ta/`)
- **Static-first**: Pre-rendered pages for optimal performance and SEO
- **Product Catalog**: Categories, filtering, search, WhatsApp ordering
- **Blog**: Articles with categories, tags, and SEO optimization
- **Legal Pages**: Privacy Policy, Terms, Shipping, Refund, FAQ - all CMS-managed
- **CMS**: Decap CMS (Git-based) with bilingual content editing
- **SEO**: Sitemap, robots.txt, hreflang, JSON-LD schemas, Open Graph
- **Performance**: Lighthouse > 95, optimized images, minimal JS
- **Analytics**: Privacy-friendly (Plausible/Umami) with consent

## Tech Stack

- **Framework**: Astro 5.x (static output)
- **Styling**: Tailwind CSS 3.4 + Typography plugin
- **CMS**: Decap CMS (Content Management): Decap CMS (Netlify CMS fork)
- **i18n**: Astro built-in i18n routing
- **Images**: Astro Assets + Sharp optimization
- **Search**: Pagefind (client-side static search)
- **Forms**: Netlify Forms / Formspree
- **Analytics**: Plausible / Umami
- **Deployment**: Vercel / Netlify / Cloudflare Pages

## Project Structure

```
vinoja-foods/
├── public/
│   ├── admin/                 # Decap CMS
│   │   ├── config.yml
│   │   └── index.html
│   ├── fonts/                 # Self-hosted fonts
│   └── images/                # Static assets
├── src/
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── product/           # ProductCard, ProductGrid, ProductDetail
│   │   ├── blog/              # BlogCard, BlogDetail
│   │   ├── ui/                # Button, Image, SEO, Breadcrumb, WhatsAppButton
│   │   └── seo/               # JSON-LD schemas
│   ├── content/
│   │   ├── config.ts          # Content collections config
│   │   ├── en/                # English content
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── blog/
│   │   │   └── pages/
│   │   └── ta/                # Tamil content
│   │       ├── products/
│   │       ├── categories/
│   │       ├── blog/
│   │       └── pages/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── blog/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── privacy-policy/
│   │   │   ├── terms-conditions/
│   │   │   ├── shipping-returns/
│   │   │   ├── refund-policy/
│   │   │   ├── faq/
│   │   │   └── search/
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── i18n.ts
│   │   ├── whatsapp.ts
│   │   ├── schema.ts
│   │   └── search.ts
│   └── types/
│       └── content.d.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev
```

Visit `http://localhost:4321/en/` for English or `http://localhost:4321/ta/` for Tamil.

### Build for Production

```bash
pnpm build
```

Output will be in `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## Content Management

### Decap CMS

Access the CMS at `/admin/` after deployment.

Collections:
- **Products** - Bilingual product entries with images, pricing, categories
- **Categories** - Product categories with bilingual names/descriptions
- **Blog Posts** - Articles with bilingual content
- **Pages** - Legal/static pages (Privacy, Terms, Shipping, Refund, FAQ, About, Contact)
- **Settings** - Site-wide settings (logo, WhatsApp, contact info, SEO defaults)
- **Navigation** - Header/footer navigation structure per locale

### Content Structure

Each locale has its own content folder:
```
src/content/
├── en/
│   ├── products/*.md
│   ├── categories/*.md
│   ├── blog/*.md
│   └── pages/*.md
└── ta/
    ├── products/*.md
    ├── categories/*.md
    ├── blog/*.md
    └── pages/*.md
```

## Internationalization

### Routing

- `/en/` - English (default locale)
- `/ta/` - Tamil

Language switcher preserves current route:
- `/en/products/murukku` → `/ta/products/murukku`

### Adding Translations

1. Create corresponding file in `src/content/ta/` with same slug
2. Translate frontmatter fields marked as `i18n: true`
3. Use `<FormattedMessage>` component for UI strings

## SEO Configuration

### JSON-LD Schemas Included

- **Organization** - Site-wide
- **Product** - Product detail pages
- **BreadcrumbList** - All pages
- **BlogPosting** - Blog articles
- **FAQPage** - FAQ page
- **WebSite** - Search action

### Meta Tags Per Page

- Title, description (localized)
- Open Graph (title, description, image, locale)
- Twitter Card
- Canonical URL
- hreflang alternate links

## WhatsApp Ordering

Each product has a pre-filled WhatsApp message:

```
https://wa.me/91XXXXXXXXXX?text=Hello%20Vinoja%20Foods%2C%20I%27d%20like%20to%20order%20[Product%20Name]%20([Weight])%20for%20₹[Price]
```

Localized messages per product per locale.

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Configure environment variables
3. Deploy - Astro detected automatically

### Netlify

1. Connect repository
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Enable Netlify Forms for contact form
5. Enable Netlify Identity for CMS auth

### Cloudflare Pages

1. Connect repository
2. Build command: `pnpm build`
3. Build output: `dist`
4. Compatibility flags: `nodejs_compat`

## Environment Variables

See `.env.example` for all required variables.

## Performance Targets

- **Lighthouse Performance**: > 95
- **Lighthouse Accessibility**: > 95
- **Lighthouse Best Practices**: > 95
- **Lighthouse SEO**: > 95
- **Core Web Vitals**: All green

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- Proper heading hierarchy
- Focus management
- Color contrast ratios
- ARIA labels where needed
- Skip links
- Reduced motion support

## License

MIT License - feel free to use for your own projects.

## Support

For questions or customization, contact the development team.