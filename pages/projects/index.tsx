import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import Seo from '~/components/Seo';
import ProjectsList from '~/layouts/ProjectsList';
import { projectPreviewSchema } from '~/schemas/project';
import type { ProjectType } from '~/types';
import { loadManyFiles, getLocale } from '~/utils/server';


interface Props {
    projects: ProjectType[]
}

const ProjectsPage: NextPage<Props> = ({ projects }) => {
    const { t } = useTranslation();
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
    const localisation = await serverSideTranslations(locale, ['common', 'projects-list']);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectPreviewSchema, locale));

    return {
        props: {
            projects,
            ...localisation,
        },
    };
};

