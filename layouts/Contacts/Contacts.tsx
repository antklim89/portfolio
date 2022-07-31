import { FC } from 'react';

import { cls } from '~/utils';

import style from './style.module.scss';


const Contacts: FC = () => {
    return (
        <div className={cls(style.Contacts, 'parallax')}>
            <div className={style.container}>
                <h1>Contact Me</h1>
                <form
                    action="/contacts?success"
                    className={style.form}
                    data-netlify="true"
                    method="get"
                    name="contact"
                    netlify-honeypot="bot-field"
                >
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

