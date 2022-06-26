import { introSchema } from '~/schemas';
import { IntroType } from '~/types';

import { getLocale } from './getLocale';
import { loadOneFile } from './loadOneFile';


export async function getIntro(locale: string): Promise<IntroType> {
    const introData = await loadOneFile('intro', 'index');

    const introLocale = getLocale(introData, locale);

    const intro = await introSchema.parseAsync(introLocale);

    return intro;
}
