import { z } from 'zod';

import { projectPreviewSchema } from '~/schemas/project';


export type ProjectType = z.infer<typeof projectPreviewSchema>
