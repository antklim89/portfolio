import { FC } from 'react';

import style from './style.module.scss';

import bg from './bg.jpg';


const Background: FC = () => {
    return (
        <div className={style.Background}>
            <img alt="bg" className={style.img} src={bg.src} />
        </div>
    );
};

export default Background;
