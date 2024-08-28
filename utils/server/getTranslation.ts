import path from 'node:path';
import fs from 'fs-extra';
import type { LocaleType, Translation } from '~/types';

export async function getTranslation(locale: LocaleType): Promise<Translation> {
    const translationPath = path.resolve(process.cwd(), `locales/${locale}.json`);
    const translationContent = await fs.readFile(translationPath, 'utf-8');
    const translation = JSON.parse(translationContent);

    return translation;
}
