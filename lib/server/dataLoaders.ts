import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';
import { z, type ZodType } from 'zod';
import { locales } from '@/lib/constants';
import { aboutSchema, projectSchema, technologySchema } from '@/lib/schemas';
import type {
  AboutType,
  LocaleType,
  ProjectType,
  TechnologyType,
} from '@/lib/types';


const BASE_CONTENT_PATH = path.resolve(process.cwd(), 'content');

const contentLocaleSchema = z.record(z.enum(locales as [typeof locales[number]]), z.record(z.unknown()));

export function mergeLocales<T extends ZodType<unknown>>(data: unknown, locale: LocaleType): z.infer<T> {
  const record = contentLocaleSchema.parse(data);
  return { ...record.en, ...record[locale] };
}

export async function getAbout(locale: LocaleType): Promise<AboutType> {
  const data = await loadOneFile('about');
  const dataLocale = mergeLocales(data, locale);
  const result = await aboutSchema.parseAsync(dataLocale);

  return result;
}

export async function getProjects(locale: LocaleType): Promise<ProjectType[]> {
  const data = await loadManyFiles('projects');
  const dataLocales = data.map(project => mergeLocales(project, locale));
  const result = await projectSchema.array().parseAsync(dataLocales);

  return result;
}

export async function getTechnologies(locale: LocaleType): Promise<TechnologyType[]> {
  const data = await loadManyFiles('technologies');
  const dataLocales = data.map(item => mergeLocales(item, locale));
  const result = await technologySchema.array().parseAsync(dataLocales);

  return result;
}

export async function loadManyFiles(filesFolder: string): Promise<unknown[]> {
  const filesPath = path.join(BASE_CONTENT_PATH, filesFolder);
  const fileNames = await fs.readdir(filesPath);

  const result = fileNames
    .filter(fileName => path.extname(fileName) === '.json')
    .map(async (fileName) => {
      const fileContent = await fs.readFile(path.join(filesPath, fileName), 'utf-8');
      return JSON.parse(fileContent) as unknown;
    });

  return Promise.all(result);
}

export async function loadOneFile(fileName: string): Promise<unknown> {
  const filePath = path.join(BASE_CONTENT_PATH, `${fileName}.json`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent) as unknown;
}
