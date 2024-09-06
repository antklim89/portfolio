import type { CmsCollectionFile } from 'decap-cms-core';


export const about: CmsCollectionFile = {
  label: 'About',
  name: 'about',
  file: '/content/about.json',
  media_folder: '{{media_folder}}/about',
  public_folder: '{{public_folder}}/about',
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
    {
      name: 'socials',
      widget: 'list',
      required: true,
      fields: [
        {
          name: 'image',
          widget: 'image',
          required: true,
        },
        {
          name: 'link',
          widget: 'string',
          required: true,
        },
      ],
    },
  ],
};
