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
    slug: '{{title}}',
    editor: { preview: true },
    i18n: true,
    fields: [
        {
            name: 'layout',
            widget: 'hidden',
            default: 'projects',
        },
        {
            name: 'body',
            widget: 'markdown',
            pattern: ['^.{5,5000}$', 'The body must be between 5 and 5000 letters long.'],
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
