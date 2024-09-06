import process from 'node:process';
import type { CmsBackend, InitOptions } from 'decap-cms-core';
import { about } from './about';
import { projects } from './projects';
import { technologies } from './technologies';
import { defaultLocale, locales } from '@/lib/constants';


const SITE_URL = process.env.URL;
const REPOSITORY_URL = process.env.REPOSITORY_URL;
const URL_HOSTNAME = new URL(process.env.URL ?? 'http://localhost:3000').hostname;

const backend: CmsBackend
  = process.env.NETLIFY === 'true'
    ? {
        name: 'git-gateway',
        branch: 'main',
      }
    : {
        name: 'github',
        repo: REPOSITORY_URL,
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

    local_backend: {
      url: `http://${URL_HOSTNAME}:8081/api/v1`,
      allowed_hosts: [URL_HOSTNAME],
    },

    publish_mode: 'editorial_workflow',
    media_folder: '/public/images',
    public_folder: '/images',

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
