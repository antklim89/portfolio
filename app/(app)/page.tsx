import AboutDescription from '@/components/AboutDescription';
import AboutTitle from '@/components/AboutTitle';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import MainLayout from '@/components/MainLayout';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import { Links } from '@/lib/constants';
import { getServerLocale } from '@/lib/services';

async function HomePage() {
  const locale = await getServerLocale();

  return (
    <MainLayout
      navigationSlot={<Navigation />}
      aboutTitleSlot={<AboutTitle locale={locale} />}
      aboutDescriptionSlot={<AboutDescription locale={locale} />}
      projectsSlot={<Projects id={Links.PROJECTS} locale={locale} />}
      technologiesSlot={<Technologies id={Links.TECHNOLOGIES} locale={locale} />}
      contactsSlot={<Contacts id={Links.CONTACTS} />}
      footerSlot={<Footer />}
    />
  );
}

export default HomePage;
