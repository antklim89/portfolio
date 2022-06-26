
import type { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import ProjectsList from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import { introSchema } from '~/schemas/intro';
import { projectSchema } from '~/schemas/project';
import { technologySchema } from '~/schemas/technology';
import type { BlurData, IntroType, ProjectPreviewType, TechnologyType } from '~/types';
import { loadManyFiles, getLocale, loadOneFile } from '~/utils/server';
import { getIntro } from '~/utils/server/getIntro';
import { getProjects } from '~/utils/server/getProjects';


interface Props {
    intro: IntroType
    projects: ProjectPreviewType[]
    // technologies: BlurData<TechnologyType>[]
}

const Home: NextPage<Props> = ({ intro, projects /* , technologies*/ }) => {
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
                {/* <Technologies technologies={technologies} /> */}
            </Container>
            <div id="netlify-modal" />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const intro = await getIntro(locale);
    const projects = await getProjects(locale);


    // const technologiesData = await loadManyFiles('technologies');
    // const technologies = technologiesData.map((technology) => getLocale(technology, technologySchema, locale));
    // const technologiesWithBlurData = await getBlurData(technologies, 'image');

    return {
        props: {
            intro,
            projects,
            // technologies: technologiesWithBlurData,
            messages,
        },
    };
};


