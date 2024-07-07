import type { z } from 'zod';
import type { technologySchema } from '~/schemas';

export type TechnologyType = z.infer<typeof technologySchema>;
