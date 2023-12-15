import path from 'path';

import fs from 'fs-extra';

import { Locale, Translation } from '~/types';


export async function getTranslation(locale: Locale): Promise<Translation> {
    const translationContent = await fs.readFile(path.resolve(process.cwd(), `locales/${locale}.json`), 'utf-8');
    const translation = JSON.parse(translationContent);

    return translation;
}
