import Link from 'next/link';
import { FC } from 'react';

import Card from '~/components/Card';
import { ProjectType } from '~/types';


const ProjectItem: FC<ProjectType> = ({ body, title, image, link }) => {
    return (
        <Card
            actions={(
                <Link href={link}>{link}</Link>
            )}
            body={body}
            image={image}
            title={title}
        />
    );
};

export default ProjectItem;
