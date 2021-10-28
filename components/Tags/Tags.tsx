import { FC } from 'react';

import style from './style.module.scss';

import { cls } from '~/utils';


interface TagsProps {
    tags: string[]
    className?: string
}

const Tags: FC<TagsProps> = ({ tags, className }) => {
    return (
        <div className={cls(style.tags, className)}>
            {tags.map((tag) => (
                <span className={style.tag} key={tag}>{tag}</span>
            ))}
        </div>
    );
};

export default Tags;

