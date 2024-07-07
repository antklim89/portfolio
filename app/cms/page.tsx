'use client';
import { type FC, useEffect } from 'react';

const CMSPage: FC = () => {
    useEffect(() => {
        (async () => {
            const { default: cms } = await import('decap-cms-app');
            const { cmsConfig } = await import('~/cms');

            cms.init(cmsConfig);
        })();
    }, []);

    return null;
};

export default CMSPage;
