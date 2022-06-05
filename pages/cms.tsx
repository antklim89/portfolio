import { FC, useEffect } from 'react';

import { cmsConfig } from '~/cms';
import CMS from 'netlify-cms-app';


const CMSPage: FC = () => {
    useEffect(() => {
        document.body.innerHTML = '';
        CMS.init(cmsConfig);

        return () => {
            window.location.reload();
        };
    }, []);

    return (
        <div />
    );
};

export default CMSPage;

