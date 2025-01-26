import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import TranslationProvider from '@/components/TranslationProvider';
import { getProjects, getSeo, getTechnologies } from '@/lib/actions';
import { defaultLocale } from '@/lib/constants';
import { isCorrectLocale } from '@/lib/utils';
import { getTranslation } from '@/lib/utils.server';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isCorrectLocale(locale)) return {};

  const { defaultTitle } = await getTranslation(locale);
  const {
    author,
    title: cmsTitle,
    description,
    keywords,
  } = await getSeo(locale);

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

async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isCorrectLocale(locale)) return redirect(`/${defaultLocale}`);

  const translation = await getTranslation(locale);

  return (
    <TranslationProvider locale={locale} translation={translation}>
      {children}
    </TranslationProvider>
  );
}

export default RootLayout;
