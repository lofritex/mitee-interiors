import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            overview: z.string().optional(),
            cover: image(),
            location: z.string(),
            category: z.enum(["commercial", "residential"]),
            completionDate: z.string().transform((str) => new Date(str)),
            area: z.string(),
            scope: z.string(),
            images: z.array(image()).optional(),
        }),
});

export const collections = {
    projects,
};
