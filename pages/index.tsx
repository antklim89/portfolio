
import type { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import ProjectsList from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import { introSchema } from '~/schemas/intro';
import { projectPreviewSchema } from '~/schemas/project';
import { technologySchema } from '~/schemas/technology';
import type { BlurData, IntroType, ProjectPreviewType, TechnologyType } from '~/types';
import { loadManyFiles, getLocale, loadOneFile, getBlurData } from '~/utils/server';


interface Props {
    intro: IntroType
    projects: BlurData<ProjectPreviewType>[]
    technologies: BlurData<TechnologyType>[]
}

const Home: NextPage<Props> = ({ intro, projects, technologies }) => {
    useEffect(() => {
        if (!window.location.hash.startsWith('#invite_token')) return;
        import('netlify-identity-widget')
            .then(({ default: netlifyIdentity }) => {
                netlifyIdentity.init({
                    container: '#netlify-modal',
                    locale: 'en',
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <Seo />
            <Intro {...intro} />
            <Container>
                <ProjectsList projects={projects} />
                <Technologies technologies={technologies} />
            </Container>
            <div id="netlify-modal" />
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
    const projectsWithBlurData = await getBlurData(projects, 'image');


    const technologiesData = await loadManyFiles('technologies');
    const technologies = technologiesData.map((technology) => getLocale(technology, technologySchema, locale));
    const technologiesWithBlurData = await getBlurData(technologies, 'image');

    return {
        props: {
            intro,
            projects: projectsWithBlurData,
            technologies: technologiesWithBlurData,
            messages,
        },
    };
};


