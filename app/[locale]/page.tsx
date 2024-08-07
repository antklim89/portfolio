import Main from '~/components/Main';
import { locales } from '~/constants';
import type { LocaleType } from '~/types';

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const HomePage = ({ params }: { params: { locale: LocaleType } }) => {
    const { locale } = params;

    return <Main locale={locale} />;
};

export default HomePage;

export const dynamic = 'force-static';
