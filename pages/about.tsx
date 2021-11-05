import type { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import About from '~/layouts/About';
import { aboutSchema } from '~/schemas/about';
import { AboutType } from '~/types/about';
import { loadOneFile, getLocale } from '~/utils/server';


interface Props {
    about: AboutType
}

const AboutPage: FC<Props> = ({ about }) => {
    const t = useTranslations();

    return (
        <>
            <Seo title={t('About')} />
            <Container whiteBg={false}>
                <About {...about} />
            </Container>
        </>
    );
};

export default AboutPage;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);


    const aboutData = await loadOneFile('about/index.json');
    const about = getLocale(aboutData, aboutSchema, locale);

    return {
        props: {
            about,
            messages,
        },
    };
};
