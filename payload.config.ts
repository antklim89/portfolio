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
import { Seo, SeoMedia } from './collections/Seo';
import { Technologies, TechnologiesMedia } from './collections/Technologies';
import { Users } from './collections/Users';
import { defaultLocale, locales } from './lib/constants';
import { env } from './lib/env';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  email: nodemailerAdapter({
    skipVerify: !env.PROD,
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
    autoRefresh: true,
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [About, Seo],
  collections: [Users, Projects, ProjectsMedia, Technologies, TechnologiesMedia, SeoMedia],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    push: !env.PROD,
    migrationDir: path.resolve(dirname, 'migrations'),
    client: {
      url: env.PROD ? 'file:./db/database.db' : 'file:./db/dev.db',
    },
  }),
  i18n: {
    supportedLanguages: { en, ru },
    fallbackLanguage: defaultLocale,
  },
  localization: {
    locales,
    defaultLocale,
    fallback: true,
  },
  graphQL: {
    disable: true,
  },
  sharp,
});
