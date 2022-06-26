import { aboutSchema } from '~/schemas';
import { AboutType } from '~/types';

import { getLocale } from './getLocale';
import { loadOneFile } from './loadOneFile';


export const getAbout = async (locale: string): Promise<AboutType> => {
    const data = await loadOneFile('about', 'index');
    const dataLocaled = getLocale(data, locale);
    const result = await aboutSchema.parseAsync(dataLocaled);

    return result;
};
