import { z } from 'zod';


export const projectSchema = z.object({
    technologies: z.array(z.string()).min(1),
    body: z.string(),
    title: z.string(),
    link: z.string(),
    github: z.string(),
    images: z.array(z.string()),
    slug: z.string(),
});

