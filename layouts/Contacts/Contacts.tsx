import { FC, FormEventHandler } from 'react';

import { cls } from '~/utils';

import style from './style.module.scss';


const Contacts: FC = () => {
    function encode(data: any) {
        return Object.keys(data)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const body = new FormData(e.currentTarget);
        // const body = encode({ 'form-name': e.currentTarget.getAttribute('name') });
        // console.log('===== \n body', Array.from(e.currentTarget));
        fetch('/', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
        })
            .catch((error) => console.error(error));
    };


    return (
        <div className={cls(style.Contacts, 'parallax')}>
            <div className={style.container}>
                <h1>Contact Me</h1>
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
                        <input name="name" type="text" />
                    </label>
                    <label className={style.input}>
                        Subject: <br />
                        <input name="subject" type="text" />
                    </label>
                    <label className={style.input}>
                        Message: <br />
                        <textarea name="text" rows={6} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;

