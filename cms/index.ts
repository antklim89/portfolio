import type { InitOptions } from 'decap-cms-core';

import { defaultLocale, locales } from '~/constants';

import { about } from './about';
import { projects } from './projects';
import { technologies } from './technologies';


const SITE_URL = process.env.URL || (() => { throw new Error('URL env variable is required'); })();
const GITHUB_REPO = process.env.GITHUB_REPO || (() => { throw new Error('GITHUB_REPO env variable is required'); })();

export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: SITE_URL,

        backend: {
            name: 'github',
            repo: GITHUB_REPO,
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
