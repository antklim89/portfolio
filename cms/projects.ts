/* eslint-disable */
import type { CmsCollection } from 'netlify-cms-core'



export const projects: CmsCollection = {
    label: 'Projects',
    name: 'projects',
    folder: 'public/content/projects',
    extension: 'json',
    media_folder: 'images',
    public_folder: '/content/projects/images',
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
            widget: 'markdown',
            i18n: true,
        },
        {
            name: 'title',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The title must be between 5 and 500 letters long.'],
            i18n: true,
        },
        {
            name: 'link',
            widget: 'string',
            pattern: ['^.{5,500}$', 'The link must be between 5 and 500 letters long.'],
        },
        {
            name: 'technologies',
            widget: 'list',
            min: 1,
        },
        {
            name: 'image',
            widget: 'image',
        },
    ],
}
