import { defineCollection, z } from 'astro:content';

const productSchema = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  weight: z.string(),
  images: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    isMain: z.boolean().default(false)
  })).min(1),
  inStock: z.boolean().default(true),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  whatsappMessage: z.string().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional()
  }).optional()
});

const categorySchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  image: z.string().optional(),
  order: z.number().default(0),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional()
  }).optional()
});

const blogSchema = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  coverImage: z.string(),
  author: z.string().default('Vinoja Foods'),
  publishDate: z.string(),
  tags: z.array(z.string()).default([]),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional()
  }).optional()
});

const pageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional()
  }).optional()
});

export const collections = {
  products: defineCollection({
    type: 'content',
    schema: productSchema
  }),
  categories: defineCollection({
    type: 'content',
    schema: categorySchema
  }),
  blog: defineCollection({
    type: 'content',
    schema: blogSchema
  }),
  pages: defineCollection({
    type: 'content',
    schema: pageSchema
  })
};