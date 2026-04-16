import type { GlobalConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';

export const Seo: GlobalConfig = {
  slug: 'seo',

  label: {
    en: 'SEO',
    ru: 'СЕО',
  },
  hooks: {
    afterChange: [revalidateMainCache],
  },
  fields: [
    {
      label: {
        en: 'Author',
        ru: 'Автор',
      },
      name: 'author',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      label: {
        en: 'Keywords',
        ru: 'Ключевые слова',
      },
      name: 'keywords',
      type: 'text',
      hasMany: true,
      localized: true,
      required: true,
    },
    {
      label: {
        en: 'Description',
        ru: 'Описание',
      },
      name: 'description',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      label: {
        en: "Site's title",
        ru: 'Заголовок сайта',
      },
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
};
