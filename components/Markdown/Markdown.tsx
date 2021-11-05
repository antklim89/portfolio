import Image from 'next/image';
import { FC, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

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

    return (
        <ReactMarkdown
            components={{ ...components, img }}
            {...props}
        >
            {children}
        </ReactMarkdown>
    );
};

export default Markdown;

