import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import { en } from 'payload/i18n/en';
import { ru } from 'payload/i18n/ru';
import sharp from 'sharp';
import { About } from './collections/About';
import { Projects, ProjectsMedia } from './collections/Projects';
import { Seo } from './collections/Seo';
import { Technologies, TechnologiesMedia } from './collections/Technologies';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [
    About,
    Seo,
  ],
  collections: [
    Projects,
    ProjectsMedia,
    Technologies,
    TechnologiesMedia,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    push: false,
    migrationDir: path.resolve(dirname, 'migrations'),
    client: {
      url: 'file:./database.db',
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
  graphQL: {
    disable: true,
  },
  sharp,
});
