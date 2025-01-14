import path from 'node:path';
import { fileURLToPath } from 'node:url';
// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import { en } from 'payload/i18n/en';
import { ru } from 'payload/i18n/ru';
import sharp from 'sharp';
import { Media } from './collections/Media';
import { Products } from './collections/Products';
import { Users } from './collections/Users';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Products],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI ?? '',
    },
  }),
  i18n: {
    supportedLanguages: { en, ru },
    fallbackLanguage: 'en',
  },
  localization: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    fallback: true,
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
