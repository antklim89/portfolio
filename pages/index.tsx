import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import { introSchema } from '~/schemas/intro';
import { projectSchema } from '~/schemas/project';
import { IntroType } from '~/types/intro';
import { loadManyFiles, getLocale, loadOneFile } from '~/utils/server';


const Home: NextPage<{intro: IntroType}> = ({ intro }) => {
    return (
        <div>
            <Seo />
            <Intro {...intro} />
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    const localisation = await serverSideTranslations(locale);


    const introData = await loadOneFile('intro/index.json');
    const intro = getLocale(introData, introSchema, locale);

    const projectsData = await loadManyFiles('projects');
    const projects = projectsData.map((project) => getLocale(project, projectSchema, locale));

    return {
        props: {
            intro,
            ...localisation,
        },
    };
};

