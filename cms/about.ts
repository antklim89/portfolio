import type { CmsCollectionFile } from 'netlify-cms-core';


export const about: CmsCollectionFile = {
    label: 'About',
    name: 'about',
    file: 'public/content/about/index.json',
    media_folder: 'images',
    public_folder: '/content/about/images',
    i18n: true,
    fields: [
        {
            name: 'title',
            widget: 'string',
            i18n: true,
            required: true,
        },
        {
            name: 'text',
            widget: 'markdown',
            i18n: true,
            required: true,
        },
        {
            name: 'image',
            widget: 'image',
            required: true,
        },
    ],
};
