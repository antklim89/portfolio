import { projectSchema } from '~/schemas';
import { ProjectPreviewType } from '~/types';

import { getLocale } from './getLocale';
import { loadManyFiles } from './loadManyFiles';


export const getProjects = async (locale: string): Promise<ProjectPreviewType[]> => {
    const projectsData = await loadManyFiles('projects');
    const projectsLocales = projectsData.map((project) => getLocale(project, locale));
    const projects = await projectSchema.array().parseAsync(projectsLocales);

    return projects;
};
