import { FC } from 'react';
import { Trans } from 'react-i18next';

import Project from './Project';
import styles from './style.module.scss';

import { ProjectPreviewType } from '~/types';


const Projects: FC<{projects: ProjectPreviewType[]}> = ({ projects }) => {
    return (
        <section>
            <h1 className="title">
                <Trans>Projects</Trans>
            </h1>
            <div className={styles.ProjectsList}>
                {projects.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
