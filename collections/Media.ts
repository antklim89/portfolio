import { randomUUID } from 'node:crypto';
import type { CollectionConfig } from 'payload';
import sharp from 'sharp';


export const Media = {
  slug: 'media',
  hooks: {
    beforeOperation: [
      async ({ req, operation }) => {
        if ((operation === 'create' || operation === 'update') && req.file && req.data) {
          const buffer = await sharp(req.file.data).resize({ width: 24 }).webp({ quality: 20 }).toBuffer();
          const blurDataURL = `data:image/webp;base64,${buffer.toString('base64')}`;
          req.data.blurDataURL = blurDataURL;

          req.file.name = `${randomUUID()}-${req.file.name}`;
        }
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'blurDataURL',
      admin: {
        readOnly: true,
        hidden: true,
      },
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
