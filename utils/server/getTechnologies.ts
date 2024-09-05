import { getLocale } from './getLocale';
import { loadManyFiles } from './loadManyFiles';
import { technologySchema } from '~/schemas';
import type { TechnologyType } from '~/types';


export async function getTechnologies(locale: string): Promise<TechnologyType[]> {
  const technologies = await loadManyFiles('technologies');
  const technologiesLocales = technologies.map(item => getLocale(item, locale));
  const result = await technologySchema.array().parseAsync(technologiesLocales);

  return result;
}
