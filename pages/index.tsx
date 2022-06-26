import type { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import ProjectsList from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import type { IntroType, ProjectPreviewType, TechnologyType } from '~/types';
import { getIntro } from '~/utils/server/getIntro';
import { getProjects } from '~/utils/server/getProjects';
import { getTechnologies } from '~/utils/server/getTechnologies';


interface Props {
    intro: IntroType
    projects: ProjectPreviewType[]
    technologies: TechnologyType[]
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

    const intro = await getIntro(locale);
    const projects = await getProjects(locale);
    const technologies = await getTechnologies(locale);


    return {
        props: {
            intro,
            projects,
            technologies,
            messages,
        },
    };
};


