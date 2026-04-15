import type { GlobalConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateMainCache],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'profession',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'slogan',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
      required: true,
    },
  ],
};
