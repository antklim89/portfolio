import { cache } from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import type {
  AboutType,
  LocaleType,
  PopulatedPaginatedDocs,
  ProjectType,
  SeoType,
  TechnologyType,
} from '@/lib/types';


export const getSeo = cache(async (locale: LocaleType): Promise<SeoType> => {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: 'seo',
    locale,
  });

  return result;
});

export const getAbout = cache(async (locale: LocaleType): Promise<AboutType> => {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: 'about',
    locale,
  });

  return result;
});

export const getProjects = cache(async (locale: LocaleType): Promise<ProjectType[]> => {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'projects',
    locale,
    depth: 1,
    pagination: false,
    where: {
      isPublished: { equals: true },
    },
  });

  return (result as PopulatedPaginatedDocs<typeof result, 'image'>).docs;
});

export const getTechnologies = cache(async (locale: LocaleType): Promise<TechnologyType[]> => {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'technologies',
    locale,
    depth: 1,
    pagination: false,
    where: {
      isPublished: { equals: true },
    },
  });

  return (result as PopulatedPaginatedDocs<typeof result, 'image'>).docs;
});
