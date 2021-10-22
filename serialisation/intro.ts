import { z } from 'zod';

import { IntroType } from '~/types/intro';


export const introSchema = z.object({
    title: z.string(),
    text: z.string(),
});

export const introLocalesSchema = z.record(introSchema);


export const introSerialisation = (data: unknown, locale: string): IntroType => {
    const intro = introLocalesSchema.parse(data);

    if (locale in intro) return intro[locale];
    return intro.en;
};
