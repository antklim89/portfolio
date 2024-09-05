import { z } from 'zod';


export const introSchema = z.object({
  title: z.string(),
  text: z.string(),
});
