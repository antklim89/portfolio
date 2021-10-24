import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Seo from '~/components/Seo';
import ProjectsList from '~/layouts/ProjectsList';
import { projectSchema } from '~/schemas/project';
import type { ProjectType } from '~/types';
import { loadManyFiles, getLocale } from '~/utils/server';


interface Props {
    projects: ProjectType[]
}

const Home: NextPage<Props> = ({ projects }) => {
    return (
        <>
            <Seo />
            <ProjectsList projects={projects} />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const localisation = await serverSideTranslations(locale, ['common', 'projects-list']);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectSchema, locale));

    return {
        props: {
            projects,
            ...localisation,
        },
    };
};

