import { revalidatePath } from 'next/cache';
import type { CollectionConfig } from 'payload';
import { Media } from './Media';


export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterOperation: [({ operation }) => {
      if (operation === 'delete' || operation === 'update' || operation === 'create' || operation === 'updateByID' || operation === 'deleteByID') {
        revalidatePath('/', 'layout');
      }
    }],
  },
  fields: [
    {
      name: 'body',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      minLength: 3,
      maxLength: 500,
      localized: true,
    },
    {
      name: 'link',
      type: 'text',
      minLength: 5,
      maxLength: 500,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'technologies-media',
      required: true,
    },
  ],
};

export const TechnologiesMedia: CollectionConfig = {
  ...Media,
  slug: 'technologies-media',
  labels: {
    singular: 'Technology Image',
    plural: 'Technology Images',
  },
  upload: {
    ...Media.upload,
    staticDir: 'public/media/technologies',
    resizeOptions: {
      position: 'center',
      fit: 'cover',
      height: 300,
      width: 300,
    },
  },
};
