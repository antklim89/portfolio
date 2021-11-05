import type { NextPage, GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import Seo from '~/components/Seo';
import ProjectsList from '~/layouts/Projects';
import { projectPreviewSchema } from '~/schemas/project';
import type { ProjectPreviewType } from '~/types';
import { loadManyFiles, getLocale } from '~/utils/server';


interface Props {
    projects: ProjectPreviewType[]
}

const ProjectsPage: NextPage<Props> = ({ projects }) => {
    const t = useTranslations();
    return (
        <>
            <Seo title={t('Projects')} />
            <div className="background">
                <ProjectsList projects={projects} />
            </div>
        </>
    );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectPreviewSchema, locale));

    return {
        props: {
            projects,
            messages,
        },
    };
};

