import type { ReactNode } from 'react';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700-italic.css';
import '@fontsource/montserrat/700.css';
import '@/styles/main.scss';
import '@/styles/properties.scss';

import type { Metadata } from 'next';

import TranslationProvider from '@/components/TranslationProvider';
import { getProjects, getSeo, getTechnologies } from '@/lib/actions';
import { getServerLocale, getTranslation } from '@/lib/services';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { defaultTitle } = await getTranslation(locale);

  const { author, title: cmsTitle, description, keywords } = await getSeo(locale);

  const technologies = await getTechnologies(locale);
  const technologiesKeywords = technologies.map(i => i.title);

  const projects = await getProjects(locale);
  const projectsKeywords = projects.map(i => i.title);

  const title = cmsTitle ?? defaultTitle;

  return {
    manifest: '/manifest.json',
    title,
    description,
    keywords: [...keywords, ...projectsKeywords, ...technologiesKeywords],
    authors: [{ name: author }],
    creator: author,
    twitter: {
      card: 'summary',
      description,
      title,
    },
    openGraph: {
      type: 'website',
      description,
      locale,
      title,
      url: '/',
      siteName: title,
    },
  };
}

async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getServerLocale();
  const translation = await getTranslation(locale);

  return (
    <html lang="en">
      <head />
      <body>
        <TranslationProvider locale={locale} translation={translation}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}

export default RootLayout;
