import { z } from 'zod';

import { projectSchema, projectSchema } from '~/schemas/project';


export type ProjectPreviewType = z.infer<typeof projectSchema>

export type ProjectType = z.infer<typeof projectSchema>
