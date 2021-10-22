import { FC } from 'react';

import style from './style.module.scss';


const Footer: FC = () => {
    return (
        <div className={style.Footer}>
            Copyright {new Date().getFullYear()}
        </div>
    );
};

export default Footer;
