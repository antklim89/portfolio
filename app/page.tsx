import { redirect } from 'next/navigation';
import { getServerLocale } from '@/lib/server/utils';


function HomePage() {
  const locale = getServerLocale();

  return redirect(`/${locale}`);
}

export default HomePage;
