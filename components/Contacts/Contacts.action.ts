'use server';
import config from '@payload-config';
import { getPayload } from 'payload';
import { z } from 'zod/mini';
import { env } from '@/lib/env';
import { getTranslation } from '@/lib/services';
import { getCorrectLocale } from '@/lib/utils';


const emailSchema = z.object({
  subject: z.string(),
  text: z.string(),
  name: z.string(),
});

export async function submitContactsForm(input: z.infer<typeof emailSchema>) {
  try {
    const locale = getCorrectLocale(env.MAIL_LOCALE);

    const { success, data, error } = await emailSchema.safeParseAsync(input);
    if (!success) {
      return {
        success: false,
        message: z.prettifyError(error),
      };
    }
    const { subject, text, name } = data;
    const t = await getTranslation(locale);

    const payload = await getPayload({ config });
    await payload.sendEmail({
      to: env.SMTP_USER,
      subject: `${t['A message from']} ${name} ${t['on the subject of']} "${subject}"`,
      text,
    });

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unexpected error.',
    };
  }
}
