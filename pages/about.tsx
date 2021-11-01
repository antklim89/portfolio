import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Seo from '~/components/Seo';
import { aboutSchema } from '~/schemas/about';
import { AboutType } from '~/types/about';
import { loadOneFile, getLocale } from '~/utils/server';


interface Props {
    about: AboutType
}

const AboutPage: FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Seo title={t('About')} />
            AboutPage
        </>
    );
};

export default AboutPage;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const localisation = await serverSideTranslations(locale, ['common']);


    const aboutData = await loadOneFile('about/index.json');
    const about = getLocale(aboutData, aboutSchema, locale);

    return {
        props: {
            about,
            ...localisation,
        },
    };
};
