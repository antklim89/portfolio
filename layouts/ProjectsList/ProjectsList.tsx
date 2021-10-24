import { FC } from 'react';
import { Trans } from 'react-i18next';

import ProjectItem from './ProjectItem';
import styles from './style.module.scss';

import { ProjectPreviewType } from '~/types';


const ProjectsList: FC<{projects: ProjectPreviewType[]}> = ({ projects }) => {
    return (
        <div>
            <h1 className="title">
                <Trans ns="projects-list">Projects</Trans>
            </h1>
            <div className={styles.list}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
