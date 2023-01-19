import { Locale } from '~/types';


export async function getTranslations(locale: Locale = Locale.en): Promise<typeof import('~/locales/en.json')> {
    const response = await import(`~/locales/${locale}.json`);

    return response;
}
