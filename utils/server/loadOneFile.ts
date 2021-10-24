import fs from 'fs/promises';
import path from 'path';


export async function loadOneFile(filePath: string): Promise<unknown> {
    const filesFolderPath = path.resolve(process.cwd(), 'public/content', filePath);

    const file = await fs.readFile(filesFolderPath, 'utf-8');
    const object = JSON.parse(file);


    return object;
}
