'use server';

import { Resend } from 'resend';
import { checkLocale } from '~/utils';
import { getTranslation } from '~/utils/server';


const RESEND_KEY = process.env.RESEND_KEY || (() => { throw new Error(`RESEND_KEY env variable is required`) })()
const RESEND_TO = process.env.RESEND_TO || (() => { throw new Error(`RESEND_TO env variable is required`) })()
const MAIL_LOCALE = process.env.MAIL_LOCALE


const resend = new Resend(RESEND_KEY);


export async function submitContactsForm(formData: FormData) {
    const locale = checkLocale(MAIL_LOCALE)
    const subject = formData.get('subject')?.toString() ?? '';
    const text = formData.get('text')?.toString() ?? '';
    const name = formData.get('name')?.toString() ?? '';
    const t = await getTranslation(locale)

    const result = await resend.emails.send({
        from: `Portfolio <onboarding@resend.dev>`,
        to: RESEND_TO,
        subject: `${t['A message from']} ${name} ${t['on the subject of']} "${subject}"`,
        text
    });

    return result
};
