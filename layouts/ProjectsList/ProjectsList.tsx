import { FC } from 'react';
import { Trans } from 'react-i18next';

import ProjectItem from './ProjectItem';
import styles from './style.module.scss';

import { ProjectPreviewType } from '~/types';


const ProjectsList: FC<{projects: ProjectPreviewType[]}> = ({ projects }) => {
    return (
        <section>
            <h1 className="title">
                <Trans ns="projects-list">Projects</Trans>
            </h1>
            <div className={styles.ProjectsList}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsList;
