import Image from 'next/image';
import { FC } from 'react';

import backgroundImage from './bg.jpg';
import style from './style.module.scss';


const Background: FC = () => {
    return (
        <div className={style.Background}>
            <Image
                alt="background"
                {...backgroundImage}
                className={style.img}
                layout="responsive"
                placeholder="blur"
            />
        </div>
    );
};

export default Background;
