import type { InitOptions } from 'netlify-cms-core';

import { locales } from '~/constants';

import { about } from './about';
import { projects } from './projects';
import { technologies } from './technologies';


export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: 'https://fullstack-developer-portfolio.netlify.app',

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },

        i18n: {
            structure: 'single_file',
            locales,
            default_locale: locales[0],
        },

        local_backend: { allowed_hosts: ['192.168.90.19', '127.0.0.1'] },
        publish_mode: 'editorial_workflow',
        media_folder: 'public/uploaded/',
        collections: [
            projects,
            technologies,
            {
                label: 'Site',
                name: 'site',
                editor: { preview: false },
                i18n: true,
                files: [about],
            },
        ],
    },
};
