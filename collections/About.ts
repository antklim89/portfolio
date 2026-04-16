import type { GlobalConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';

export const About: GlobalConfig = {
  slug: 'about',
  label: {
    en: 'About',
    ru: 'О сайте',
  },
  hooks: {
    afterChange: [revalidateMainCache],
  },
  fields: [
    {
      label: {
        en: 'Name',
        ru: 'Имя',
      },
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      label: {
        en: 'Profession',
        ru: 'Профессия',
      },
      name: 'profession',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      label: {
        en: 'Slogan',
        ru: 'Слоган',
      },
      name: 'slogan',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      label: {
        en: 'Description',
        ru: 'Описание',
      },
      name: 'description',
      type: 'richText',
      localized: true,
      required: true,
    },
  ],
};
