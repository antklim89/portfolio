import process from 'node:process';
import path from 'node:path';
import fs from 'fs-extra';
import acceptLanguage from 'accept-language';
import { cookies, headers } from 'next/headers';
import type { LocaleType, Translation } from '@/lib/types';
import { defaultLocale } from '@/lib/constants';
import { isCorrectLocale } from '@/lib/utils';


export function getServerLocale(): LocaleType {
  const cookiesLocale = cookies().get('locale')?.value;
  if (isCorrectLocale(cookiesLocale)) return cookiesLocale;

  const headerLocale = acceptLanguage.get(headers().get('accept-language'));
  if (isCorrectLocale(headerLocale)) return headerLocale;

  return defaultLocale;
}


export async function getTranslation(locale: LocaleType): Promise<Translation> {
  const translationPath = path.resolve(process.cwd(), `lib/locales/${locale}.json`);
  const translationContent = await fs.readFile(translationPath, 'utf-8');
  const translation = JSON.parse(translationContent) as Translation;

  return translation;
}
