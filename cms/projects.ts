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
            min: 1,
            required: true,
        },
        {
            name: 'image',
            widget: 'image',
            required: true,
        },
        {
            name: 'images',
            widget: 'list',
            min: 1,
            required: true,
            field: {
                name: 'image',
                widget: 'image',
            }
        }
    ],
}
