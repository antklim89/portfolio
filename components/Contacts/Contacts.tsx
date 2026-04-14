'use client';
import type { ComponentProps, SubmitEvent } from 'react';
import { useId, useState, useTransition } from 'react';

import { useTranslation } from '@/hooks/useTranslation';
import { cls } from '@/lib/utils';
import { submitContactsForm } from './Contacts.action';
import style from './style.module.scss';

function Contacts({ className, ...props }: ComponentProps<'section'>) {
  const id = useId();
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [pending, startTransition] = useTransition();

  const { t } = useTranslation();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    startTransition(async () => {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await submitContactsForm({
        name: formData.get('name') as string,
        subject: formData.get('subject') as string,
        text: formData.get('text') as string,
      });

      if (response.success) {
        form.reset();
        setStatus('success');
      } else {
        console.error(response.message);
        setStatus('error');
      }
    });
  }

  return (
    <section className={cls(style.Contacts, className)} {...props}>
      <h3 className="title-lg">{t.contacts}</h3>

      {status === 'success' && <p className={cls(style.status, style.success)}>{t.contactSuccess}</p>}
      {status === 'error' && <p className={cls(style.status, style.error)}>{t.contactError}</p>}

      <form className={style.form} name="contact" onSubmit={handleSubmit}>
        <input name="form-name" type="hidden" value="contact" />

        <div>
          <label htmlFor={`${id}-name`}>{t.Name}:</label>
          <input id={`${id}-name`} required disabled={pending} maxLength={100} minLength={3} name="name" type="text" />
        </div>

        <div>
          <label htmlFor={`${id}-subject`}>{t.Subject}:</label>
          <input
            id={`${id}-subject`}
            required
            disabled={pending}
            maxLength={100}
            minLength={3}
            name="subject"
            type="text"
          />
        </div>

        <div>
          <label htmlFor={`${id}-text`}>{t.Message}:</label>
          <textarea id={`${id}-text`} required disabled={pending} maxLength={1000} minLength={3} name="text" rows={6} />
        </div>

        <button disabled={pending} type="submit">
          {t.Submit}
        </button>
      </form>
    </section>
  );
}

export default Contacts;
