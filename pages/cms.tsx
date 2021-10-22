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
