import { FC } from 'react';
import { Trans } from 'react-i18next';

import ProjectItem from './ProjectItem';
import styles from './styles.module.scss';

import { ProjectType } from '~/types';


const ProjectsList: FC<{projects: ProjectType[]}> = ({ projects }) => {
    return (
        <div className={styles.list}>
            <h1 className="title">
                <Trans ns="projects-list">Projects</Trans>
            </h1>
            {projects.map((project) => (
                <ProjectItem key={project.title} {...project} />
            ))}
        </div>
    );
};

export default ProjectsList;
