import type { GlobalConfig } from 'payload';


export const Seo: GlobalConfig = {
  slug: 'seo',
  access: {
    read: () => true,
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
