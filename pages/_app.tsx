import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import Layout from '~/layouts/Layout';

import '~/styles/main.scss';
import '~/styles/properties.scss';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};


export default appWithTranslation(MyApp);
