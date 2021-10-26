import { z } from 'zod';


export const projectPreviewSchema = z.object({
    technologies: z.array(z.string()).min(1),
    title: z.string(),
    link: z.string(),
    image: z.string(),
});

