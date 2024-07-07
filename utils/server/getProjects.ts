import { projectSchema } from '~/schemas';
import type { ProjectType } from '~/types';
import { getLocale } from './getLocale';
import { loadManyFiles } from './loadManyFiles';

export const getProjects = async (locale: string): Promise<ProjectType[]> => {
    const projectsData = await loadManyFiles('projects');
    const projectsLocales = projectsData.map((project) => getLocale(project, locale));
    const projects = await projectSchema.array().parseAsync(projectsLocales);

    return projects;
};
