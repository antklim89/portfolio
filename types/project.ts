import { z } from 'zod';

import { projectSchema } from '~/schemas/project';


export type ProjectType = z.infer<typeof projectSchema>
