import type { NextPage, GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import ProjectsList from '~/layouts/Projects';
import { projectSchema } from '~/schemas/project';
import type { BlurData, ProjectPreviewType } from '~/types';
import { loadManyFiles, getLocale, getBlurData } from '~/utils/server';


interface Props {
    projects: BlurData<ProjectPreviewType>[]
}

const ProjectsPage: NextPage<Props> = ({ projects }) => {
    const t = useTranslations();
    return (
        <>
            <Seo title={t('Projects')} />
            <Container>
                <ProjectsList projects={projects} />
            </Container>
        </>
    );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectSchema, locale));
    const projectsWithBlurData = await getBlurData(projects, 'image');

    return {
        props: {
            projects: projectsWithBlurData,
            messages,
        },
    };
};

