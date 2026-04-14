import Main from '@/components/Main';
import { getServerLocale } from '@/lib/services';

async function HomePage() {
  const locale = await getServerLocale();
  return <Main locale={locale} />;
}

export default HomePage;
