'use server';

import { Resend } from 'resend';
import { RESEND_KEY, MAIL_LOCALE, RESEND_TO } from '~/constants';
import { checkLocale } from '~/utils';
import { getTranslation } from '~/utils/server';



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
