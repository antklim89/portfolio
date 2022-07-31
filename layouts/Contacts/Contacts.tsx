import { FC, FormEventHandler, useState } from 'react';

import { cls } from '~/utils';

import style from './style.module.scss';


const Contacts: FC = () => {
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


    return (
        <div className={cls(style.Contacts, 'parallax')}>
            <div className={style.container}>
                <h1>Contact Me</h1>

                {status === 'success' && (
                    <p className={cls(style.status, style.success)}>Messege successfully sent.</p>
                )}
                {status === 'error' && (
                    <p className={cls(style.status, style.error)}>Unexpected error. Try again later.</p>
                )}

                <form
                    className={style.form}
                    data-netlify="true"
                    method="get"
                    name="contact"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input name="form-name" type="hidden" value="contact" />

                    <label className={style.input}>
                        Name: <br />
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
                        Subject: <br />
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
                        Message: <br />
                        <textarea
                            required
                            disabled={loading}
                            maxLength={1000}
                            minLength={3}
                            name="text"
                            rows={6}
                        />
                    </label>

                    <button disabled={loading} type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;

