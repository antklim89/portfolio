import type { z } from 'zod';
import type { technologySchema } from '@/lib/schemas';


export type TechnologyType = z.infer<typeof technologySchema>;
