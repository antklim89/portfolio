import Image from 'next/image';
import { FC } from 'react';

import backgroundImage from './bg.jpg';
import style from './style.module.scss';


const Background: FC = () => {
    return (
        <div className={style.Background}>
            <Image
                alt="background"
                className={style.img}
                layout="fill"
                objectFit="cover"
                src={backgroundImage.src}
            />
        </div>
    );
};

export default Background;
