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
        <section className={styles.Projects}>
            <h2 className='title' id="projects">
                {t.projects}
            </h2>
            <div className={styles.list}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
