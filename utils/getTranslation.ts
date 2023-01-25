import { Locale, Translation } from '~/types';


export async function getTranslation(locale: Locale): Promise<Translation> {
    const translation = await import(`~/locales/${locale}.json`);

    return { ...translation };
}
