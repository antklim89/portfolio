import { FC, useEffect } from 'react';


const CMSPage: FC = () => {
    useEffect(() => {
        (async () => {
            const { cmsConfig } = await import('~/cms');
            const { default: CMS } = await import('netlify-cms-app');
            document.body.innerHTML = '';
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

