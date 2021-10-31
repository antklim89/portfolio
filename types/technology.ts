import { z } from 'zod';

import { technologySchema } from '~/schemas';


export type TechnologyType = z.infer<typeof technologySchema>
