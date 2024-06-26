'use client';
import { FC, useEffect } from 'react';


const CMSPage: FC = () => {
    useEffect(() => {
        (async() => {
            const { default: CMS } = await import('decap-cms-app');
            const { cmsConfig } = await import('~/cms');

            CMS.init(cmsConfig);
        })();
    }, []);

    return null;
};

export default CMSPage;
