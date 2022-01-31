import Image from 'next/image';
import { FC, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

import style from './style.module.scss';
import { MarkdownProps } from './types';

import { SITE_URL } from '~/constants';


const Markdown: FC<MarkdownProps> = ({ components, children, ...props }) => {
    const img = useCallback(({ src, alt }) => (
        <Image
            alt={alt || 'image'}
            height={400}
            src={SITE_URL + src}
            width={400}
        />
    ), []);

    const a = useCallback(({ children: anchorChildren, node: _, ...anchorProps }) => (
        <a
            {...anchorProps}
            rel="noreferrer"
            target="_blank"
        >
            {anchorChildren}
        </a>
    ), []);

    return (
        <ReactMarkdown
            components={{ ...components, img, a }}
            {...props}
            className={style.markdown}
        >
            {children}
        </ReactMarkdown>
    );
};

export default Markdown;

