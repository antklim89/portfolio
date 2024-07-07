import path from 'node:path';

import fs from 'fs-extra';

export async function loadManyFiles(filesFolder: string): Promise<unknown[]> {
    const filesFolderPath = path.resolve(process.cwd(), 'public/content', filesFolder);

    const filesInFolder = await fs.readdir(filesFolderPath);

    const projects = filesInFolder
        .filter((file) => /\.json$/gi.test(file))
        .map(async (fileName) => {
            const fileContent = await fs.readFile(path.resolve(filesFolderPath, fileName), 'utf-8');
            const object = JSON.parse(fileContent);
            return object;
        });

    return Promise.all(projects);
}
