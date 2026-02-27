import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    heroImage: z.string().optional(),   // use /images/... from public
    heroImageAlt: z.string().optional(),

    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),

    canonical: z.string().url().optional(),
  }),
});

export const collections = {
  blog,
};