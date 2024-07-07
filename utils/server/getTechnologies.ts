import { technologySchema } from '~/schemas';
import type { TechnologyType } from '~/types';
import { getLocale } from './getLocale';
import { loadManyFiles } from './loadManyFiles';

export const getTechnologies = async (locale: string): Promise<TechnologyType[]> => {
    const data = await loadManyFiles('technologies');
    const dataLocaled = data.map((item) => getLocale(item, locale));
    const result = await technologySchema.array().parseAsync(dataLocaled);

    return result;
};
