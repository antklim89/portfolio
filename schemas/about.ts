import { z } from 'zod';


export const aboutSchema = z.object({
    text: z.string(),
    image: z.string(),
});

