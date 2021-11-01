/* eslint-disable */
import type { CmsCollectionFile } from 'netlify-cms-core'



export const about: CmsCollectionFile = {
    label: 'About',
    name: 'about',
    file: 'public/content/about/index.json',
    media_folder: 'images/',
    i18n: true,
    fields: [
        {
            name: 'title',
            widget: 'string',
            i18n: true,
        },
        {
            name: 'text',
            widget: 'markdown',
            i18n: true,
        },
        {
            name: 'image',
            widget: 'image',
        }
    ],
}