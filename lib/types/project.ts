import type { z } from 'zod';
import type { projectSchema } from '@/lib/schemas/project';


export type ProjectType = z.infer<typeof projectSchema>;
