import { FC } from 'react';

import Title from '~/components/Title';
import { locales } from '~/constants';
import { Locale } from '~/types';
import { getTranslation } from '~/utils';
import { getProjects } from '~/utils/server';

import ProjectItem from './ProjectItem';
import styles from './style.module.scss';


export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const Projects = async ({ locale }: {locale: Locale}) => {
    const t = await getTranslation(locale);
    const projects = await getProjects(locale);

    return (
        <section className={styles.Projects} id="projects">
            <Title underscore size="xl">
                {t.projects}
            </Title>
            <div className={styles.list}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects as unknown as FC<{locale: Locale}>;
