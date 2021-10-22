import { z } from 'zod';

import { introSchema } from '~/serialisation/intro';


export type IntroType = z.infer<typeof introSchema>
