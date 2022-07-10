import type { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import About from '~/layouts/About';
import ProjectsList from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import type { AboutType, ProjectType, TechnologyType } from '~/types';
import { getAbout, getProjects, getTechnologies, getTranslations } from '~/utils/server';


interface Props {
    about: AboutType
    projects: ProjectType[]
    technologies: TechnologyType[]
}

const Home: NextPage<Props> = ({ about, projects, technologies }) => {
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
            <About {...about} />
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
    const translations = await getTranslations(locale);

    const about = await getAbout(locale);
    const projects = await getProjects(locale);
    const technologies = await getTechnologies(locale);


    return {
        props: {
            about,
            projects,
            technologies,
            translations,
        },
    };
};


