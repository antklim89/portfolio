import fs from 'fs/promises';
import path from 'path';

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';


import Seo from '~/components/Seo';
import { projectSchema } from '~/schemas/project';
import { ProjectType } from '~/types';
import { getLocale, loadOneFile } from '~/utils/server';


interface Props {
    project: ProjectType
}

const ProjectPage: NextPage<Props> = () => {
    const { t } = useTranslation();

    return (
        <>
            <Seo title={t('Projects')} />
            <div className="background">
                X
            </div>
        </>
    );
};

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async () => {
    const files = await fs.readdir(path.resolve(process.cwd(), './public/content/projects'));

    const paths = files
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));

    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<Props> = async ({ locale = 'en', params = { slug: '' } }) => {
    const localisation = await serverSideTranslations(locale, ['common', 'projects-list']);

    const projectData = await loadOneFile(`projects/${params.slug}.json`);
    const project = await getLocale(projectData, projectSchema, locale);


    return {
        props: {
            ...localisation,
            project,
        },
    };
};

