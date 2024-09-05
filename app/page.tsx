import { redirect } from 'next/navigation';
import { getServerLocale } from '~/utils/server';


function HomePage() {
  const locale = getServerLocale();

  return redirect(`/${locale}`);
}

export default HomePage;
