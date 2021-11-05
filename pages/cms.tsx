import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';


const CMSPage: FC = () => {
    useEffect(() => {
        const app = document.getElementById('__next');
        if (app) app.style.display = 'none';
        (async() => {
            const { default: CMS } = await import('netlify-cms-app');
            const { cmsConfig } = await import('~/cms');

            CMS.init(cmsConfig);
        })();
        return () => {
            window.location.reload();
        };
    }, []);

    return (
        <div />
    );
};

export default CMSPage;


export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    const { default: messages } = await import(`~/public/locales/${locale}/common.json`);

    return { props: { messages } };
};
