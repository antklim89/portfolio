import { z } from 'zod/v4-mini';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),

  PAYLOAD_SECRET: z.string(),

  MAIL_LOCALE: z.string(),
  SMTP_PASS: z.string(),
  SMTP_USER: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.string(),

  URL: z.string(),
});

export function register() {
  const { success, error } = schema.safeParse({
    NODE_ENV: process.env.NODE_ENV,

    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,

    MAIL_LOCALE: process.env.MAIL_LOCALE,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,

    URL: process.env.URL,
  });

  if (!success) {
    throw new Error(`\nInvalid environment variables:\n${z.prettifyError(error)}\n\n`);
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}
