import type { z } from 'zod';
import type { aboutSchema } from '~/schemas/about';

export type AboutType = z.infer<typeof aboutSchema>;
