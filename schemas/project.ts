import { z } from 'zod';


export const projectSchema = z.object({
    layout: z.string(),
    body: z.string(),
    title: z.string(),
    link: z.string(),
    image: z.string(),
});

