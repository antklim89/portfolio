import { getLocale } from './getLocale';
import { loadOneFile } from './loadOneFile';
import { aboutSchema } from '~/schemas';
import type { AboutType } from '~/types';


export async function getAbout(locale: string): Promise<AboutType> {
  const about = await loadOneFile('about', 'index');
  const aboutLocale = getLocale(about, locale);
  const result = await aboutSchema.parseAsync(aboutLocale);

  return result;
}
