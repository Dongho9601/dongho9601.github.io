import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    status: z.string().default('In development'),
    technologies: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    playUrl: z.string().optional(),
  }),
});

export const collections = { writing, projects };
