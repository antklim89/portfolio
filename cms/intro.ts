/* eslint-disable */
import type { CmsCollectionFile } from 'netlify-cms-core'



export const intro: CmsCollectionFile = {
    label: 'Intro',
    name: 'intro',
    file: 'public/content/intro/index.json',
    media_folder: 'images',
    public_folder: '/content/intro/images',
    i18n: true,
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            default: 'Introducing',
            i18n: true,
        },
        {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            i18n: true,
        }
    ],
}