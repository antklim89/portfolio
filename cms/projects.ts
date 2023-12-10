import type { CmsCollection } from 'decap-cms-core';


export const projects: CmsCollection = {
    label: 'Projects',
    name: 'projects',
    folder: 'public/content/projects',
    extension: 'json',
    media_folder: 'images',
    public_folder: '/content/projects/images',
    create: true,
    slug: '{{fields.title}}',
    editor: { preview: false },
    i18n: true,
    fields: [
        {
            name: 'body',
            widget: 'markdown',
            i18n: true,
            required: true,
        },
        {
            name: 'title',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The title must be between 5 and 500 letters long.'],
            required: true,
            i18n: true,
        },
        {
            name: 'link',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The link must be between 5 and 500 letters long.'],
            required: true,
        },
        {
            name: 'github',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The link must be between 5 and 500 letters long.'],
            required: true,
        },
        {
            name: 'technologies',
            widget: 'list',
            required: true,
            min: 1,
        },
        {
            name: 'image',
            widget: 'image',
            required: true,
        },
    ],
};
