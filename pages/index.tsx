import type { NextPage, GetStaticProps } from 'next';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import ProjectsList from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import { introSchema } from '~/schemas/intro';
import { projectPreviewSchema } from '~/schemas/project';
import { technologySchema } from '~/schemas/technology';
import type { IntroType, ProjectPreviewType, TechnologyType } from '~/types';
import { loadManyFiles, getLocale, loadOneFile } from '~/utils/server';


interface Props {
    intro: IntroType
    projects: ProjectPreviewType[]
    technologies: TechnologyType[]
}

const Home: NextPage<Props> = ({ intro, projects, technologies }) => {
    return (
        <>
            <Seo />
            <Intro {...intro} />
            <Container>
                <ProjectsList projects={projects} />
                <Technologies technologies={technologies} />
            </Container>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const introData = await loadOneFile('intro/index.json');
    const intro = getLocale(introData, introSchema, locale);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectPreviewSchema, locale));


    const technologiesData = await loadManyFiles('technologies');
    const technologies = technologiesData.map((technology) => getLocale(technology, technologySchema, locale));

    return {
        props: {
            intro,
            projects,
            technologies,
            messages,
        },
    };
};

