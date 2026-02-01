import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/site' }),
  schema: z.any(),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    image: z.string(),
    logo: z.string(),
    icon: z.string(),
    description: z.string(),
    features: z.string(),
    website: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    instagram: z.string().optional(),
    photoCredit: z.string().optional(),
    category: z.string(),
    order: z.number(),
  }),
});

const studios = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    image: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    authorName: z.string(),
    authorRole: z.string(),
    avatar: z.string(),
    stars: z.number(),
    order: z.number(),
  }),
});

export const collections = { courses, studios, testimonials, site };
