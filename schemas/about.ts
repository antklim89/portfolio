import { z } from 'zod';


export const aboutSchema = z.object({
  title: z.string(),
  description: z.string(),
  photo: z.string(),
  name: z.string(),
  keywords: z.string().array(),
});
