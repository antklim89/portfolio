import Image from 'next/image';
import { FC, ImgHTMLAttributes, useCallback, AnchorHTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';

import { getImageUrl } from '~/utils';

import style from './style.module.scss';
import { MarkdownProps } from './types';


const Markdown: FC<MarkdownProps> = ({ components, children, ...props }) => {
    const img = useCallback(({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => (
        <Image
            alt={alt || 'image'}
            height={400}
            src={getImageUrl(src || '')}
            width={400}
        />
    ), []);

    const a = useCallback(({ children: anchorChildren, ...anchorProps }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
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

