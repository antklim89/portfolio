import path from 'path';

import fs from 'fs-extra';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useTranslations } from 'next-intl';


import Container from '~/components/Container';
import Seo from '~/components/Seo';
import Project from '~/layouts/Project';
import { projectSchema } from '~/schemas/project';
import { ProjectTypeWithBlurData } from '~/types';
import { getBlurData, getLocale, loadOneFile } from '~/utils/server';


interface Props {
    project: ProjectTypeWithBlurData
}

type PathsType = {
    params: {
        slug: string;
    };
    locale?: string;
};

const ProjectPage: NextPage<Props> = ({ project }) => {
    const t = useTranslations();

    return (
        <>
            <Seo keywords={project.technologies} title={t('Projects')} />
            <Container>
                <Project {...project} />
            </Container>
        </>
    );
};

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async ({ locales = ['en'] }) => {
    const files: string[] = await fs.readdir(path.resolve(process.cwd(), './public/content/projects'));

    const paths: PathsType[] = files
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));

    const pathsWithLocales = paths.reduce((acc, pathObj) => {
        locales.forEach((locale) => {
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
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    const projectData = await loadOneFile(`projects/${params.slug}.json`);
    const project = await getLocale(projectData, projectSchema, locale);
    const projectWithBlurData = await getBlurData(project, 'image');


    return {
        props: {
            messages,
            project: projectWithBlurData,
        },
    };
};

