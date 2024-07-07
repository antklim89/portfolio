import { z } from 'zod';

export const technologySchema = z.object({
    title: z.string(),
    link: z.string(),
    body: z.string(),
    image: z.string(),
});
