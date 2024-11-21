import { cookies as getCookies, headers as getHeaders } from 'next/headers';
import path from 'node:path';
import process from 'node:process';
import acceptLanguage from 'accept-language';
import fs from 'fs-extra';
import { defaultLocale } from '@/lib/constants';
import type { LocaleType, Translation } from '@/lib/types';
import { isCorrectLocale } from '@/lib/utils';


export async function getServerLocale(): Promise<LocaleType> {
  const cookies = await getCookies();
  const headers = await getHeaders();
  const cookiesLocale = cookies.get('locale')?.value;
  if (isCorrectLocale(cookiesLocale)) return cookiesLocale;

  const headerLocale = acceptLanguage.get(headers.get('accept-language'));
  if (isCorrectLocale(headerLocale)) return headerLocale;

  return defaultLocale;
}


export async function getTranslation(locale: LocaleType): Promise<Translation> {
  const translationPath = path.resolve(process.cwd(), `lib/locales/${locale}.json`);
  const translationContent = await fs.readFile(translationPath, 'utf-8');
  const translation = JSON.parse(translationContent) as Translation;

  return translation;
}
