import { revalidatePath } from 'next/cache';
import { randomUUID } from 'node:crypto';
import type { CollectionConfig } from 'payload';
import sharp from 'sharp';
import { DEFAULT_BLUR_DATA } from '@/lib/constants';


export const Media = {
  slug: 'public/media',
  hooks: {
    beforeValidate: [
      async ({ req, operation, data }) => {
        if ((operation === 'create' || operation === 'update') && req.file) {
          const buffer = await sharp(req.file.data).resize({ width: 24 }).webp({ quality: 20 }).toBuffer();
          const blurDataURL = `data:image/webp;base64,${buffer.toString('base64')}`;
          return { ...data, blurDataURL };
        }
      },
    ],
    beforeOperation: [
      async ({ req, operation }) => {
        if ((operation === 'create' || operation === 'update') && req.file) {
          req.file.name = `${randomUUID()}-${req.file.name}`;
        }
      },
    ],
    afterOperation: [({ operation }) => {
      if (operation === 'delete' || operation === 'update' || operation === 'create' || operation === 'updateByID' || operation === 'deleteByID') {
        revalidatePath('/', 'layout');
      }
    }],
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
      type: 'text',
      name: 'url',
      required: true,
      defaultValue: '/placeholder.png',
    },
    {
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
