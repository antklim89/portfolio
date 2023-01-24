import { GetStaticProps } from 'next';

import Contacts from '~/layouts/Contacts';


const ContactsPage: GetStaticProps = async () => {

    return (
        <>
            <Contacts />
        </>
    );
};

export default ContactsPage;
