import { FC } from 'react';

import Title from '~/components/Title';
import { getTranslation } from '~/utils';
import { getProjects, getServerLocale } from '~/utils/server';

import ProjectItem from './ProjectItem';
import styles from './style.module.scss';


const Projects = async () => {
    const locale = getServerLocale();
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

export default Projects as unknown as FC;
