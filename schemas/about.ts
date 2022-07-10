import { z } from 'zod';


export const aboutSchema = z.object({
    title: z.string(),
    text: z.string(),
    image: z.string(),
});

