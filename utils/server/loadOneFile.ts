import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';


export async function loadOneFile(fileDir: string, fileName: string): Promise<unknown> {
  const filesFolderPath = path.resolve(process.cwd(), 'public/content', fileDir, `${fileName}.json`);

  const file = await fs.readFile(filesFolderPath, 'utf-8');
  const object = JSON.parse(file) as unknown;

  return object;
}
