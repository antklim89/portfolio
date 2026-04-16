import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    plural: {
      en: 'Users',
      ru: 'Пользователи',
    },
    singular: {
      en: 'User',
      ru: 'Пользователь',
    },
  },
  auth: true,
  fields: [],
};
