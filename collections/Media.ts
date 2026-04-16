import { randomUUID } from 'node:crypto';
import type { CollectionBeforeOperationHook, CollectionBeforeValidateHook, CollectionConfig } from 'payload';
import sharp from 'sharp';

import { revalidateMainCache } from '@/lib/cache';
import { DEFAULT_BLUR_DATA } from '@/lib/constants';

const createBlurData: CollectionBeforeValidateHook = async ({ req, data }) => {
  try {
    if (!(req.file && data?.width && data.height)) return;
    const { width, height } = data;
    const ratio = Math.min(24 / width, 24 / height);
    const newHeight = Math.round(height * ratio);
    const newWidth = Math.round(width * ratio);
    const buffer = await sharp(req.file.data)
      .resize({ width: newWidth, height: newHeight })
      .webp({ quality: 20 })
      .toBuffer();
    const blurDataUrl = `data:image/webp;base64,${buffer.toString('base64')}`;

    return { ...data, blurDataUrl };
  } catch (error) {
    console.error(error);
  }
};

const renameUploadedFileToUuid: CollectionBeforeOperationHook = ({ req, operation }) => {
  if ((operation === 'create' || operation === 'update') && req.file) {
    req.file.name = randomUUID();
  }
};

export const Media = {
  slug: 'public/media',
  hooks: {
    beforeValidate: [createBlurData],
    beforeOperation: [renameUploadedFileToUuid],
    afterChange: [revalidateMainCache],
    afterDelete: [revalidateMainCache],
  },
  access: {
    read: () => true,
  },
  defaultPopulate: {
    url: true,
    filename: true,
    width: true,
    height: true,
    blurDataURL: true,
  },
  fields: [
    {
      type: 'text',
      name: 'blurDataURL',
      required: true,
      defaultValue: DEFAULT_BLUR_DATA,
      admin: {
        readOnly: true,
        hidden: true,
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      label: {
        en: 'URL',
        ru: 'Cсылка',
      },
      type: 'text',
      name: 'url',
      required: true,
      defaultValue: '/placeholder.png',
    },
    {
      label: {
        en: 'filename',
        ru: 'Имя файла',
      },
      type: 'text',
      name: 'filename',
      required: true,
      defaultValue: 'placeholder.png',
    },
    {
      type: 'number',
      name: 'width',
      required: true,
      defaultValue: 100,
    },
    {
      type: 'number',
      name: 'height',
      required: true,
      defaultValue: 100,
    },
  ],
  upload: {
    staticDir: 'media',
    formatOptions: {
      format: 'webp',
      options: {
        quality: 90,
      },
    },
    mimeTypes: ['image/*'],
  },
} satisfies CollectionConfig;
