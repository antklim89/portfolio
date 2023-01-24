import type { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import About from '~/layouts/About';
import ProjectsList from '~/layouts/Projects';
import Technologies from '~/layouts/Technologies';
import type { AboutType, ProjectType, TechnologyType } from '~/types';
import { getTranslation, initNetlifyIdentityWidget } from '~/utils';
import { getAbout, getProjects, getTechnologies } from '~/utils/server';


interface Props {
    about: AboutType
    projects: ProjectType[]
    technologies: TechnologyType[]
}

const Home: NextPage<Props> = ({ about, projects, technologies }) => {
    useEffect(() => initNetlifyIdentityWidget('netlify-identity-widget'), []);

    return (
        <>
            <Seo />
            <About {...about} />
            <Container>
                <ProjectsList projects={projects} />
                <Technologies technologies={technologies} />
            </Container>
            <div id="netlify-identity-widget" />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const [
        translation,
        about,
        projects,
        technologies,
    ] = await Promise.all([
        getTranslation(locale),
        getAbout(locale),
        getProjects(locale),
        getTechnologies(locale),
    ]);

    return {
        props: {
            about,
            projects,
            technologies,
            translation,
        },
    };
};
