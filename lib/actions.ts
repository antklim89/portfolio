import { cache } from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import type {
  AboutType,
  LocaleType,
  ProjectType,
  SeoType,
  TechnologyType,
} from '@/lib/types';
import type { ProjectsMedia, TechnologiesMedia } from '@/payload-types';


export const getSeo = cache(async (locale: LocaleType): Promise<SeoType> => {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: 'seo',
    locale,
  });

  return {
    id: result.id,
    description: result.description,
    author: result.author,
    keywords: result.keywords,
    title: result.title,
  };
});

export const getAbout = cache(async (locale: LocaleType): Promise<AboutType> => {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: 'about',
    locale,
  });

  return {
    id: result.id,
    description: result.description,
    name: result.name,
    profession: result.profession,
    slogan: result.slogan,
  };
});

export const getProjects = cache(async (locale: LocaleType): Promise<ProjectType[]> => {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'projects',
    locale,
    depth: 1,
    pagination: false,
  });

  return result.docs.map((i) => {
    const { blurDataURL, url } = i.image as ProjectsMedia;

    return ({
      id: i.id,
      title: i.title,
      body: i.body,
      link: i.link,
      github: i.github,
      technologies: i.technologies,
      imageUrl: url,
      blurDataURL,
    });
  });
});

export const getTechnologies = cache(async (locale: LocaleType): Promise<TechnologyType[]> => {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'technologies',
    locale,
    depth: 1,
    pagination: false,
  });


  return result.docs.map((i) => {
    const { blurDataURL, url } = i.image as TechnologiesMedia;

    return ({
      id: i.id,
      body: i.body,
      link: i.link,
      title: i.title,
      imageUrl: url,
      blurDataURL,
    });
  });
});
