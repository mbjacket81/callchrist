import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each "moment" is one hard situation, written as a Markdown file in src/content/moments/.
// The Markdown body is the reflection. Verses and the prayer live in the frontmatter
// so every page has the same structure.
const moments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/moments' }),
  schema: z.object({
    title: z.string(),                 // H1, e.g. "When anxiety won't let go"
    seoTitle: z.string(),              // <title>, matches what people search for
    description: z.string().max(160),  // meta description
    category: z.enum(['emotional', 'loss', 'family', 'health', 'work', 'faith']),
    opening: z.string(),               // one gentle line shown under the title
    verses: z
      .array(z.object({ ref: z.string(), text: z.string() }))
      .min(1)
      .max(3),
    prayer: z.string(),
    showCrisisNote: z.boolean().default(false),
    related: z.array(z.string()).default([]), // slugs of other moments
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { moments };
