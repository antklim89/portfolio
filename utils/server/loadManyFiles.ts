import fs from 'fs/promises';
import path from 'path';


export async function loadManyFiles(filesFolder: string): Promise<unknown[]> {
    const filesFolderPath = path.resolve(process.cwd(), 'public/content', filesFolder);

    const filesInFolder = await fs.readdir(filesFolderPath);

    const projects = filesInFolder
        .filter((file) => (/\.json$/gi).test(file))
        .map(async (projectFile) => {
            const file = await fs.readFile(path.resolve(filesFolderPath, projectFile), 'utf-8');
            const object = JSON.parse(file);
            return object;
        });

    return Promise.all(projects);
}
