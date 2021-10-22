import axios from 'axios';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Seo from '~/components/Seo';
import Intro from '~/layouts/Intro';
import { introSerialisation } from '~/serialisation/intro';
import { IntroType } from '~/types/intro';


const Home: NextPage<{intro: IntroType}> = ({ intro }) => {
    return (
        <div>
            <Seo />
            <main>
                <Intro {...intro} />
            </main>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    const { data } = await axios.get('http://localhost:3000/content/intro/index.json') as any;
    const localisation = await serverSideTranslations(locale, ['common']);

    const intro = introSerialisation(data, locale);

    return {
        props: {
            intro,
            ...localisation,
        },
    };
};
