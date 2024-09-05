import { getLocale } from './getLocale';
import { loadManyFiles } from './loadManyFiles';
import { projectSchema } from '~/schemas';
import type { ProjectType } from '~/types';


export async function getProjects(locale: string): Promise<ProjectType[]> {
  const projectsData = await loadManyFiles('projects');
  const projectsLocales = projectsData.map(project => getLocale(project, locale));
  const projects = await projectSchema.array().parseAsync(projectsLocales);

  return projects;
}
