import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import { en } from 'payload/i18n/en';
import { ru } from 'payload/i18n/ru';
import sharp from 'sharp';
import { About } from './collections/About';
import { Projects, ProjectsMedia } from './collections/Projects';
import { Seo } from './collections/Seo';
import { Technologies, TechnologiesMedia } from './collections/Technologies';
import { env } from './lib/env';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: env.SMTP_USER,
    defaultFromName: 'Portfolio',

    transportOptions: {
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    },
  }),
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
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    push: false,
    migrationDir: path.resolve(dirname, 'migrations'),
    client: {
      url: 'file:./db/database.db',
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
