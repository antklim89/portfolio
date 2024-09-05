import { z } from 'zod';


export const aboutSchema = z.object({
  title: z.string(),
  description: z.string(),
  photo: z.string(),
  name: z.string(),
  keywords: z.string().array(),
});

export const projectSchema = z.object({
  technologies: z.array(z.string()).min(1),
  body: z.string(),
  title: z.string(),
  link: z.string(),
  github: z.string(),
  image: z.string(),
});

export const technologySchema = z.object({
  title: z.string(),
  link: z.string(),
  body: z.string(),
  image: z.string(),
});
