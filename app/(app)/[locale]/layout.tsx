import '@/styles/main.scss';
import '@/styles/properties.scss';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700-italic.css';
import '@fontsource/montserrat/700.css';
import type { Metadata } from 'next';

import TranslationProvider from '@/components/TranslationProvider';
import { getProjects, getSeo, getTechnologies } from '@/lib/actions';
import { locales } from '@/lib/constants';
import { getTranslation } from '@/lib/services';
import { getCorrectLocale } from '@/lib/utils';

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  'use cache';
  const { locale: paramLocale } = await params;
  const locale = getCorrectLocale(paramLocale);

  const { defaultTitle } = await getTranslation(locale);

  const { author, title: cmsTitle, description, keywords, image } = await getSeo(locale);

  const technologies = await getTechnologies(locale);
  const technologiesKeywords = technologies.map((i) => i.title);

  const projects = await getProjects(locale);
  const projectsKeywords = projects.map((i) => i.title);

  const title = cmsTitle || defaultTitle;
  return {
    metadataBase: process.env.URL,
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
      images: image,
    },
    openGraph: {
      type: 'website',
      description,
      locale,
      title,
      url: '/',
      siteName: title,
      images: image,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
  'use cache';
  const { locale: paramLocale } = await params;
  const locale = getCorrectLocale(paramLocale);

  const translation = await getTranslation(locale);

  return (
    <html lang={locale}>
      <head />
      <body>
        <TranslationProvider locale={locale} translation={translation}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
