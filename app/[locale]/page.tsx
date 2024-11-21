import Main from '@/components/Main';
import { locales } from '@/lib/constants';
import type { LocaleType } from '@/lib/types';


export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

async function HomePage({ params }: { params: Promise<{ locale: LocaleType }> }) {
  const { locale } = await params;

  return <Main locale={locale} />;
}

export default HomePage;

export const dynamic = 'force-static';
