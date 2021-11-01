import fs from 'fs/promises';
import path from 'path';

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';


import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Project from '~/layouts/Project';
import { projectSchema } from '~/schemas/project';
import { ProjectType } from '~/types';
import { getLocale, loadOneFile } from '~/utils/server';


interface Props {
    project: ProjectType
}

const ProjectPage: NextPage<Props> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <>
            <Seo title={t('Projects')} />
            <Container>
                <Project {...project} />
            </Container>
        </>
    );
};

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const files = await fs.readdir(path.resolve(process.cwd(), './public/content/projects'));

    type PathsType = {
        params: {
            slug: string;
        };
        locale?: string;
    };

    const paths: PathsType[] = files
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));

    const pathsWithLocales = paths.reduce((acc, pathObj) => {
        locales?.forEach((locale) => {
            acc.push({ ...pathObj, locale });
        });
        return acc;
    }, [] as PathsType[]);

    return {
        paths: pathsWithLocales,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en', params = { slug: '' } }) => {
    const localisation = await serverSideTranslations(locale);

    const projectData = await loadOneFile(`projects/${params.slug}.json`);
    const project = await getLocale(projectData, projectSchema, locale);


    return {
        props: {
            ...localisation,
            project,
        },
    };
};

