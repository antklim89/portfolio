import { randomUUID } from 'node:crypto';
import type { CollectionBeforeOperationHook, CollectionConfig, FieldHook } from 'payload';
import sharp from 'sharp';

import { revalidateMainCache } from '@/lib/cache';

const createBlurData: FieldHook = async ({ req, data }) => {
  if (!(req.file && data?.width && data.height)) return;
  const buffer = await sharp(req.file.data).webp({ quality: 10 }).resize(36).toBuffer();
  return `data:image/webp;base64,${buffer.toString('base64')}`;
};

const renameUploadedFileToUuid: CollectionBeforeOperationHook = ({ req, operation }) => {
  if ((operation === 'create' || operation === 'update') && req.file) {
    req.file.name = randomUUID();
  }
};

export const Media = {
  slug: 'media',
  hooks: {
    beforeOperation: [renameUploadedFileToUuid],
    afterChange: [revalidateMainCache],
    afterDelete: [revalidateMainCache],
  },
  access: {
    read: () => true,
  },
  defaultPopulate: {
    blurDataURL: true,
    url: true,
    filename: true,
  },
  fields: [
    {
      type: 'text',
      name: 'blurDataURL',
      required: true,
      hooks: {
        beforeChange: [createBlurData],
      },
      admin: {
        readOnly: true,
        hidden: true,
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      label: { en: 'URL', ru: 'Cсылка' },
      type: 'text',
      name: 'url',
      required: true,
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
