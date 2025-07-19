import { z } from 'zod/mini';


export const env = z.object({
  URL: z.optional(z.string()),

  PAYLOAD_SECRET: z.string(),

  MAIL_LOCALE: z.string(),
  SMTP_PASS: z.string(),
  SMTP_USER: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.string(),
}).parse({
  URL: process.env.URL,

  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,

  MAIL_LOCALE: process.env.MAIL_LOCALE,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
});
