import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Contacts from '~/layouts/Contacts';
import { getTranslation } from '~/utils';


const ContactsPage: NextPage = () => {
    return (
        <>
            <Seo title="Contacts" />
            <Contacts />
        </>
    );
};

export default ContactsPage;

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    const translation = await getTranslation(locale);

    return { props: { translation } };
};
