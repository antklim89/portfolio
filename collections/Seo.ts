import type { GlobalConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';

export const Seo: GlobalConfig = {
  slug: 'seo',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateMainCache],
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'keywords',
      type: 'text',
      hasMany: true,
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
};
