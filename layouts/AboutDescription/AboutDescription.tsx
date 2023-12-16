import { ComponentProps } from 'react';

import Markdown from '~/components/Markdown';
import { Locale } from '~/types';
import { cls } from '~/utils';
import { getAbout } from '~/utils/server';

import style from './style.module.scss';


const AboutDescription = async ({ locale, className, ...props }: { locale: Locale } & ComponentProps<'section'>) => {
    const { description } = await getAbout(locale);

    return (
        <section className={cls(style.AboutDescription, className)} {...props}>
            <Markdown>
                {description}
            </Markdown>
        </section>
    );
};

export default AboutDescription;
