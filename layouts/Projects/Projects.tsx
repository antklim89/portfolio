import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ProjectItem from './ProjectItem';
import styles from './style.module.scss';

import { ProjectPreviewType } from '~/types';


const Projects: FC<{projects: ProjectPreviewType[]}> = ({ projects }) => {
    const t = useTranslations();
    return (
        <section>
            <h2 className="title">
                {t('Projects')}
            </h2>
            <div className={styles.Projects}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
