import type { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Seo from '~/components/Seo';
import About from '~/layouts/About';
import { AboutType } from '~/types';
import { getAbout, getTranslations } from '~/utils/server';


interface Props {
    about: AboutType
}

const AboutPage: FC<Props> = ({ about }) => {
    const t = useTranslations();

    return (
        <>
            <Seo title={t('About')} />
            <About {...about} />
        </>
    );
};

export default AboutPage;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const translations = await getTranslations(locale);

    const about = await getAbout(locale);

    return {
        props: {
            about,
            translations,
        },
    };
};
