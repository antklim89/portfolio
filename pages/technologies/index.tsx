import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Technologies from '~/layouts/Technologies';
import { technologySchema } from '~/schemas';
import type { TechnologyType } from '~/types';
import { loadManyFiles, getLocale } from '~/utils/server';


interface Props {
    technologies: TechnologyType[]
}

const TechnologiesPage: NextPage<Props> = ({ technologies }) => {
    const { t } = useTranslation();
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
    const localisation = await serverSideTranslations(locale);

    const technologiesData = await loadManyFiles('technologies');
    const technologies = technologiesData.map((technology) => getLocale(technology, technologySchema, locale));

    return {
        props: {
            technologies,
            ...localisation,
        },
    };
};

