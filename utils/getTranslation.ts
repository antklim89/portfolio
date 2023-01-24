import { locales } from '~/constants';
import { Locale, Translation } from '~/types';


export async function getTranslation(locale: string): Promise<Translation> {
    if (!locales.includes(locale as Locale)) throw new Error(`Unsupported locale"${locale}"`);

    const response = await import(`~/locales/${locale}.json`);

    return { ...response };
}
