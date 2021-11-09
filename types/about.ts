import { z } from 'zod';

import { aboutSchema } from '~/schemas/about';


export type AboutType = z.infer<typeof aboutSchema>

export interface AboutTypeWithBlurData extends AboutType {
    blurData: string
}
