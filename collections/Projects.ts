import type { CollectionConfig } from 'payload';

import { revalidateMainCache } from '@/lib/cache';
import { Media } from './Media';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    plural: {
      en: 'Projects',
      ru: 'Проекты',
    },
    singular: {
      en: 'Project',
      ru: 'Проект',
    },
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
      minLength: 5,
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
        en: 'Repository',
        ru: 'Репозиторий',
      },
      name: 'repository',
      type: 'text',
      minLength: 5,
      maxLength: 500,
      required: true,
    },
    {
      label: {
        en: 'Technologies',
        ru: 'Технологии',
      },
      name: 'technologies',
      hasMany: true,
      type: 'text',
      required: true,
    },
    {
      label: {
        en: 'Image',
        ru: 'Изображение',
      },
      name: 'image',
      type: 'upload',
      relationTo: 'projects-media',
      required: true,
    },
  ],
};

export const ProjectsMedia: CollectionConfig = {
  ...Media,

  labels: {
    plural: {
      en: 'Images: Project',
      ru: 'Изображения: Проекты',
    },
    singular: {
      en: 'Image: Project',
      ru: 'Изображение: Проект',
    },
  },
  slug: 'projects-media',
  upload: {
    ...Media.upload,
    staticDir: 'public/media/projects',
    resizeOptions: {
      position: 'left top',
      fit: 'cover',
      height: 162,
      width: 288,
    },
  },
};
