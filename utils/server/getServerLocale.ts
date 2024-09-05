import acceptLanguage from 'accept-language';
import { cookies, headers } from 'next/headers';
import { defaultLocale } from '~/constants';
import type { LocaleType } from '~/types';
import { isLocale } from '~/utils';


export function getServerLocale(): LocaleType {
  const cookiesLocale = cookies().get('locale')?.value;
  if (isLocale(cookiesLocale)) return cookiesLocale;

  const headerLocale = acceptLanguage.get(headers().get('accept-language'));
  if (isLocale(headerLocale)) return headerLocale;

  return defaultLocale;
}
