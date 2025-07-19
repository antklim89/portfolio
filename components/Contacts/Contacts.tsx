'use client';
import { useState, useTransition } from 'react';
import type { ComponentProps, FormEventHandler } from 'react';
import style from './style.module.scss';
import { useTranslation } from '@/hooks/useTranslation';
import { cls } from '@/lib/utils';
import { submitContactsForm } from './Contacts.action';


function Contacts({ className, ...props }: ComponentProps<'section'>) {
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [pending, startTransition] = useTransition();

  const { t } = useTranslation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
  };

  return (
    <section className={cls(style.Contacts, className)} {...props}>
      <div>
        <h3 className="title-lg">{t.contacts}</h3>

        {status === 'success' && <p className={cls(style.status, style.success)}>{t.contactSuccess}</p>}
        {status === 'error' && <p className={cls(style.status, style.error)}>{t.contactError}</p>}

        <form className={style.form} name="contact" onSubmit={handleSubmit}>
          <input name="form-name" type="hidden" value="contact" />

          <label className={style.input}>
            {t.Name}
            :
            <br />
            <input
              required
              disabled={pending}
              maxLength={100}
              minLength={3}
              name="name"
              type="text"
            />
          </label>

          <label className={style.input}>
            {t.Subject}
            :
            <br />
            <input
              required
              disabled={pending}
              maxLength={100}
              minLength={3}
              name="subject"
              type="text"
            />
          </label>

          <label className={style.input}>
            {t.Message}
            :
            <br />
            <textarea
              required
              disabled={pending}
              maxLength={1000}
              minLength={3}
              name="text"
              rows={6}
            />
          </label>

          <button disabled={pending} type="submit">
            {t.Submit}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
