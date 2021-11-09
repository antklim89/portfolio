import type { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Seo from '~/components/Seo';
import About from '~/layouts/About';
import { aboutSchema } from '~/schemas/about';
import { BlurData } from '~/types';
import { AboutType } from '~/types/about';
import { loadOneFile, getLocale, getBlurData } from '~/utils/server';


interface Props {
    about: BlurData<AboutType>
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

    const aboutData = await loadOneFile('about/index.json');
    const about = getLocale(aboutData, aboutSchema, locale);
    const aboutWithBlurData = await getBlurData(about, 'image');

    return {
        props: {
            about: aboutWithBlurData,
            messages,
        },
    };
};
