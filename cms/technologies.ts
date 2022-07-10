import type { CmsCollection } from 'netlify-cms-core';


export const technologies: CmsCollection = {
    label: 'Technologies',
    name: 'technologies',
    folder: 'public/content/technologies',
    extension: 'json',
    media_folder: 'images',
    public_folder: '/content/technologies/images',
    create: true,
    slug: '{{fields.slug}}',
    editor: { preview: true },
    i18n: true,
    fields: [
        {
            name: 'slug',
            widget: 'string',
        },
        {
            name: 'body',
            widget: 'text',
            pattern: ['^.{5,5000}$', 'The body must be between 5 and 5000 letters long.'],
            i18n: true,
        },
        {
            name: 'title',
            widget: 'string',
            pattern: ['^.{3,500}$', 'The title must be between 5 and 500 letters long.'],
            i18n: true,
        },
        {
            name: 'link',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The link must be between 5 and 500 letters long.'],
        },
        {
            name: 'image',
            widget: 'image',
        },
    ],
};
