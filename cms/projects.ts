/* eslint-disable */
import type { CmsCollection } from 'netlify-cms-core'



export const projects: CmsCollection = {
    label: 'Projects',
    name: 'projects',
    folder: 'public/content/projects',
    extension: 'json',
    media_folder: 'images',
    create: true,
    slug: '{{title}}',
    editor: { preview: true },
    i18n: true,
    fields: [
        {
            label: 'Layout',
            name: 'layout',
            widget: 'hidden',
            default: 'projects',
        },
        {
            label: 'Body',
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
            name: 'image',
            widget: 'image',
        },
    ],
}
