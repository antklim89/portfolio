import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Contacts from '~/layouts/Contacts';
import { getTranslations } from '~/utils/server';


const Home: NextPage = () => {

    return (
        <>
            <Seo title="Contacts" />
            <Contacts />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    const translations = await getTranslations(locale);

    return { props: { translations } };
};
