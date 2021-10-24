import { z } from 'zod';

import { introSchema } from '~/schemas/intro';


export type IntroType = z.infer<typeof introSchema>
