import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import ProjectsList from '~/layouts/ProjectsList';
import { introSchema } from '~/schemas/intro';
import { projectPreviewSchema } from '~/schemas/project';
import type { IntroType, ProjectType } from '~/types';
import { loadManyFiles, getLocale, loadOneFile } from '~/utils/server';


interface Props {
    intro: IntroType
    projects: ProjectType[]
}

const Home: NextPage<Props> = ({ intro, projects }) => {
    return (
        <>
            <Seo />
            <Intro {...intro} />
            <div className="background">
                <ProjectsList projects={projects} />
            </div>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const localisation = await serverSideTranslations(locale, ['common', 'projects-list']);


    const introData = await loadOneFile('intro/index.json');
    const intro = getLocale(introData, introSchema, locale);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectPreviewSchema, locale));

    return {
        props: {
            intro,
            projects,
            ...localisation,
        },
    };
};

