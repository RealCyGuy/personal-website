import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      source: "projects/*.yaml",
      type: "data",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        date: z.string().date(),
        links: z.object({
          website: z.string().optional(),
          github: z.string().optional(),
          github2: z.string().optional(),
          discord: z.string().optional(),
          pypi: z.string().optional(),
          npm: z.string().optional(),
        }),
        status: z.enum(["Active", "Paused", "Offline"]).optional(),
      }),
    }),
  },
});
