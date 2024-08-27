import type { CmsBackend, InitOptions } from 'decap-cms-core';
import { defaultLocale, locales } from '~/constants';
import { about } from './about';
import { projects } from './projects';
import { technologies } from './technologies';


const SITE_URL = process.env.URL || (() => { throw new Error('URL env variable is required'); })();

const backend: CmsBackend =
  process.env.NETLIFY === 'true'
    ? {
        name: 'git-gateway',
        branch: 'main',
      }
    : {
        name: 'github',
        repo: process.env.REPOSITORY_URL || (() => { throw new Error('REPOSITORY_URL env variable is required'); })(),
        branch: 'main',
      };


export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: SITE_URL,

        backend,

        i18n: {
            structure: 'single_file',
            locales,
            default_locale: defaultLocale,
        },

        local_backend: true,

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
