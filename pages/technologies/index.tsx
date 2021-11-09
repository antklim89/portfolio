import type { NextPage, GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Technologies from '~/layouts/Technologies';
import { technologySchema } from '~/schemas';
import type { BlurData, TechnologyType } from '~/types';
import { loadManyFiles, getLocale, getBlurData } from '~/utils/server';


interface Props {
    technologies: BlurData<TechnologyType>[]
}

const TechnologiesPage: NextPage<Props> = ({ technologies }) => {
    const t = useTranslations();
    return (
        <>
            <Seo keywords={technologies.map(({ title }) => title)} title={t('Technologies')} />
            <Container>
                <Technologies technologies={technologies} />
            </Container>
        </>
    );
};

export default TechnologiesPage;

export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const technologiesData = await loadManyFiles('technologies');
    const technologies = technologiesData.map((technology) => getLocale(technology, technologySchema, locale));
    const technologiesWithBlurData = await getBlurData(technologies, 'image');

    return {
        props: {
            technologies: technologiesWithBlurData,
            messages,
        },
    };
};

