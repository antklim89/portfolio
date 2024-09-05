import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import TranslationProvider from '@/components/TranslationProvider';
import { defaultLocale } from '@/constants';
import { isCorrectLocale } from '@/utils';
import { getAbout, getTranslation } from '@/utils/server';


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  if (!isCorrectLocale(locale)) return {};

  const { defaultTitle } = await getTranslation(locale);
  const { name, description, keywords } = await getAbout(locale);

  return {
    manifest: '/manifest.json',
    title: defaultTitle,
    description,
    keywords,
    authors: [{ name }],
    creator: name,
    twitter: {
      card: 'summary',
      description,
      title: defaultTitle,
    },
    openGraph: {
      type: 'website',
      description,
      locale,
      title: defaultTitle,
      url: '/',
      siteName: defaultTitle,
    },
  };
}

async function RootLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const { locale } = params;
  if (!isCorrectLocale(locale)) return redirect(`/${defaultLocale}`);

  const translation = await getTranslation(locale);

  return (
    <TranslationProvider locale={locale} translation={translation}>
      <title>{translation.defaultTitle}</title>
      {children}
    </TranslationProvider>
  );
}

export default RootLayout;
