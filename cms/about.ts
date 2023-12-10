import type { CmsCollectionFile } from 'decap-cms-core';


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
            widget: 'markdown',
            i18n: true,
            required: true,
        },
        {
            name: 'description',
            widget: 'markdown',
            i18n: true,
            required: true,
        },
        {
            name: 'name',
            widget: 'string',
            i18n: true,
            required: true,
        },
        {
            name: 'keywords',
            widget: 'list',
            i18n: true,
            required: true,
        },
        {
            name: 'photo',
            widget: 'image',
            required: true,
        },
    ],
};
