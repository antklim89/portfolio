import { z } from 'zod';


export const projectPreviewSchema = z.object({
    technologies: z.array(z.string()).min(1),
    title: z.string(),
    link: z.string(),
    github: z.string(),
    image: z.string(),
    slug: z.string(),
});

export const projectSchema = z.object({ body: z.string() }).merge(projectPreviewSchema);


