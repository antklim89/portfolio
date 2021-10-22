/* eslint-disable */
import type { InitOptions } from 'netlify-cms-core'
import { locales } from '~/constants';
import { intro } from './intro';


export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: 'https://cozy-clothing.netlify.app',

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },

        i18n: {
            structure: 'single_file',
            locales,
            default_locale: locales[0]
        },

        local_backend: { allowed_hosts: ['192.168.0.123', '192.168.90.18', '192.168.90.19', '127.0.0.1'] },
        publish_mode: 'editorial_workflow',
        media_folder: 'public/uploaded/',
        collections: [
            // {
            //     label: 'Features',
            //     name: 'features',
            //     folder: 'public/content/features',
            //     extension: 'json',
            //     media_folder: 'images',
            //     create: true,
            //     slug: '{{text}}',
            //     editor: { preview: true },
            //     fields: [
            //         {
            //             label: 'Layout',
            //             name: 'layout',
            //             widget: 'hidden',
            //             default: 'features',
            //         },
            //         {
            //             label: 'Text',
            //             name: 'text',
            //             widget: 'string',
            //             pattern: ['^.{5,50}$', 'The text must be between 5 and 50 letters long.'],
            //         },
            //     ],
            // },
            {
                label: 'Site',
                name: 'site',
                editor: { preview: false },
                i18n: true,
                files: [intro],
            },
        ],
    },
};
