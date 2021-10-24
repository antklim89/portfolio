import { z } from 'zod';

import { projectPreviewSchema, projectSchema } from '~/schemas/project';


export type ProjectPreviewType = z.infer<typeof projectPreviewSchema>

export type ProjectType = z.infer<typeof projectSchema>
