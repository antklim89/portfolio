import path from 'path';

import fs from 'fs-extra';


export async function getTranslations(locale: string): Promise<unknown> {
    const filesFolderPath = path.resolve(process.cwd(), 'public/locales', locale, 'common.json');

    const file = await fs.readFile(filesFolderPath, 'utf-8');
    const object = JSON.parse(file);

    return object;
}
