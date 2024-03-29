import { ComponentProps, FC, FormEventHandler, useState } from 'react';

import { cls, useTranslation } from '~/utils';

import style from './style.module.scss';


const Contacts: FC = ({ className, ...props }: ComponentProps<'section'>) => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = new FormData(e.currentTarget);
        const response = await fetch('/', { method: 'POST', body });

        if (response.ok) setStatus('success');
        else setStatus('error');

        setLoading(false);
    };

    const { t } = useTranslation();

    return (
        <section className={cls(style.Contacts, className)} id="contacts" {...props}>
            <div>
                <h3 className='title'>
                    {t.contacts}
                </h3>

                {status === 'success' && (
                    <p className={cls(style.status, style.success)}>{t.contactSuccess}</p>
                )}
                {status === 'error' && (
                    <p className={cls(style.status, style.error)}>{t.contactError}</p>
                )}

                <form
                    className={style.form}
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    method="get"
                    name="contact"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input name="form-name" type="hidden" value="contact" />

                    <label className={style.input}>
                        {t.Name}: <br />
                        <input
                            required
                            disabled={loading}
                            maxLength={100}
                            minLength={3}
                            name="name"
                            type="text"
                        />
                    </label>

                    <label className={style.input}>
                        {t.Subject}: <br />
                        <input
                            required
                            disabled={loading}
                            maxLength={100}
                            minLength={3}
                            name="subject"
                            type="text"
                        />
                    </label>

                    <label className={style.input}>
                        {t.Message}: <br />
                        <textarea
                            required
                            disabled={loading}
                            maxLength={1000}
                            minLength={3}
                            name="text"
                            rows={6}
                        />
                    </label>

                    <button disabled={loading} type="submit">{t.Submit}</button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;

