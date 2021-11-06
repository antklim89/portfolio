import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Project from './Project';
import styles from './style.module.scss';

import { ProjectPreviewType } from '~/types';


const Projects: FC<{projects: ProjectPreviewType[]}> = ({ projects }) => {
    const t = useTranslations();
    return (
        <section>
            <h1 className="title">
                {t('Projects')}
            </h1>
            <div className={styles.Projects}>
                {projects.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
