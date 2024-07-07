import { redirect } from 'next/navigation';
import { getServerLocale } from '~/utils/server';

const HomePage = () => {
    const locale = getServerLocale();

    return redirect(`/${locale}`);
};

export default HomePage;
