import '@/styles/main.scss';
import '@/styles/properties.scss';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700-italic.css';
import '@fontsource/montserrat/700.css';
import { type ReactNode, Suspense } from 'react';
import type { Metadata } from 'next';

import TranslationProvider from '@/components/TranslationProvider';
import { getProjects, getSeo, getTechnologies } from '@/lib/actions';
import { createMainCache } from '@/lib/cache';
import { getServerLocale, getTranslation } from '@/lib/services';
import type { LocaleType } from '@/lib/types';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  const localePromise = getServerLocale();

  return (
    <Suspense>
      {localePromise.then(locale => (
        <html lang={locale}>
          <head />
          <body>
            <RootSection locale={locale}>{children}</RootSection>
          </body>
        </html>
      ))}
    </Suspense>
  );
}

async function RootSection({ children, locale }: { children: ReactNode; locale: LocaleType }) {
  'use cache';
  createMainCache();
  const translation = await getTranslation(locale);

  return (
    <TranslationProvider locale={locale} translation={translation}>
      {children}
    </TranslationProvider>
  );
}
