import AboutDescription from '@/components/AboutDescription';
import AboutTitle from '@/components/AboutTitle';
import Contacts from '@/components/Contacts';
import MainLayout from '@/components/MainLayout';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import ToggleLocales from '@/components/ToggleLocales';
import { Links } from '@/lib/constants';
import { getCorrectLocale } from '@/lib/utils';

async function LocalePage({ params }: PageProps<'/[locale]'>) {
  'use cache';
  const { locale: paramLocale } = await params;
  const locale = getCorrectLocale(paramLocale);

  return (
    <MainLayout
      navigationSlot={<Navigation />}
      aboutTitleSlot={<AboutTitle locale={locale} />}
      aboutDescriptionSlot={<AboutDescription locale={locale} />}
      projectsSlot={<Projects id={Links.PROJECTS} locale={locale} />}
      technologiesSlot={<Technologies id={Links.TECHNOLOGIES} locale={locale} />}
      contactsSlot={<Contacts id={Links.CONTACTS} />}
      footerSlot={<ToggleLocales />}
    />
  );
}

export default LocalePage;
