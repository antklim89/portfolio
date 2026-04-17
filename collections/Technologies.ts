import type { CollectionConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';
import { IMAGE_TECHNOLOGY_HEIGHT, IMAGE_TECHNOLOGY_WIDTH } from '@/lib/constants';
import { Media } from './Media';

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    plural: {
      en: 'Technology',
      ru: 'Технологии',
    },
    singular: {
      en: 'Technology',
      ru: 'Технология',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateMainCache],
    afterDelete: [revalidateMainCache],
  },
  fields: [
    {
      label: {
        en: 'Is published',
        ru: 'Опубликован',
      },
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: {
        en: 'Text',
        ru: 'Текст',
      },
      name: 'body',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      label: {
        en: 'Title',
        ru: 'Заголовок',
      },
      name: 'title',
      type: 'text',
      required: true,
      minLength: 3,
      maxLength: 500,
      localized: true,
    },
    {
      label: {
        en: 'Link',
        ru: 'Ссылка',
      },
      name: 'link',
      type: 'text',
      minLength: 5,
      maxLength: 500,
      required: true,
    },
    {
      label: {
        en: 'Image',
        ru: 'Изображение',
      },
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
    plural: {
      en: 'Images: Technology',
      ru: 'Изображения: Технологии',
    },
    singular: {
      en: 'Image: Technology',
      ru: 'Изображение: Технология',
    },
  },
  upload: {
    ...Media.upload,
    staticDir: 'public/media/technologies',
    resizeOptions: {
      position: 'center',
      fit: 'cover',
      height: IMAGE_TECHNOLOGY_HEIGHT,
      width: IMAGE_TECHNOLOGY_WIDTH,
    },
  },
};
