import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';
import { type ZodType, z } from 'zod';
import { aboutSchema, projectSchema, technologySchema } from '@/schemas';
import type { AboutType, ProjectType, TechnologyType } from '@/types';


export function mergeLocales<T extends ZodType<unknown>>(data: unknown, locale: string): z.infer<T> {
  const record = z.record(z.record(z.unknown())).parse(data);

  return { ...record.en, ...record[locale] };
}

export async function getAbout(locale: string): Promise<AboutType> {
  const about = await loadOneFile('about', 'index');
  const aboutLocale = mergeLocales(about, locale);
  const result = await aboutSchema.parseAsync(aboutLocale);

  return result;
}

export async function getProjects(locale: string): Promise<ProjectType[]> {
  const projectsData = await loadManyFiles('projects');
  const projectsLocales = projectsData.map(project => mergeLocales(project, locale));
  const projects = await projectSchema.array().parseAsync(projectsLocales);

  return projects;
}

export async function getTechnologies(locale: string): Promise<TechnologyType[]> {
  const technologies = await loadManyFiles('technologies');
  const technologiesLocales = technologies.map(item => mergeLocales(item, locale));
  const result = await technologySchema.array().parseAsync(technologiesLocales);

  return result;
}


export async function loadManyFiles(filesFolder: string): Promise<unknown[]> {
  const filesFolderPath = path.resolve(process.cwd(), 'public/content', filesFolder);

  const filesInFolder = await fs.readdir(filesFolderPath);

  const projects = filesInFolder
    .filter(file => /\.json$/i.test(file))
    .map(async (fileName) => {
      const fileContent = await fs.readFile(path.resolve(filesFolderPath, fileName), 'utf-8');
      const object = JSON.parse(fileContent) as unknown;
      return object;
    });

  return Promise.all(projects);
}


export async function loadOneFile(fileDir: string, fileName: string): Promise<unknown> {
  const filesFolderPath = path.resolve(process.cwd(), 'public/content', fileDir, `${fileName}.json`);

  const file = await fs.readFile(filesFolderPath, 'utf-8');
  const object = JSON.parse(file) as unknown;

  return object;
}
