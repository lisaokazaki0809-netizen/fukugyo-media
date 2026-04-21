import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['investment', 'ai', 'entrepreneur', 'jobchange', 'career']),
    tags: z.array(z.string()).default([]),
    image: z.string().default('/images/og-default.png'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
