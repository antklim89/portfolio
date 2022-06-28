import type { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Seo from '~/components/Seo';
import About from '~/layouts/About';
import { AboutType } from '~/types';
import { getAbout } from '~/utils/server';


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
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const about = await getAbout(locale);

    return {
        props: {
            about,
            messages,
        },
    };
};
