import Link from 'next/link';
import { FC } from 'react';

import Card from '~/components/Card';
import { ProjectType } from '~/types';


const ProjectItem: FC<ProjectType> = ({ technologies, title, image, link }) => {
    return (
        <Card
            actions={(
                <Link href={link}>{link}</Link>
            )}
            image={image}
            technologies={technologies}
            title={title}
        />
    );
};

export default ProjectItem;
