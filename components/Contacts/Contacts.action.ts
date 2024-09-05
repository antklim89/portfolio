'use server';
import process from 'node:process';
import { Resend } from 'resend';
import { z } from 'zod';
import { getCorrectLocale } from '@/utils';
import { getTranslation } from '@/utils/server';


const RESEND_KEY = z.string({ message: 'RESEND_KEY env variable is required' }).parse(process.env.RESEND_KEY);
const RESEND_TO = z.string({ message: 'RESEND_TO env variable is required' }).parse(process.env.RESEND_TO);
const MAIL_LOCALE = z.string().optional().parse(process.env.MAIL_LOCALE);

const resend = new Resend(RESEND_KEY);

export async function submitContactsForm(formData: FormData) {
  const locale = getCorrectLocale(MAIL_LOCALE);
  const subject = formData.get('subject')?.toString() ?? '';
  const text = formData.get('text')?.toString() ?? '';
  const name = formData.get('name')?.toString() ?? '';
  const t = await getTranslation(locale);

  const result = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: RESEND_TO,
    subject: `${t['A message from']} ${name} ${t['on the subject of']} "${subject}"`,
    text,
  });

  return result;
}
