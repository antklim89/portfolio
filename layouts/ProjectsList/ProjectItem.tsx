import { FC } from 'react';

import Card from '~/components/Card';
import { ProjectType } from '~/types';


const ProjectItem: FC<ProjectType> = ({ technologies, title, image, link }) => {
    return (
        <Card
            githubLink={link}
            image={image}
            siteLink={link}
            technologies={technologies}
            title={title}
        />
    );
};

export default ProjectItem;
