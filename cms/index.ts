import type { InitOptions } from 'decap-cms-core';

import { SITE_URL, defaultLocale, locales } from '~/constants';

import { about } from './about';
import { projects } from './projects';
import { technologies } from './technologies';


export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: SITE_URL,

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },

        i18n: {
            structure: 'single_file',
            locales,
            default_locale: defaultLocale,
        },

        local_backend: { allowed_hosts: [new URL(SITE_URL).hostname] },
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
