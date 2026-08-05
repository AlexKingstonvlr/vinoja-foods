import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Vinoja Foods Blog',
    description: 'Authentic South Indian snacks and sweets - blog updates from Vinoja Foods',
    site: context.site?.toString() || 'https://vinojafoods.com',
    stylesheet: '/rss.xsl',
    items: [
      {
        title: 'The History of Murukku: A Tamil Nadu Tradition',
        pubDate: new Date('2025-01-15'),
        description: 'Explore the fascinating 500-year history of murukku in Tamil Nadu.',
        link: '/en/blog/history-of-murukku/'
      },
      {
        title: '5 Reasons Our Snacks Are Fresher Than the Rest',
        pubDate: new Date('2025-01-10'),
        description: 'Learn about our freshness process from kitchen to doorstep.',
        link: '/en/blog/why-fresher-snacks/'
      },
      {
        title: 'Traditional Sweets for Every Festival',
        pubDate: new Date('2025-01-05'),
        description: 'Discover the traditional sweets that make every Tamil Nadu festival special.',
        link: '/en/blog/traditional-sweets-festivals/'
      }
    ],
    customData: '<language>en-in</language>'
  });
}
