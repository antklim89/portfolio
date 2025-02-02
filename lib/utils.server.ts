import { cookies as getCookies, headers as getHeaders } from 'next/headers';
import { cache } from 'react';
import acceptLanguage from 'accept-language';
import { defaultLocale } from '@/lib/constants';
import type { DefaultTranslation, LocaleType } from '@/lib/types';
import { isCorrectLocale } from '@/lib/utils';


export const getServerLocale = cache(async (): Promise<LocaleType> => {
  const cookies = await getCookies();
  const cookiesLocale = cookies.get('locale')?.value;
  if (isCorrectLocale(cookiesLocale)) return cookiesLocale;

  const headers = await getHeaders();
  const headerLocale = acceptLanguage.get(headers.get('accept-language'));
  if (isCorrectLocale(headerLocale)) return headerLocale;

  return defaultLocale;
});

export const getTranslation = cache(async (locale: LocaleType): Promise<DefaultTranslation> => {
  const translation = await import(`@/lib/locales/${locale}.json`) as DefaultTranslation;
  return { ...translation };
});
