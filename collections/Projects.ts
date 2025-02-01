import type { CollectionConfig } from 'payload';
import { Media } from './Media';


export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'body',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      minLength: 5,
      maxLength: 500,
      localized: true,
    },
    {
      name: 'link',
      type: 'text',
      minLength: 5,
      maxLength: 500,
      required: true,
    },
    {
      name: 'repository',
      type: 'text',
      minLength: 5,
      maxLength: 500,
      required: true,
    },
    {
      name: 'technologies',
      hasMany: true,
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'projects-media',
      required: true,
    },
  ],
};


export const ProjectsMedia: CollectionConfig = {
  ...Media,
  slug: 'projects-media',
  labels: {
    singular: 'Project Image',
    plural: 'Project Images',
  },
  upload: {
    ...Media.upload,
    staticDir: 'media/projects',
    resizeOptions: {
      position: 'left top',
      fit: 'cover',
      height: 162,
      width: 288,
    },
  },
};
