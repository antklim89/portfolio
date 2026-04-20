import type { CollectionConfig, GlobalConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';
import { IMAGE_SEO_HEIGHT, IMAGE_SEO_WIDTH } from '@/lib/constants';
import { Media } from './Media';

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
    {
      label: {
        en: 'Image',
        ru: 'Изображение',
      },
      name: 'image',
      type: 'upload',
      relationTo: 'seo-media',
      hasMany: false,
      required: true,
    },
  ],
};

export const SeoMedia: CollectionConfig = {
  ...Media,
  slug: 'seo-media',
  labels: {
    plural: {
      en: 'Images: Seo',
      ru: 'Изображения: Сео',
    },
    singular: {
      en: 'Image: Seo',
      ru: 'Изображение: Сео',
    },
  },
  upload: {
    ...Media.upload,
    staticDir: 'public/media/seo',
    resizeOptions: {
      fit: 'cover',
      height: IMAGE_SEO_HEIGHT,
      width: IMAGE_SEO_WIDTH,
    },
  },
};
