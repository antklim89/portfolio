import { FC, useEffect } from 'react';


const CMSPage: FC = () => {
    useEffect(() => {
        document.body.innerHTML = '';
        (async() => {
            const { default: CMS } = await import('netlify-cms-app');
            const { cmsConfig } = await import('~/cms');

            CMS.init(cmsConfig);
        })();
    }, []);

    return (
        <div />
    );
};

export default CMSPage;
