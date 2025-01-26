import { redirect } from 'next/navigation';
import { getServerLocale } from '@/lib/utils.server';


async function HomePage() {
  const locale = await getServerLocale();

  return redirect(`/${locale}`);
}

export default HomePage;
