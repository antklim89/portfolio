import { ComponentProps } from 'react';

import { locales } from '~/constants';
import { Locale } from '~/types';
import { cls } from '~/utils';
import { getProjects, getTranslation } from '~/utils/server';

import ProjectItem from './ProjectItem';
import style from './style.module.scss';


export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const Projects = async ({ locale, className, ...props  }: { locale: Locale } & ComponentProps<'section'>) => {
    const t = await getTranslation(locale);
    const projects = await getProjects(locale);

    return (
        <section className={cls(style.Projects, className)} {...props}>
            <h2 className='title'>
                {t.projects}
            </h2>
            <div className={style.list}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
